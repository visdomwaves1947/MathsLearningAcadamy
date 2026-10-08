import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Info, 
  ChevronLeft, 
  Lock, 
  LogIn, 
  X, 
  Sparkles 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function IntermediateSubjects({ onEnroll, currentUser, onOpenSignIn, onOpenSignUp }) {
  const [activeEnroll, setActiveEnroll] = useState(null);
  const [activeExplore, setActiveExplore] = useState(null);
  const [lockedSubject, setLockedSubject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
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

  // Auto-dismiss toast notification after 5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

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
      setToastMessage(`Please sign in to access the demo trial for ${subject.name}.`);
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
    } else {
      setActiveExplore(activeExplore === subject.id ? null : subject.id);
    }
  };

  const handleExploreClick = (e, subject) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      setLockedSubject(subject);
      setToastMessage(`Please sign in to access the demo trial for ${subject.name}.`);
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
    } else {
      setActiveExplore(subject.id);
    }
  };

  const handleEnrollClick = (e, subject) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      setLockedSubject(subject);
      setToastMessage(`Please sign in to access the demo trial for ${subject.name}.`);
      return;
    }
    setActiveEnroll(subject.id);
  };

  const handleGoToSignIn = () => {
    setLockedSubject(null);
    setToastMessage(null);
    if (onOpenSignIn) {
      onOpenSignIn();
    } else {
      navigate('/signin');
    }
  };

  const handleGoToSignUp = () => {
    setLockedSubject(null);
    setToastMessage(null);
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
        className={`flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${
          !isAuthenticated 
            ? 'border-slate-200/80 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50' 
            : 'border-slate-100 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50'
        } h-[380px] group hover:-translate-y-1 relative cursor-pointer`}
        onClick={() => handleSubjectClick(subject)}
      >
        {/* Card Thumbnail */}
        <div className="h-40 w-full overflow-hidden relative shrink-0">
          <img 
            src={subject.image} 
            alt={subject.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>

          {/* Subject Category Icon Badge */}
          <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/20 text-white shadow-md">
            <BookOpen size={20} />
          </div>

          {/* Lock State Indicator Badge */}
          {!isAuthenticated ? (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg z-10">
              <Lock size={12} className="text-amber-400" />
              <span>Sign in to unlock</span>
            </div>
          ) : (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg z-10">
              <Sparkles size={12} className="text-emerald-400" />
              <span>Demo Unlocked</span>
            </div>
          )}
        </div>
        
        <div className="p-5 flex flex-col flex-1 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              {subject.category}
            </span>
            {!isAuthenticated && (
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                <Lock size={10} /> Locked
              </span>
            )}
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            {subject.name}
          </h4>

          {/* Default Card View */}
          <div className={`flex flex-col mt-auto transition-opacity duration-300 ${isExploring || isEnrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
              {subject.desc}
            </p>
            <div className="flex gap-2">
              <button 
                type="button"
                onClick={(e) => handleExploreClick(e, subject)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {!isAuthenticated ? (
                  <>
                    <Lock size={14} className="text-amber-500" />
                    <span>Explore</span>
                  </>
                ) : (
                  <>
                    <Info size={16} />
                    <span>Explore</span>
                  </>
                )}
              </button>
              <button 
                type="button"
                onClick={(e) => handleEnrollClick(e, subject)}
                className={`flex-1 py-2.5 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer ${
                  !isAuthenticated 
                    ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/30' 
                    : 'bg-slate-900 hover:bg-cyan-600 dark:bg-cyan-700 dark:hover:bg-cyan-500'
                }`}
              >
                {!isAuthenticated ? (
                  <>
                    <Lock size={14} />
                    <span>Demo Trial</span>
                  </>
                ) : (
                  <>
                    <span>Enroll</span>
                    <ArrowRight size={16} />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-bold mb-6">
              <Lock size={14} className="text-amber-500" />
              <span>Intermediate Subjects (Demo Locked)</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-6">
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
          <div className="max-w-2xl mx-auto mb-10 p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/25 text-amber-800 dark:text-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400">
                <Lock size={18} />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  Intermediate Subject Trials are Locked
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">
                  Sign in to access interactive demo trials and video lessons for any subject.
                </p>
              </div>
            </div>
            <button
              onClick={handleGoToSignIn}
              className="w-full sm:w-auto shrink-0 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
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

      {/* Lock Warning Modal when guest clicks any subject */}
      {lockedSubject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in"
          onClick={() => setLockedSubject(null)}
        >
          <div 
            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 text-center transform transition-all animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setLockedSubject(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Lock Glowing Badge */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-500/15 border-2 border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 shadow-lg shadow-amber-500/10">
              <Lock size={28} />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              Demo Trial Locked
            </div>

            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              Sign In Required
            </h3>

            {/* Targeted User-Requested Message */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
              Please <span className="font-bold text-indigo-600 dark:text-indigo-400">sign in</span> to access the demo trial for <span className="font-extrabold text-slate-900 dark:text-white underline decoration-amber-500 decoration-2 underline-offset-4">{lockedSubject.name}</span>.
            </p>

            {/* Subject Preview Card */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3.5 mb-6 text-left border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
              <img 
                src={lockedSubject.image} 
                alt={lockedSubject.name} 
                className="w-14 h-14 rounded-xl object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="text-[11px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  {lockedSubject.category}
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white truncate">
                  {lockedSubject.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Interactive lessons, live formulas & tests
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleGoToSignIn}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-base shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <LogIn size={18} />
                <span>Sign In to Access Demo</span>
              </button>

              <button
                onClick={handleGoToSignUp}
                className="w-full py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors cursor-pointer"
              >
                Don't have an account? Sign Up Free
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification on Subject Click */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-3 animate-slide-up">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Lock size={18} />
          </div>
          <div className="flex-1 text-sm font-medium pr-2">
            {toastMessage}
          </div>
          <button
            onClick={handleGoToSignIn}
            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 cursor-pointer"
          >
            Sign In
          </button>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
