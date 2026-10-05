import React from 'react';
import { Target, TrendingUp, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function ExamPlannerCTA({ onOpenPlanner }) {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 dark:bg-[#0B0F19]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwb2x5Z29uIHBvaW50cz0iMCwwIDQwLDAgNDAsNDAgMCw0MCIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold uppercase tracking-wider mb-6">
              <Sparkles size={16} />
              Introducing Smart Exam Planner
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Plan Your Preparation.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Predict Your Progress.
              </span><br/>
              Improve Your Score.
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Tell us how much time you have, what you already know, and your target score. We'll build a personalized Mathematics preparation plan that adapts to you.
            </p>
            
            <button 
              onClick={onOpenPlanner}
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Launch Smart Exam Planner
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right Column - Visual Preview */}
          <div className="relative">
            {/* Main glass card */}
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-slate-400 text-sm font-semibold mb-1">Projected Score Range</p>
                  <div className="text-4xl font-black text-white">78<span className="text-slate-400 text-2xl font-bold">%</span> <span className="text-slate-500 text-3xl font-medium">–</span> 86<span className="text-slate-400 text-2xl font-bold">%</span></div>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm font-semibold mb-1">Target Gap</p>
                  <div className="inline-flex items-center gap-1 text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-lg">
                    <TrendingUp size={16} />
                    +24%
                  </div>
                </div>
              </div>
              
              {/* Fake progress UI */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-300">Current Preparation</span>
                    <span className="text-indigo-400">61%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[61%] rounded-full relative">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Calendar size={18} />
                      </div>
                      <span className="text-slate-300 font-medium">Days Left</span>
                    </div>
                    <div className="text-2xl font-bold text-white">15</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Target size={18} />
                      </div>
                      <span className="text-slate-300 font-medium">Daily Goal</span>
                    </div>
                    <div className="text-2xl font-bold text-white">4 <span className="text-base text-slate-400 font-medium">hrs</span></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 rounded-2xl p-4 shadow-xl border border-indigo-400 rotate-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div className="text-white font-bold">Personalized Blueprint Ready</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
