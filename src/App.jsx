import React, { useState, useEffect } from 'react';
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
import AuthModal from './components/AuthModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('mla_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } catch {
      return 'light';
    }
  });

  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [videoDemoOpen, setVideoDemoOpen] = useState(false);

  // Unified Auth & Registration Modal State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'signup' | 'portal'
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('mla_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('mla_user', JSON.stringify(user));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('mla_user');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleOpenSignIn = () => {
    setAuthMode(currentUser ? 'portal' : 'signin');
    setAuthModalOpen(true);
  };

  const handleOpenSignUp = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    try {
      localStorage.setItem('mla_theme', theme);
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenBooking = (track = '') => {
    setSelectedTrack(typeof track === 'string' ? track : '');
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EBF0F7] text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenPortal={handleOpenSignIn}
        onOpenSignIn={handleOpenSignIn}
        onOpenSignUp={handleOpenSignUp}
        currentUser={currentUser}
        theme={theme}
        toggleTheme={toggleTheme}
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

      {/* Unified Student Auth & Sign Up Wizard Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        currentUser={currentUser}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />

      <VideoDemoModal 
        isOpen={videoDemoOpen} 
        onClose={() => setVideoDemoOpen(false)}
        onOpenBooking={() => handleOpenBooking('Classroom Experience')}
      />
    </div>
  );
}
