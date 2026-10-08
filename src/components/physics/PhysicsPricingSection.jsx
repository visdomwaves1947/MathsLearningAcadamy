import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function PhysicsPricingSection({ onOpenBooking }) {
  const plans = [
    {
      name: 'Foundation Physics Explorer',
      description: 'Ideal for self-paced students wanting visual derivation models, chapter formula sheets, and numerical question banks.',
      monthlyPrice: 69,
      popular: false,
      tag: 'Self-Paced',
      features: [
        'Complete access to 1st & 2nd year Physics video library',
        'Interactive 3D simulations & circuit problem builders',
        'Chapter formula cheat sheets & unit conversion tables',
        'Weekly live doubt clarification webinar',
        'Full previous 10-year board paper archive with solutions',
        'Community discussion & peer numerical solving forum'
      ],
      ctaText: 'Start Explorer Plan',
      buttonStyle: 'bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-900 border border-[#B8CADF] font-bold'
    },
    {
      name: 'Cohort Physics Masterclass',
      description: 'Our most popular program. Small group interactive live classes with master Physics educators and board evaluators.',
      monthlyPrice: 169,
      popular: true,
      tag: 'Most Popular',
      features: [
        'Everything in Foundation Physics Explorer',
        '2 Weekly live interactive classes with expert faculty',
        '24/7 Priority numerical doubt clearing support',
        'Bi-weekly graded board derivation tests with personalized feedback',
        'Full-length realistic 3-hour board mock exams',
        'Monthly 1-on-1 parent progress & score review',
        'Board guarantee: 55+ / 60 or grade jump'
      ],
      ctaText: 'Enroll in Cohort',
      buttonStyle: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-600/25 font-bold'
    },
    {
      name: '1-on-1 Elite Physics Mentorship',
      description: 'Private 1-on-1 coaching with veteran senior board examiners & IIT-JEE Physics top rankers.',
      monthlyPrice: 319,
      popular: false,
      tag: 'Elite Track',
      features: [
        'Everything in Cohort Physics Masterclass',
        'Weekly private 1-on-1 personalized coaching sessions',
        'Bespoke curriculum aligned with your exact college pace',
        'JEE Main & Advanced / NEET numerical problem track',
        'Direct WhatsApp channel with your designated mentor',
        'Practical examination viva-voce prep & lab record review',
        'Flexible session scheduling anytime'
      ],
      ctaText: 'Book 1-on-1 Mentor',
      buttonStyle: 'bg-slate-900 hover:bg-slate-800 text-white font-bold'
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#EBF0F7] dark:bg-[#0B0F19] border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star size={13} fill="currentColor" /> Transparent Tuition Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Flexible Physics Learning Tracks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            Invest in your board marks and entrance rank with zero hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div 
              key={idx}
              className={`flex flex-col bg-white dark:bg-slate-900 rounded-3xl p-8 border ${
                p.popular 
                  ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/20' 
                  : 'border-slate-200 dark:border-slate-800 shadow-sm'
              } relative`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                  {p.tag}
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{p.name}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">{p.description}</p>

              <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <span className="text-4xl font-black text-slate-900 dark:text-white">${p.monthlyPrice}</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 ml-1.5">/ month</span>
              </div>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {p.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <span className="text-blue-500 font-bold shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenBooking && onOpenBooking(p.name)}
                className={`w-full py-3.5 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${p.buttonStyle}`}
              >
                <span>{p.ctaText}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
