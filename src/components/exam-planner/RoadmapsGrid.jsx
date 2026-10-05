import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function RoadmapsGrid({ onSelectPlan }) {
  const plans = [
    {
      id: '1-day',
      level: 'INTERMEDIATE',
      levelColor: 'text-indigo-500 bg-indigo-50',
      expectedScore: '70-80 Marks',
      title: '1 Day Prep',
      desc: 'Comprehensive crash course covering textbook chapters and key practice papers.',
      stats: { modules: 10, tests: 8, pdfs: 10, videos: 10 },
      duration: 1
    },
    {
      id: '3-days',
      level: 'INTERMEDIATE',
      levelColor: 'text-indigo-500 bg-indigo-50',
      expectedScore: '80-85 Marks',
      title: '3 Days Prep',
      desc: 'Algebra masterclasses, geometry sandbox exercises, and extensive mock trials.',
      stats: { modules: 12, tests: 12, pdfs: 15, videos: 15 },
      duration: 3
    },
    {
      id: '5-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50',
      expectedScore: '90+ Marks',
      title: '5 Days Prep',
      desc: 'Step-by-step masterclass covering every unit, complex splits, and timed mock trials.',
      stats: { modules: 15, tests: 15, pdfs: 20, videos: 20 },
      duration: 5
    },
    {
      id: '7-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50',
      expectedScore: '95+ Marks',
      title: '7 Days Prep',
      desc: 'Step-by-step masterclass covering every unit, theorems, and timed mock trials.',
      stats: { modules: 20, tests: 20, pdfs: 25, videos: 25 },
      duration: 7
    },
    {
      id: '15-days',
      level: 'ADVANCED',
      levelColor: 'text-violet-500 bg-violet-50',
      expectedScore: '98+ Marks',
      title: '15 Days Prep',
      desc: 'Deep-dive study path with mock tests, active recall revision, and detailed concepts.',
      stats: { modules: 25, tests: 25, pdfs: 30, videos: 30 },
      duration: 15
    },
    {
      id: 'full',
      level: 'TOPPER BLUEPRINT',
      levelColor: 'text-rose-500 bg-rose-50',
      expectedScore: '99+/100 Marks',
      title: 'Full Preparation Prep',
      desc: 'Deep active recall, detailed worksheets, 5+ timed mock exams, topper tricks for 100%.',
      stats: { modules: 30, tests: 30, pdfs: 40, videos: 40 },
      duration: 30
    }
  ];

  return (
    <div className="min-h-full bg-[#F8FAFC] dark:bg-[#0B0F19] p-6 sm:p-10 animate-in fade-in duration-500">
      
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Select Your Preparation Roadmap</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Choose a carefully curated preparation plan based on the time you have available before your exam.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className="bg-white dark:bg-[#131927] rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full group"
          >
            {/* Level Pill */}
            <div className={`self-start px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 ${plan.levelColor}`}>
              {plan.level}
            </div>

            {/* Expected Score Box */}
            <div className="bg-[#F0FDF4] dark:bg-emerald-900/10 rounded-2xl p-4 mb-5 border border-emerald-100 dark:border-emerald-800/30">
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Expected Score</div>
              <div className="text-xl sm:text-2xl font-black text-[#0369A1] dark:text-blue-400">{plan.expectedScore}</div>
            </div>

            {/* Title & Desc */}
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">{plan.title}</h3>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
              {plan.desc}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8">
              <div className="text-center">
                <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{plan.stats.modules} Modules</span>
              </div>
              <div className="text-center">
                <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{plan.stats.tests} Tests</span>
              </div>
              <div className="col-span-2 h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
              <div className="text-center">
                <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{plan.stats.pdfs} PDFs</span>
              </div>
              <div className="text-center">
                <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{plan.stats.videos} Videos</span>
              </div>
            </div>

            {/* Action Button */}
            <button 
              onClick={() => onSelectPlan({ duration: plan.duration, title: plan.title, expectedScore: plan.expectedScore })}
              className="mt-auto w-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:from-[#0891B2] hover:to-[#2563EB] text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02]"
            >
              Simulate Roadmap <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* 100% Refund Guarantee Section */}
      <div className="max-w-5xl mx-auto mt-20 mb-10 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-900/20 border border-cyan-100 dark:border-cyan-900/30 rounded-[2rem] p-8 sm:p-12 shadow-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="shrink-0 w-20 h-20 rounded-full bg-[#06B6D4] flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
              <ShieldCheck size={40} strokeWidth={2.5} />
            </div>
            
            <div className="flex-1">
              <div className="text-[11px] font-black tracking-widest text-cyan-600 dark:text-cyan-400 uppercase mb-2">
                Trusted Protection
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4">
                100% Refund Guarantee
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                At Visdom, we believe in our learning system. If you complete your course by following our recommended learning plan, attending all lessons, practicing consistently, taking the required mock tests and quizzes, and adhering to our learning guidelines - but still don't see the expected improvement in your board exam scores - we'll refund 100% of your subscription fee.
              </p>
              
              <div className="bg-white/60 dark:bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-white/50 dark:border-slate-800/50 backdrop-blur-sm mb-6">
                <h4 className="text-xs font-bold text-cyan-800 dark:text-cyan-300 uppercase tracking-widest mb-5">
                  Selected Learning Path Requirements:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                    Finish all video lessons
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                    Download & study all notes
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                    Read the cheat sheets
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                    Complete at least 3 mock tests
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                    Attempt practice quizzes
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                    Follow the revision planner
                  </div>
                </div>
              </div>
              
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic mb-6">
                If your board marks do not improve after sincerely completing the course, we will refund 100% of your course fee.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-[#06B6D4] hover:bg-[#0891B2] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg shadow-cyan-500/20">
                  View Refund Policy
                </button>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  *Terms & Conditions Apply
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
