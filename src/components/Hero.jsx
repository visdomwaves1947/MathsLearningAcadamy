import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Star, 
  Compass
} from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenVideoDemo }) {
  // Interactive Hero Widget State: Visual Pythagorean Theorem Interactive Widget
  const [sideA, setSideA] = useState(3);
  const [sideB, setSideB] = useState(4);
  const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB).toFixed(2);
  const angleDeg = (Math.atan2(sideB, sideA) * (180 / Math.PI)).toFixed(1);

  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-math-grid bg-radial-glow bg-[#EBF0F7]">
      {/* Ambient glowing orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      {/* Floating Math Symbols */}
      <div className="absolute top-16 left-8 text-4xl text-indigo-900/10 font-mono font-bold select-none pointer-events-none hidden md:block animate-float-slow">
        ∫ e^x dx
      </div>
      <div className="absolute top-48 right-12 text-5xl text-purple-900/10 font-mono font-bold select-none pointer-events-none hidden md:block animate-float-reverse">
        ∑ n²
      </div>
      <div className="absolute bottom-24 left-16 text-4xl text-sky-900/10 font-mono font-bold select-none pointer-events-none hidden md:block animate-float-slow">
        e^(iπ) + 1 = 0
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Trust */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span>Rated #1 Online Math Learning Platform</span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-700 flex items-center gap-1 font-bold">
                <Star size={13} className="fill-amber-500 text-amber-500" /> 4.95 / 5
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
              Where Math Stops Being Hard and Starts Making{' '}
              <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-sky-700 bg-clip-text text-transparent underline decoration-indigo-300 decoration-wavy decoration-2">
                Sense.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Personalized 1-on-1 tutoring, visual conceptual learning, and competitive Olympiad mastery for grades 1–12 & University. We transform math anxiety into rock-solid confidence.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-base shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Free Diagnostic Class</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideoDemo}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#DFE7F2] hover:bg-[#D4E0ED] text-slate-800 font-semibold text-base border border-[#BAC9DC] shadow-xs flex items-center justify-center gap-2.5 transition-all group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="fill-indigo-700 ml-0.5" />
                </div>
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Quick Micro-Proofs */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#CBD5E1] max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono flex items-center">
                  98.4%
                </div>
                <div className="text-xs text-slate-600 font-medium">Grade Improvement</div>
              </div>
              <div className="border-l border-[#CBD5E1] pl-3">
                <div className="text-xl sm:text-2xl font-black text-indigo-700 font-mono flex items-center">
                  150+
                </div>
                <div className="text-xs text-slate-600 font-medium">Olympiad & Ivy Mentors</div>
              </div>
              <div className="border-l border-[#CBD5E1] pl-3">
                <div className="text-xl sm:text-2xl font-black text-purple-700 font-mono flex items-center">
                  50k+
                </div>
                <div className="text-xs text-slate-600 font-medium">Students Enrolled</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Math Visualizer Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-300/40 via-purple-300/40 to-sky-300/40 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-sky-500/20 blur-xl"></div>
              
              {/* Glass Card in Soft Mist Theme (No Stark White) */}
              <div className="relative rounded-2xl bg-[#DFE7F2]/90 dark:bg-[#131927]/95 border border-[#BAC9DC] dark:border-[#243048] p-6 shadow-xl backdrop-blur-xl">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#CAD8EA] dark:border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-300 ml-2">Visual Theorem Lab</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/70">
                    Live Demo
                  </span>
                </div>

                {/* Subtitle inside card */}
                <div className="mt-4 flex items-center justify-between">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Compass size={16} className="text-indigo-700 dark:text-indigo-400" />
                    Pythagorean Theorem: a² + b² = c²
                  </h2>
                  <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 font-bold bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/70">
                    c = {hypotenuse}
                  </span>
                </div>

                {/* Triangle SVG Canvas */}
                <div className="my-5 bg-[#D2DFEE] dark:bg-[#0D121F] rounded-xl p-4 border border-[#B8CADF] dark:border-[#243048] flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-600 dark:text-slate-400 font-semibold">
                    θ = {angleDeg}°
                  </div>
                  
                  <svg viewBox="0 0 280 180" className="w-full max-w-[260px] h-[160px]">
                    <defs>
                      <linearGradient id="triGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#9333EA" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    
                    {(() => {
                      const scale = 14;
                      const ox = 45;
                      const oy = 145;
                      const px = ox + sideA * scale;
                      const py = oy;
                      const qx = px;
                      const qy = oy - sideB * scale;

                      return (
                        <>
                          {/* Triangle Area */}
                          <polygon
                            points={`${ox},${oy} ${px},${py} ${qx},${qy}`}
                            fill="url(#triGradLight)"
                            stroke="#4338CA"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                          />
                          {/* Right angle marker */}
                          <rect
                            x={px - 14}
                            y={oy - 14}
                            width="14"
                            height="14"
                            fill="none"
                            stroke="#475569"
                            strokeWidth="1.5"
                          />
                          {/* Base side A label */}
                          <text
                            x={(ox + px) / 2}
                            y={oy + 18}
                            fill="#0284C7"
                            fontSize="13"
                            fontWeight="bold"
                            textAnchor="middle"
                            fontFamily="monospace"
                          >
                            a = {sideA}
                          </text>
                          {/* Height side B label */}
                          <text
                            x={px + 22}
                            y={(oy + qy) / 2 + 4}
                            fill="#F43F5E"
                            fontSize="13"
                            fontWeight="bold"
                            textAnchor="middle"
                            fontFamily="monospace"
                          >
                            b = {sideB}
                          </text>
                          {/* Hypotenuse C label */}
                          <text
                            x={(ox + qx) / 2 - 16}
                            y={(oy + qy) / 2 - 8}
                            fill="#10B981"
                            fontSize="13"
                            fontWeight="bold"
                            textAnchor="middle"
                            fontFamily="monospace"
                          >
                            c ≈ {hypotenuse}
                          </text>
                        </>
                      );
                    })()}
                  </svg>
                </div>

                {/* Sliders to manipulate math parameters */}
                <div className="space-y-3 bg-[#D2DFEE] dark:bg-[#0D121F] p-3.5 rounded-xl border border-[#B8CADF] dark:border-[#243048]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Base (a):
                    </span>
                    <span className="font-mono font-bold text-sky-700 dark:text-sky-400">{sideA} units</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="1"
                    value={sideA}
                    onChange={(e) => setSideA(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-1.5 bg-[#B8C8DB] dark:bg-slate-700 rounded-lg cursor-pointer"
                  />

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Height (b):
                    </span>
                    <span className="font-mono font-bold text-rose-700 dark:text-rose-400">{sideB} units</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    step="1"
                    value={sideB}
                    onChange={(e) => setSideB(Number(e.target.value))}
                    className="w-full accent-purple-600 h-1.5 bg-[#B8C8DB] dark:bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Formula Breakdown pill */}
                <div className="mt-3.5 p-3 rounded-lg bg-indigo-100/90 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/70 text-xs font-mono text-indigo-950 dark:text-indigo-200 flex items-center justify-between">
                  <span>√({sideA}² + {sideB}²) = √({sideA * sideA + sideB * sideB})</span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-400">={hypotenuse}</span>
                </div>

                {/* Live Floating Tutor Card */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#CAD8EA] dark:border-[#1E293B] text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/70 flex items-center justify-center text-emerald-800 dark:text-emerald-400 font-bold text-[11px]">
                      ✓
                    </div>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Live 1-on-1 Concept Visualizer</span>
                  </div>
                  <span className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 font-bold hover:underline cursor-pointer" onClick={onOpenBooking}>
                    Try with Tutor →
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}