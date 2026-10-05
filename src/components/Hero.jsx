import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap,
  RotateCw
} from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenVideoDemo }) {
  // Real 3D Book Opening Animation State (Starts closed on load/refresh)
  const [isBookOpen, setIsBookOpen] = useState(false);

  const handleStartLearning = () => {
    if (onOpenBooking) {
      onOpenBooking('Mathematics Learning Program');
    }
  };

  const handleExplorePractice = () => {
    const practiceSection = document.getElementById('playground') || document.getElementById('courses');
    if (practiceSection) {
      practiceSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenVideoDemo) {
      onOpenVideoDemo();
    }
  };

  return (
    <section className="relative pt-8 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16 overflow-hidden bg-[#EBF0F7] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* Subtle Background Mathematical Grid & Coordinate System */}
      <div className="absolute inset-0 bg-math-grid opacity-70 dark:opacity-40 pointer-events-none -z-10"></div>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/35 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-purple-300/30 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-sky-300/20 dark:bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TWO-COLUMN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* =========================================================================
              LEFT COLUMN: TEXT, ACTIONS & TELANGANA / ANDHRA PRADESH CARDS (7 COLS)
              ========================================================================= */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-3">
              Learn Mathematics.{' '}
              <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-sky-600 dark:from-indigo-400 dark:via-purple-400 dark:to-sky-300 bg-clip-text text-transparent">
                Build Confidence.
              </span>
            </h1>

            {/* Supporting Description Text */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-5 max-w-2xl mx-auto lg:mx-0">
              Learn Mathematics through practice questions, mock tests and previous-year questions designed to help students prepare with confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-5">
              {/* Start Learning Button */}
              <button
                onClick={handleStartLearning}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Learning</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Explore Practice Button */}
              <button
                onClick={handleExplorePractice}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#DFE7F2] dark:bg-[#131927] hover:bg-[#D4E0ED] dark:hover:bg-[#1A2338] text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base border border-[#BAC9DC] dark:border-[#243048] shadow-xs flex items-center justify-center gap-2.5 transition-all group cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500"
              >
                <BookOpen size={18} className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Explore Practice</span>
              </button>
            </div>

            {/* TELANGANA + ANDHRA PRADESH CURRICULUM SECTION (PERFECT LIGHT & DARK CONTRAST) */}
            <div className="pt-4 border-t border-[#CAD8EA] dark:border-[#1E293B]">
              <div className="flex items-center justify-between mb-2.5 px-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <GraduationCap size={16} className="text-indigo-600 dark:text-indigo-400" />
                  State Board Curriculums
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200/80 dark:border-indigo-800/80 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  2025–26 Syllabus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto lg:mx-0 text-left">

                {/* Card 1: Telangana */}
                <div
                  onClick={handleExplorePractice}
                  className="relative p-3.5 sm:p-4 rounded-2xl bg-[#DFE7F2] dark:bg-[#111726] border border-[#BAC9DC] dark:border-indigo-900/60 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon, State Name & Board Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <GraduationCap size={16} />
                        </div>
                        <div>
                          <span className="text-[10.5px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block leading-none">
                            Telangana
                          </span>
                          <h2 className="text-sm font-black text-slate-900 dark:text-white leading-tight mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                            Govt. of Telangana
                          </h2>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold text-indigo-800 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900/60 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-700/80 shrink-0">
                        TS BIE
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-2.5">
                      Complete TS curriculum resources, chapter blueprints & step-by-step solved questions.
                    </p>
                  </div>

                  {/* Subject Tags & EAMCET Indicator */}
                  <div className="pt-2 border-t border-[#CAD8EA]/80 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-indigo-100/90 dark:bg-indigo-900/60 border border-indigo-300/80 dark:border-indigo-600/70 text-[10.5px] font-extrabold text-indigo-800 dark:text-indigo-200 shadow-2xs">
                        Maths 1A & 1B
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-indigo-100/90 dark:bg-indigo-900/60 border border-indigo-300/80 dark:border-indigo-600/70 text-[10.5px] font-extrabold text-indigo-800 dark:text-indigo-200 shadow-2xs">
                        Maths 2A & 2B
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10.5px] font-bold text-indigo-700 dark:text-indigo-400 pt-0.5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                        TS EAMCET Ready
                      </span>
                      <span className="flex items-center gap-0.5 text-xs text-indigo-600 dark:text-indigo-300 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Andhra Pradesh */}
                <div
                  onClick={handleExplorePractice}
                  className="relative p-3.5 sm:p-4 rounded-2xl bg-[#DFE7F2] dark:bg-[#111726] border border-[#BAC9DC] dark:border-emerald-900/60 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon, State Name & Board Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <GraduationCap size={16} />
                        </div>
                        <div>
                          <span className="text-[10.5px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block leading-none">
                            Andhra Pradesh
                          </span>
                          <h2 className="text-sm font-black text-slate-900 dark:text-white leading-tight mt-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                            Govt. of Andhra Pradesh
                          </h2>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-700/80 shrink-0">
                        BIEAP
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-2.5">
                      Targeted AP syllabus modules, 75/75 scoring guides & previous 10-year question banks.
                    </p>
                  </div>

                  {/* Subject Tags & EAPCET Indicator */}
                  <div className="pt-2 border-t border-[#CAD8EA]/80 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100/90 dark:bg-emerald-900/60 border border-emerald-300/80 dark:border-emerald-600/70 text-[10.5px] font-extrabold text-emerald-800 dark:text-emerald-200 shadow-2xs">
                        Maths 1A & 1B
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100/90 dark:bg-emerald-900/60 border border-emerald-300/80 dark:border-emerald-600/70 text-[10.5px] font-extrabold text-emerald-800 dark:text-emerald-200 shadow-2xs">
                        Maths 2A & 2B
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10.5px] font-bold text-emerald-700 dark:text-emerald-400 pt-0.5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                        AP EAPCET Ready
                      </span>
                      <span className="flex items-center gap-0.5 text-xs text-emerald-600 dark:text-emerald-300 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: REALISTIC 3D ANIMATED MATHEMATICS BOOK (CRYSTAL CLEAR)
              ========================================================================= */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-2 select-none">

            {/* FLOATING MATHEMATICAL SYMBOLS AROUND THE BOOK */}
            <div className="absolute -top-3 left-6 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-serif font-black text-base pointer-events-none animate-float-slow z-30" style={{ color: '#000000' }}>
              π
            </div>

            <div className="absolute top-10 right-4 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-mono font-black text-base pointer-events-none animate-float-reverse z-30" style={{ color: '#000000' }}>
              √x
            </div>

            <div className="absolute top-1/4 -left-4 sm:-left-8 px-3 py-1.5 rounded-xl bg-white border border-slate-300 shadow-lg font-mono text-xs font-black pointer-events-none animate-float-slow z-30 backdrop-blur-md hidden sm:flex items-center gap-1.5" style={{ color: '#000000' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span style={{ color: '#000000' }}>2x + 4 = 12</span>
            </div>

            <div className="absolute bottom-12 -right-2 sm:-right-6 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 shadow-lg font-mono text-xs font-black pointer-events-none animate-float-reverse z-30 backdrop-blur-md hidden sm:flex items-center gap-1.5" style={{ color: '#000000' }}>
              <span className="text-amber-500">△</span>
              <span style={{ color: '#000000' }}>a² + b² = c²</span>
            </div>

            <div className="absolute bottom-2 left-10 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-mono font-black text-sm pointer-events-none animate-float-slow z-30" style={{ color: '#000000' }}>
              ∑ n²
            </div>

            <div className="absolute -top-2 right-1/3 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-mono font-black text-xs pointer-events-none animate-float-reverse z-30" style={{ color: '#000000' }}>
              A = πr²
            </div>

            {/* REALISTIC 3D BOOK STAGE WITH PERSPECTIVE & SMOOTH INERTIAL OPEN/CLOSE */}
            <div
              className="relative w-full max-w-[480px] sm:max-w-[530px] transition-all duration-700 cursor-pointer group"
              onClick={() => setIsBookOpen(prev => !prev)}
              style={{
                perspective: '1600px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Dynamic Table Reflection & Ground Drop Shadow */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bg-slate-950/30 dark:bg-black/80 blur-2xl rounded-full transition-all duration-700 pointer-events-none ${isBookOpen ? '-bottom-7 w-[92%] h-12' : '-bottom-5 w-[65%] h-8'
                  }`}
              ></div>

              {/* Ambient Magical Backglow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-sky-500/20 dark:from-indigo-600/30 dark:via-purple-600/30 dark:to-sky-600/30 blur-2xl -z-10"></div>

              {/* ===============================================================
                  REALISTIC PHYSICAL BOOK SPREAD (DUAL PAGES & HARDBACK CASING)
                  =============================================================== */}
              <div
                className="relative rounded-2xl bg-gradient-to-r from-[#1E1B4B] via-[#0F172A] to-[#1E1B4B] p-2.5 sm:p-3 shadow-2xl border border-indigo-900/60 transition-all duration-700 transform-gpu"
                style={{
                  transform: isBookOpen
                    ? 'rotateX(8deg) rotateY(0deg)'
                    : 'rotateX(12deg) rotateY(-8deg) scale(0.88)'
                }}
              >

                {/* Real Stacked Gilt Page Edges (Layered book thickness illusion) */}
                <div className="rounded-xl bg-gradient-to-b from-[#FAF5EE] via-[#EFE5D5] to-[#E2D4BF] dark:from-[#212C45] dark:via-[#1B2438] dark:to-[#131A2B] p-[3px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.35),0_5px_15px_rgba(0,0,0,0.2)]">

                  {/* Book Spine Channel & Arch */}
                  <div className="relative grid grid-cols-2 gap-0 bg-[#FCFAF6] dark:bg-[#0F172A] rounded-lg overflow-hidden border border-[#D5CABB] dark:border-[#334155]">

                    {/* Center Spine Crease & Heavy Realistic Shadow */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/25 via-black/45 to-black/25 dark:from-black/60 dark:via-black/90 dark:to-black/60 z-20 pointer-events-none shadow-sm"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-amber-900/40 dark:bg-indigo-400/40 z-20"></div>

                    {/* Satin Gold Bookmark Ribbon */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 shadow-md z-30 rounded-b-sm">
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#EBF0F7] dark:bg-[#0B0F19] [clip-path:polygon(0_100%,50%_0,100%_100%)]"></div>
                    </div>

                    {/* =========================================================
                        LEFT PAGE: GEOMETRY, PROOFS & FRACTIONS
                        ========================================================= */}
                    <div
                      className="p-3.5 sm:p-5 relative flex flex-col justify-between border-r border-[#E6DDD0] bg-[#FCFAF6] transition-all duration-700"
                      style={{
                        boxShadow: 'inset -12px 0 20px rgba(0,0,0,0.04)',
                        color: '#000000'
                      }}
                    >
                      {/* Left Page Top Bar */}
                      <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest font-mono flex items-center gap-1" style={{ color: '#000000' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          Unit I • Geometry
                        </span>
                        <span className="text-[9px] font-mono font-bold" style={{ color: '#000000' }}>
                          p. 54
                        </span>
                      </div>

                      {/* Geometric Right Triangle Diagram */}
                      <div className="my-1 p-2 rounded-lg bg-white border border-[#DFD7CA] flex items-center justify-between shadow-xs">
                        <svg viewBox="0 0 100 65" className="w-20 h-14 shrink-0">
                          <defs>
                            <linearGradient id="realBookTriGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.15" />
                            </linearGradient>
                          </defs>
                          <polygon points="12,52 82,52 82,12" fill="url(#realBookTriGrad)" stroke="#1E1B4B" strokeWidth="2.2" strokeLinejoin="round" />
                          <rect x="74" y="44" width="8" height="8" fill="none" stroke="#000000" strokeWidth="1.2" />
                          <text x="47" y="62" fontSize="8.5" fill="#000000" fontWeight="bold" textAnchor="middle" fontFamily="monospace">a = 3</text>
                          <text x="91" y="34" fontSize="8.5" fill="#000000" fontWeight="bold" textAnchor="middle" fontFamily="monospace">b = 4</text>
                          <text x="42" y="27" fontSize="8.5" fill="#000000" fontWeight="bold" textAnchor="middle" fontFamily="monospace">c = 5</text>
                        </svg>

                        <div className="text-right font-mono text-[10.5px] space-y-0.5" style={{ color: '#000000' }}>
                          <div className="font-black" style={{ color: '#000000' }}>a² + b² = c²</div>
                          <div className="font-black" style={{ color: '#000000' }}>3² + 4² = 5²</div>
                          <div className="font-bold" style={{ color: '#000000' }}>θ = 53.13°</div>
                        </div>
                      </div>

                      {/* Formulas & Algebraic Equations */}
                      <div className="space-y-1.5 text-[10.5px] font-mono mt-1" style={{ color: '#000000' }}>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2.5 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black" style={{ color: '#000000' }}>Equation:</span>
                          <span className="font-bold" style={{ color: '#000000' }}>2x + 5 = 15 ⇒ x = 5</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2.5 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black" style={{ color: '#000000' }}>Circle:</span>
                          <span className="font-bold" style={{ color: '#000000' }}>x² + y² = r²</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2.5 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black" style={{ color: '#000000' }}>Fraction:</span>
                          <span className="font-bold" style={{ color: '#000000' }}>(a/b) ÷ (c/d) = ad/bc</span>
                        </div>
                      </div>

                      {/* Left Page Footer */}
                      <div className="pt-2 mt-1 border-t border-[#E8E1D5] flex items-center justify-between text-[9.5px] font-sans" style={{ color: '#000000' }}>
                        <span className="font-semibold" style={{ color: '#000000' }}>Pythagorean Theorem</span>
                        <span className="font-black" style={{ color: '#000000' }}>✓ Verified</span>
                      </div>
                    </div>

                    {/* =========================================================
                        RIGHT PAGE: GRAPHS, CALCULUS & LIMITS
                        ========================================================= */}
                    <div
                      className="p-3.5 sm:p-5 relative flex flex-col justify-between bg-[#FCFAF6] transition-all duration-700"
                      style={{
                        boxShadow: 'inset 12px 0 20px rgba(0,0,0,0.04)',
                        color: '#000000'
                      }}
                    >
                      {/* Right Page Top Bar */}
                      <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest font-mono flex items-center gap-1" style={{ color: '#000000' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                          Unit II • Calculus
                        </span>
                        <span className="text-[9px] font-mono font-bold" style={{ color: '#000000' }}>
                          p. 55
                        </span>
                      </div>

                      {/* Cartesian Coordinate Graph */}
                      <div className="my-1 p-2 rounded-lg bg-white border border-[#DFD7CA] flex items-center justify-center shadow-xs relative overflow-hidden">
                        <svg viewBox="0 0 160 70" className="w-full h-14">
                          <line x1="10" y1="18" x2="150" y2="18" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                          <line x1="10" y1="35" x2="150" y2="35" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                          <line x1="10" y1="52" x2="150" y2="52" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                          <line x1="45" y1="5" x2="45" y2="65" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                          <line x1="80" y1="5" x2="80" y2="65" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                          <line x1="115" y1="5" x2="115" y2="65" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />

                          <line x1="15" y1="35" x2="145" y2="35" stroke="#000000" strokeWidth="1.8" />
                          <line x1="80" y1="8" x2="80" y2="62" stroke="#000000" strokeWidth="1.8" />

                          <path
                            d="M 20,55 Q 50,5 80,35 T 140,15"
                            fill="none"
                            stroke="#4338CA"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />

                          <circle cx="50" cy="20" r="3.2" fill="#E11D48" />
                          <text x="56" y="18" fontSize="8" fill="#000000" fontWeight="bold" fontFamily="monospace">f'(x)</text>

                          <text x="142" y="32" fontSize="7.5" fill="#000000" fontWeight="bold">x</text>
                          <text x="84" y="12" fontSize="7.5" fill="#000000" fontWeight="bold">y</text>
                        </svg>
                      </div>

                      {/* Integrals & Summations */}
                      <div className="space-y-1.5 text-[10.5px] font-mono mt-1" style={{ color: '#000000' }}>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2.5 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black" style={{ color: '#000000' }}>Integral:</span>
                          <span className="font-bold" style={{ color: '#000000' }}>∫ x² dx = ⅓x³ + C</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2.5 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black" style={{ color: '#000000' }}>Series:</span>
                          <span className="font-bold" style={{ color: '#000000' }}>∑ 1/n² = π²/6</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2.5 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black" style={{ color: '#000000' }}>Limit:</span>
                          <span className="font-bold" style={{ color: '#000000' }}>lim (sin x)/x = 1</span>
                        </div>
                      </div>

                      {/* Right Page Footer */}
                      <div className="pt-2 mt-1 border-t border-[#E8E1D5] flex items-center justify-between text-[9.5px] font-sans" style={{ color: '#000000' }}>
                        <span className="font-semibold" style={{ color: '#000000' }}>Target: 100/100 Score</span>
                        <span className="font-black" style={{ color: '#000000' }}>● Solved</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ===============================================================
                    REALISTIC 3D FLIPPING FRONT COVER (PHYSICAL BOOK COVER)
                    =============================================================== */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1E1B4B] via-[#2A2368] to-[#141235] p-6 shadow-2xl border-2 border-amber-500/50 flex flex-col justify-between text-white transition-transform duration-1000 ease-in-out origin-left z-40 backface-hidden"
                  style={{
                    transform: isBookOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                    pointerEvents: isBookOpen ? 'none' : 'auto'
                  }}
                >
                  {/* Spine Ribbed Border on Left Edge */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/60 via-black/25 to-transparent rounded-l-2xl border-r border-amber-500/40"></div>

                  {/* Gold Embossed Corner Ornaments */}
                  <div className="absolute top-3 left-10 w-6 h-6 border-t-2 border-l-2 border-amber-400/80"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400/80"></div>
                  <div className="absolute bottom-3 left-10 w-6 h-6 border-b-2 border-l-2 border-amber-400/80"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-400/80"></div>

                  {/* Top Cover Text */}
                  <div className="pl-6 text-center">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-amber-300 font-bold font-mono">
                      State Board & Competitive
                    </span>
                  </div>

                  {/* Center Emblem & Gold Foil Typography */}
                  <div className="pl-6 text-center my-auto">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-500/25 via-amber-400/35 to-amber-500/10 border border-amber-400/70 flex items-center justify-center mb-3 shadow-lg shadow-amber-500/20">
                      <span className="text-3xl font-bold font-mono text-amber-300">∑</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans uppercase leading-tight drop-shadow-md">
                      MATHEMATICS
                    </h2>
                    <p className="text-xs text-amber-200/90 font-medium mt-1">
                      Complete Theory, Practice & Blueprints
                    </p>
                  </div>

                  {/* Bottom Cover Edition */}
                  <div className="pl-6 text-center pt-3 border-t border-amber-500/30 text-[11px] text-indigo-200">
                    <span>Maths Learning Academy Edition</span>
                  </div>
                </div>

              </div>

              {/* SMOOTH INTERACTIVE TOGGLE BUTTON */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors">
                <RotateCw size={14} className="group-hover:rotate-180 transition-transform duration-700" />
                <span>{isBookOpen ? 'Click Book to Close 📖' : 'Click Book to Open 📖'}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}