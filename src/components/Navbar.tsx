import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldAlert, Clock, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (prefillDepartment?: string, prefillDoctorId?: string) => void;
  onOpenEmergency: () => void;
  onOpenPortal: () => void;
  onOpenTriage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenEmergency,
  onOpenPortal,
  onOpenTriage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Advisory Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Level 1 Emergency & Trauma Open 24/7</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-slate-400 hidden sm:inline">Average Adult ER Triage: 9 Minutes</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={onOpenTriage}
              className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5" />
              Symptom Triage Guide
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenPortal}
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5" />
              Patient Portal Login
            </button>
            <span className="text-slate-700">|</span>
            <a
              href="tel:18005553799"
              className="text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              Emergency: (800) 555-ER99
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Strictly follows Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 text-slate-900 group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-xl tracking-wider shadow-sm group-hover:bg-teal-900 transition-colors">
              <span className="text-teal-200 text-lg leading-none">M</span>
              <span className="text-white text-xs -ml-0.5">†</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-900 transition-colors">
                Meridian Medical Center
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Academic & Level 1 Trauma Center
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a
              href="#departments"
              className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-800"
            >
              Departments
            </a>
            <a
              href="#doctors"
              className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-800"
            >
              Find a Doctor
            </a>
            <a
              href="#technology"
              className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-800"
            >
              Surgical Tech
            </a>
            <a
              href="#emergency-status"
              className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-800"
            >
              ER Wait Times
            </a>
            <a
              href="#visitors"
              className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-800"
            >
              Visitor Guide
            </a>
            <button
              onClick={onOpenPortal}
              className="hover:text-teal-800 transition-colors py-1 cursor-pointer"
            >
              MyMeridian Portal
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="px-3.5 py-2.5 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Emergency 24/7
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 rounded-lg hover:bg-teal-900 transition-all shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="p-2 text-white bg-teal-800 rounded-lg"
              title="Book Visit"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-800">
              <a
                href="#departments"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Departments & Centers
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Find a Doctor
              </a>
              <a
                href="#technology"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Surgical Tech & Facilities
              </a>
              <a
                href="#emergency-status"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Emergency & Live Wait Times
              </a>
              <a
                href="#visitors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Visitor Info & Campus Map
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="text-left py-2 px-3 rounded hover:bg-slate-100 text-teal-800 font-semibold"
              >
                MyMeridian Patient Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTriage();
                }}
                className="text-left py-2 px-3 rounded hover:bg-slate-100 text-teal-800 font-semibold"
              >
                Symptom Triage Navigator
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full py-2.5 text-center font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                Emergency Services (24/7)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 text-center font-semibold text-white bg-teal-800 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
