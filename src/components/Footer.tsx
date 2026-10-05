import React from 'react';
import { ShieldCheck, Award, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenEmergency,
  onOpenPortal,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      {/* Accreditation & Quality Markers Banner */}
      <div className="border-b border-slate-900 py-8 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <div className="text-white font-semibold text-xs">The Joint Commission</div>
                <div className="text-slate-400 text-[11px]">Gold Seal of Approval®</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <div className="text-white font-semibold text-xs">Leapfrog Hospital Safety</div>
                <div className="text-slate-400 text-[11px]">Straight 'A' Rating 2026</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <div className="text-white font-semibold text-xs">Magnet® Recognition</div>
                <div className="text-slate-400 text-[11px]">Nursing Excellence Standard</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <div className="text-white font-semibold text-xs">Level 1 Trauma Center</div>
                <div className="text-slate-400 text-[11px]">Adult & Pediatric ACS Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-base">
                M
              </div>
              <span className="text-lg font-bold tracking-tight font-display">
                Meridian Medical Center
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An internationally recognized academic and acute tertiary health system dedicated to translational biomedical research, clinical education, and compassionate bedside healing.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>742 Meridian Parkway, Medical District, Metro City 98101</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Main Hospital Switchboard: (800) 555-1000</span>
              </div>
            </div>
          </div>

          {/* Clinical Centers */}
          <div>
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Clinical Institutes
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Cardiovascular Institute
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Comprehensive Cancer Center
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Neurological Sciences & Spine
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Orthopedic Joint Reconstruction
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Robotic Surgery Pavilion
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Children's Hospital & NICU
                </a>
              </li>
            </ul>
          </div>

          {/* Patient Services */}
          <div>
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Patient & Visitor
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Schedule Appointment
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  MyMeridian Portal Login
                </button>
              </li>
              <li>
                <a href="#emergency-status" className="hover:text-white transition-colors">
                  Live Emergency Wait Times
                </a>
              </li>
              <li>
                <a href="#visitors" className="hover:text-white transition-colors">
                  Visiting Hours & Parking
                </a>
              </li>
              <li>
                <a href="#visitors" className="hover:text-white transition-colors">
                  Insurance & Financial Aid
                </a>
              </li>
              <li>
                <a href="#triage-guide" className="hover:text-white transition-colors">
                  Care Setting Navigator
                </a>
              </li>
            </ul>
          </div>

          {/* 24/7 Clinical Hotlines */}
          <div>
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              24/7 Clinical Hotlines
            </div>
            <div className="space-y-2.5">
              <div>
                <span className="text-slate-500 block">Emergency & Trauma</span>
                <button
                  onClick={onOpenEmergency}
                  className="text-rose-400 font-bold hover:underline cursor-pointer"
                >
                  (800) 555-ER99
                </button>
              </div>
              <div>
                <span className="text-slate-500 block">Triage Nurse Advice Line</span>
                <span className="text-white font-medium">(800) 555-NURSE</span>
              </div>
              <div>
                <span className="text-slate-500 block">National Poison Control</span>
                <span className="text-white font-medium">(800) 222-1222</span>
              </div>
              <div>
                <span className="text-slate-500 block">Crisis & Suicide Lifeline</span>
                <span className="text-white font-medium">Dial 988</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Bottom Row */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Meridian Medical Center. All rights reserved. HIPAA Compliant · Non-Profit 501(c)(3) Healthcare Institution.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Notice of Privacy Practices</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Non-Discrimination Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Price Transparency Disclosures</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Language Assistance Services (140+ Languages)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
