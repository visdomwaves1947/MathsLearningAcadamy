import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function PhysicsFaqSection({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the free 1-on-1 Physics diagnostic assessment work?',
      a: 'The free 45-minute diagnostic connects your student directly with a senior Physics educator. We assess conceptual understanding, mathematical proficiency, derivation accuracy, and numerical problem speed across key chapters. Afterwards, parents receive an in-depth performance analysis and personalized score roadmap.'
    },
    {
      q: 'My child struggles with 8-mark derivations. How do you help them score full marks?',
      a: 'Intermediate board physics requires precise presentation: labeled diagrams, introductory statements, clean step-by-step mathematical working, and final unit representations. We teach using derivation blueprints and give feedback based directly on board examiner marking schemes.'
    },
    {
      q: 'Does this cover both AP (BIEAP) and Telangana (TS BIE) Physics syllabi?',
      a: 'Yes, 100%! We provide dedicated tracks tailored specifically for Telangana State Board (TS BIE) and Andhra Pradesh Board (BIEAP) 1st & 2nd Year Intermediate Physics, alongside JEE Main, EAMCET, and NEET physics preparation.'
    },
    {
      q: 'How do you prepare students for numerical problems in board and entrance exams?',
      a: 'We teach a 4-step numerical approach: identifying given values, formula mapping, dimensional unit check, and calculation shortcuts. Students practice high-frequency board numericals as well as tricky competitive variants.'
    },
    {
      q: 'What study materials and formula cheat sheets are provided?',
      a: 'Enrolled students receive high-resolution printable formula sheets, derivation flashcards, chapter summary mind maps, previous 10-year board questions with 60/60 model answers, and practical viva-voce handbooks.'
    },
    {
      q: 'Are practical laboratory experiments covered?',
      a: 'Yes, we provide interactive simulation labs for experiments (Vernier calipers, screw gauge, simple pendulum, potentiometer, convex lens, prism), complete lab manual records, and examiner viva question banks.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 relative bg-[#E5ECF4] dark:bg-[#0E1322] border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-blue-600 dark:text-blue-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Know About Physics
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Answers to common questions from intermediate students and parents.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] rounded-xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 text-slate-500 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-800">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
