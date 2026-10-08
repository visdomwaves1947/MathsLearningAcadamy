import React from 'react';
import { Star, Award } from 'lucide-react';

export default function PhysicsTestimonials({ onOpenBooking }) {
  const reviews = [
    {
      name: 'Aditya Kulkarni',
      role: 'Class 12 / Senior Inter Student',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
      comment: 'Physics derivations used to terrify me. The step-by-step visual blueprints and circuit simulations changed everything. I scored 60/60 in my board exam and 99.2 percentile in JEE Physics!',
      rating: 5,
      course: 'Senior Inter Physics Masterclass',
      achievement: '60/60 Board Score'
    },
    {
      name: 'Sneha Reddy',
      role: 'Junior Inter Student & NEET Aspirant',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      comment: 'Kinematics and rotational mechanics became so intuitive after using the 3D simulation tools. The numerical problem tricks saved me valuable exam minutes.',
      rating: 5,
      course: 'Junior Inter Physics Foundation',
      achievement: '98% Test Accuracy'
    },
    {
      name: 'Ravi Teja (Parent)',
      role: 'Father of TS Board Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      comment: 'My daughter jumped from struggling with basic formulas to topping her college physics exams. The mentor support and weekly test reviews were truly outstanding.',
      rating: 5,
      course: '1-on-1 Elite Physics Mentorship',
      achievement: '59/60 Board Score'
    },
    {
      name: 'Varun Nair',
      role: 'Class 12 Student',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      comment: 'The ray optics ray diagrams and modern physics formula sheets made revision effortless. Got full marks in both practicals and theory!',
      rating: 5,
      course: 'Board Dominance Sprint',
      achievement: '100% Practical & Theory Pass'
    }
  ];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#E5ECF4] dark:bg-[#0E1322] overflow-hidden border-t border-b border-[#CBD5E1] dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} className="text-blue-600 dark:text-blue-400" />
            Verified Physics Student Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Students. Proven by Results.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            See how students transformed physics confusion into 60/60 board marks and top entrance ranks.
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
                <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-blue-500/30" />
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

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-blue-600 dark:text-blue-400 flex items-center justify-between">
                <span>{rev.course}</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">{rev.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
