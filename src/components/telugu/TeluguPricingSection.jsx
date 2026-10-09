import React, { useState } from 'react';
import { Check, Sparkles, Shield, ArrowRight, Star } from 'lucide-react';

export default function TeluguPricingSection({ onOpenBooking }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Foundation Telugu Explorer',
      description: 'Ideal for independent learners looking for interactive grammar lessons, poetry annotations & comprehension drills.',
      monthlyPrice: 69,
      annualPrice: 49,
      popular: false,
      tag: 'Self-Paced',
      features: [
        'Access to full visual Telugu literature & grammar library',
        'Unlimited AI-powered grammar and vocabulary drills',
        'Interactive phonetics transcription & pronunciation labs',
        'Weekly live essay writing & doubt webinar',
        'Automated progress, vocabulary & weakness diagnostics',
        'Community discussion forum & essay critique group'
      ],
      ctaText: 'Start Explorer Plan',
      buttonStyle: 'bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-900 border border-[#B8CADF] font-bold'
    },
    {
      name: 'Cohort Telugu Masterclass',
      description: 'Our most popular program. Small group interactive live classes with master literature & grammar tutors.',
      monthlyPrice: 169,
      annualPrice: 129,
      popular: true,
      tag: 'Most Popular',
      features: [
        'Everything in Foundation Telugu Explorer',
        '2 Weekly live interactive classes (Max 6 students)',
        '24/7 Priority Essay & Doubt Clearing Helpdesk',
        'Bi-weekly graded essays & letters with detailed mentor video feedback',
        'Full-length realistic board mock exams & speed drills',
        'Monthly 1-on-1 parent progress conference',
        'Board guarantee: 95+ score or letter grade jump'
      ],
      ctaText: 'Enroll in Cohort',
      buttonStyle: 'bg-gradient-to-r from-amber-600 via-indigo-600 to-teal-600 hover:from-amber-700 hover:to-teal-700 text-white shadow-lg shadow-amber-600/25 font-bold'
    },
    {
      name: '1-on-1 Elite Telugu Mentorship',
      description: 'Private personalized coaching with veteran board examiners, university professors & IELTS band 9 scholars.',
      monthlyPrice: 319,
      annualPrice: 259,
      popular: false,
      tag: 'Elite Track',
      features: [
        'Everything in Cohort Telugu Masterclass',
        'Weekly private 1-on-1 tailored coaching sessions',
        'Bespoke curriculum aligned with your exact school/board',
        'Creative writing, debate & CUET/IELTS preparation track',
        'Direct WhatsApp / SMS channel with your mentor',
        'College essay drafting & recommendation letter guidance',
        'Flexible rescheduling anytime'
      ],
      ctaText: 'Apply for 1-on-1 Mentorship',
      buttonStyle: 'bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-900 border border-[#B8CADF] font-bold'
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#EBF0F7] border-t border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-amber-700" />
            Transparent Tuition Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Invest in Lifelong Telugu Fluency & Board Excellence
          </h2>
          <p className="text-slate-700 mt-4 text-base sm:text-lg">
            No long-term locks. Switch or cancel anytime. All plans begin with a 100% risk-free diagnostic assessment.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-[#D2DFEE] border border-[#BAC9DC] shadow-inner">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isAnnual ? 'bg-amber-600 text-white shadow-md' : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isAnnual ? 'bg-amber-600 text-white shadow-md' : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#E1EAF5] border-2 border-amber-600 shadow-xl shadow-amber-600/15 lg:-translate-y-2'
                    : 'bg-[#DFE7F2] border border-[#BAC9DC] hover:border-[#9AB3CF]'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 via-indigo-600 to-teal-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
                    <Star size={12} className="fill-amber-300 text-amber-300" />
                    {plan.tag}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#D2DFEE] text-slate-700 border border-[#BAC9DC]">
                        {plan.tag}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm mb-6 min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#CAD8EA]">
                    <div className="flex items-baseline gap-1 font-mono">
                      <span className="text-4xl font-extrabold text-slate-950">${price}</span>
                      <span className="text-slate-600 text-sm font-semibold">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium mt-1">
                      {isAnnual ? 'Billed annually (Includes 2 free 1-on-1 essay review sessions)' : 'Billed month-to-month, cancel anytime'}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <Check size={16} className="text-emerald-700 shrink-0 mt-0.5 font-bold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenBooking(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${plan.buttonStyle}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl bg-[#D6E2F0] dark:bg-[#151D2F] border border-[#BAC9DC] dark:border-[#243048] flex items-center gap-4 text-slate-800 dark:text-slate-300 text-xs sm:text-sm shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Shield size={24} />
          </div>
          <div>
            <strong className="text-slate-950 dark:text-white block text-sm font-bold">100% 30-Day Telugu Score Improvement Guarantee</strong>
            If your student attends scheduled sessions and doesn't see tangible clarity, writing confidence, and grade improvement within 30 days, we'll refund your tuition completely. No questions asked.
          </div>
        </div>

      </div>
    </section>
  );
}
