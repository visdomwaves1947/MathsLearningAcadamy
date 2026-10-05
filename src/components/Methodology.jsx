import React from 'react';
import { 
  Eye, 
  Lightbulb, 
  Cpu, 
  Award, 
  Check, 
  X, 
  Brain
} from 'lucide-react';

export default function Methodology() {
  const pillars = [
    {
      icon: <Eye className="text-sky-700" size={24} />,
      title: 'Visual Intuition First',
      description: 'Before writing a single formula, students visualize mathematical mechanics. From unit circle trigonometry to 3D calculus volumes, seeing is understanding.',
      highlight: 'Zero rote memorization'
    },
    {
      icon: <Lightbulb className="text-amber-700" size={24} />,
      title: 'First-Principles Reasoning',
      description: 'We deconstruct why mathematical theorems work. Students learn how Euler, Newton, and Gauss thought, fostering genuine mathematical maturity.',
      highlight: 'Deeper cognitive retention'
    },
    {
      icon: <Cpu className="text-purple-700" size={24} />,
      title: 'Adaptive Error Diagnostics',
      description: 'Our proprietary algorithm pinpoints the exact foundational gap causing a student to struggle—often 2 grades earlier than their current level.',
      highlight: 'Precision learning path'
    },
    {
      icon: <Award className="text-emerald-700" size={24} />,
      title: 'Ivy & Olympiad Faculty',
      description: 'Mentors who have scored in the 99.9th percentile, competed in the International Math Olympiad (IMO), and published in pure & applied mathematics.',
      highlight: 'Top 1% vetted educators'
    }
  ];

  const comparison = [
    {
      feature: 'Teaching Approach',
      traditional: 'Memorize formulas and drill repetitive worksheets',
      academy: 'Conceptual visualization & first-principles problem derivation',
    },
    {
      feature: 'Tutor Caliber',
      traditional: 'Random college tutors or part-time contractors',
      academy: 'Vetted Olympiad medalists, Ivy/MIT alumni & certified educators',
    },
    {
      feature: 'Pacing & Personalization',
      traditional: 'One-size-fits-all rigid textbook speed',
      academy: 'Adaptive progression paced dynamically to student mastery',
    },
    {
      feature: 'Problem Solving Depth',
      traditional: 'Standard textbook questions with known patterns',
      academy: 'Creative non-routine problems, contest prep & Olympiad logic',
    },
    {
      feature: 'Doubt Resolution',
      traditional: 'Limited to 1 hour weekly class time',
      academy: '24/7 dedicated Math Helpdesk with instant voice/video notes',
    },
  ];

  return (
    <section id="methodology" className="py-24 relative bg-[#EBF0F7] border-t border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Brain size={14} className="text-emerald-700" />
            The Academy Pedagogical Framework
          </div>

          <p className="text-slate-700 mt-4 text-base sm:text-lg">
            Traditional tutoring drills formulas until the test is over. We build mathematical intuition that lasts for a lifetime of STEM success.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#DFE7F2] border border-[#BAC9DC] hover:border-indigo-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D2DFEE] border border-[#BAC9DC] flex items-center justify-center mb-5 shadow-2xs">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#CAD8EA]">
                <span className="text-[11px] font-mono font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200">
                  ★ {pillar.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-[#DFE7F2] dark:bg-[#131927] rounded-2xl border border-[#BAC9DC] dark:border-[#243048] shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-r from-indigo-100 via-[#DFE7F2] to-purple-100 dark:from-indigo-950/80 dark:via-[#131927] dark:to-purple-950/80 border-b border-[#CAD8EA] dark:border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">How We Compare</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">Why thousands of parents choose Maths Learning Academy</p>
            </div>
            <span className="text-xs font-mono font-bold bg-indigo-600 text-white px-3 py-1 rounded-full shadow-2xs self-start sm:self-auto">
              Pedagogy Comparison
            </span>
          </div>

          <div className="divide-y divide-[#CAD8EA] dark:divide-[#1E293B] text-sm">
            {comparison.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 hover:bg-[#D5E1EE] dark:hover:bg-[#1A2338] transition-colors">
                <div className="md:col-span-3 font-bold text-slate-900 dark:text-white flex items-center">
                  {item.feature}
                </div>
                <div className="md:col-span-4 text-slate-600 dark:text-slate-400 flex items-start gap-2 text-xs sm:text-sm">
                  <X size={16} className="text-rose-500 shrink-0 mt-0.5 font-bold" />
                  <span>{item.traditional}</span>
                </div>
                <div className="md:col-span-5 text-indigo-950 dark:text-indigo-200 font-semibold flex items-start gap-2 text-xs sm:text-sm bg-[#D2DFEE] dark:bg-[#0D121F] p-2.5 rounded-lg border border-[#BAC9DC] dark:border-[#243048]">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5 font-bold" />
                  <span>{item.academy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
