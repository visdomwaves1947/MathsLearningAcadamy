import React from 'react';
import { Lightbulb, Layers, Target, GraduationCap, ArrowRight } from 'lucide-react';

export default function LearningExperienceIntro({ onOpenBooking }) {
  const features = [
    {
      id: 1,
      title: "Concept Clarity",
      desc: "Understand the WHY behind every formula.",
      icon: Lightbulb,
      badge: "Foundational",
      bgLight: "bg-blue-50/80 dark:bg-blue-950/40",
      borderColor: "border-blue-200 dark:border-blue-900/60",
      iconColor: "text-blue-600 dark:text-blue-400",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200",
    },
    {
      id: 2,
      title: "Step-by-Step Learning",
      desc: "Break complex problems into simple, manageable steps.",
      icon: Layers,
      badge: "Structured",
      bgLight: "bg-indigo-50/80 dark:bg-indigo-950/40",
      borderColor: "border-indigo-200 dark:border-indigo-900/60",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200",
    },
    {
      id: 3,
      title: "Smart Practice",
      desc: "Practice questions based on your learning level.",
      icon: Target,
      badge: "Adaptive",
      bgLight: "bg-purple-50/80 dark:bg-purple-950/40",
      borderColor: "border-purple-200 dark:border-purple-900/60",
      iconColor: "text-purple-600 dark:text-purple-400",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200",
    },
    {
      id: 4,
      title: "Exam Preparation",
      desc: "Prepare with chapter tests, mock exams and revision.",
      icon: GraduationCap,
      badge: "Exam Ready",
      bgLight: "bg-amber-50/80 dark:bg-amber-950/40",
      borderColor: "border-amber-200 dark:border-amber-900/60",
      iconColor: "text-amber-600 dark:text-amber-400",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200",
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0F19] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      {/* Background Subtle Math Grid Accent */}
      <div className="absolute inset-0 bg-math-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Comprehensive EdTech Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Everything You Need to Master Mathematics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Learn concepts clearly, practice smarter, and build the confidence to solve every problem.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenBooking}
                className={`group relative rounded-2xl p-6 transition-all duration-300 ${item.bgLight} border ${item.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 border ${item.borderColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className={item.iconColor} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>Explore Feature</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
