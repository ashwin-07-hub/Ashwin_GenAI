import React from 'react';
import { HospitalImages } from '../assets/images';
import { Shield, Clock, Calendar, ArrowRight, Activity, MapPin, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
  onOpenTriage: () => void;
  onSelectDoctor: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenEmergency,
  onOpenTriage,
  onSelectDoctor,
}) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HospitalImages.exterior}
          alt="Meridian Medical Center Main Campus Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Human Editorial Kicker (NO PILLS) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Academic Medical Excellence</span>
              <span className="text-slate-600">·</span>
              <span>Level 1 Adult & Pediatric Trauma</span>
            </div>

            {/* Headline with balanced wrapping */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display text-balance">
              Advanced Clinical Medicine. Compassionate Human Care.
            </h1>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              Where groundbreaking medical research meets deeply personal healing. Serving our community with 24/7 Level 1 emergency trauma care, robotic precision surgery, and top-ranked clinical specialists.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg text-sm transition-all shadow-lg hover:shadow-teal-900/40 flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                Schedule Appointment
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onSelectDoctor}
                className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/90 text-white font-medium rounded-lg text-sm border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Find a Specialist
              </button>

              <button
                onClick={onOpenTriage}
                className="px-4 py-3.5 text-teal-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer underline decoration-teal-500/50 underline-offset-4"
              >
                <Clock className="w-4 h-4" />
                Where should I go for care?
              </button>
            </div>

            {/* Live Triage & Emergency Status Micro-Card */}
            <div className="pt-4">
              <div className="bg-slate-800/85 backdrop-blur border border-slate-700/80 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">Live ER Wait Time</span>
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-400">Updated 2m ago</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Adult Level 1 ER: <span className="font-semibold text-emerald-400 tabular-nums">9 Mins</span> · Pediatric ER: <span className="font-semibold text-emerald-400 tabular-nums">4 Mins</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={onOpenEmergency}
                    className="px-3.5 py-2 bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                  >
                    Emergency Protocol
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Portals Bento Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="border-b border-slate-800 pb-4 mb-5">
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">
                  Rapid Patient Access
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  How can we assist you today?
                </h3>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-teal-500/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center border border-teal-800/50 group-hover:bg-teal-900 transition-colors">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                        Book Doctor or Virtual Visit
                      </div>
                      <div className="text-xs text-slate-400">
                        Primary care, cardiology, oncology & 35+ specialties
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={onOpenTriage}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-teal-500/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/50 group-hover:bg-blue-900 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        Symptom & Care Navigator
                      </div>
                      <div className="text-xs text-slate-400">
                        Identify appropriate care setting & wait times
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                </button>

                <a
                  href="#visitors"
                  className="w-full text-left p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-teal-500/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-800/50 group-hover:bg-emerald-900 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        Campus Map & Visiting Hours
                      </div>
                      <div className="text-xs text-slate-400">
                        Parking guide, ICU visitation rules & amenities
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                <button
                  onClick={onOpenEmergency}
                  className="w-full text-left p-3.5 rounded-xl bg-rose-950/40 hover:bg-rose-950/60 border border-rose-900/60 hover:border-rose-500/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-900/50 text-rose-300 flex items-center justify-center border border-rose-700/50 group-hover:bg-rose-800 transition-colors">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-rose-200 group-hover:text-white transition-colors">
                        Urgent & Emergency Hotline
                      </div>
                      <div className="text-xs text-rose-300/80">
                        Direct line to trauma dispatch & triage
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-display tabular-nums">
              1,200+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Board-Certified Physicians & Surgeons
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-teal-400 font-display tabular-nums">
              98.4%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Patient Care Satisfaction Rating
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-display tabular-nums">
              Grade 'A'
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Leapfrog Hospital Safety Rating (2026)
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-display tabular-nums">
              Level 1
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Comprehensive Adult & Pediatric Trauma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
