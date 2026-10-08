import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function SanskritFaqSection({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the free 1-on-1 Sanskrit diagnostic assessment work?',
      a: 'The free 45-minute diagnostic connects your student directly with a senior Sanskrit Vidwan. We assess current Devanagari script reading/writing speed, Sandhi identification ability, Shabda Rupa recall, and shloka understanding. Afterwards, parents receive a custom scorecard and an exact roadmap to achieve 99/100 marks.'
    },
    {
      q: 'I have never studied Sanskrit before 11th grade. Can I still score 99/100?',
      a: 'Absolutely YES! Over 65% of our highest-scoring students never studied Sanskrit before intermediate. The intermediate Sanskrit syllabus is highly structured and mathematical. Our bilingual English/Telugu methodology breaks down grammar rules into simple algorithms that anyone can master in weeks.'
    },
    {
      q: 'Does this cover both AP (BIEAP) and Telangana (TS BIE) Sanskrit syllabi?',
      a: 'Yes, 100%! We provide dedicated tracks tailored specifically for Telangana State Board (TS BIE) and Andhra Pradesh Board (BIEAP) 1st & 2nd Year Intermediate Sanskrit, covering all prescribed Padyabhaga, Gadyabhaga, and Vyakaranam.'
    },
    {
      q: 'Why is scoring 99 in Sanskrit considered so important for Intermediate MPC/BiPC?',
      a: 'Sanskrit carries 100 marks in 1st year and 100 marks in 2nd year. Unlike English where scoring 98+ is difficult, Sanskrit board examiners award full marks for correct grammar, shloka anvaya, and neat presentation. Scoring 99/100 in Sanskrit dramatically lifts your overall intermediate aggregate toward 980+/1000.'
    },
    {
      q: 'What study materials and cheat sheets are provided?',
      a: 'Enrolled students receive high-resolution printable Shabda and Dhatu Rupani charts, Sandhi & Samasa shortcut formula sheets, line-by-line shloka summaries with anvaya, 10-year solved board papers with 99/100 model answers, and native audio recitations.'
    },
    {
      q: 'How do you prepare students for Devanagari handwriting and board presentation?',
      a: 'We provide specialized handwriting line sheets and train students on question numbering, paragraph separation, shloka layout, and underline formatting that board evaluators actively look for when giving 99+ scores.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 relative bg-[#E5ECF4] dark:bg-[#0E1322] border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-rose-600 dark:text-rose-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Know About Sanskrit
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
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 text-slate-500 ${
                      isOpen ? 'rotate-180 text-rose-600 dark:text-rose-400' : ''
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
