import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function ChemistryRoadmapsGrid({ onSelectPlan }) {
  const plans = [
    {
      id: '1-day',
      level: 'INTERMEDIATE',
      levelColor: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40',
      expectedScore: '40-45 / 60',
      title: '1 Day Chemistry Sprint',
      desc: 'High-yield revision covering named organic reactions, essential gas laws, and predictable 8-mark questions.',
      stats: { modules: 8, tests: 6, pdfs: 10, videos: 8 },
      duration: 1
    },
    {
      id: '3-days',
      level: 'INTERMEDIATE',
      levelColor: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40',
      expectedScore: '48-52 / 60',
      title: '3 Days Chemistry Mastery',
      desc: 'Solutions, electrochemistry, chemical bonding, organic conversion flowcharts, and high-frequency numericals.',
      stats: { modules: 12, tests: 10, pdfs: 14, videos: 12 },
      duration: 3
    },
    {
      id: '5-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40',
      expectedScore: '54-57 / 60',
      title: '5 Days Chemistry Intensive',
      desc: 'Full review of Physical, Inorganic, and Organic syllabi, previous 5-year board papers, and reaction recall drills.',
      stats: { modules: 15, tests: 14, pdfs: 20, videos: 18 },
      duration: 5
    },
    {
      id: '7-days',
      level: 'HARD',
      levelColor: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40',
      expectedScore: '58+ / 60',
      title: '7 Days Chemistry Dominance',
      desc: 'Complete syllabus revision, coordination compound rules, organic mechanisms, and model board mock tests.',
      stats: { modules: 20, tests: 18, pdfs: 25, videos: 22 },
      duration: 7
    },
    {
      id: '15-days',
      level: 'ADVANCED',
      levelColor: 'text-teal-500 bg-teal-50 dark:bg-teal-950/40',
      expectedScore: '60/60 Full Marks',
      title: '15 Days Chemistry Topper Blueprint',
      desc: 'Exhaustive textbook mastery, every reaction variation, 10-year previous questions, and 1-on-1 doubt clearing.',
      stats: { modules: 25, tests: 22, pdfs: 30, videos: 28 },
      duration: 15
    },
    {
      id: 'full',
      level: 'TOPPER BLUEPRINT',
      levelColor: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40',
      expectedScore: '60/60 + NEET/JEE Rank',
      title: 'Complete Academic Year Track',
      desc: 'End-to-end chemistry preparation covering board examination dominance and entrance competitive ranks.',
      stats: { modules: 40, tests: 35, pdfs: 50, videos: 45 },
      duration: 30
    }
  ];

  return (
    <section id="roadmaps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          Chemistry Revision Roadmaps
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
          Select a roadmap tailored to your timeline to secure 60/60 board marks and entrance rank confidence.
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
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
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
              <div><span className="block font-black text-emerald-600 dark:text-emerald-400">{plan.stats.modules}</span>Mods</div>
              <div><span className="block font-black text-emerald-600 dark:text-emerald-400">{plan.stats.tests}</span>Tests</div>
              <div><span className="block font-black text-emerald-600 dark:text-emerald-400">{plan.stats.pdfs}</span>Notes</div>
              <div><span className="block font-black text-emerald-600 dark:text-emerald-400">{plan.stats.videos}</span>Vids</div>
            </div>

            <button 
              onClick={() => onSelectPlan && onSelectPlan(plan)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
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
