import React from 'react';
import { HospitalImages } from '../assets/images';
import { Cpu, ShieldCheck, Zap, Activity, Award } from 'lucide-react';

interface SurgicalTechSectionProps {
  onOpenBooking: () => void;
}

export const SurgicalTechSection: React.FC<SurgicalTechSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="technology" className="py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
              Clinical Innovation & Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-balance">
              Precision Robotics & Modern Healing Environments
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              At Meridian Medical Center, our investment in medical robotics, hybrid surgical suites, and low-dose radiation imaging translates directly to smaller incisions, dramatically reduced post-operative pain, and shorter hospital stays.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-2xl font-bold text-teal-400 font-display tabular-nums">
                  65%
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Reduction in average post-op recovery time
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-2xl font-bold text-teal-400 font-display tabular-nums">
                  0.18%
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Surgical site infection rate (national benchmark: 1.9%)
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src={HospitalImages.surgeryRobotics}
                alt="State of the art robotic operating room at Meridian"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-300">
                  <Cpu className="w-4 h-4" />
                  <span>Hybrid Operating Suite #7</span>
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  Da Vinci Xi 4th Generation Multi-Quadrant Robotic Surgery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Infrastructure Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-900/60 text-teal-400 flex items-center justify-center border border-teal-700/50">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Robotic-Arm Arthroplasty
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mako CT-guided robotic technology maps your exact hip or knee anatomy in 3D prior to surgery, achieving micro-millimeter implant positioning and preserving healthy bone and ligaments.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-900/60 text-teal-400 flex items-center justify-center border border-teal-700/50">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Intraoperative 3T MRI & Biplane Angio
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Enables real-time intraoperative scanning during neurosurgery and stroke interventions, ensuring complete tumor resection before the patient leaves the operating suite.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-900/60 text-teal-400 flex items-center justify-center border border-teal-700/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Air-Purified Positive Pressure Suites
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ultra-clean HEPA laminar airflow surgical suites filter the air over 30 times per hour, guaranteeing the highest standard of microbial control for transplants and spinal fusions.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <span>Consult with a Surgical Specialist</span>
            <Award className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
