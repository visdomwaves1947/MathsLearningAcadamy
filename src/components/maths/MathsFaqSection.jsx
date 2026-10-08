import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function MathsFaqSection({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the free 1-on-1 Mathematics diagnostic assessment work?',
      a: 'The free 45-minute diagnostic connects your student directly with a senior Mathematics educator. We evaluate algebraic accuracy, trigonometric identities, calculus conceptual clarity, and speed on 7-mark board questions. Afterwards, parents receive an in-depth scorecard and a personalized roadmap to score 75/75 marks.'
    },
    {
      q: 'How do you prepare students to score 75/75 in AP & TS board papers?',
      a: 'Intermediate board mathematics has an exact marking scheme: proper statement notation, formula declarations, theorem steps, and final answer boxing. We train students on exact model answer scripts and examiner marking rubrics.'
    },
    {
      q: 'Does this cover both 1st Year (1A & 1B) and 2nd Year (2A & 2B) syllabi?',
      a: 'Yes, 100%! We provide comprehensive coverage for all four papers: 1A (Functions, Matrices, Trigonometry), 1B (Coordinate Geometry, Calculus), 2A (Complex Numbers, Probability, Algebra), and 2B (Circles, Conics, Integration).'
    },
    {
      q: 'My child struggles with Integration and Calculus. How is this taught?',
      a: 'We teach calculus through visual models and standard substitution patterns (algebraic, trigonometric, by parts, partial fractions). Students learn how to identify the correct substitution method on sight rather than guessing randomly.'
    },
    {
      q: 'What study materials and formula cheat sheets are provided?',
      a: 'Enrolled students receive high-resolution printable formula sheets for all chapters, 7-mark & 4-mark theorem step blueprints, 10-year previous board question solutions, and quick-calculation shortcut tables.'
    },
    {
      q: 'How do you prepare students for JEE Main and EAMCET speed?',
      a: 'We teach speed techniques: graphical root analysis, option elimination, symmetry rules, and 30-second calculus shortcuts, enabling students to conquer both board exams and entrance tests.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 relative bg-[#E5ECF4] dark:bg-[#0E1322] border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-indigo-600 dark:text-indigo-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Know About Mathematics
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
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 text-slate-500 ${
                      isOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''
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
