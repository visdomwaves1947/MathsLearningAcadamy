import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Info, 
  ChevronLeft, 
  Lock, 
  LogIn, 
  X, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function IntermediateSubjects({ onEnroll, currentUser, onOpenSignIn, onOpenSignUp }) {
  const [activeEnroll, setActiveEnroll] = useState(null);
  const [activeExplore, setActiveExplore] = useState(null);
  const [lockedSubject, setLockedSubject] = useState(null);
  const navigate = useNavigate();

  // Determine if the user is authenticated from props or saved local storage
  const isAuthenticated = Boolean(
    currentUser || 
    (() => {
      try {
        const stored = localStorage.getItem('mla_user');
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
    })()
  );

  const subjects = [
    { id: 'maths', name: 'Mathematics', category: 'MPC', image: 'https://i.pinimg.com/736x/7e/ff/20/7eff2083afbca2a2e99a1525fcc40ce6.jpg', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400', desc: 'Master algebra, calculus, geometry, and trigonometry. Interactive simulations help visualize complex functions. Essential for JEE and EAMCET preparation.' },
    { id: 'phy', name: 'Physics', category: 'MPC / BiPC', image: 'https://i.pinimg.com/736x/59/63/26/596326ea62c6f1c23ff12882c8c00e7e.jpg', color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400', desc: 'Understand mechanics, thermodynamics, and electromagnetism with practical real-world applications and numerical problem-solving techniques.' },
    { id: 'chem', name: 'Chemistry', category: 'MPC / BiPC', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400', desc: 'Explore organic, inorganic, and physical chemistry. Memorize reactions easily with our curated cheat sheets and molecular models.' },
    { id: 'bot', name: 'Botany', category: 'BiPC', image: 'https://i.pinimg.com/736x/73/a6/34/73a634a96be17ca114e7ac1375713492.jpg', color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400', desc: 'Study plant biology, anatomy, and physiology in detail. Our diagrams and notes are perfectly tailored for high NEET and Board scores.' },
    { id: 'zoo', name: 'Zoology', category: 'BiPC', image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=600&auto=format&fit=crop', color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400', desc: 'Dive into animal sciences, human anatomy, genetics, and evolution. Expert guidance for medical entrance exams.' },
    { id: 'eng', name: 'English', category: 'Languages', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400', desc: 'Improve grammar, vocabulary, and literature comprehension. Learn how to structure essays perfectly for maximum board exam marks.' },
    { id: 'san', name: 'Sanskrit', category: 'Languages', image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=600&auto=format&fit=crop', color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400', desc: 'Learn ancient texts, fundamental grammar rules, and translation strategies to score 98+ marks easily in your language board exams.' }
  ];

  const handleSubjectClick = (subject) => {
    if (!isAuthenticated) {
      setLockedSubject(subject);
      return;
    }

    if (subject.id === 'maths') {
      navigate('/maths');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'eng') {
      navigate('/english');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'bot') {
      navigate('/botany');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'zoo') {
      navigate('/zoology');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'phy') {
      navigate('/physics');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'chem') {
      navigate('/chemistry');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'san') {
      navigate('/sanskrit');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveExplore(activeExplore === subject.id ? null : subject.id);
    }
  };

  const handleExploreClick = (e, subject) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      setLockedSubject(subject);
      return;
    }

    if (subject.id === 'maths') {
      navigate('/maths');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'eng') {
      navigate('/english');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'bot') {
      navigate('/botany');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'zoo') {
      navigate('/zoology');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'phy') {
      navigate('/physics');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'chem') {
      navigate('/chemistry');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'san') {
      navigate('/sanskrit');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveExplore(subject.id);
    }
  };

  const handleEnrollClick = (e, subject) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      setLockedSubject(subject);
      return;
    }
    setActiveEnroll(subject.id);
  };

  const handleGoToSignIn = () => {
    setLockedSubject(null);
    if (onOpenSignIn) {
      onOpenSignIn();
    } else {
      navigate('/signin');
    }
  };

  const handleGoToSignUp = () => {
    setLockedSubject(null);
    if (onOpenSignUp) {
      onOpenSignUp();
    } else {
      navigate('/signup');
    }
  };

  const renderSubjectCard = (subject) => {
    const isEnrolling = activeEnroll === subject.id;
    const isExploring = activeExplore === subject.id;

    return (
      <div 
        key={subject.id} 
        className={`flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border ${
          !isAuthenticated 
            ? 'border-slate-200/80 dark:border-slate-800 hover:border-amber-500/60 dark:hover:border-amber-500/60 hover:shadow-amber-500/10' 
            : 'border-slate-100 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-cyan-500/10'
        } h-[390px] group hover:-translate-y-1.5 relative cursor-pointer`}
        onClick={() => handleSubjectClick(subject)}
      >
        {/* Card Thumbnail */}
        <div className="h-44 w-full overflow-hidden relative shrink-0">
          <img 
            src={subject.image} 
            alt={subject.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

          {/* Subject Category Icon Badge */}
          <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/20 text-white shadow-md border border-white/20">
            <BookOpen size={20} />
          </div>

          {/* Lock State Indicator Badge */}
          {!isAuthenticated ? (
            <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-xl z-10 group-hover:border-amber-400 group-hover:scale-105 transition-all">
              <Lock size={12} className="text-amber-400" />
              <span>Locked Demo</span>
            </div>
          ) : (
            <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-xl z-10">
              <Sparkles size={12} className="text-emerald-400" />
              <span>Unlocked</span>
            </div>
          )}
        </div>
        
        <div className="p-5 flex flex-col flex-1 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              {subject.category}
            </span>
            {!isAuthenticated && (
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                <Lock size={11} /> Locked
              </span>
            )}
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
            {subject.name}
          </h4>

          {/* Default Card View */}
          <div className={`flex flex-col mt-auto transition-opacity duration-300 ${isExploring || isEnrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              {subject.desc}
            </p>
            <div className="flex gap-2.5">
              <button 
                type="button"
                onClick={(e) => handleExploreClick(e, subject)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {!isAuthenticated ? (
                  <>
                    <Lock size={13} className="text-amber-500" />
                    <span>Explore</span>
                  </>
                ) : (
                  <>
                    <Info size={15} />
                    <span>Explore</span>
                  </>
                )}
              </button>
              <button 
                type="button"
                onClick={(e) => handleEnrollClick(e, subject)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer ${
                  !isAuthenticated 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-amber-500/20' 
                    : 'bg-slate-900 hover:bg-cyan-600 dark:bg-cyan-700 dark:hover:bg-cyan-500 text-white'
                }`}
              >
                {!isAuthenticated ? (
                  <>
                    <Lock size={13} />
                    <span>Demo Trial</span>
                  </>
                ) : (
                  <>
                    <span>Enroll</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Explore View (when authenticated) */}
          {isAuthenticated && (
            <div className={`absolute inset-0 bg-white dark:bg-slate-900 p-5 flex flex-col z-10 transition-transform duration-300 ${isExploring ? 'translate-y-0' : 'translate-y-full'}`}>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{subject.name} Overview</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed overflow-y-auto pr-1 mb-4 flex-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                {subject.desc}
              </p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveExplore(null);
                }}
                className="w-full mt-auto py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} /> Back
              </button>
            </div>
          )}

          {/* Enroll View (when authenticated) */}
          {isAuthenticated && (
            <div className={`absolute inset-0 bg-white dark:bg-slate-900 p-5 flex flex-col z-10 transition-transform duration-300 ${isEnrolling ? 'translate-y-0' : 'translate-y-full'}`}>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 text-center">Select Year for {subject.name}</h4>
              <div className="flex flex-col gap-2 flex-1 justify-center">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveEnroll(null);
                    if (onEnroll) onEnroll(`${subject.name} (1st Year)`);
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
                >
                  1st Year (Junior)
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveEnroll(null);
                    if (onEnroll) onEnroll(`${subject.name} (2nd Year)`);
                  }}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-blue-500/20"
                >
                  2nd Year (Senior)
                </button>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveEnroll(null);
                }}
                className="w-full mt-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800 relative" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {!isAuthenticated ? (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-bold mb-6 shadow-xs">
              <Lock size={14} className="text-amber-500" />
              <span>Intermediate Subjects (Demo Locked)</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-6 shadow-xs">
              <Sparkles size={14} className="text-cyan-500" />
              <span>AP/TS Board Curriculum (Unlocked)</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Intermediate Subjects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-xl font-medium">
            Complete subject-wise mastery for Intermediate students. Explore our subjects and select your year to enroll and boost your board exam scores.
          </p>
        </div>

        {/* Lock Info Banner when user is not signed in */}
        {!isAuthenticated && (
          <div className="max-w-2xl mx-auto mb-10 p-4 sm:p-5 rounded-3xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/25 text-amber-800 dark:text-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400 shadow-inner">
                <Lock size={20} />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                  Intermediate Subject Trials are Locked
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                  Sign in to unlock interactive demo trials and video lessons for any subject.
                </p>
              </div>
            </div>
            <button
              onClick={handleGoToSignIn}
              className="w-full sm:w-auto shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-transform hover:scale-105 active:scale-95 shadow-md shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <LogIn size={14} />
              <span>Sign In Now</span>
            </button>
          </div>
        )}

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {subjects.map(renderSubjectCard)}
        </div>
      </div>

      {/* Ultra-Premium Animated Lock Modal */}
      {lockedSubject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-fadeIn"
          onClick={() => setLockedSubject(null)}
        >
          {/* Ambient Glowing Background Orbs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

          <div 
            className="relative w-full max-w-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.7)] border border-slate-200/90 dark:border-slate-800 text-center transform transition-all animate-scaleUp overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Animated Gradient Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-indigo-600"></div>

            {/* Close Button */}
            <button 
              onClick={() => setLockedSubject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Animated 3D Security Emblem */}
            <div className="relative mx-auto w-20 h-20 mb-5 flex items-center justify-center">
              {/* Outer pulsing glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 opacity-30 blur-md animate-pulse"></div>
              
              {/* Spinning dashed ring effect */}
              <div className="absolute -inset-1 rounded-3xl border border-amber-500/30 border-dashed animate-[spin_12s_linear_infinite]"></div>

              {/* Main Badge */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-amber-500/30 ring-4 ring-amber-500/20">
                <Lock size={30} className="stroke-[2.2] animate-bounce" />
              </div>

              {/* Corner Sparkle Badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-amber-400 border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-md">
                <Sparkles size={12} className="animate-pulse" />
              </div>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs font-black uppercase tracking-wider mb-2.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Demo Trial Locked</span>
            </div>

            {/* Modal Heading */}
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
              Sign In Required
            </h3>

            {/* Targeted User-Requested Message */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5 max-w-md mx-auto">
              Please <button onClick={handleGoToSignIn} className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">sign in</button> to access the demo trial for <span className="font-extrabold text-slate-900 dark:text-white underline decoration-amber-500 decoration-2 underline-offset-4">{lockedSubject.name}</span>.
            </p>

            {/* Subject Preview & Feature Perks Box */}
            <div className="bg-slate-50/90 dark:bg-slate-800/60 rounded-2xl p-4 mb-6 text-left border border-slate-200/80 dark:border-slate-700/60 shadow-xs">
              <div className="flex items-center gap-3.5 mb-3.5 pb-3 border-b border-slate-200/70 dark:border-slate-700/50">
                <img 
                  src={lockedSubject.image} 
                  alt={lockedSubject.name} 
                  className="w-14 h-14 rounded-xl object-cover shrink-0 ring-2 ring-white dark:ring-slate-700 shadow-md"
                />
                <div className="min-w-0">
                  <div className="inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 tracking-wider mb-1">
                    {lockedSubject.category} &bull; AP / TS Intermediate
                  </div>
                  <div className="text-base font-black text-slate-900 dark:text-white truncate">
                    {lockedSubject.name}
                  </div>
                </div>
              </div>

              {/* Perks Checklist */}
              <div className="space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Full Chapter Interactive Lessons & Video Concept Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Live Formula Simulations & Solved Board Examples</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Timed Mock Question Sets with Instant Score Feedback</span>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleGoToSignIn}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
              >
                {/* Continuous Shimmer Light Sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none"></span>
                <LogIn size={19} className="transition-transform group-hover:translate-x-1" />
                <span>Sign In to Access Demo</span>
              </button>

              <button
                onClick={handleGoToSignUp}
                className="w-full py-3.5 px-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 font-bold text-sm transition-all duration-200 cursor-pointer border border-slate-200 dark:border-slate-700/60 flex items-center justify-center gap-2 hover:border-slate-300 dark:hover:border-slate-600 group"
              >
                <span>Don't have an account? Sign Up Free</span>
                <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            {/* Instant Access Note */}
            <p className="mt-4 text-[11px] font-medium text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
              <Sparkles size={12} className="text-amber-500" />
              <span>Instant activation &bull; Free demo trial across all subjects</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
