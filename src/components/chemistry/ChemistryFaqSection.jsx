import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function ChemistryFaqSection({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the free 1-on-1 Chemistry diagnostic assessment work?',
      a: 'The free 45-minute diagnostic connects your student directly with a senior Chemistry educator. We assess Organic reaction recall, Inorganic periodic trends, and Physical chemistry mathematical numerical ability. Afterwards, parents receive a detailed diagnostic scorecard and customized 60/60 preparation roadmap.'
    },
    {
      q: 'How do you help students master Organic Chemistry without mindless memorization?',
      a: 'We teach organic chemistry through reaction mechanisms (electrophiles, nucleophiles, carbocation stability, electron density shifts). By understanding WHY a bond breaks and forms, students can predict product formation on sight rather than memorizing hundreds of disconnected reactions.'
    },
    {
      q: 'Does this cover both AP (BIEAP) and Telangana (TS BIE) Chemistry syllabi?',
      a: 'Yes, 100%! We provide dedicated tracks tailored specifically for Telangana State Board (TS BIE) and Andhra Pradesh Board (BIEAP) 1st & 2nd Year Intermediate Chemistry, alongside NEET and JEE Main high-yield chemistry modules.'
    },
    {
      q: 'How do you prepare students to score 60/60 in board exams?',
      a: 'Intermediate board chemistry scoring requires balanced chemical equations, clear structural formulas, condition specifications (temperature, catalysts), and neat numerical steps with final units. We train students on exact board examiner marking rubrics.'
    },
    {
      q: 'What study materials and cheat sheets are provided?',
      a: 'Enrolled students receive high-resolution printable reaction maps, named reaction flashcards, periodic trend cheat sheets, 10-year solved board papers with 60/60 model answers, and practical salt analysis lab guides.'
    },
    {
      q: 'Are chemistry practical laboratory examinations covered?',
      a: 'Yes, we provide systematic schemes for salt analysis (anion and cation detection), volumetric analysis (titration calculations), organic functional group tests, and complete viva-voce handbooks.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 relative bg-[#E5ECF4] dark:bg-[#0E1322] border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-emerald-600 dark:text-emerald-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Know About Chemistry
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
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 text-slate-500 ${
                      isOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : ''
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
