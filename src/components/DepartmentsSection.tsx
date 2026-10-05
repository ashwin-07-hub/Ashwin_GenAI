import React, { useState } from 'react';
import { DEPARTMENTS } from '../data/hospitalData';
import { HospitalImages } from '../assets/images';
import { HeartPulse, ShieldAlert, Brain, Bone, Baby, Stethoscope, ArrowRight, CheckCircle, Cpu, Calendar } from 'lucide-react';

interface DepartmentsSectionProps {
  onOpenBooking: (departmentId?: string) => void;
  onSelectDoctorByDept: (departmentId: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  onOpenBooking,
  onSelectDoctorByDept,
}) => {
  const [activeTab, setActiveTab] = useState(DEPARTMENTS[0].id);

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Bone':
        return <Bone className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  const selectedDepartment = DEPARTMENTS.find((d) => d.id === activeTab) || DEPARTMENTS[0];

  return (
    <section id="departments" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
            Multidisciplinary Centers of Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
            Specialized Medicine Built Around Patient Outcomes
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Our specialized institutes unite renowned faculty physicians, certified nurses, and pioneering technology to deliver coordinated care for the most complex medical diagnoses.
          </p>
        </div>

        {/* Department Selector Tabs (Segmented Button Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200">
          {DEPARTMENTS.map((dept) => {
            const isActive = dept.id === activeTab;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-teal-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {getDeptIcon(dept.iconName)}
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Department Spotlight Bento */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">
                {selectedDepartment.floor} · {selectedDepartment.phoneExtension}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                {selectedDepartment.name}
              </h3>
              <p className="text-teal-900/90 font-medium text-sm mt-1">
                {selectedDepartment.tagline}
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {selectedDepartment.description}
            </p>

            {/* Key Clinical Technology & Volume */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <Cpu className="w-4 h-4 text-teal-700" />
                  Pioneering Technology
                </div>
                <div className="text-xs text-slate-600">
                  {selectedDepartment.highlightTech}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-700" />
                  Clinical Volume & Leadership
                </div>
                <div className="text-xs text-slate-600">
                  {selectedDepartment.annualSurgeries}
                </div>
              </div>
            </div>

            {/* Key Procedures */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Diagnostic & Surgical Capabilities
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {selectedDepartment.procedures.map((proc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-700 mt-1.5 shrink-0" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500">Department Director</div>
                <div className="text-sm font-bold text-slate-900">
                  {selectedDepartment.headOfDepartment}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectDoctorByDept(selectedDepartment.id)}
                  className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-300 transition-colors cursor-pointer"
                >
                  View Specialists
                </button>
                <button
                  onClick={() => onOpenBooking(selectedDepartment.id)}
                  className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book in this Dept
                </button>
              </div>
            </div>
          </div>

          {/* Department Imagery & Facility Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 group">
              <img
                src={
                  selectedDepartment.id === 'pediatrics'
                    ? HospitalImages.pediatricSuite
                    : selectedDepartment.id === 'surgery' || selectedDepartment.id === 'orthopedics'
                    ? HospitalImages.surgeryRobotics
                    : HospitalImages.doctorConsultation
                }
                alt={selectedDepartment.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  Facility Spotlight
                </span>
                <h4 className="text-base font-bold font-display mt-0.5">
                  State-of-the-Art Clinical Suites
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Designed for infection prevention, patient dignity, and advanced multi-disciplinary surgical precision.
                </p>
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-5 rounded-2xl bg-teal-900 text-white space-y-3">
              <div className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                Second Opinion Clinic
              </div>
              <h4 className="text-base font-bold font-display">
                Need a review of an existing diagnosis or treatment plan?
              </h4>
              <p className="text-xs text-teal-100/80 leading-relaxed">
                Our department chairs provide expert virtual and in-person secondary reviews of pathology, MRI scans, and surgical recommendations.
              </p>
              <button
                onClick={() => onOpenBooking(selectedDepartment.id)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-teal-200 transition-colors cursor-pointer"
              >
                <span>Request a Specialist Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
