import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function PhysicsRoadmapsGrid({ onSelectPlan }) {
  const plans = [
    {
      id: '1-day',
      level: 'INTERMEDIATE',
      levelColor: 'text-purple-500 bg-purple-50',
      expectedScore: '40-45 Marks (Out of 60)',
      title: '1 Day Crash Prep',
      desc: 'High-yield crash course covering top 8-mark derivations (Carnot Engine, Simple Pendulum, Wave Optics) and formula sheets.',
      stats: { modules: 8, tests: 6, pdfs: 12, videos: 8 },
      duration: 1
    },
    {
      id: '3-days',
      level: 'INTERMEDIATE',
      levelColor: 'text-purple-500 bg-purple-50',
      expectedScore: '48-52 Marks (Out of 60)',
      title: '3 Days Fast Track',
      desc: 'Ray optics derivations, electric potential problems, laws of motion shortcuts, and high-frequency 4-mark VSAQ drill.',
      stats: { modules: 12, tests: 10, pdfs: 16, videos: 14 },
      duration: 3
    },
    {
      id: '5-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50',
      expectedScore: '52-56 Marks (Out of 60)',
      title: '5 Days Mastery',
      desc: 'Step-by-step masterclass covering mechanics, electrostatics, modern physics, circuit diagrams, and timed mock tests.',
      stats: { modules: 16, tests: 14, pdfs: 22, videos: 18 },
      duration: 5
    },
    {
      id: '7-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50',
      expectedScore: '56-58 Marks (Out of 60)',
      title: '7 Days Score Booster',
      desc: 'Complete syllabus revision, previous 10-year model paper analysis, active recall notes, and numerical workout sessions.',
      stats: { modules: 20, tests: 18, pdfs: 28, videos: 24 },
      duration: 7
    },
    {
      id: '15-days',
      level: 'ADVANCED',
      levelColor: 'text-cyan-500 bg-cyan-50',
      expectedScore: '58-60 Marks (Out of 60)',
      title: '15 Days Deep Dive',
      desc: 'Comprehensive study path with concept simulations, HC Verma numerical labs, personal derivation audits, and feedback.',
      stats: { modules: 26, tests: 24, pdfs: 35, videos: 30 },
      duration: 15
    },
    {
      id: 'full',
      level: 'TOPPER BLUEPRINT',
      levelColor: 'text-rose-500 bg-rose-50',
      expectedScore: '60/60 Centum Blueprint',
      title: 'Full 60/60 Preparation',
      desc: 'Flawless derivation presentation templates, 10+ timed board mock exams, JEE/NEET integration, and 60/60 scoring secrets.',
      stats: { modules: 32, tests: 30, pdfs: 45, videos: 40 },
      duration: 30
    }
  ];

  return (
    <div className="min-h-full bg-[#F8FAFC] dark:bg-[#0B0F19] p-6 sm:p-10 animate-in fade-in duration-500" id="roadmaps">
      
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Select Your Physics Preparation Roadmap</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Choose a carefully curated preparation plan based on the time you have available before your board or competitive exam.</p>
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
              onClick={() => onSelectPlan && onSelectPlan({ duration: plan.duration, title: plan.title, expectedScore: plan.expectedScore, subject: 'Physics' })}
              className="mt-auto w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02]"
            >
              Simulate Roadmap <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* 100% Refund Guarantee Section */}
      <div className="max-w-5xl mx-auto mt-20 mb-10 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-900/20 border border-purple-100 dark:border-purple-900/30 rounded-[2rem] p-8 sm:p-12 shadow-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="shrink-0 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
              <ShieldCheck size={40} strokeWidth={2.5} />
            </div>
            
            <div className="flex-1">
              <div className="text-[11px] font-black tracking-widest text-purple-700 dark:text-purple-400 uppercase mb-2">
                Trusted Protection
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4">
                100% Refund Guarantee
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                At Maths & Physics Learning Academy, we believe in our proven visual physics coaching and derivation mastery system. If you complete your course by following our recommended learning plan, attending all lessons, practicing numerical sheets, completing the mock tests, and adhering to our guidelines - but still don't see the expected improvement in your board or competitive exam scores - we'll refund 100% of your subscription fee.
              </p>
              
              <div className="bg-white/60 dark:bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-white/50 dark:border-slate-800/50 backdrop-blur-sm mb-6">
                <h4 className="text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-widest mb-5">
                  Selected Learning Path Requirements:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    Finish all video lessons & derivation walkthroughs
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    Download & study all formula sheets and 8-mark derivation notes
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    Practice the chapter-wise numerical problem sets
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    Complete at least 3 timed 60-mark board mock exams
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    Attempt ray diagram & circuit diagram quizzes
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    Follow the daily revision and VSAQ retention planner
                  </div>
                </div>
              </div>
              
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic mb-6">
                If your board marks do not improve after sincerely completing the course, we will refund 100% of your course fee.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg shadow-purple-500/20">
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
