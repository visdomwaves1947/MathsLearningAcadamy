import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function PhysicsRoadmapsGrid({ onSelectPlan }) {
  const plans = [
    {
      id: '1-day',
      level: 'INTERMEDIATE',
      levelColor: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40',
      expectedScore: '40-45 / 60',
      title: '1 Day Physics Sprint',
      desc: 'Rapid revision covering essential 8-mark derivations, high-yield formulas, and crucial VSAQ questions.',
      stats: { modules: 8, tests: 6, pdfs: 10, videos: 8 },
      duration: 1
    },
    {
      id: '3-days',
      level: 'INTERMEDIATE',
      levelColor: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40',
      expectedScore: '48-52 / 60',
      title: '3 Days Physics Mastery',
      desc: 'Ray optics, current electricity, laws of motion, derivation step blueprints, and numerical workouts.',
      stats: { modules: 12, tests: 10, pdfs: 14, videos: 12 },
      duration: 3
    },
    {
      id: '5-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40',
      expectedScore: '54-57 / 60',
      title: '5 Days Physics Intensive',
      desc: 'In-depth review of both 1st & 2nd year syllabi, previous 5-year board papers, and error elimination.',
      stats: { modules: 15, tests: 14, pdfs: 20, videos: 18 },
      duration: 5
    },
    {
      id: '7-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40',
      expectedScore: '58+ / 60',
      title: '7 Days Physics Dominance',
      desc: 'Complete syllabus deep dive, formula derivations, timed mock tests, and examiner scoring secrets.',
      stats: { modules: 20, tests: 18, pdfs: 25, videos: 22 },
      duration: 7
    },
    {
      id: '15-days',
      level: 'ADVANCED',
      levelColor: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40',
      expectedScore: '60/60 Full Marks',
      title: '15 Days Physics Topper Blueprint',
      desc: 'Full textbook mastery, all numerical variations, 10-year previous questions, and 1-on-1 doubt solving.',
      stats: { modules: 25, tests: 22, pdfs: 30, videos: 28 },
      duration: 15
    },
    {
      id: 'full',
      level: 'TOPPER BLUEPRINT',
      levelColor: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40',
      expectedScore: '60/60 + JEE/NEET Rank',
      title: 'Complete Academic Year Track',
      desc: 'Comprehensive end-to-end physics coaching covering board examinations and entrance rank preparation.',
      stats: { modules: 40, tests: 35, pdfs: 50, videos: 45 },
      duration: 30
    }
  ];

  return (
    <section id="roadmaps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          Physics Revision Roadmaps
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
          Choose a tailored study plan designed to match your timeline and target board score.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${plan.levelColor}`}>
                {plan.level}
              </span>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                <ShieldCheck size={14} /> {plan.expectedScore}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {plan.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1 leading-relaxed">
              {plan.desc}
            </p>

            <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 mb-6 text-center text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div><span className="block font-black text-blue-600 dark:text-blue-400">{plan.stats.modules}</span>Mods</div>
              <div><span className="block font-black text-blue-600 dark:text-blue-400">{plan.stats.tests}</span>Tests</div>
              <div><span className="block font-black text-blue-600 dark:text-blue-400">{plan.stats.pdfs}</span>Notes</div>
              <div><span className="block font-black text-blue-600 dark:text-blue-400">{plan.stats.videos}</span>Vids</div>
            </div>

            <button 
              onClick={() => onSelectPlan && onSelectPlan(plan)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Select Roadmap</span>
              <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
