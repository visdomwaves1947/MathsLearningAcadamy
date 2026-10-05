import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  User, 
  Phone, 
  Calendar, 
  CreditCard, 
  GraduationCap, 
  Building2, 
  Eye, 
  EyeOff, 
  Camera, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Award, 
  LogOut, 
  AlertCircle,
  LogIn,
  UserPlus,
  ArrowLeft,
  Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';

const SUBJECT_OPTIONS = [
  {
    id: 'ENG',
    code: 'ENG',
    name: 'ENGLISH',
    badge: 'ENG',
    teluguName: 'English',
    description: 'Comprehensive English grammar, literature prose, poetry and communicative skills.',
    badgeBg: 'bg-indigo-600',
  },
  {
    id: 'SAN',
    code: 'SAN',
    name: 'Sanskrit',
    badge: 'SAN',
    teluguName: 'సంస్కృతం',
    description: 'Complete Sanskrit Curriculum with Poetry, Prose, and Grammar.',
    badgeBg: 'bg-purple-600',
  },
  {
    id: 'MAT',
    code: 'MAT',
    name: 'Mathematics (1A/1B & 2A/2B)',
    badge: 'MAT',
    teluguName: 'గణితం',
    description: 'Algebra, Trigonometry, Calculus, Vectors & Coordinate Geometry with IPE + JEE focus.',
    badgeBg: 'bg-blue-600',
  },
  {
    id: 'PHY',
    code: 'PHY',
    name: 'Physics',
    badge: 'PHY',
    teluguName: 'భౌతిక శాస్త్రం',
    description: 'Mechanics, Waves, Thermodynamics, Optics & Electromagnetism with solved derivations.',
    badgeBg: 'bg-sky-600',
  },
  {
    id: 'CHE',
    code: 'CHE',
    name: 'Chemistry',
    badge: 'CHE',
    teluguName: 'రసాయన శాస్త్రం',
    description: 'Physical, Organic & Inorganic Chemistry with targeted board paper analysis.',
    badgeBg: 'bg-emerald-600',
  }
];

const STEP_TITLES = [
  'Personal Details',
  'Select Board',
  'Year & College',
  'Select Subjects',
  'Review & Confirm'
];

