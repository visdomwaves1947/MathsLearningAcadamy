import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap,
  RotateCw,
  Zap,
  Atom,
  Compass,
  Activity,
  Cpu
} from 'lucide-react';

export default function PhysicsHero({ onOpenBooking, onOpenVideoDemo }) {
  // Real 3D Book Opening Animation State (Starts closed on load/refresh)
  const [isBookOpen, setIsBookOpen] = useState(false);

  const handleStartLearning = () => {
    if (onOpenBooking) {
      onOpenBooking('Physics Masterclass Program');
    }
  };

  const handleExplorePractice = () => {
    const practiceSection = document.getElementById('physics-curriculum') || document.getElementById('roadmaps') || document.getElementById('courses');
    if (practiceSection) {
      practiceSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenVideoDemo) {
      onOpenVideoDemo();
    }
  };

  return (
    <section className="relative pt-8 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16 overflow-hidden bg-[#EBF0F7] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* Subtle Background Pattern & Coordinate Grid */}
      <div className="absolute inset-0 bg-math-grid opacity-70 dark:opacity-40 pointer-events-none -z-10"></div>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300/30 dark:bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-purple-300/30 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TWO-COLUMN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* =========================================================================
              LEFT COLUMN: TEXT, ACTIONS & TELANGANA / ANDHRA PRADESH CARDS (7 COLS)
              ========================================================================= */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-3">
              Master Physics.{' '}
              <span className="bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 dark:from-purple-400 dark:via-cyan-400 dark:to-blue-300 bg-clip-text text-transparent">
                Decode the Universe.
              </span>
            </h1>

            {/* Supporting Description Text */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-5 max-w-2xl mx-auto lg:mx-0">
              Master mechanics, electromagnetism, optics, thermodynamics, and modern physics through visual derivations, numerical problem-solving blueprints, interactive simulations, and board model papers designed to score 60/60.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-5">
              {/* Start Learning Button */}
              <button
                onClick={handleStartLearning}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-600/25 hover:shadow-purple-600/35 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Learning Physics</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Explore Practice Button */}
              <button
                onClick={handleExplorePractice}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#DFE7F2] dark:bg-[#131927] hover:bg-[#D4E0ED] dark:hover:bg-[#1A2338] text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base border border-[#BAC9DC] dark:border-[#243048] shadow-xs flex items-center justify-center gap-2.5 transition-all group cursor-pointer hover:border-purple-400 dark:hover:border-purple-500"
              >
                <BookOpen size={18} className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <span>Explore Curriculum</span>
              </button>
            </div>

            {/* TELANGANA + ANDHRA PRADESH CURRICULUM SECTION */}
            <div className="pt-4 border-t border-[#CAD8EA] dark:border-[#1E293B]">
              <div className="flex items-center justify-between mb-2.5 px-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <GraduationCap size={16} className="text-purple-600 dark:text-purple-400" />
                  State Board Physics Curriculums
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-200/80 dark:border-purple-800/80 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  2025–26 Syllabus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto lg:mx-0 text-left">

                {/* Card 1: Telangana */}
                <div
                  onClick={handleExplorePractice}
                  className="relative p-3.5 sm:p-4 rounded-2xl bg-[#DFE7F2] dark:bg-[#111726] border border-[#BAC9DC] dark:border-purple-900/60 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon, State Name & Board Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <GraduationCap size={16} />
                        </div>
                        <div>
                          <span className="text-[10.5px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400 block leading-none">
                            Telangana
                          </span>
                          <h2 className="text-sm font-black text-slate-900 dark:text-white leading-tight mt-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                            Govt. of Telangana
                          </h2>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold text-purple-800 dark:text-purple-200 bg-purple-100 dark:bg-purple-900/60 px-2 py-0.5 rounded-md border border-purple-200 dark:border-purple-700/80 shrink-0">
                        TS BIE
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-2.5">
                      Complete TS Intermediate Physics blueprints, derivation step guides, numerical worksheets & VSAQs/LAQs.
                    </p>
                  </div>

                  {/* Subject Tags & Indicator */}
                  <div className="pt-2 border-t border-[#CAD8EA]/80 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-purple-100/90 dark:bg-purple-900/60 border border-purple-300/80 dark:border-purple-600/70 text-[10.5px] font-extrabold text-purple-800 dark:text-purple-200 shadow-2xs">
                        Junior Inter Physics
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-purple-100/90 dark:bg-purple-900/60 border border-purple-300/80 dark:border-purple-600/70 text-[10.5px] font-extrabold text-purple-800 dark:text-purple-200 shadow-2xs">
                        Senior Inter Physics
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10.5px] font-bold text-purple-700 dark:text-purple-400 pt-0.5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                        TS Board & EAMCET/JEE Ready
                      </span>
                      <span className="flex items-center gap-0.5 text-xs text-purple-600 dark:text-purple-300 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Andhra Pradesh */}
                <div
                  onClick={handleExplorePractice}
                  className="relative p-3.5 sm:p-4 rounded-2xl bg-[#DFE7F2] dark:bg-[#111726] border border-[#BAC9DC] dark:border-cyan-900/60 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon, State Name & Board Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-500 text-white flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <GraduationCap size={16} />
                        </div>
                        <div>
                          <span className="text-[10.5px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block leading-none">
                            Andhra Pradesh
                          </span>
                          <h2 className="text-sm font-black text-slate-900 dark:text-white leading-tight mt-0.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                            Govt. of Andhra Pradesh
                          </h2>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold text-cyan-800 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-900/60 px-2 py-0.5 rounded-md border border-cyan-200 dark:border-cyan-700/80 shrink-0">
                        BIEAP
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-2.5">
                      Targeted AP syllabus modules, 60/60 scoring derivations, practical lab guides & 10-year question banks.
                    </p>
                  </div>

                  {/* Subject Tags & Indicator */}
                  <div className="pt-2 border-t border-[#CAD8EA]/80 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-cyan-100/90 dark:bg-cyan-900/60 border border-cyan-300/80 dark:border-cyan-600/70 text-[10.5px] font-extrabold text-cyan-800 dark:text-cyan-200 shadow-2xs">
                        Junior Inter Physics
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-cyan-100/90 dark:bg-cyan-900/60 border border-cyan-300/80 dark:border-cyan-600/70 text-[10.5px] font-extrabold text-cyan-800 dark:text-cyan-200 shadow-2xs">
                        Senior Inter Physics
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10.5px] font-bold text-cyan-700 dark:text-cyan-400 pt-0.5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                        AP Board Ready
                      </span>
                      <span className="flex items-center gap-0.5 text-xs text-cyan-600 dark:text-cyan-300 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: REALISTIC 3D ANIMATED PHYSICS & SIMULATION BOOK
              ========================================================================= */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-2 select-none">

            {/* FLOATING PHYSICS FORMULAS & SYMBOLS AROUND THE BOOK */}
            <div className="absolute -top-3 left-6 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-mono font-black text-base pointer-events-none animate-float-slow z-30" style={{ color: '#000000' }}>
              ⚡ E = mc²
            </div>

            <div className="absolute top-10 right-4 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-mono font-black text-base pointer-events-none animate-float-reverse z-30" style={{ color: '#000000' }}>
              F = ma
            </div>

            <div className="absolute top-1/4 -left-4 sm:-left-8 px-3 py-1.5 rounded-xl bg-white border border-slate-300 shadow-lg font-mono text-xs font-black pointer-events-none animate-float-slow z-30 backdrop-blur-md hidden sm:flex items-center gap-1.5" style={{ color: '#000000' }}>
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span style={{ color: '#000000' }}>v = u + at</span>
            </div>

            <div className="absolute bottom-12 -right-2 sm:-right-6 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 shadow-lg font-mono text-xs font-black pointer-events-none animate-float-reverse z-30 backdrop-blur-md hidden sm:flex items-center gap-1.5" style={{ color: '#000000' }}>
              <span className="text-cyan-500">⚛</span>
              <span style={{ color: '#000000' }}>λ = h / p</span>
            </div>

            <div className="absolute bottom-2 left-10 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-mono font-black text-sm pointer-events-none animate-float-slow z-30" style={{ color: '#000000' }}>
              ∇ · B = 0
            </div>

            <div className="absolute -top-2 right-1/3 px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-md font-mono font-black text-xs pointer-events-none animate-float-reverse z-30" style={{ color: '#000000' }}>
              60/60 Board Target
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
                className={`absolute left-1/2 -translate-x-1/2 bg-slate-950/30 dark:bg-black/80 blur-2xl rounded-full transition-all duration-700 pointer-events-none ${
                  isBookOpen ? '-bottom-7 w-[92%] h-12' : '-bottom-5 w-[65%] h-8'
                }`}
              ></div>

              {/* Ambient Magical Backglow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 dark:from-purple-600/30 dark:via-cyan-600/30 dark:to-blue-600/30 blur-2xl -z-10"></div>

              {/* ===============================================================
                  REALISTIC PHYSICAL BOOK SPREAD (DUAL PAGES & HARDBACK CASING)
                  =============================================================== */}
              <div
                className="relative rounded-2xl bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#1E1B4B] p-2.5 sm:p-3 shadow-2xl border border-cyan-900/60 transition-all duration-700 transform-gpu"
                style={{
                  transform: isBookOpen
                    ? 'rotateX(8deg) rotateY(0deg)'
                    : 'rotateX(12deg) rotateY(-8deg) scale(0.88)'
                }}
              >

                {/* Real Stacked Gilt Page Edges */}
                <div className="rounded-xl bg-gradient-to-b from-[#FAF5EE] via-[#EFE5D5] to-[#E2D4BF] dark:from-[#212C45] dark:via-[#1B2438] dark:to-[#131A2B] p-[3px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.35),0_5px_15px_rgba(0,0,0,0.2)]">

                  {/* Book Spine Channel & Arch */}
                  <div className="relative grid grid-cols-2 gap-0 bg-[#FCFAF6] dark:bg-[#0F172A] rounded-lg overflow-hidden border border-[#D5CABB] dark:border-[#334155]">

                    {/* Center Spine Crease & Heavy Realistic Shadow */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/25 via-black/45 to-black/25 dark:from-black/60 dark:via-black/90 dark:to-black/60 z-20 pointer-events-none shadow-sm"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-cyan-900/40 dark:bg-cyan-400/40 z-20"></div>

                    {/* Satin Cyan Bookmark Ribbon */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-600 shadow-md z-30 rounded-b-sm">
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#EBF0F7] dark:bg-[#0B0F19] [clip-path:polygon(0_100%,50%_0,100%_100%)]"></div>
                    </div>

                    {/* =========================================================
                        LEFT PAGE: MECHANICS & THERMODYNAMICS
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
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                          Unit I • Mechanics & Waves
                        </span>
                        <span className="text-[9px] font-mono font-bold" style={{ color: '#000000' }}>
                          p. 42
                        </span>
                      </div>

                      {/* Physics Law Highlight Box */}
                      <div className="my-1 p-2 rounded-lg bg-white border border-[#DFD7CA] flex flex-col justify-between shadow-xs">
                        <div className="text-[10.5px] font-bold text-purple-900 mb-1 flex items-center gap-1">
                          <Zap size={12} className="text-purple-700" />
                          <span>Law of Conservation of Energy</span>
                        </div>
                        <div className="text-[10px] font-mono space-y-0.5 text-slate-900">
                          <div><strong>Kinematics:</strong> v² = u² + 2as</div>
                          <div className="text-cyan-900 font-bold"><strong>Total Energy:</strong> K.E + P.E = Constant</div>
                        </div>
                      </div>

                      {/* Rules & Core Equations */}
                      <div className="space-y-1.5 text-[10px] font-mono mt-1" style={{ color: '#000000' }}>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black">Newton II:</span>
                          <span className="font-bold">F = dp / dt = ma</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black">Gravitation:</span>
                          <span className="font-bold">F = G·(m₁m₂)/r²</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black">Carnot Engine:</span>
                          <span className="font-bold">η = 1 - (T₂ / T₁)</span>
                        </div>
                      </div>

                      {/* Left Page Footer */}
                      <div className="pt-2 mt-1 border-t border-[#E8E1D5] flex items-center justify-between text-[9.5px] font-sans" style={{ color: '#000000' }}>
                        <span className="font-semibold" style={{ color: '#000000' }}>Derivation Blueprints</span>
                        <span className="font-black text-emerald-700" style={{ color: '#047857' }}>✓ 100% Proven</span>
                      </div>
                    </div>

                    {/* =========================================================
                        RIGHT PAGE: ELECTROMAGNETISM & OPTICS
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
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                          Unit II • Optics & Quantum
                        </span>
                        <span className="text-[9px] font-mono font-bold" style={{ color: '#000000' }}>
                          p. 43
                        </span>
                      </div>

                      {/* Optics & Ray Diagram Box */}
                      <div className="my-1 p-2 rounded-lg bg-white border border-[#DFD7CA] shadow-xs">
                        <div className="text-[10px] font-mono text-slate-800 leading-snug">
                          <strong>Lens Formula:</strong> 1/f = 1/v - 1/u<br />
                          <strong>Snell's Law:</strong> n₁ sin θ₁ = n₂ sin θ₂
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[9px] font-mono text-cyan-800 font-bold border-t border-slate-100 pt-1">
                          <span>Photoelectric: E = hν - Φ</span>
                          <span>Bohr Radius: r ∝ n²</span>
                        </div>
                      </div>

                      {/* Modern Physics & Formulas */}
                      <div className="space-y-1.5 text-[10px] font-mono mt-1" style={{ color: '#000000' }}>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black">Gauss Law:</span>
                          <span className="font-bold">∮ E · dA = q / ε₀</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black">AC Circuits:</span>
                          <span className="font-bold">Z = √(R² + (X_L - X_C)²)</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#F1E8DB] px-2 border border-[#E3DBD0]" style={{ color: '#000000' }}>
                          <span className="font-black">Semiconductors:</span>
                          <span className="font-bold">p-n Junction & Logic Gates</span>
                        </div>
                      </div>

                      {/* Right Page Footer */}
                      <div className="pt-2 mt-1 border-t border-[#E8E1D5] flex items-center justify-between text-[9.5px] font-sans" style={{ color: '#000000' }}>
                        <span className="font-semibold" style={{ color: '#000000' }}>Target: 60/60 Board Score</span>
                        <span className="font-black text-cyan-700" style={{ color: '#0891B2' }}>● Mastered</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ===============================================================
                    REALISTIC 3D FLIPPING FRONT COVER (PHYSICAL BOOK COVER)
                    =============================================================== */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#022c3b] p-6 shadow-2xl border-2 border-cyan-500/50 flex flex-col justify-between text-white transition-transform duration-1000 ease-in-out origin-left z-40 backface-hidden"
                  style={{
                    transform: isBookOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                    pointerEvents: isBookOpen ? 'none' : 'auto'
                  }}
                >
                  {/* Spine Ribbed Border on Left Edge */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/60 via-black/25 to-transparent rounded-l-2xl border-r border-cyan-500/40"></div>

                  {/* Cyan Embossed Corner Ornaments */}
                  <div className="absolute top-3 left-10 w-6 h-6 border-t-2 border-l-2 border-cyan-400/80"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400/80"></div>
                  <div className="absolute bottom-3 left-10 w-6 h-6 border-b-2 border-l-2 border-cyan-400/80"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400/80"></div>

                  {/* Top Cover Text */}
                  <div className="pl-6 text-center">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-cyan-300 font-bold font-mono">
                      State Board & Competitive Physics
                    </span>
                  </div>

                  {/* Center Emblem & Cyan Foil Typography */}
                  <div className="pl-6 text-center my-auto">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-cyan-500/25 via-cyan-400/35 to-purple-500/20 border border-cyan-400/70 flex items-center justify-center mb-3 shadow-lg shadow-cyan-500/20">
                      <Atom className="w-9 h-9 text-cyan-300 animate-spin-slow" />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif uppercase leading-tight drop-shadow-md">
                      PHYSICS
                    </h2>
                    <p className="text-xs text-cyan-200/90 font-medium mt-1">
                      Complete Mechanics, Electromagnetism, Optics & Derivations
                    </p>
                  </div>

                  {/* Bottom Cover Edition */}
                  <div className="pl-6 text-center pt-3 border-t border-cyan-500/30 text-[11px] text-cyan-200">
                    <span>Maths & Physics Learning Academy</span>
                  </div>
                </div>

              </div>

              {/* SMOOTH INTERACTIVE TOGGLE BUTTON */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors">
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
