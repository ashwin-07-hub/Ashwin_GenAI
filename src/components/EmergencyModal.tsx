import React from 'react';
import { X, Phone, Navigation, AlertTriangle, Shield, Clock } from 'lucide-react';
import { EMERGENCY_STATUSES } from '../data/hospitalData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTriage: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  onOpenTriage,
}) => {
  if (!isOpen) return null;

  const adultER = EMERGENCY_STATUSES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border-2 border-rose-600">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
          aria-label="Close emergency modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-rose-700 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center font-bold">
            <Shield className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Immediate Critical Care Guidance
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              Meridian Emergency Department
            </h2>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 mb-6 space-y-2">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Are you experiencing life-threatening symptoms?</span>
          </div>
          <p className="text-xs text-rose-800 leading-relaxed">
            If you or someone around you has severe chest pain, sudden difficulty breathing, sudden facial paralysis, or heavy trauma bleeding, call <strong>911</strong> immediately.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href="tel:911"
              className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              Dial 911 Now
            </a>
            <a
              href="tel:18005553799"
              className="px-4 py-2 bg-white border border-rose-300 hover:bg-rose-100 text-rose-900 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Direct ER Desk: (800) 555-ER99
            </a>
          </div>
        </div>

        {/* Live Wait Metric */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-teal-800" />
            <div>
              <div className="text-xs text-slate-500">Current Adult Level 1 Triage Wait</div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">
                {adultER.currentWaitMinutes} Minutes
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-emerald-700 block">
              ● All 14 Critical Bays Staffed
            </span>
            <span className="text-[11px] text-slate-400">Board-Certified On Duty</span>
          </div>
        </div>

        {/* Physical Directions */}
        <div className="space-y-2 text-xs text-slate-600 mb-6">
          <div className="flex items-start gap-2">
            <Navigation className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Campus Emergency Entrance:</strong>
              <div>742 Meridian Parkway, East Pavilion, Gate 3 (Follow Red Emergency Signs)</div>
              <div className="text-slate-500 mt-0.5">Complimentary 24/7 Valet directly outside trauma bay doors</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenTriage();
            }}
            className="text-xs font-semibold text-teal-800 hover:text-teal-900 underline cursor-pointer"
          >
            Review Symptom Decision Guide
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
