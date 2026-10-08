import React from 'react';
import { Star, Award } from 'lucide-react';

export default function SanskritTestimonials({ onOpenBooking }) {
  const reviews = [
    {
      name: 'Gayatri Sastry',
      role: 'Class 12 / Senior Inter Student',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      comment: 'I scored 99/100 in Intermediate Board Sanskrit! The Sandhi formulas and Shabda Rupa charts were absolute lifesavers. Sanskrit gave me the score cushion I needed to get state 2nd rank overall.',
      rating: 5,
      course: 'Senior Inter Sanskrit Masterclass',
      achievement: '99/100 Board Score'
    },
    {
      name: 'Venkata Sai',
      role: 'Junior Inter Student & MPC Aspirant',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
      comment: 'I never studied Sanskrit before 11th grade and was really stressed. The bilingual explanations and step-by-step grammar drills made it my easiest and highest-scoring subject.',
      rating: 5,
      course: 'Junior Inter Sanskrit Foundation',
      achievement: '98% Test Accuracy'
    },
    {
      name: 'Lakshmi Narayana (Parent)',
      role: 'Father of TS Board Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      comment: 'The shloka recitation audio and personal handwriting critique helped my daughter score 99/100. The teachers are exceptionally devoted and knowledgeable.',
      rating: 5,
      course: '1-on-1 Elite Sanskrit Mentorship',
      achievement: '99/100 Board Score'
    },
    {
      name: 'Rohan Deshmukh',
      role: 'Class 12 Student',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      comment: 'The previous 10-year question bank and model presentation blueprints took all the stress away. Sanskrit is the highest ROI subject in intermediate!',
      rating: 5,
      course: 'Board Dominance Sprint',
      achievement: '99/100 Board Score'
    }
  ];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#E5ECF4] dark:bg-[#0E1322] overflow-hidden border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} className="text-rose-600 dark:text-rose-400" />
            Verified Sanskrit Student Success
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Students. Trusted by Parents.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            Read how students achieved 99/100 board marks and transformed their overall intermediate aggregate.
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
                <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-rose-500/30" />
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

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center justify-between">
                <span>{rev.course}</span>
                <span className="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300">{rev.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
