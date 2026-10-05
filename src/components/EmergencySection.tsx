import React, { useState } from 'react';
import { EMERGENCY_STATUSES } from '../data/hospitalData';
import { ShieldAlert, Phone, Navigation, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

interface EmergencySectionProps {
  onOpenBooking: () => void;
  onOpenTriage: () => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({
  onOpenTriage,
}) => {
  const [enRouteSubmitted, setEnRouteSubmitted] = useState(false);
  const [enRouteData, setEnRouteData] = useState({
    patientName: '',
    chiefComplaint: 'Chest Discomfort / Shortness of Breath',
    etaMinutes: '15',
    contactPhone: '',
  });

  const handleEnRouteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enRouteData.patientName.trim()) return;
    setEnRouteSubmitted(true);
  };

  return (
    <section id="emergency-status" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">
              Critical Care Readiness & Real-Time Logistics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
              Emergency & Acute Trauma Center
            </h2>
            <p className="text-slate-600 max-w-2xl mt-2 text-sm sm:text-base">
              Meridian is a state-designated Level 1 Adult & Pediatric Comprehensive Trauma Center with dedicated 24/7 cardiac catheterization, biplane neurovascular stroke suites, and pediatric emergency resuscitation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:911"
              className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call 911 Immediately
            </a>
            <button
              onClick={onOpenTriage}
              className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-medium border border-slate-300 rounded-lg text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Clock className="w-4 h-4 text-teal-700" />
              Check Triage Rules
            </button>
          </div>
        </div>

        {/* Live Wait Times Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {EMERGENCY_STATUSES.map((status, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{status.traumaLevel}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Active
                </span>
              </div>

              <h3 className="font-semibold text-slate-900 text-sm mb-4 min-h-[2.5rem] leading-snug">
                {status.department}
              </h3>

              <div className="border-t border-slate-100 pt-3 flex items-baseline justify-between">
                <div>
                  <div className="text-3xl font-bold text-slate-900 tabular-nums font-display">
                    {status.currentWaitMinutes} <span className="text-base font-normal text-slate-500">mins</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Est. triage wait time</div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-800 tabular-nums">
                    {status.availableBeds} beds
                  </div>
                  <div className="text-xs text-slate-500">Open treatment bays</div>
                </div>
              </div>

              {/* Progress occupancy bar */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                  <span>Unit Load</span>
                  <span className="tabular-nums font-medium text-slate-700">{status.occupancyPercent}% capacity</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      status.occupancyPercent > 80 ? 'bg-amber-500' : 'bg-teal-600'
                    }`}
                    style={{ width: `${status.occupancyPercent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rapid Notice / En-Route Protocol Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Dispatch Notice Card */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  When to Seek Immediate Emergency Care
                </h3>
                <p className="text-xs text-slate-500">
                  Patients with life-threatening signs are triaged directly upon arrival without delay.
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-rose-700 shrink-0">Heart / STEMI:</span>
                <span>Chest pressure, arm/jaw numbness, sudden cold sweat, or syncope.</span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-rose-700 shrink-0">Stroke / F.A.S.T:</span>
                <span>Facial droop, arm weakness, speech slurring, sudden visual blackout.</span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-rose-700 shrink-0">Severe Trauma:</span>
                <span>High-impact motor vehicle collisions, penetrating trauma, severe burns.</span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-rose-700 shrink-0">Pediatric Urgent:</span>
                <span>Infants under 3 months with fever {'>'} 100.4°F, lethargy, stridor.</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-teal-700" />
                <span>Ambulance Entrance: 742 Meridian Pkwy (Gate 3)</span>
              </div>
              <div className="font-semibold text-slate-900">
                Valet ER Parking: 24/7 Complimentary
              </div>
            </div>
          </div>

          {/* Interactive En-Route Notification Form */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl border border-slate-800 p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  Patient Pre-Arrival Notice
                </span>
                <h3 className="text-lg font-bold text-white font-display">
                  Notify Emergency Desk You Are En Route
                </h3>
              </div>
              <ShieldAlert className="w-6 h-6 text-teal-400" />
            </div>

            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              If you or a loved one is in transit to Meridian Emergency Room, submitting your estimated arrival allows our charge triage nurse to prepare initial intake.
            </p>

            {enRouteSubmitted ? (
              <div className="p-5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Intake Notice Transmitted to Emergency Desk
                </div>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  Our triage coordinator has logged patient <span className="font-semibold text-white">{enRouteData.patientName}</span> with chief concern "{enRouteData.chiefComplaint}". Please proceed directly to the Emergency Entrance bays. If symptoms worsen en route, pull over and call 911 immediately.
                </p>
                <button
                  type="button"
                  onClick={() => setEnRouteSubmitted(false)}
                  className="text-xs text-teal-300 hover:text-white underline cursor-pointer"
                >
                  Send another notification
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnRouteSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={enRouteData.patientName}
                    onChange={(e) =>
                      setEnRouteData({ ...enRouteData, patientName: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder:text-slate-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Primary Concern
                    </label>
                    <select
                      value={enRouteData.chiefComplaint}
                      onChange={(e) =>
                        setEnRouteData({ ...enRouteData, chiefComplaint: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs focus:outline-hidden focus:border-teal-500"
                    >
                      <option>Chest Discomfort / Shortness of Breath</option>
                      <option>Suspected Stroke / Sudden Weakness</option>
                      <option>Severe Laceration / Trauma Wound</option>
                      <option>Severe Pediatric Fever / Dehydration</option>
                      <option>Acute Abdominal Pain</option>
                      <option>Other Acute Condition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Estimated Arrival (ETA)
                    </label>
                    <select
                      value={enRouteData.etaMinutes}
                      onChange={(e) =>
                        setEnRouteData({ ...enRouteData, etaMinutes: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs focus:outline-hidden focus:border-teal-500"
                    >
                      <option value="5">Under 5 minutes</option>
                      <option value="15">10–15 minutes</option>
                      <option value="30">20–30 minutes</option>
                      <option value="45">30–45 minutes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Contact Phone (Driver or Family)
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={enRouteData.contactPhone}
                    onChange={(e) =>
                      setEnRouteData({ ...enRouteData, contactPhone: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-teal-500 placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Alert Emergency Triage Desk
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
