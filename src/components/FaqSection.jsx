import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the free 1-on-1 diagnostic assessment work?',
      a: 'The free 45-minute assessment connects your student directly with a senior math specialist. We evaluate problem-solving intuition, conceptual gaps, and mental math speed across 5 core areas. Afterward, parents receive an in-depth diagnostic scorecard and a customized curriculum blueprint with zero obligation to enroll.'
    },
    {
      q: 'My child has math anxiety and hates worksheets. How is this different?',
      a: 'We never drill repetitive rote worksheets. Our mentors begin with visual puzzles, physical intuition models, and gamified dynamic graphing tools. By showing students *why* formulas work before expecting them to calculate, the fear evaporates and genuine curiosity takes its place.'
    },
    {
      q: 'Can lessons align with our school board (AP, IB, Cambridge, Common Core)?',
      a: 'Absolutely! Our curriculum tracks are modular and mapped to AP Calculus AB/BC, IB Math AA & AI, Cambridge IGCSE / A-Levels, SAT/ACT Math, CBSE, and US Common Core. Your mentor will synchronize directly with current homework and upcoming school exams.'
    },
    {
      q: 'What is the background of your tutors?',
      a: 'Only the top 1.5% of applicants are selected. Our mentors are graduates and researchers from institutions like MIT, Stanford, Cambridge, and IIT, along with national Olympiad medalists and certified master mathematics educators with an average of 7+ years of teaching experience.'
    },
    {
      q: 'What if we need to reschedule or switch tutors?',
      a: 'Flexibility is key. You can reschedule any class with 12 hours notice directly inside the student dashboard. If at any point you feel your tutor is not the perfect pedagogical match for your student, our academic concierge will pair you with a new mentor immediately.'
    },
    {
      q: 'What equipment does my student need for class?',
      a: 'Any computer, laptop, or tablet with internet access and a webcam. For visual problem-solving, our proprietary classroom includes an interactive digital whiteboard where both student and mentor write, draw diagrams, and manipulate graphs together in real time.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-[#E5ECF4] border-t border-b border-[#CBD5E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-indigo-700" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-slate-700 mt-3 text-base">
            Have questions before starting? Here are answers to our most common questions from parents and students.
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
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#D2DFEE] dark:bg-[#0D121F] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-600 dark:bg-indigo-600 text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-800 dark:text-slate-300 text-sm leading-relaxed border-t border-[#CAD8EA] dark:border-[#1E293B] pt-4 animate-fadeIn font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#D2DFEE] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] shadow-xs">
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Still have a specific question?</h4>
          <p className="text-xs text-slate-700 dark:text-slate-300 mb-4">Our academic advisors are available 7 days a week to help evaluate your child's goals.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
            >
              Speak with Academic Counselor
            </button>
            <a
              href="mailto:support@mathslearningacademy.com"
              className="px-5 py-2.5 rounded-xl bg-[#DFE7F2] hover:bg-[#D5E1EE] text-slate-900 font-bold text-xs border border-[#BAC9DC] transition-colors"
            >
              Email Support Team
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
