import React, { useState } from 'react';
import { PATIENT_PORTAL_MOCK_RESULTS, PATIENT_PORTAL_MOCK_PRESCRIPTIONS } from '../data/hospitalData';
import { X, FileText, Pill, Calendar, MessageSquare, CheckCircle2, Download, AlertCircle, Send } from 'lucide-react';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'results' | 'prescriptions' | 'appointments' | 'messages'>('results');
  const [refillSuccessMessage, setRefillSuccessMessage] = useState<string | null>(null);

  // Secure Message State
  const [msgDoctor, setMsgDoctor] = useState('Dr. Marcus Vance (Cardiovascular)');
  const [msgSubject, setMsgSubject] = useState('Follow-up question on blood pressure medication');
  const [msgBody, setMsgBody] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  if (!isOpen) return null;

  const handleRefillRequest = (medicine: string) => {
    setRefillSuccessMessage(`Refill request for ${medicine} submitted to Meridian Outpatient Pharmacy. You will receive an SMS ready alert within 3 business hours.`);
    setTimeout(() => {
      setRefillSuccessMessage(null);
    }, 6000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgBody.trim()) return;
    setMsgSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
          aria-label="Close portal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-slate-100 pb-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-0.5">
              Secure Patient Gateway
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              MyMeridian Patient Portal
            </h2>
            <div className="text-xs text-slate-500 mt-1">
              Patient: <strong className="text-slate-800">Eleanor Vance</strong> · MRN: <strong className="text-slate-800 font-mono">#904-8119</strong> · Primary Clinic: <strong className="text-slate-800">Pavilion A</strong>
            </div>
          </div>
        </div>

        {/* Portal Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('results')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'results'
                ? 'bg-teal-800 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Lab & Diagnostic Scans ({PATIENT_PORTAL_MOCK_RESULTS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('prescriptions')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'prescriptions'
                ? 'bg-teal-800 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Pill className="w-3.5 h-3.5" />
            <span>Prescriptions & Refills ({PATIENT_PORTAL_MOCK_PRESCRIPTIONS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'appointments'
                ? 'bg-teal-800 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Upcoming Visits</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'messages'
                ? 'bg-teal-800 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Message Care Team</span>
          </button>
        </div>

        {/* Tab 1: Lab & Diagnostic Results */}
        {activeTab === 'results' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-500 mb-2">
              All results are reviewed and released by your attending physician in compliance with the 21st Century Cures Act.
            </div>

            {PATIENT_PORTAL_MOCK_RESULTS.map((result) => (
              <div
                key={result.id}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-all space-y-2 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {result.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {result.testName}
                    </h4>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      result.status === 'Normal' ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    ● {result.status}
                  </span>
                </div>

                <div className="text-xs text-slate-500">
                  Completed on <span className="text-slate-700 font-medium">{result.date}</span> · Ordering Physician: <span className="text-slate-700 font-medium">{result.doctor}</span> ({result.department})
                </div>

                <p className="text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/80 leading-relaxed">
                  <strong className="text-slate-900">Clinical Interpretation: </strong>
                  {result.summary}
                </p>

                <div className="pt-1 flex items-center justify-end">
                  <button
                    onClick={() => alert(`Downloading verified PDF report for ${result.testName} (Signed by ${result.doctor})`)}
                    className="text-xs font-medium text-teal-800 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Official Clinical Report (PDF)
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Prescriptions & Refill */}
        {activeTab === 'prescriptions' && (
          <div className="space-y-4">
            {refillSuccessMessage && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{refillSuccessMessage}</span>
              </div>
            )}

            <div className="text-xs text-slate-500 mb-2">
              Active maintenance medications managed by your Meridian care team. Refill requests are sent directly to the outpatient pharmacy.
            </div>

            {PATIENT_PORTAL_MOCK_PRESCRIPTIONS.map((rx) => (
              <div
                key={rx.id}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {rx.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {rx.medicine}
                    </h4>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    <strong>Dosage: </strong> {rx.dosage}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Prescribed by {rx.prescribedBy} · {rx.pharmacy}
                  </div>
                  <div className="text-xs text-slate-500">
                    Refills remaining: <strong className="text-slate-800">{rx.refillsRemaining}</strong> · Valid through {rx.expiryDate}
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => handleRefillRequest(rx.medicine)}
                    className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    Request Refill
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Appointments */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-teal-200 bg-teal-50/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  Upcoming In-Person Visit
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                  Confirmed
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Cardiology Bi-Annual Follow-up & Echocardiogram Review
              </h4>
              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  <strong>Physician: </strong> Dr. Marcus Vance, MD, FACC
                </div>
                <div>
                  <strong>Date & Time: </strong> Thursday, October 15, 2026 at 10:15 AM
                </div>
                <div>
                  <strong>Location: </strong> Pavilion A, 4th Floor, Suite 410 (Check-in at Reception Desk B)
                </div>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => alert('Appointment added to calendar (.ics download simulation)')}
                  className="px-3.5 py-1.5 bg-white border border-slate-300 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Add to Calendar
                </button>
                <button
                  onClick={() => alert('Appointment check-in link activated. Your phone will receive arrival instructions.')}
                  className="px-3.5 py-1.5 bg-teal-800 text-white rounded-md text-xs font-medium hover:bg-teal-900 cursor-pointer"
                >
                  Pre-Check In Online
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Need to see another specialist?
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Schedule New Appointment
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Messages */}
        {activeTab === 'messages' && (
          <div>
            {msgSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-3">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  Secure Message Sent to Care Team
                </div>
                <p className="text-xs text-emerald-800/90 leading-relaxed">
                  Your message to <strong>{msgDoctor}</strong> regarding "{msgSubject}" has been transmitted into your electronic health record. Clinical staff generally reply within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setMsgSent(false);
                    setMsgBody('');
                  }}
                  className="text-xs font-semibold text-teal-800 underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    Do not use portal messaging for medical emergencies or acute symptoms. For urgent concerns, call 911 or our 24/7 hotline at (800) 555-ER99.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Send to Physician / Care Team
                  </label>
                  <select
                    value={msgDoctor}
                    onChange={(e) => setMsgDoctor(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-hidden focus:border-teal-700"
                  >
                    <option>Dr. Marcus Vance (Cardiovascular)</option>
                    <option>Dr. Sarah Lin-Chen (Oncology)</option>
                    <option>Dr. Robert Hensley (Orthopedics)</option>
                    <option>General Nursing Intake Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={msgSubject}
                    onChange={(e) => setMsgSubject(e.target.value)}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your query, recent symptoms, or routine care question..."
                    value={msgBody}
                    onChange={(e) => setMsgBody(e.target.value)}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Secure Message
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
