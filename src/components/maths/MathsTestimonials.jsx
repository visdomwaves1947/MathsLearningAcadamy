import React from 'react';
import { Star, Award } from 'lucide-react';

export default function MathsTestimonials({ onOpenBooking }) {
  const reviews = [
    {
      name: 'Aditya Vardhan',
      role: 'Class 12 / Senior Inter Student',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
      comment: 'I scored 75/75 in both Maths 2A and 2B! The circles theorem blueprints and integration substitution flowcharts made solving board questions second nature. Mentors gave line-by-line mark breakdown.',
      rating: 5,
      course: 'Senior Inter Maths Masterclass',
      achievement: '150/150 Total Maths Score'
    },
    {
      name: 'Sravani Puppala',
      role: 'Junior Inter Student & JEE Aspirant',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      comment: 'Matrices and trigonometric transformations used to overwhelm me. The step-by-step visual proofs and shortcut methods made it my favorite subject. Scored 75/75 in Maths 1A!',
      rating: 5,
      course: 'Junior Inter Maths Foundation',
      achievement: '75/75 in Maths 1A'
    },
    {
      name: 'Dr. Venkat Rao (Parent)',
      role: 'Father of AP Board Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      comment: 'The personalized guidance on calculus and coordinate geometry helped my son jump from 52 to 75 marks. The weekly mock tests perfectly reflect the real board standard.',
      rating: 5,
      course: '1-on-1 Elite Maths Mentorship',
      achievement: '23 Mark Jump'
    },
    {
      name: 'Nikhil Chowdary',
      role: 'Class 12 Student & EAMCET Ranker',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      comment: 'The 10-year previous question bank and timed mock exams gave me speed and absolute precision. Highly recommended for any intermediate student aiming for top ranks!',
      rating: 5,
      course: 'Board Dominance Sprint',
      achievement: 'Top 100 EAMCET Rank'
    }
  ];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#E5ECF4] dark:bg-[#0E1322] overflow-hidden border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} className="text-indigo-600 dark:text-indigo-400" />
            Verified Mathematics Student Success
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Students. Trusted by Parents.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            See how students transformed mathematics anxiety into consistent 75/75 board marks and top engineering entrance ranks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-indigo-500/30" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{rev.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{rev.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-4 italic">
                "{rev.comment}"
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-between">
                <span>{rev.course}</span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">{rev.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
