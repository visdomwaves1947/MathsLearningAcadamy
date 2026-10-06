import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Calculator, 
  BrainCircuit, 
  CheckCircle2, 
  ArrowLeft,
  Laptop,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DemoPage({ onOpenBooking, onOpenVideoDemo }) {
  const [activeTab, setActiveTab] = useState('algebra');
  const [interactiveVal, setInteractiveVal] = useState(3);

  const demoFeatures = [
    {
      title: 'Interactive 3D Geometry & Graphs',
      desc: 'Real-time curve visualizer for Intermediate 1A & 1B coordinate geometry and calculus.',
      icon: Layers,
      badge: 'Visual Math'
    },
    {
      title: 'Step-by-Step State Board Solutions',
      desc: 'Full AP & TS BIE blueprint solutions with step marks and examiner hints.',
      icon: GraduationCap,
      badge: 'BIE Ready'
    },
    {
      title: 'Adaptive Mock Test Simulator',
      desc: 'Smart timer, negative marking simulation for EAMCET, JEE Mains and Olympiads.',
      icon: BrainCircuit,
      badge: 'Test Engine'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-[#EBF0F7] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Background Math Grid Pattern & Glows */}
      <div className="absolute inset-0 bg-math-grid opacity-70 dark:opacity-40 pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/35 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-purple-300/30 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Hero Section: Displaying "Demo" */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Navigation helper */}
          <div className="flex items-center gap-2 mb-6 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link 
              to="/mymarks/maths" 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Maths Academy
            </Link>
            <span>/</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Demo Page</span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            {/* Live Demo Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-bold shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Visdom Waves Live Demo</span>
              <Sparkles size={14} className="text-indigo-500" />
            </div>

            {/* Display "Demo" Prominently on Hero Section */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Demo
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Experience the interactive learning environment, real-time formula simulations, and smart question practice.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <button
                onClick={() => onOpenVideoDemo && onOpenVideoDemo()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-base shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Play size={18} fill="currentColor" />
                <span>Watch Video Demo</span>
              </button>

              <button
                onClick={() => onOpenBooking && onOpenBooking('Demo Session')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#DFE7F2] dark:bg-[#131927] hover:bg-[#D4E0ED] dark:hover:bg-[#1A2338] text-slate-800 dark:text-slate-200 font-semibold text-base border border-[#BAC9DC] dark:border-[#243048] shadow-xs flex items-center justify-center gap-2 transition-all hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer"
              >
                <Laptop size={18} className="text-indigo-600 dark:text-indigo-400" />
                <span>Book 1-on-1 Live Demo</span>
              </button>
            </div>
          </div>

          {/* Interactive Demo Showcase Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Interactive Simulator
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  Live Function Playground Demo
                </h3>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl">
                {['algebra', 'calculus', 'matrices'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                      activeTab === tab 
                        ? 'bg-indigo-600 text-white shadow-xs' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Slider & Result */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Adjust Variable <code className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">x = {interactiveVal}</code>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={interactiveVal} 
                  onChange={(e) => setInteractiveVal(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Formula Computed:</div>
                  <div className="font-mono text-base font-bold text-indigo-600 dark:text-indigo-300">
                    {activeTab === 'algebra' && `f(${interactiveVal}) = ${interactiveVal}² + 4(${interactiveVal}) + 4 = ${interactiveVal * interactiveVal + 4 * interactiveVal + 4}`}
                    {activeTab === 'calculus' && `d/dx [x³] at x=${interactiveVal} => 3(${interactiveVal})² = ${3 * interactiveVal * interactiveVal}`}
                    {activeTab === 'matrices' && `Determinant |A| with scalar λ=${interactiveVal} => det = ${interactiveVal * 7 - 2}`}
                  </div>
                </div>
              </div>

              {/* Graphical Preview Card */}
              <div className="h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-950 text-white p-5 flex flex-col justify-between border border-indigo-800/40 relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                    <Calculator size={14} /> Instant Graph Engine
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    60 FPS
                  </span>
                </div>
                
                {/* Visual bar graph representation based on slider */}
                <div className="flex items-end gap-2 h-20 z-10">
                  {[1, 2, 3, 4, 5, 6, 7].map((bar) => {
                    const heightPercent = Math.min(100, Math.max(15, (bar * interactiveVal * 8) % 100));
                    return (
                      <div 
                        key={bar}
                        style={{ height: `${heightPercent}%` }}
                        className="flex-1 bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-t-sm transition-all duration-300"
                      />
                    );
                  })}
                </div>

                <div className="text-[11px] text-slate-400 z-10 flex items-center justify-between">
                  <span>Dynamic Polynomial Curve</span>
                  <span className="text-cyan-400 font-mono">λ = {interactiveVal}.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Quick Demo Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {demoFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {feat.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
