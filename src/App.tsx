/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmergencySection } from './components/EmergencySection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { SurgicalTechSection } from './components/SurgicalTechSection';
import { DoctorDirectory } from './components/DoctorDirectory';
import { SymptomNavigator } from './components/SymptomNavigator';
import { VisitorGuideSection } from './components/VisitorGuideSection';
import { Footer } from './components/Footer';
import { AppointmentBookingModal } from './components/AppointmentBookingModal';
import { EmergencyModal } from './components/EmergencyModal';
import { PatientPortalModal } from './components/PatientPortalModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDept, setBookingDept] = useState<string | undefined>(undefined);
  const [bookingDoctorId, setBookingDoctorId] = useState<string | undefined>(undefined);

  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [selectedDeptForDoctors, setSelectedDeptForDoctors] = useState<string | undefined>(undefined);

  const handleOpenBooking = (prefillDept?: string, prefillDoctorId?: string) => {
    setBookingDept(prefillDept);
    setBookingDoctorId(prefillDoctorId);
    setBookingOpen(true);
  };

  const handleOpenEmergency = () => {
    setEmergencyOpen(true);
  };

  const handleOpenPortal = () => {
    setPortalOpen(true);
  };

  const handleOpenTriage = () => {
    const el = document.getElementById('triage-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDoctorFromHero = () => {
    const el = document.getElementById('doctors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDoctorByDept = (deptId: string) => {
    setSelectedDeptForDoctors(deptId);
    const el = document.getElementById('doctors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDoctorFromDirectory = (doctorId: string, deptId: string) => {
    handleOpenBooking(deptId, doctorId);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenEmergency={handleOpenEmergency}
        onOpenPortal={handleOpenPortal}
        onOpenTriage={handleOpenTriage}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenEmergency={handleOpenEmergency}
          onOpenTriage={handleOpenTriage}
          onSelectDoctor={handleSelectDoctorFromHero}
        />

        {/* Emergency & Acute Care Logistics */}
        <EmergencySection
          onOpenBooking={() => handleOpenBooking()}
          onOpenTriage={handleOpenTriage}
        />

        {/* Multidisciplinary Clinical Departments */}
        <DepartmentsSection
          onOpenBooking={handleOpenBooking}
          onSelectDoctorByDept={handleSelectDoctorByDept}
        />

        {/* Surgical Robotics & Clinical Infrastructure */}
        <SurgicalTechSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Physicians & Specialists Directory */}
        <DoctorDirectory
          onBookDoctor={handleBookDoctorFromDirectory}
          filterDepartment={selectedDeptForDoctors}
        />

        {/* Interactive Symptom & Care Navigator */}
        <SymptomNavigator
          onOpenBooking={() => handleOpenBooking()}
          onOpenEmergency={handleOpenEmergency}
        />

        {/* Visitor Guide & Insurance Verification */}
        <VisitorGuideSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenEmergency={handleOpenEmergency}
        onOpenPortal={handleOpenPortal}
      />

      {/* Appointment Booking Flow Modal */}
      <AppointmentBookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialDepartment={bookingDept}
        initialDoctorId={bookingDoctorId}
      />

      {/* Emergency Immediate Action Modal */}
      <EmergencyModal
        isOpen={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
        onOpenTriage={handleOpenTriage}
      />

      {/* Patient Portal Simulation Modal */}
      <PatientPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
