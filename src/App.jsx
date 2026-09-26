import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveGraphExplorer from './components/InteractiveGraphExplorer';
import MathPlayground from './components/MathPlayground';
import CoursesSection from './components/CoursesSection';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import StudentPortalModal from './components/StudentPortalModal';
import VideoDemoModal from './components/VideoDemoModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [portalOpen, setPortalOpen] = useState(false);
  const [videoDemoOpen, setVideoDemoOpen] = useState(false);

  const handleOpenBooking = (track = '') => {
    setSelectedTrack(typeof track === 'string' ? track : '');
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EBF0F7] text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenPortal={() => setPortalOpen(true)} 
      />

      {/* Main Content */}
      <main className="grow">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenVideoDemo={() => setVideoDemoOpen(true)}
        />

        {/* Live Interactive Function & Curve Explorer Lab */}
        <InteractiveGraphExplorer 
          onOpenBooking={() => handleOpenBooking('Interactive Math Lab Enrollment')}
        />

        {/* Interactive Speed Quiz & Math Arena */}
        <MathPlayground 
          onOpenBooking={() => handleOpenBooking('Diagnostic Math Assessment')}
        />

        {/* Courses & Curriculum Pathway Explorer */}
        <CoursesSection 
          onOpenBooking={handleOpenBooking}
        />

        {/* Learning Methodology & Comparison */}
        <Methodology />

        {/* Student Results & Parent Testimonials */}
        <Testimonials 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Tuition Plans & Pricing */}
        <PricingSection 
          onOpenBooking={(planName) => handleOpenBooking(`Plan: ${planName}`)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection 
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)}
        preselectedTrack={selectedTrack}
      />

      <StudentPortalModal 
        isOpen={portalOpen} 
        onClose={() => setPortalOpen(false)}
      />

      <VideoDemoModal 
        isOpen={videoDemoOpen} 
        onClose={() => setVideoDemoOpen(false)}
        onOpenBooking={() => handleOpenBooking('Classroom Experience')}
      />
    </div>
  );
}
