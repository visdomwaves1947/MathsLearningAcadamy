import React from 'react';
import { ArrowRight, BookOpen, Clock, CheckCircle2, Award, Compass } from 'lucide-react';

export default function LearningPaths({ onOpenBooking }) {
  const paths = [
    {
      id: 'class-6-8',
      levelBadge: 'CLASS 6–8',
      title: 'Build Your Foundation',
      subtitle: 'Master key fundamentals to stay ahead in school and competitive talent exams.',
      topics: ['Arithmetic', 'Fractions', 'Algebra Basics', 'Geometry'],
      chapters: 24,
      lessons: 120,
      progressTarget: 'Foundation Mastery: 95%',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
      accentGradient: 'from-emerald-500 to-teal-600',
      svgVisual: (
        <svg viewBox="0 0 200 100" className="w-full h-24">
          <rect x="20" y="20" width="40" height="40" rx="8" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2" />
          <circle cx="120" cy="40" r="22" fill="#0D9488" fillOpacity="0.2" stroke="#0D9488" strokeWidth="2" />
          <line x1="20" y1="80" x2="180" y2="80" stroke="#10B981" strokeWidth="3" strokeDasharray="6 4" />
          <text x="40" y="45" fill="#047857" fontSize="14" fontWeight="bold" fontFamily="monospace">x+3</text>
          <text x="110" y="45" fill="#0F766E" fontSize="14" fontWeight="bold" fontFamily="monospace">πr²</text>
        </svg>
      )
    },
    {
      id: 'class-9-10',
      levelBadge: 'CLASS 9–10',
      title: 'Board Exam Preparation',
      subtitle: 'Rigorous conceptual mastery for Class 10 Board Exams & Olympiad readiness.',
      topics: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics'],
      chapters: 32,
      lessons: 160,
      progressTarget: 'Board Target: 100/100',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
      accentGradient: 'from-indigo-600 to-blue-600',
      svgVisual: (
        <svg viewBox="0 0 200 100" className="w-full h-24">
          <polygon points="30,80 160,80 160,20" fill="#4F46E5" fillOpacity="0.15" stroke="#4F46E5" strokeWidth="2.5" />
          <path d="M 50,80 A 20,20 0 0,0 47,70" fill="none" stroke="#6366F1" strokeWidth="2" />
          <text x="58" y="76" fill="#4338CA" fontSize="12" fontWeight="bold" fontFamily="monospace">θ</text>
          <text x="90" y="95" fill="#3730A3" fontSize="12" fontWeight="bold" fontFamily="monospace">cos(θ)</text>
          <text x="168" y="55" fill="#3730A3" fontSize="12" fontWeight="bold" fontFamily="monospace">sin(θ)</text>
        </svg>
      )
    },
    {
      id: 'class-11-12',
      levelBadge: 'CLASS 11–12',
      title: 'Advanced Mathematics',
      subtitle: 'Deep calculus, vector geometry, and probability for senior secondary excellence.',
      topics: ['Calculus', 'Probability', 'Vectors', 'Coordinate Geometry'],
      chapters: 40,
      lessons: 200,
      progressTarget: 'JEE Main & Advanced Level',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-300 dark:border-purple-800',
      accentGradient: 'from-purple-600 to-indigo-700',
      svgVisual: (
        <svg viewBox="0 0 200 100" className="w-full h-24">
          <path d="M 20,80 Q 70,10 120,70 T 180,20" fill="none" stroke="#9333EA" strokeWidth="3" />
          <line x1="20" y1="85" x2="180" y2="85" stroke="#6B21A8" strokeWidth="1.5" />
          <line x1="20" y1="15" x2="20" y2="85" stroke="#6B21A8" strokeWidth="1.5" />
          <text x="35" y="30" fill="#7E22CE" fontSize="14" fontWeight="bold" fontFamily="monospace">∫ f(x) dx</text>
          <circle cx="70" cy="38" r="4" fill="#A855F7" />
          <circle cx="120" cy="70" r="4" fill="#A855F7" />
        </svg>
      )
    },
    {
      id: 'competitive',
      levelBadge: 'COMPETITIVE EXAMS',
      title: 'Challenge Yourself',
      subtitle: 'Olympiad, JEE, and competitive math solving strategies for top percentile rankings.',
      topics: ['Advanced Problems', 'Time-Based Practice', 'Previous Questions', 'Mock Tests'],
      chapters: 35,
      lessons: 175,
      progressTarget: 'Top 1% Percentile Focus',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300 dark:border-amber-800',
      accentGradient: 'from-amber-500 to-orange-600',
      svgVisual: (
        <svg viewBox="0 0 200 100" className="w-full h-24">
          <polygon points="100,15 125,75 75,75" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2.5" />
          <circle cx="100" cy="52" r="32" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />
          <text x="82" y="56" fill="#B45309" fontSize="13" fontWeight="bold" fontFamily="monospace">∑ aₙ</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 dark:bg-[#0E1322] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Compass size={14} className="text-indigo-600 dark:text-indigo-400" />
            Tailored Academic Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Start where you are. Build your mathematics skills step by step.
          </p>
        </div>

        {/* Path Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className="group relative rounded-3xl bg-white dark:bg-[#131927] border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Gradient Accent Line at top */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${path.accentGradient}`}></div>

              <div>
                {/* Header Row: Badge & Progress Target */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full border shadow-2xs tracking-wider ${path.badgeColor}`}>
                    {path.levelBadge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    <Award size={13} className="text-amber-500" />
                    {path.progressTarget}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  "{path.title}"
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {path.subtitle}
                </p>

                {/* Unique SVG Visual Box */}
                <div className="my-4 bg-slate-100/80 dark:bg-[#0D121F] rounded-2xl p-4 border border-slate-200/70 dark:border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-100 dark:group-hover:bg-[#101726] transition-colors">
                  {path.svgVisual}
                </div>

                {/* Key Topics List */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Core Curriculum Modules:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {path.topics.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                        <CheckCircle2 size={14} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Meta stats & CTA Button */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={15} className="text-indigo-600 dark:text-indigo-400" />
                    <span>{path.chapters} Chapters</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={15} className="text-purple-600 dark:text-purple-400" />
                    <span>{path.lessons} Lessons</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(path.title)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 font-bold text-xs shadow-md hover:shadow-indigo-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Explore Path</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
