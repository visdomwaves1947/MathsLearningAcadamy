import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VideoDemoModal from './components/VideoDemoModal';
import AuthModal from './components/AuthModal';
import ExamPlannerModal from './components/exam-planner/ExamPlannerModal';
import MathsPage from './pages/MathsPage';
import DemoPage from './pages/DemoPage';
import English from './pages/English';

// Automatic scroll-to-top on route changes unless an anchor hash exists
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

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
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

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

  const handleSelectRoadmap = (plan) => {
    setSelectedRoadmap(plan);
    setIsPlannerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EBF0F7] text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <ScrollToTop />

      {/* Shared Navigation Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenPortal={handleOpenSignIn}
        onOpenSignIn={handleOpenSignIn}
        onOpenSignUp={handleOpenSignUp}
        currentUser={currentUser}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Routed Main Content */}
      <main className="grow">
        <Routes>
          {/* Main Maths Academy Curriculum (Image 1) */}
          <Route 
            path="/mymarks/maths" 
            element={
              <MathsPage 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                onSelectRoadmap={handleSelectRoadmap}
              />
            } 
          />

          {/* Demo Page: Keeps Navbar, Footer, and displays "Demo" on Hero section */}
          <Route 
            path="/mymarks/demo" 
            element={
              <DemoPage 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
              />
            } 
          />

          {/* English Page */}
          <Route path="/mymarks/Englsih" element={<English />} />
          <Route path="/mymarks/English" element={<English />} />
          <Route path="/mymarks/english" element={<English />} />

          {/* Root & Fallback: Redirect to /mymarks/maths */}
          <Route path="/" element={<Navigate to="/mymarks/maths" replace />} />
          <Route path="*" element={<Navigate to="/mymarks/maths" replace />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Shared Interactive Modals */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)}
        preselectedTrack={selectedTrack}
      />

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

      <ExamPlannerModal 
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        selectedRoadmap={selectedRoadmap}
      />
    </div>
  );
}
