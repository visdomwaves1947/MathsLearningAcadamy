import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function SanskritPricingSection({ onOpenBooking }) {
  const plans = [
    {
      name: 'Foundation Sanskrit Explorer',
      description: 'Ideal for independent learners wanting Sandhi-Samasa rules, Shabda Rupa charts, and line-by-line shloka summaries.',
      monthlyPrice: 69,
      popular: false,
      tag: 'Self-Paced',
      features: [
        'Complete access to 1st & 2nd year Sanskrit video library',
        'Interactive Sandhi & Samasa grammar identification drills',
        'Shabda & Dhatu Rupani quick declension tables',
        'Weekly live doubt clarification & shloka recitation webinar',
        'Previous 10-year board paper archive with 99/100 solutions',
        'Community discussion & Sanskrit prose analysis group'
      ],
      ctaText: 'Start Explorer Plan',
      buttonStyle: 'bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-900 border border-[#B8CADF] font-bold'
    },
    {
      name: 'Cohort Sanskrit Masterclass',
      description: 'Our most popular program. Small group interactive live classes with master Sanskrit scholars & board examiners.',
      monthlyPrice: 169,
      popular: true,
      tag: 'Most Popular',
      features: [
        'Everything in Foundation Sanskrit Explorer',
        '2 Weekly live interactive classes with expert faculty',
        '24/7 Priority grammar & translation doubt clearing',
        'Bi-weekly graded board tests with line-by-line feedback',
        'Full-length realistic 3-hour board mock exams',
        'Monthly 1-on-1 parent progress & handwriting review',
        'Board guarantee: 95+ / 100 or grade jump'
      ],
      ctaText: 'Enroll in Cohort',
      buttonStyle: 'bg-gradient-to-r from-rose-600 via-amber-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white shadow-lg shadow-rose-600/25 font-bold'
    },
    {
      name: '1-on-1 Elite Sanskrit Mentorship',
      description: 'Private 1-on-1 personalized coaching with veteran senior board examiners & Sanskrit Sahitya Acharyas.',
      monthlyPrice: 319,
      popular: false,
      tag: 'Elite Track',
      features: [
        'Everything in Cohort Sanskrit Masterclass',
        'Weekly private 1-on-1 personalized coaching sessions',
        'Bespoke curriculum aligned with your exact college syllabus',
        'Zero-error Devanagari handwriting & presentation mastery',
        'Direct WhatsApp channel with your designated Vidwan mentor',
        'Comprehensive 99/100 board topper blueprint coaching',
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star size={13} fill="currentColor" /> Transparent Tuition Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Flexible Sanskrit Learning Tracks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            Lock in your 99/100 board marks and maximize your intermediate aggregate score.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div 
              key={idx}
              className={`flex flex-col bg-white dark:bg-slate-900 rounded-3xl p-8 border ${
                p.popular 
                  ? 'border-rose-500 shadow-xl ring-2 ring-rose-500/20' 
                  : 'border-slate-200 dark:border-slate-800 shadow-sm'
              } relative`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
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
                    <span className="text-rose-500 font-bold shrink-0">✓</span>
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
