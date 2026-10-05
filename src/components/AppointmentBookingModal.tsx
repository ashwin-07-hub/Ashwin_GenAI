import React, { useState } from 'react';
import { DEPARTMENTS, DOCTORS, ACCEPTED_INSURANCES } from '../data/hospitalData';
import { X, Calendar, Clock, User, CheckCircle2, Video, Building2, Shield, Download, Printer } from 'lucide-react';

interface AppointmentBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: string;
  initialDoctorId?: string;
}

export const AppointmentBookingModal: React.FC<AppointmentBookingModalProps> = ({
  isOpen,
  onClose,
  initialDepartment,
  initialDoctorId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [careType, setCareType] = useState<'in_person' | 'telehealth'>('in_person');
  const [departmentId, setDepartmentId] = useState<string>(initialDepartment || 'cardiology');
  const [doctorId, setDoctorId] = useState<string>(initialDoctorId || 'first_available');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-08');
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');

  // Patient Info
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    insurance: 'Blue Cross Blue Shield (Highmark, Horizon, Empire)',
    reason: '',
  });

  const [bookingReference, setBookingReference] = useState<string>('');

  if (!isOpen) return null;

  const filteredDoctors = DOCTORS.filter((d) => d.departmentId === departmentId);
  const selectedDoctorObj = DOCTORS.find((d) => d.id === doctorId);
  const selectedDeptObj = DEPARTMENTS.find((d) => d.id === departmentId);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Complete booking
      const ref = `MMC-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingReference(ref);
      setStep(5);
    }
  };

  const timeSlots = [
    '08:30 AM',
    '09:15 AM',
    '10:30 AM',
    '11:45 AM',
    '01:15 PM',
    '02:30 PM',
    '03:45 PM',
    '04:30 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-100 pb-4 mb-6">
          <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
            Meridian Central Scheduling
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-display">
            {step === 5 ? 'Appointment Confirmed' : 'Book a Medical Appointment'}
          </h2>
          {step < 5 && (
            <div className="flex items-center gap-2 mt-3">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full ${
                    s <= step ? 'bg-teal-700' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Step 1: Care Type & Department */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Care Delivery Setting
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setCareType('in_person')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    careType === 'in_person'
                      ? 'border-teal-700 bg-teal-50/60 ring-1 ring-teal-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-sm mb-1">
                    <Building2 className="w-4 h-4 text-teal-700" />
                    <span>In-Person Clinic Visit</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    Consultation at Meridian Main Medical Campus
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCareType('telehealth')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    careType === 'telehealth'
                      ? 'border-teal-700 bg-teal-50/60 ring-1 ring-teal-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-sm mb-1">
                    <Video className="w-4 h-4 text-teal-700" />
                    <span>Virtual Telehealth Visit</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    Encrypted video appointment from home or mobile
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                2. Select Clinical Department
              </label>
              <div className="grid sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => {
                      setDepartmentId(dept.id);
                      setDoctorId('first_available');
                    }}
                    className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      departmentId === dept.id
                        ? 'border-teal-700 bg-teal-50/50 font-bold text-teal-900 ring-1 ring-teal-700'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="font-semibold text-slate-900">{dept.name}</div>
                    <div className="text-[11px] text-slate-500 truncate mt-0.5">
                      {dept.floor}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
              >
                Continue to Physician Selection
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Physician Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <div className="text-xs text-slate-500 mb-1">
                Selected Department: <strong className="text-slate-900">{selectedDeptObj?.name}</strong>
              </div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Select Your Treating Specialist
              </label>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setDoctorId('first_available')}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    doctorId === 'first_available'
                      ? 'border-teal-700 bg-teal-50/60 ring-1 ring-teal-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-slate-900 text-sm">
                    First Available Board-Certified Clinician
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Recommended for earliest availability and standard diagnostic consults
                  </div>
                </button>

                {filteredDoctors.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setDoctorId(doc.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start justify-between gap-3 cursor-pointer ${
                      doctorId === doc.id
                        ? 'border-teal-700 bg-teal-50/60 ring-1 ring-teal-700'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{doc.name}</div>
                      <div className="text-xs text-teal-800 font-medium">{doc.title}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Speaks: {doc.languages.join(', ')} · {doc.experienceYears} yrs experience
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-semibold text-emerald-700 block">
                        {doc.nextAvailable}
                      </span>
                      <span className="text-xs text-amber-600 font-semibold">★ {doc.rating}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
              >
                Continue to Date & Time
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Date & Time Picker */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-10-06"
                  max="2026-12-31"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-teal-700"
                />
                <div className="text-xs text-slate-500 mt-2">
                  Clinic hours: Monday – Saturday, 8:00 AM – 6:00 PM
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Available Consultation Slots
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'bg-teal-800 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-teal-800 shrink-0" />
              <div>
                <div>
                  <strong>Appointment Summary: </strong>
                  {selectedDeptObj?.name} · {selectedDoctorObj ? selectedDoctorObj.name : 'First Available Doctor'}
                </div>
                <div className="text-slate-500">
                  {careType === 'in_person' ? 'In-Person Consultation' : 'Virtual Telehealth'} on{' '}
                  <span className="font-semibold text-slate-900">{selectedDate}</span> at{' '}
                  <span className="font-semibold text-slate-900">{selectedTime}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-6 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
              >
                Continue to Patient Information
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Patient Info Form */}
        {step === 4 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor"
                  value={patientData.firstName}
                  onChange={(e) =>
                    setPatientData({ ...patientData, firstName: e.target.value })
                  }
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vance"
                  value={patientData.lastName}
                  onChange={(e) =>
                    setPatientData({ ...patientData, lastName: e.target.value })
                  }
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  required
                  value={patientData.dob}
                  onChange={(e) =>
                    setPatientData({ ...patientData, dob: e.target.value })
                  }
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 234-5678"
                  value={patientData.phone}
                  onChange={(e) =>
                    setPatientData({ ...patientData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address (for appointment pass) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="patient@example.com"
                  value={patientData.email}
                  onChange={(e) =>
                    setPatientData({ ...patientData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Primary Insurance Provider
                </label>
                <select
                  value={patientData.insurance}
                  onChange={(e) =>
                    setPatientData({ ...patientData, insurance: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-hidden focus:border-teal-700"
                >
                  {ACCEPTED_INSURANCES.map((ins, i) => (
                    <option key={i} value={ins}>
                      {ins}
                    </option>
                  ))}
                  <option value="Self Pay / Uninsured">Self Pay / Uninsured (Financial Assistance Available)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Reason for Visit / Primary Symptoms
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe your symptoms or what you would like to consult the physician about..."
                value={patientData.reason}
                onChange={(e) =>
                  setPatientData({ ...patientData, reason: e.target.value })
                }
                className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:border-teal-700"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer shadow-sm"
              >
                Confirm & Issue Appointment Pass
              </button>
            </div>
          </form>
        )}

        {/* Step 5: Confirmed Appointment Pass */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-teal-950 text-white relative overflow-hidden shadow-xl border border-teal-800">
              <div className="flex items-center justify-between border-b border-teal-800/80 pb-4 mb-4">
                <div>
                  <div className="text-xs text-teal-300 uppercase tracking-widest font-mono">
                    Electronic Booking Pass
                  </div>
                  <div className="text-xl font-bold font-display text-white mt-0.5">
                    Meridian Medical Center
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-teal-300 font-mono">Reference Code</div>
                  <div className="text-lg font-bold font-mono text-teal-200">
                    {bookingReference}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-xs text-teal-100/90 mb-4">
                <div>
                  <span className="text-teal-400 block font-medium">Patient Name</span>
                  <span className="text-sm font-bold text-white">
                    {patientData.firstName} {patientData.lastName || 'Valued Patient'}
                  </span>
                </div>

                <div>
                  <span className="text-teal-400 block font-medium">Department</span>
                  <span className="text-sm font-bold text-white">
                    {selectedDeptObj?.name}
                  </span>
                </div>

                <div>
                  <span className="text-teal-400 block font-medium">Provider</span>
                  <span className="text-sm font-bold text-white">
                    {selectedDoctorObj ? selectedDoctorObj.name : 'First Available Attending'}
                  </span>
                </div>

                <div>
                  <span className="text-teal-400 block font-medium">Date & Time</span>
                  <span className="text-sm font-bold text-white">
                    {selectedDate} at {selectedTime}
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <span className="text-teal-400 block font-medium">Location</span>
                  <span className="text-xs text-white">
                    {careType === 'in_person'
                      ? `${selectedDeptObj?.floor} · Main Campus, 742 Meridian Pkwy`
                      : 'MyMeridian Secure Telehealth Video Portal (Link sent via SMS)'}
                  </span>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="pt-3 border-t border-teal-800/80 flex items-center justify-between">
                <div className="font-mono text-[10px] text-teal-400 tracking-widest">
                  ||||| | |||| || |||||| | ||||| |||| | ||||
                </div>
                <div className="text-[11px] text-teal-300 font-medium">
                  Verified by Intake Protocol
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Check-in Guidance & Instructions
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Please arrive 15 minutes prior to your scheduled consultation time.
                </li>
                <li>
                  Bring a valid government-issued photo ID and insurance policy card.
                </li>
                <li>
                  Complimentary 2-hour validated patient parking is available in Garage A.
                </li>
                <li>
                  A confirmation SMS and calendar invite have been dispatched to{' '}
                  <strong className="text-slate-800">{patientData.phone || patientData.email}</strong>.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                Print Confirmation
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
