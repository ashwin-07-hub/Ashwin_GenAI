import React, { useState } from 'react';
import { ACCEPTED_INSURANCES } from '../data/hospitalData';
import { Clock, MapPin, Coffee, HeartHandshake, ShieldCheck, Car, Search, Phone } from 'lucide-react';

export const VisitorGuideSection: React.FC = () => {
  const [insuranceQuery, setInsuranceQuery] = useState('');

  const filteredInsurances = ACCEPTED_INSURANCES.filter((ins) =>
    ins.toLowerCase().includes(insuranceQuery.toLowerCase())
  );

  return (
    <section id="visitors" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
            Campus Guide & Hospitality
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
            Visiting Patients & Navigating Our Campus
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            We believe family and loved ones are vital partners in healing. Explore our visiting policies, complimentary parking validation, and on-site patient amenities.
          </p>
        </div>

        {/* 4 Core Visitor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Visiting Hours</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>General Acute Floors:</strong> 8:00 AM – 8:00 PM daily.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>ICU & Neonatal (NICU):</strong> 24-hour access for designated primary support partners. Quiet hours observed 9 PM – 7 AM.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Parking & Transit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Garage A & B:</strong> First 2 hours complimentary with clinical clinic validation stamp at check-in desks.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Emergency Valet:</strong> Available 24/7 at the Emergency Department circular drive at no charge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Food & Amenities</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Orchard Bistro:</strong> Ground floor cafeteria with chef-prepared organic meals, halal, kosher, and gluten-free selections.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Healing Rooftop:</strong> 6th floor terrace garden with panoramic mountain views and quiet seating.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Spiritual & Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Interfaith Sanctuary:</strong> 2nd floor, open 24/7 for quiet reflection, meditation, or prayer.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Patient Advocates:</strong> Available to assist with special accommodations, sign language interpreters, and dietary needs.
            </p>
          </div>
        </div>

        {/* Insurance & Financial Counseling Checker */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                Financial Transparency & Coverage
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Insurance Acceptance & Financial Assistance
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Meridian participates in most major commercial insurance networks, Medicare, and regional healthcare plans. We are committed to price transparency and zero surprise billing.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-300">
                  <ShieldCheck className="w-4 h-4" />
                  Federal No Surprises Act Compliant
                </span>
                <span className="text-slate-600">·</span>
                <span>Financial Counselors on Staff</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/90 rounded-xl p-5 border border-slate-700 space-y-3">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Check Your Insurance Network Coverage
              </label>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Type your insurance carrier (e.g. Aetna, Blue Cross, Medicare)..."
                  value={insuranceQuery}
                  onChange={(e) => setInsuranceQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
                {filteredInsurances.map((ins, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-slate-900/60 border border-slate-800 text-xs flex items-center justify-between text-slate-200"
                  >
                    <span>{ins}</span>
                    <span className="text-[11px] font-semibold text-emerald-400">In-Network</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span>Questions about deductibles or self-pay discounts?</span>
                <a
                  href="tel:18005554422"
                  className="text-teal-300 hover:text-white font-medium flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  (800) 555-4422
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
