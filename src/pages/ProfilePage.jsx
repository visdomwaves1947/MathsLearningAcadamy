import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Building2,
  Calendar,
  CreditCard,
  Award,
  BookOpen,
  Clock,
  Sparkles,
  LogOut,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  FileText,
  Shield,
  Layers,
  ExternalLink,
  ChevronRight,
  Video,
  CheckCircle
} from 'lucide-react';

export default function ProfilePage({
  currentUser,
  onLogout,
  onOpenBooking,
  onOpenSignIn,
  onOpenSignUp
}) {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Fallback demo/student profile data if currentUser is not fully populated
  const studentData = {
    name: currentUser?.name || currentUser?.fullName || 'Visdom Waves GitHub',
    email: currentUser?.email || 'visdomwavesgithub@gmail.com',
    mobile: currentUser?.mobile || currentUser?.mobileNumber || '+91 98765 43210',
    role: currentUser?.role || 'MATH SCHOLAR',
    board: currentUser?.board || 'Andhra Pradesh Intermediate',
    year: currentUser?.year || 'First Year (MPC / BiPC)',
    collegeName: currentUser?.collegeName || 'Narayana Junior College, Vijayawada',
    studyMonthYear: currentUser?.studyMonthYear || 'June, 2025 - March, 2026',
    hallTicketNumber: currentUser?.hallTicketNumber || '2604819230',
    fatherName: currentUser?.fatherName || 'C. Venkateswara Rao',
    fatherMobile: currentUser?.fatherMobile || '+91 98765 43211',
    relationship: currentUser?.relationship || 'Father',
    avatarUrl: currentUser?.avatarUrl || ''
  };

  const getInitials = (name) => {
    if (!name) return 'ST';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  const handleLogoutAction = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/demo');
  };

  // If completely logged out and no profile data
  if (!currentUser) {
    return (
      <div className="min-h-[calc(100vh-86px)] bg-[#EBF0F7] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors duration-300">
        <div className="max-w-md w-full bg-white dark:bg-[#111827] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <User size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
            Student Profile
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Please sign in to access your personal academic dashboard, enrolled courses, and track records.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                if (onOpenSignIn) onOpenSignIn();
                else navigate('/signin');
              }}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              Sign In to Your Account
            </button>
            <button
              onClick={() => navigate('/demo')}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all cursor-pointer"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-86px)] bg-[#EBF0F7] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300 py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb & Back Action */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/demo')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Dashboard</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold">
            <Sparkles size={13} className="text-blue-600 dark:text-cyan-400" />
            <span>Academic Year 2025–2026</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PROFESSIONAL HERO PROFILE CARD */}
        {/* ======================================================== */}
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl p-5 sm:p-8">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left: Avatar + Details */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              {/* Avatar Photo / Initials */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center shadow-md ring-2 ring-white dark:ring-slate-800 overflow-hidden">
                  {studentData.avatarUrl ? (
                    <img
                      src={studentData.avatarUrl}
                      alt={studentData.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{getInitials(studentData.name)}</span>
                  )}
                </div>
                {/* Active Online Status Badge */}
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900 shadow-xs" title="Active Student"></span>
              </div>

              {/* Name, Email, Status */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                    {studentData.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                    {studentData.role}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Mail size={13} className="text-blue-500 shrink-0" />
                    <span>{studentData.email}</span>
                  </span>
                  <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={13} className="text-emerald-500 shrink-0" />
                    <span>{studentData.mobile}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 size={13} />
                    <span>Active Student</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    <GraduationCap size={13} className="text-blue-500" />
                    <span>{studentData.board}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons including the ONLY LOGOUT OPTION */}
            <div className="flex flex-col sm:flex-row md:flex-col items-center justify-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
              {/* Mentorship Booking */}
              {onOpenBooking && (
                <button
                  onClick={() => onOpenBooking('1-on-1 Mentorship')}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  <Video size={14} />
                  <span>Book 1-on-1 Mentorship</span>
                </button>
              )}

              {/* LOGOUT BUTTON - Kept in profile button page only */}
              <button
                id="logout-button"
                onClick={() => setShowLogoutConfirm(true)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 font-semibold text-xs flex items-center justify-center gap-2 border border-rose-200 dark:border-rose-900/60 shadow-xs transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                title="Log Out of Account"
              >
                <LogOut size={15} />
                <span>Log Out</span>
              </button>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* STATS & METRICS GRID */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Target Score</p>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">75 / 75</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Practice Score</p>
              <p className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">98% (A+)</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Class Attendance</p>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">96% Completed</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Chapters Covered</p>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">14 / 16 Units</p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TWO COLUMN DETAIL CARDS */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Academic & Registration Profile */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Information Card */}
            <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-7">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <GraduationCap size={18} className="text-blue-600 dark:text-cyan-400" />
                <span>Academic & College Credentials</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">State Education Board</span>
                  <strong className="text-slate-900 dark:text-white text-sm font-semibold">{studentData.board}</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">Class / Academic Year</span>
                  <strong className="text-slate-900 dark:text-white text-sm font-semibold">{studentData.year}</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 sm:col-span-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">Junior College Name</span>
                  <strong className="text-slate-900 dark:text-white text-sm font-semibold flex items-center gap-2">
                    <Building2 size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                    <span>{studentData.collegeName}</span>
                  </strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">Hall Ticket / Roll No</span>
                  <strong className="text-slate-900 dark:text-slate-100 text-sm font-mono font-bold tracking-wider">
                    {studentData.hallTicketNumber}
                  </strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">Month & Year of Study</span>
                  <strong className="text-slate-900 dark:text-white text-sm font-semibold flex items-center gap-1.5">
                    <Calendar size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                    <span>{studentData.studyMonthYear}</span>
                  </strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 sm:col-span-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">
                    Guardian Details ({studentData.relationship})
                  </span>
                  <strong className="text-slate-900 dark:text-white text-sm font-semibold">
                    {studentData.fatherName}
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400 text-xs ml-2 font-medium">
                    ({studentData.fatherMobile})
                  </span>
                </div>
              </div>
            </div>

            {/* Enrolled Subjects Quick Hub */}
            <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-7">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <BookOpen size={18} className="text-blue-600 dark:text-cyan-400" />
                <span>Enrolled Intermediate Curriculum</span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Mathematics', desc: '1A, 1B, 2A, 2B', route: '/maths' },
                  { name: 'Physics', desc: 'Theory & Labs', route: '/physics' },
                  { name: 'Chemistry', desc: 'Organic & Inorganic', route: '/chemistry' },
                  { name: 'Botany', desc: 'Plant Anatomy & Cell', route: '/botany' },
                  { name: 'Zoology', desc: 'Human Physiology', route: '/zoology' },
                  { name: 'Sanskrit', desc: 'Poetry & Grammar', route: '/sanskrit' },
                ].map((subject, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate(subject.route)}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-blue-50/70 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all text-left group cursor-pointer shadow-2xs hover:shadow-xs"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{subject.name}</span>
                      <ChevronRight size={13} className="text-slate-400 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-transform" />
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{subject.desc}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Class, Practice, and Account Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Class & Practice Schedule Card */}
            <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-7">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <Clock size={18} className="text-blue-600 dark:text-cyan-400" />
                <span>Live Class & Problem Sets</span>
              </h2>

              <div className="space-y-3.5 text-xs">
                {/* Next Live Class */}
                <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/80 shadow-2xs">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-blue-700 dark:text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={11} className="text-blue-600 dark:text-cyan-400" />
                      <span>Upcoming Live Class</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-semibold text-[10px] shadow-2xs">
                      Join in 35m
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs mb-1">
                    Math 1A: Calculus & Functions (Limits & Continuity)
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Live with Senior Board Faculty • Direct 1-on-1 doubt clearing
                  </p>
                </div>

                {/* Practice Homework Set */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Practice Problem Set #4
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono text-xs">
                      A+ (98%)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                    AP Intermediate 7-Mark & 4-Mark Solved Blueprint Set
                  </p>
                </div>

                {/* Mock Diagnostic */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      State Mock Test #2
                    </span>
                    <span className="text-blue-600 dark:text-cyan-400 font-bold font-mono text-xs">
                      72 / 75
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                    Top 2% Percentile in AP & TS Board benchmark
                  </p>
                </div>
              </div>
            </div>

            {/* Account Settings & Dedicated Logout Card */}
            <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-7">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <Shield size={18} className="text-blue-600 dark:text-cyan-400" />
                <span>Account Management</span>
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Manage your authenticated student session and security settings.
              </p>

              {/* DEDICATED LOGOUT ACTION */}
              <div className="pt-2">
                <button
                  type="button"
                  id="logout-button"
                  onClick={() => setShowLogoutConfirm(true)}
                  className="w-full py-3 px-4 rounded-xl bg-rose-50 hover:bg-rose-100/80 dark:bg-rose-950/30 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-rose-200 dark:border-rose-900/50 shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-[0.99]"
                >
                  <LogOut size={16} />
                  <span>Log Out of Account</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2.5">
                  Student session secured with 256-bit SSL encryption.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* LOGOUT CONFIRMATION MODAL */}
      {/* ======================================================== */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="max-w-sm w-full bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
              <LogOut size={26} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Confirm Sign Out</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Are you sure you want to log out of your student account?
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)}
                className="grow py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogoutAction}
                className="grow py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
