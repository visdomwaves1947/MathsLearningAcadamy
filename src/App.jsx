import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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

  const location = useLocation();
  const path = location.pathname.toLowerCase();
  
  const isAuthRoute = ['/signin', '/signup', '/portal'].includes(path);
  const authMode = isAuthRoute ? path.substring(1) : 'signin'; 

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
    const from = location.state?.from || '/demo';
    navigate(from);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('mla_user');
    } catch (e) {
      console.warn(e);
    }
    const from = location.state?.from || '/demo';
    navigate(from);
  };

  const handleOpenSignIn = () => {
    navigate(currentUser ? '/portal' : '/signin', { state: { from: location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/portal' ? location.pathname : (location.state?.from || '/demo') } });
  };

  const handleOpenSignUp = () => {
    navigate('/signup', { state: { from: location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/portal' ? location.pathname : (location.state?.from || '/demo') } });
  };
  
  const handleCloseAuth = () => {
    const from = location.state?.from || '/demo';
    navigate(from);
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
          {/* Main Maths Academy Curriculum */}
          <Route 
            path="/maths" 
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
            path="/demo" 
            element={
              <DemoPage 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                currentUser={currentUser}
                onOpenSignIn={handleOpenSignIn}
                onOpenSignUp={handleOpenSignUp}
              />
            } 
          />

          {/* English Page */}
          <Route 
            path="/english" 
            element={
              <English 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                onSelectRoadmap={handleSelectRoadmap}
              />
            } 
          />
          <Route 
            path="/English" 
            element={
              <English 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                onSelectRoadmap={handleSelectRoadmap}
              />
            } 
          />
          <Route 
            path="/eng" 
            element={
              <English 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                onSelectRoadmap={handleSelectRoadmap}
              />
            } 
          />

          {/* Auth Routes: Render DemoPage in the background so the modal overlays it nicely */}
          <Route 
            path="/signin" 
            element={
              <DemoPage 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                currentUser={currentUser}
                onOpenSignIn={handleOpenSignIn}
                onOpenSignUp={handleOpenSignUp}
              />
            } 
          />
          <Route 
            path="/signup" 
            element={
              <DemoPage 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                currentUser={currentUser}
                onOpenSignIn={handleOpenSignIn}
                onOpenSignUp={handleOpenSignUp}
              />
            } 
          />
          <Route 
            path="/portal" 
            element={
              <DemoPage 
                onOpenBooking={handleOpenBooking}
                onOpenVideoDemo={() => setVideoDemoOpen(true)}
                currentUser={currentUser}
                onOpenSignIn={handleOpenSignIn}
                onOpenSignUp={handleOpenSignUp}
              />
            } 
          />

          {/* Backward compatibility redirects for /mymarks/* */}
          <Route path="/mymarks/maths" element={<Navigate to="/maths" replace />} />
          <Route path="/mymarks/demo" element={<Navigate to="/demo" replace />} />
          <Route path="/mymarks/english" element={<Navigate to="/english" replace />} />
          <Route path="/mymarks/English" element={<Navigate to="/english" replace />} />
          <Route path="/mymarks/eng" element={<Navigate to="/english" replace />} />
          <Route path="/mymarks/*" element={<Navigate to="/demo" replace />} />

          {/* Root & Fallback: Show demo first instead of maths */}
          <Route path="/" element={<Navigate to="/demo" replace />} />
          <Route path="*" element={<Navigate to="/demo" replace />} />
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
        isOpen={isAuthRoute} 
        onClose={handleCloseAuth}
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