export default function AuthModal({ 
  isOpen, 
  onClose, 
  initialMode = 'signin',
  currentUser = null,
  onLoginSuccess,
  onLogout 
}) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup' | 'portal'
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState('forward');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);

  // File input ref for avatar upload
  const fileInputRef = useRef(null);

  // Sign In Form State
  const [signInInput, setSignInInput] = useState(''); // Mobile or Email
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [signInError, setSignInError] = useState('');

  // Sign Up Form State (Multi-step matching screenshots)
  const [formData, setFormData] = useState({
    // Step 1: Personal & Guardian Details
    avatarUrl: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    dob: '',
    aadhaarNumber: '',
    relationship: 'Father',
    fatherName: '',
    fatherMobile: '',
    hallTicketNumber: '',
    password: '',
    confirmPassword: '',

    // Step 2: Board
    board: 'Andhra Pradesh Intermediate',

    // Step 3: Year & College
    year: 'First Year',
    collegeName: '',
    studyMonthYear: 'June, 2025',

    // Step 4: Subjects
    selectedSubjects: ['SAN', 'ENG', 'MAT'],

    // Step 5: Terms
    termsAccepted: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Synchronize modal mode when initialMode changes or modal opens
  useEffect(() => {
    if (isOpen) {
      if (currentUser) {
        setMode('portal');
      } else {
        setMode(initialMode || 'signin');
      }
      setRegSuccess(false);
      setFormErrors({});
      setSignInError('');
      // Prevent body scroll when full-page modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialMode, currentUser]);

  if (!isOpen) return null;

  // Trigger error shake animation
  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  // Avatar upload handler
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please choose a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setFormData((prev) => ({ ...prev, avatarUrl: uploadEvent.target?.result || '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Generic field update handler
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  // Subject toggle handler
  const toggleSubject = (subjectId) => {
    setFormData((prev) => {
      const exists = prev.selectedSubjects.includes(subjectId);
      const updated = exists 
        ? prev.selectedSubjects.filter((id) => id !== subjectId)
        : [...prev.selectedSubjects, subjectId];
      return { ...prev, selectedSubjects: updated };
    });
    if (formErrors.selectedSubjects) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy.selectedSubjects;
        return copy;
      });
    }
  };

  // Validation per step
  const validateStep = (currentStep) => {
    const errors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required';
      }
      if (!formData.mobileNumber.trim()) {
        errors.mobileNumber = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
        errors.mobileNumber = 'Enter a valid 10-digit number';
      }
      if (!formData.email.trim()) {
        errors.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (!formData.dob) {
        errors.dob = 'Date of birth is required';
      }
      if (!formData.fatherName.trim()) {
        errors.fatherName = `${formData.relationship} full name is required`;
      }
      if (!formData.fatherMobile.trim()) {
        errors.fatherMobile = `${formData.relationship} mobile is required`;
      } else if (!/^\d{10}$/.test(formData.fatherMobile.replace(/\D/g, ''))) {
        errors.fatherMobile = 'Enter a valid 10-digit number';
      }
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Please re-enter password';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    }

    if (currentStep === 2) {
      if (!formData.board) {
        errors.board = 'Please select your academic board';
      }
    }

    if (currentStep === 3) {
      if (!formData.year) {
        errors.year = 'Please select study year';
      }
      if (!formData.collegeName.trim() || formData.collegeName.trim().length < 2) {
        errors.collegeName = 'College name must be at least 2 characters long';
      }
      if (!formData.studyMonthYear.trim() || formData.studyMonthYear.includes('---')) {
        errors.studyMonthYear = 'Please select month & year of study';
      }
    }

    if (currentStep === 4) {
      if (!formData.selectedSubjects || formData.selectedSubjects.length === 0) {
        errors.selectedSubjects = 'Please select at least one subject to enroll';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step advancement
  const handleNextStep = () => {
    if (validateStep(step)) {
      setDirection('forward');
      setStep((prev) => Math.min(prev + 1, 5));
    } else {
      triggerShake();
    }
  };

  const handlePrevStep = () => {
    setDirection('backward');
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Sign In Submission
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setSignInError('');

    if (!signInInput.trim() || !signInPassword.trim()) {
      setSignInError('Please fill in both Mobile Number / Email and Password');
      triggerShake();
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const studentUser = {
        name: signInInput.includes('@') 
          ? signInInput.split('@')[0].replace(/[^a-zA-Z]/g, ' ') 
          : 'Jordan Student',
        email: signInInput.includes('@') ? signInInput : `${signInInput}@student.maths.edu`,
        grade: 'Intermediate 1st & 2nd Year',
        enrolledSubjects: ['Mathematics (1A & 1B)', 'Physics', 'Sanskrit'],
        avatar: '',
        board: 'Andhra Pradesh Intermediate'
      };
      if (onLoginSuccess) {
        onLoginSuccess(studentUser);
      }
      setMode('portal');
    }, 600);
  };

  // Quick Demo Student Fill
  const handleQuickDemo = () => {
    setSignInInput('jordan.student@mathslearningacademy.com');
    setSignInPassword('MasterMaths2026!');
    setSignInError('');
  };

  // Sign Up Final Submission
  const handleSignUpSubmit = () => {
    if (!formData.termsAccepted) {
      setFormErrors({ terms: 'Please agree to terms to complete registration' });
      triggerShake();
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRegSuccess(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 120,
          spread: 85,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }

      const createdUser = {
        name: formData.fullName || 'Student',
        email: formData.email,
        phone: formData.mobileNumber,
        board: formData.board,
        year: formData.year,
        college: formData.collegeName,
        enrolledSubjects: formData.selectedSubjects,
        avatar: formData.avatarUrl,
        hallTicket: formData.hallTicketNumber
      };

      if (onLoginSuccess) {
        onLoginSuccess(createdUser);
      }
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-50 min-h-screen w-screen overflow-y-auto bg-slate-950 flex flex-col justify-between animate-fadeIn">
      
      {/* Full Page Artistic Watercolor Background with Study Desk Theme */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center pointer-events-none -z-10 transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/auth-bg.jpg')"
        }}
      >
        {/* Warm Vintage Gradient Overlays matching the reference design */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15100B]/90 via-[#18120E]/75 to-[#0A0705]/85 backdrop-blur-[3px]"></div>
        <div className="absolute inset-0 bg-radial-glow opacity-80"></div>
      </div>

      {/* Top Header Bar with Back Button & Close */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/15 transition-all cursor-pointer shadow-sm group active:scale-95"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Academy</span>
        </button>

        {/* Mode Toggle Pills (Sign In / Sign Up) */}
        {mode !== 'portal' && !regSuccess && (
          <div className="flex items-center p-1 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 text-xs font-bold shadow-lg">
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setFormErrors({});
                setSignInError('');
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all cursor-pointer ${
                mode === 'signin'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <LogIn size={13} />
              <span>Sign In</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setStep(1);
                setFormErrors({});
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all cursor-pointer ${
                mode === 'signup'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <UserPlus size={13} />
              <span>Sign Up</span>
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          aria-label="Close"
          className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all cursor-pointer shadow-sm active:scale-90"
        >
          <X size={18} />
        </button>
      </header>

      {/* Main Full Page Central Card (Matching the Reference Split Design) */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 my-auto py-4 sm:py-8 flex items-center justify-center">
        <div 
          className={`w-full rounded-[36px] bg-[#1E1611]/85 backdrop-blur-2xl border border-amber-400/30 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.7)] overflow-hidden transition-all grid grid-cols-1 lg:grid-cols-12 ${
            isShaking ? 'animate-shake' : 'animate-scaleUp'
          }`}
        >
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: ILLUSTRATION & INSPIRATIONAL BANNER */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col items-center justify-center text-center relative border-b lg:border-b-0 lg:border-r border-amber-400/20 bg-gradient-to-b from-amber-500/[0.04] to-transparent">
            
            {/* Subtle decorative glowing background ring */}
            <div className="absolute w-64 h-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>

            {/* Cute Illustrated Student Character */}
            <div className="relative mb-5 group">
              <div className="w-52 sm:w-64 aspect-[5/4] relative flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/25 bg-white ring-4 ring-sky-400/20">
                <img 
                  src="/student-mascot.png" 
                  alt="Academy Student Mascot" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Heading matching reference style */}
            <h2 className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight mb-2 drop-shadow-sm">
              Build Your Legacy
            </h2>

            {/* Quote in Italics matching reference style */}
            <p className="text-xs sm:text-sm text-amber-100/80 italic font-medium leading-relaxed max-w-xs">
              "Every formula solved creates a whole new world of understanding!"
            </p>

            {/* Micro Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-amber-400/20 text-[11px] text-amber-200/90 font-medium">
              <Sparkles size={12} className="text-amber-400" />
              <span>AP & TS Intermediate Excellence</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: AUTHENTIC SIGN IN / SIGN UP FORM */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
            
            {/* Right Top Header matching reference "Nation's Young Authors" format */}
            <div className="mb-4 sm:mb-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Maths Learning
                </span>
                <span className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight">
                  Academy
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-sky-300/80 mt-1">
                SECURE LOGIN PORTAL
              </div>
            </div>

            {/* ======================================================== */}
            {/* SIGN IN FORM (MATCHING REFERENCE UI + DETAILS) */}
            {/* ======================================================== */}
            {mode === 'signin' && (
              <div className="animate-fadeIn">
                {signInError && (
                  <div className="mb-4 p-3 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <AlertCircle size={16} className="shrink-0 text-rose-400" />
                    <span>{signInError}</span>
                  </div>
                )}

                <form onSubmit={handleSignInSubmit} className="space-y-4">
                  {/* MOBILE NUMBER/EMAIL FIELD matching reference input box */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      <Smartphone size={13} className="text-sky-400" />
                      <span>MOBILE NUMBER/EMAIL</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter Mobile number/Email"
                        value={signInInput}
                        onChange={(e) => setSignInInput(e.target.value)}
                        className="w-full px-5 py-3.5 bg-white text-slate-900 rounded-2xl text-sm font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-400/40 border-2 border-transparent focus:border-sky-400 transition-all shadow-md"
                      />
                    </div>
                  </div>

                  {/* PASSWORD FIELD matching reference continue button style */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      <Lock size={13} className="text-sky-400" />
                      <span>PASSWORD *</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showSignInPassword ? 'text' : 'password'}
                        required
                        placeholder="Enter your password"
                        value={signInPassword}
                        onChange={(e) => setSignInPassword(e.target.value)}
                        className="w-full px-5 pr-12 py-3.5 bg-white text-slate-900 rounded-2xl text-sm font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-400/40 border-2 border-transparent focus:border-sky-400 transition-all shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignInPassword(!showSignInPassword)}
                        className="absolute right-4 top-3.5 text-slate-500 hover:text-slate-800 cursor-pointer p-1"
                      >
                        {showSignInPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Options row */}
                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-slate-600 accent-sky-500 w-4 h-4 cursor-pointer" 
                      />
                      <span>Remember me</span>
                    </label>
                    <button 
                      type="button"
                      onClick={() => alert("A secure password reset link has been dispatched to your email address.")} 
                      className="text-sky-400 hover:text-sky-300 font-bold hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* CONTINUE WITH PASSWORD BUTTON matching reference container */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-4 px-6 rounded-2xl bg-[#322822]/90 hover:bg-[#3D312A] border border-amber-400/30 text-amber-200/90 hover:text-white font-extrabold text-sm tracking-wider uppercase shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] group"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Lock size={15} className="text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>CONTINUE WITH PASSWORD</span>
                      </>
                    )}
                  </button>

                  {/* Bottom Divider & Switcher matching reference */}
                  <div className="pt-4 border-t border-white/10 text-xs text-slate-300 font-medium">
                    Don't have an Account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('signup');
                        setStep(1);
                        setFormErrors({});
                      }}
                      className="text-sky-400 hover:text-sky-300 font-bold underline cursor-pointer ml-1"
                    >
                      Sign Up/Register
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ======================================================== */}
            {/* SIGN UP FORM (NO SCROLLER - COMPACT & STREAMLINED) */}
            {/* ======================================================== */}
            {mode === 'signup' && !regSuccess && (
              <div className="animate-fadeIn">
                
                {/* 5 Indicator Dots / Pills */}
                <div className="flex items-center justify-between mb-3 pb-1.5 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div
                        key={s}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          s === step
                            ? 'w-7 bg-sky-400 shadow-md shadow-sky-400/50'
                            : s < step
                            ? 'w-2 bg-sky-300/60'
                            : 'w-1.5 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    Step {step} of 5: {STEP_TITLES[step - 1]}
                  </span>
                </div>

                {/* -------------------------------------------------------- */}
                {/* STEP 1: PERSONAL & GUARDIAN DETAILS */}
                {/* -------------------------------------------------------- */}
                {step === 1 && (
                  <div className={direction === 'forward' ? 'animate-slideInRight' : 'animate-slideInLeft'}>
                    <div className="space-y-2 text-xs">
                      
                      {/* Row 1: Profile Picture Avatar + Full Name side-by-side */}
                      <div className="flex items-center gap-3">
                        {/* Compact Avatar Upload */}
                        <div className="relative group shrink-0">
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                          />

                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-13 h-13 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-md group-hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center overflow-hidden"
                            title="Upload Profile Picture (Optional)"
                          >
                            <div className="w-full h-full rounded-full bg-[#18120E] flex flex-col items-center justify-center text-center p-0.5">
                              {formData.avatarUrl ? (
                                <img 
                                  src={formData.avatarUrl} 
                                  alt="Avatar" 
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                <>
                                  <Camera size={16} className="text-sky-400" />
                                  <span className="text-[8px] font-black tracking-wider text-sky-400 leading-none mt-0.5">
                                    UPLOAD
                                  </span>
                                </>
                              )}
                            </div>
                          </button>

                          {formData.avatarUrl && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFormData((prev) => ({ ...prev, avatarUrl: '' }));
                              }}
                              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] shadow-xs cursor-pointer hover:bg-rose-700"
                              title="Remove photo"
                            >
                              ×
                            </button>
                          )}
                        </div>

                        {/* Full Name * */}
                        <div className="grow">
                          <div className="flex items-center justify-between mb-0.5">
                            <label className="block text-slate-200 font-bold text-[11px]">
                              Full Name <span className="text-rose-400">*</span>
                            </label>
                            <span className="text-[9.5px] text-slate-400 font-medium">Photo optional (max 5MB)</span>
                          </div>
                          <div className="relative">
                            <User size={14} className="absolute left-3 top-2.5 text-sky-400" />
                            <input
                              type="text"
                              placeholder="Student full name"
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                            />
                          </div>
                          {formErrors.fullName && (
                            <p className="text-rose-400 text-[10px] font-semibold mt-0.5">{formErrors.fullName}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Mobile Number * & Email Address * */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                            Mobile Number <span className="text-rose-400">*</span>
                          </label>
                          <div className="relative">
                            <Phone size={14} className="absolute left-3 top-2.5 text-sky-400" />
                            <input
                              type="tel"
                              maxLength={10}
                              placeholder="10-digit phone"
                              value={formData.mobileNumber}
                              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                            />
                          </div>
                          {formErrors.mobileNumber && (
                            <p className="text-rose-400 text-[10px] font-semibold mt-0.5">{formErrors.mobileNumber}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                            Email Address <span className="text-rose-400">*</span>
                          </label>
                          <div className="relative">
                            <Mail size={14} className="absolute left-3 top-2.5 text-sky-400" />
                            <input
                              type="email"
                              placeholder="student@example.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                            />
                          </div>
                          {formErrors.email && (
                            <p className="text-rose-400 text-[10px] font-semibold mt-0.5">{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Date of Birth * & Aadhaar Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                            Date of Birth <span className="text-rose-400">*</span>
                          </label>
                          <div className="relative">
                            <Calendar size={14} className="absolute left-3 top-2.5 text-sky-400 pointer-events-none" />
                            <input
                              type="date"
                              value={formData.dob}
                              onChange={(e) => handleInputChange('dob', e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                            />
                          </div>
                          {formErrors.dob && (
                            <p className="text-rose-400 text-[10px] font-semibold mt-0.5">{formErrors.dob}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                            Aadhaar Number
                          </label>
                          <div className="relative">
                            <CreditCard size={14} className="absolute left-3 top-2.5 text-sky-400" />
                            <input
                              type="text"
                              maxLength={14}
                              placeholder="12-digit Aadhaar"
                              value={formData.aadhaarNumber}
                              onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 4: Parent / Guardian Details Card */}
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-1.5 mb-1.5 text-white font-bold text-[11px]">
                          <Users size={13} className="text-sky-400" />
                          <span>Parent / Guardian Details</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div>
                            <label className="block text-slate-300 font-bold mb-0.5 text-[10px]">
                              Relationship <span className="text-rose-400">*</span>
                            </label>
                            <select
                              value={formData.relationship}
                              onChange={(e) => handleInputChange('relationship', e.target.value)}
                              className="w-full px-2 py-1.5 bg-white text-slate-900 rounded-lg font-medium text-xs focus:outline-none"
                            >
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Guardian">Guardian</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-slate-300 font-bold mb-0.5 text-[10px]">
                              {formData.relationship} Name <span className="text-rose-400">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Full name"
                              value={formData.fatherName}
                              onChange={(e) => handleInputChange('fatherName', e.target.value)}
                              className="w-full px-2 py-1.5 bg-white text-slate-900 rounded-lg font-medium text-xs focus:outline-none"
                            />
                            {formErrors.fatherName && (
                              <p className="text-rose-400 text-[9.5px] font-semibold mt-0.5">{formErrors.fatherName}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-slate-300 font-bold mb-0.5 text-[10px]">
                              {formData.relationship} Mobile <span className="text-rose-400">*</span>
                            </label>
                            <input
                              type="tel"
                              maxLength={10}
                              placeholder="10-digit mobile"
                              value={formData.fatherMobile}
                              onChange={(e) => handleInputChange('fatherMobile', e.target.value)}
                              className="w-full px-2 py-1.5 bg-white text-slate-900 rounded-lg font-medium text-xs focus:outline-none"
                            />
                            {formErrors.fatherMobile && (
                              <p className="text-rose-400 text-[9.5px] font-semibold mt-0.5">{formErrors.fatherMobile}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Row 5: Intermediate Hall Ticket Number */}
                      <div>
                        <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                          Intermediate Hall Ticket Number
                        </label>
                        <div className="relative">
                          <GraduationCap size={14} className="absolute left-3 top-2.5 text-sky-400" />
                          <input
                            type="text"
                            placeholder="Enter Hall Ticket Number (digits only)"
                            value={formData.hallTicketNumber}
                            onChange={(e) => handleInputChange('hallTicketNumber', e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Row 6: Password * & Re-enter Password * in 2 columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                            Password <span className="text-rose-400">*</span>
                          </label>
                          <div className="relative">
                            <Lock size={14} className="absolute left-3 top-2.5 text-sky-400" />
                            <input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Create password"
                              value={formData.password}
                              onChange={(e) => handleInputChange('password', e.target.value)}
                              className="w-full pl-8 pr-8 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-2.5 top-2 text-slate-500 hover:text-slate-800"
                            >
                              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                          </div>
                          {formErrors.password && (
                            <p className="text-rose-400 text-[10px] font-semibold mt-0.5">{formErrors.password}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                            Re-enter Password <span className="text-rose-400">*</span>
                          </label>
                          <div className="relative">
                            <Lock size={14} className="absolute left-3 top-2.5 text-sky-400" />
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              placeholder="Re-enter password"
                              value={formData.confirmPassword}
                              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                              className="w-full pl-8 pr-8 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-2.5 top-2 text-slate-500 hover:text-slate-800"
                            >
                              {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                          </div>
                          {formErrors.confirmPassword && (
                            <p className="text-rose-400 text-[10px] font-semibold mt-0.5">{formErrors.confirmPassword}</p>
                          )}
                        </div>
                      </div>

                      {/* Next Step Button */}
                      <div className="pt-1.5">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="w-full py-2.5 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Next Step</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      <div className="text-center text-[11px] text-slate-300 font-medium pt-1">
                        Already have an account?{' '}
                        <button
                          type="button"
                          onClick={() => setMode('signin')}
                          className="text-sky-400 font-bold hover:underline cursor-pointer ml-1"
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* STEP 2: SELECT BOARD (MATCHING IMAGE 2) */}
                {/* -------------------------------------------------------- */}
                {step === 2 && (
                  <div className={direction === 'forward' ? 'animate-slideInRight' : 'animate-slideInLeft'}>
                    <div className="text-center mb-3">
                      <h3 className="text-lg sm:text-xl font-black text-white">Select Board</h3>
                      <p className="text-[11px] text-slate-300 mt-0.5">Choose your academic board.</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div
                        onClick={() => handleInputChange('board', 'Andhra Pradesh Intermediate')}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          formData.board === 'Andhra Pradesh Intermediate'
                            ? 'border-2 border-sky-400 bg-sky-500/20 text-white'
                            : 'border-white/15 bg-white/5 text-slate-200 hover:border-white/30'
                        }`}
                      >
                        <span className="font-extrabold text-xs sm:text-sm">Andhra Pradesh Intermediate</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.board === 'Andhra Pradesh Intermediate' ? 'border-sky-400 bg-sky-400' : 'border-slate-500'
                        }`}>
                          {formData.board === 'Andhra Pradesh Intermediate' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                      </div>

                      <div
                        onClick={() => handleInputChange('board', 'Telangana Intermediate')}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          formData.board === 'Telangana Intermediate'
                            ? 'border-2 border-sky-400 bg-sky-500/20 text-white'
                            : 'border-white/15 bg-white/5 text-slate-200 hover:border-white/30'
                        }`}
                      >
                        <span className="font-extrabold text-xs sm:text-sm">Telangana Intermediate</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.board === 'Telangana Intermediate' ? 'border-sky-400 bg-sky-400' : 'border-slate-500'
                        }`}>
                          {formData.board === 'Telangana Intermediate' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                      </div>

                      <div
                        onClick={() => handleInputChange('board', 'CBSE / National Board')}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          formData.board === 'CBSE / National Board'
                            ? 'border-2 border-sky-400 bg-sky-500/20 text-white'
                            : 'border-white/15 bg-white/5 text-slate-200 hover:border-white/30'
                        }`}
                      >
                        <span className="font-extrabold text-xs sm:text-sm">CBSE / National Board</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.board === 'CBSE / National Board' ? 'border-sky-400 bg-sky-400' : 'border-slate-500'
                        }`}>
                          {formData.board === 'CBSE / National Board' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="py-2.5 px-3.5 rounded-xl border border-white/20 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <ChevronLeft size={15} /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="grow py-2.5 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5"
                      >
                        <span>Next Step</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* STEP 3: SELECT YEAR & COLLEGE (MATCHING IMAGES 3 & 4) */}
                {/* -------------------------------------------------------- */}
                {step === 3 && (
                  <div className={direction === 'forward' ? 'animate-slideInRight' : 'animate-slideInLeft'}>
                    <div className="text-center mb-3">
                      <h3 className="text-lg sm:text-xl font-black text-white">Select Year & College</h3>
                      <p className="text-[11px] text-slate-300 mt-0.5">Select year and enter college information.</p>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div
                        onClick={() => handleInputChange('year', 'First Year')}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          formData.year === 'First Year'
                            ? 'border-2 border-sky-400 bg-sky-500/20 text-white'
                            : 'border-white/15 bg-white/5 text-slate-200'
                        }`}
                      >
                        <span className="font-extrabold text-xs sm:text-sm">First Year</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.year === 'First Year' ? 'border-sky-400 bg-sky-400' : 'border-slate-500'
                        }`}>
                          {formData.year === 'First Year' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                      </div>

                      <div
                        onClick={() => handleInputChange('year', 'Second Year')}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          formData.year === 'Second Year'
                            ? 'border-2 border-sky-400 bg-sky-500/20 text-white'
                            : 'border-white/15 bg-white/5 text-slate-200'
                        }`}
                      >
                        <span className="font-extrabold text-xs sm:text-sm">Second Year</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.year === 'Second Year' ? 'border-sky-400 bg-sky-400' : 'border-slate-500'
                        }`}>
                          {formData.year === 'Second Year' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-white/15 space-y-2 mb-3.5">
                      <div>
                        <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                          Junior College Name & Location <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <Building2 size={14} className="absolute left-3 top-2.5 text-sky-400" />
                          <input
                            type="text"
                            placeholder="e.g. Sri Chaitanya Junior College, Vijayawada"
                            value={formData.collegeName}
                            onChange={(e) => handleInputChange('collegeName', e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl font-medium text-xs focus:outline-none"
                          />
                        </div>
                        {formErrors.collegeName && (
                          <p className="text-rose-400 text-[10px] font-bold mt-0.5">{formErrors.collegeName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-slate-200 font-bold mb-0.5 text-[11px]">
                          Month & Year of Study <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-3 top-2.5 text-sky-400" />
                          <input
                            type="text"
                            placeholder="June, 2025"
                            value={formData.studyMonthYear}
                            onChange={(e) => handleInputChange('studyMonthYear', e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-white text-slate-900 rounded-xl font-medium text-xs focus:outline-none"
                          />
                        </div>
                        {formErrors.studyMonthYear && (
                          <p className="text-rose-400 text-[10px] font-bold mt-0.5">{formErrors.studyMonthYear}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="py-2.5 px-3.5 rounded-xl border border-white/20 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <ChevronLeft size={15} /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="grow py-2.5 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5"
                      >
                        <span>Next Step</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* STEP 4: SELECT SUBJECTS (MATCHING IMAGE 5) */}
                {/* -------------------------------------------------------- */}
                {step === 4 && (
                  <div className={direction === 'forward' ? 'animate-slideInRight' : 'animate-slideInLeft'}>
                    <div className="text-center mb-2.5">
                      <div className="inline-flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-black text-white">Select Subjects</h3>
                        <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300">
                          MULTI-SELECT
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5">Choose one or more subjects to enroll.</p>
                    </div>

                    <div className="space-y-1.5 mb-3.5">
                      {SUBJECT_OPTIONS.map((subj) => {
                        const isSelected = formData.selectedSubjects.includes(subj.id);
                        return (
                          <div
                            key={subj.id}
                            onClick={() => toggleSubject(subj.id)}
                            className={`p-2 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'border-2 border-sky-400 bg-sky-500/20'
                                : 'border-white/15 bg-white/5 hover:border-white/30'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2.5">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-7 h-7 rounded-lg ${subj.badgeBg} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                                  {subj.badge}
                                </div>
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-extrabold text-xs text-white">{subj.name}</span>
                                    <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-white/10 text-sky-300">
                                      {subj.badge}
                                    </span>
                                  </div>
                                  <span className="text-[10px] text-sky-400 font-semibold block">{subj.teluguName}</span>
                                </div>
                              </div>

                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isSelected ? 'bg-sky-500 border-sky-400 text-white' : 'border-slate-500 bg-white/5'
                              }`}>
                                {isSelected && <Check size={12} strokeWidth={3} />}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="py-2.5 px-3.5 rounded-xl border border-white/20 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <ChevronLeft size={15} /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="grow py-2.5 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5"
                      >
                        <span>Next Step</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* STEP 5: REVIEW & COMPLETE REGISTRATION */}
                {/* -------------------------------------------------------- */}
                {step === 5 && (
                  <div className={direction === 'forward' ? 'animate-slideInRight' : 'animate-slideInLeft'}>
                    <div className="text-center mb-2.5">
                      <h3 className="text-lg sm:text-xl font-black text-white">Review & Confirm</h3>
                      <p className="text-[11px] text-slate-300 mt-0.5">Confirm your student profile to complete registration.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/15 space-y-2 mb-3 text-xs">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                        <div className="w-9 h-9 rounded-lg bg-sky-500 text-white font-bold flex items-center justify-center text-xs">
                          {formData.avatarUrl ? (
                            <img src={formData.avatarUrl} alt="Avatar" className="w-full h-full object-cover rounded-lg" />
                          ) : (
                            formData.fullName ? formData.fullName.substring(0, 2).toUpperCase() : 'ST'
                          )}
                        </div>
                        <div>
                          <strong className="text-white text-xs block">{formData.fullName}</strong>
                          <span className="text-slate-400 text-[10px]">{formData.email} • {formData.mobileNumber}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 text-slate-300 text-[11px]">
                        <div><span className="text-slate-400">Board:</span> <strong>{formData.board}</strong></div>
                        <div><span className="text-slate-400">Year:</span> <strong>{formData.year}</strong></div>
                        <div className="col-span-2"><span className="text-slate-400">College:</span> <strong>{formData.collegeName || 'N/A'}</strong></div>
                      </div>

                      <div>
                        <span className="text-slate-400 block mb-0.5 text-[10px]">Subjects:</span>
                        <div className="flex flex-wrap gap-1">
                          {formData.selectedSubjects.map((subId) => (
                            <span key={subId} className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[10px] font-bold">
                              {subId}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <label className="flex items-start gap-1.5 text-[11px] text-slate-300 cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                        className="rounded accent-sky-500 w-3.5 h-3.5 mt-0.5 shrink-0"
                      />
                      <span>I agree to the Academy Honor Code & Academic Policies.</span>
                    </label>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="py-2.5 px-3.5 rounded-xl border border-white/20 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <ChevronLeft size={15} /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSignUpSubmit}
                        disabled={isSubmitting}
                        className="grow py-2.5 px-5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Sparkles size={15} className="text-amber-300" />
                            <span>Complete Registration 🎉</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* REGISTRATION SUCCESS VIEW */}
            {/* ======================================================== */}
            {regSuccess && (
              <div className="text-center animate-scaleUp py-6">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 mx-auto flex items-center justify-center mb-4">
                  <Check size={36} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Registration Successful!</h3>
                <p className="text-sm text-slate-300 mb-6">
                  Welcome, <strong className="text-sky-400">{formData.fullName}</strong>! Your academy account is active.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setMode('portal');
                    setRegSuccess(false);
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-sm"
                >
                  Enter Classroom Portal →
                </button>
              </div>
            )}

            {/* ======================================================== */}
            {/* LOGGED IN PORTAL SNAPSHOT */}
            {/* ======================================================== */}
            {mode === 'portal' && (
              <div className="animate-fadeIn space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-sky-500 text-white font-black flex items-center justify-center">
                      {currentUser?.name ? currentUser.name.substring(0, 2).toUpperCase() : 'JS'}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{currentUser?.name || formData.fullName || 'Student'}</h4>
                      <span className="text-emerald-400 text-xs font-semibold">● Active Student • {currentUser?.board || formData.board}</span>
                    </div>
                  </div>
                  {onLogout && (
                    <button
                      type="button"
                      onClick={() => {
                        onLogout();
                        setMode('signin');
                      }}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-white/10"
                      title="Sign Out"
                    >
                      <LogOut size={18} />
                    </button>
                  )}
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-200">
                      <Clock size={16} className="text-sky-400" />
                      <span>Next Live Class: Math 1A (Calculus)</span>
                    </div>
                    <span className="bg-sky-500 text-white font-bold px-2.5 py-1 rounded-md text-[11px]">Join in 35m</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-200">
                      <BookOpen size={16} className="text-purple-400" />
                      <span>Sanskrit (సంస్కృతం) Practice #4</span>
                    </div>
                    <span className="text-emerald-400 font-bold font-mono text-sm">A+</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                >
                  Close & Return to Website
                </button>
              </div>
            )}

          </div>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="relative z-20 w-full text-center py-3 text-xs text-slate-400 font-medium">
        © 2026 Maths Learning Academy • Empowering Future Scholars
      </footer>

    </div>
  );
}
