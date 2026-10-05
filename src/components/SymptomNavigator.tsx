import React, { useState } from 'react';
import { SYMPTOM_TRIAGE_GUIDE } from '../data/hospitalData';
import { ShieldAlert, Activity, Stethoscope, Video, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface SymptomNavigatorProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const SymptomNavigator: React.FC<SymptomNavigatorProps> = ({
  onOpenBooking,
  onOpenEmergency,
}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const activeCategory = SYMPTOM_TRIAGE_GUIDE[selectedCategoryIndex];

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case 'emergency':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      case 'urgent_care':
        return <Activity className="w-5 h-5 text-amber-600" />;
      case 'specialist':
        return <Stethoscope className="w-5 h-5 text-teal-700" />;
      case 'telehealth':
        return <Video className="w-5 h-5 text-blue-600" />;
      default:
        return <Clock className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="triage-guide" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
            Care Decision Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
            Symptom & Care Setting Navigator
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Not sure whether your condition warrants the Emergency Room, Urgent Care walk-in, or a Virtual Visit? Use our clinical triage guide to choose the safest and most efficient path.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {SYMPTOM_TRIAGE_GUIDE.map((cat, idx) => {
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-teal-800 shadow-sm ring-1 ring-teal-800'
                    : 'bg-white/60 border-slate-200 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {getActionIcon(cat.actionType)}
                  <span className="text-xs font-bold text-slate-900">
                    {cat.actionType === 'emergency' && 'Level 1 Emergency'}
                    {cat.actionType === 'urgent_care' && 'Urgent Care'}
                    {cat.actionType === 'specialist' && 'Specialist Clinic'}
                    {cat.actionType === 'telehealth' && 'Virtual Telehealth'}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {cat.estimatedWait}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Triage Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
                {getActionIcon(activeCategory.actionType)}
                <span>Recommended Level of Care</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {activeCategory.recommendedSetting}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Estimated Reception / Triage Time: <strong className="text-slate-800">{activeCategory.estimatedWait}</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              {activeCategory.actionType === 'emergency' ? (
                <button
                  onClick={onOpenEmergency}
                  className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-lg text-sm transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4" />
                  Emergency Care Protocol
                </button>
              ) : (
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-lg text-sm transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <Clock className="w-4 h-4" />
                  Schedule This Care
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Common Qualifying Symptoms & Indicators:
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {activeCategory.symptoms.map((symptom, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {activeCategory.actionType === 'emergency' && (
            <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <strong>Critical Patient Safety Warning: </strong>
                If you are experiencing shortness of breath, sudden facial droop, or heavy chest pressure, do NOT drive yourself. Dial 911 immediately so emergency medical paramedics can begin treatment in transit.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
