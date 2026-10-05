import React, { useState } from 'react';
import { DOCTORS, Doctor } from '../data/hospitalData';
import { Search, Star, Calendar, MapPin, CheckCircle2, User, Globe, Stethoscope, X } from 'lucide-react';

interface DoctorDirectoryProps {
  onBookDoctor: (doctorId: string, deptId: string) => void;
  filterDepartment?: string;
}

export const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({
  onBookDoctor,
  filterDepartment,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>(filterDepartment || 'all');
  const [activeDoctorModal, setActiveDoctorModal] = useState<Doctor | null>(null);

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDept === 'all' || doc.departmentId === selectedDept;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDept && matchesSearch;
  });

  return (
    <section id="doctors" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
            Physicians & Clinical Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
            Find an Accredited Specialist
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Search our directory of board-certified clinicians, surgeons, and department chairs trained at the nation's premier medical schools.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mb-10 space-y-4">
          <div className="grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by physician name, condition, or medical specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="sm:col-span-4">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-teal-700 cursor-pointer"
              >
                <option value="all">All Specialties ({DOCTORS.length})</option>
                <option value="cardiology">Cardiovascular Institute</option>
                <option value="oncology">Comprehensive Cancer Center</option>
                <option value="neuroscience">Neurological Sciences & Spine</option>
                <option value="orthopedics">Orthopedic & Joint Reconstruction</option>
                <option value="pediatrics">Children’s Health & Neonatal</option>
                <option value="surgery">Robotic & Minimally Invasive Surgery</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <span>
              Showing <strong className="text-slate-900">{filteredDoctors.length}</strong> matching specialists
            </span>
            <span className="hidden sm:inline">All physicians accept primary commercial insurance & Medicare</span>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6">
                {/* Doctor Header & Avatar */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden text-slate-600 font-bold text-lg">
                    {doc.gender === 'Female' ? (
                      <span className="text-teal-800 bg-teal-50 w-full h-full flex items-center justify-center font-display">
                        {doc.name.replace('Dr. ', '').split(' ')[0][0]}
                        {doc.name.split(' ').slice(-1)[0][0]}
                      </span>
                    ) : (
                      <span className="text-slate-800 bg-slate-100 w-full h-full flex items-center justify-center font-display">
                        {doc.name.replace('Dr. ', '').split(' ')[0][0]}
                        {doc.name.split(' ').slice(-1)[0][0]}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="tabular-nums">{doc.rating}</span>
                      <span className="text-slate-400 font-normal">({doc.reviewsCount} reviews)</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base leading-snug truncate">
                      {doc.name}
                    </h3>
                    <div className="text-xs text-teal-800 font-medium truncate">
                      {doc.title}
                    </div>
                  </div>
                </div>

                {/* Subtitle / Credentials */}
                <div className="text-xs text-slate-600 mb-3 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span className="truncate">{doc.department}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{doc.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Speaks: {doc.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Specialties list (NO PILLS, quiet text with separators) */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Clinical Focus
                  </div>
                  <div className="text-xs text-slate-600 flex flex-wrap gap-x-1.5 gap-y-1">
                    {doc.specialties.map((spec, i) => (
                      <React.Fragment key={i}>
                        <span>{spec}</span>
                        {i < doc.specialties.length - 1 && (
                          <span className="text-slate-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Strip */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-slate-500">Next Available</div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-teal-700" />
                    <span>{doc.nextAvailable}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveDoctorModal(doc)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Bio
                  </button>
                  <button
                    onClick={() => onBookDoctor(doc.id, doc.departmentId)}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="p-12 text-center bg-slate-50 rounded-xl border border-slate-200">
            <User className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No physicians found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any specialist matching "{searchQuery}". Try clearing your search or switching to "All Specialties".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDept('all');
              }}
              className="mt-4 px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Doctor Credentials & Bio Modal */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveDoctorModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 font-bold text-xl font-display">
                {activeDoctorModal.name.replace('Dr. ', '').split(' ')[0][0]}
                {activeDoctorModal.name.split(' ').slice(-1)[0][0]}
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="tabular-nums">{activeDoctorModal.rating}</span>
                  <span className="text-slate-400 font-normal">
                    ({activeDoctorModal.reviewsCount} patient reviews)
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  {activeDoctorModal.name}
                </h3>
                <div className="text-sm font-semibold text-teal-800">
                  {activeDoctorModal.title} · {activeDoctorModal.department}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Physician Biography
                </h4>
                <p className="leading-relaxed text-slate-600">{activeDoctorModal.bio}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div>
                  <strong className="text-slate-900">Board Credentials: </strong>
                  <span className="text-slate-600">{activeDoctorModal.credentials}</span>
                </div>
                <div>
                  <strong className="text-slate-900">Medical Education & Fellowship: </strong>
                  <span className="text-slate-600">{activeDoctorModal.education}</span>
                </div>
                <div>
                  <strong className="text-slate-900">Years of Clinical Experience: </strong>
                  <span className="text-slate-600 tabular-nums">{activeDoctorModal.experienceYears} Years</span>
                </div>
                <div>
                  <strong className="text-slate-900">Consultation Location: </strong>
                  <span className="text-slate-600">{activeDoctorModal.location}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Specialty Focus & Procedures
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeDoctorModal.specialties.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Next Available Slot</div>
                <div className="text-sm font-bold text-slate-900">
                  {activeDoctorModal.nextAvailable}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveDoctorModal(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const doc = activeDoctorModal;
                    setActiveDoctorModal(null);
                    onBookDoctor(doc.id, doc.departmentId);
                  }}
                  className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-lg text-xs transition-colors shadow-sm cursor-pointer"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
