import React from 'react';
import { Star, Award } from 'lucide-react';

export default function ChemistryTestimonials({ onOpenBooking }) {
  const reviews = [
    {
      name: 'Harika Malladi',
      role: 'Class 12 / Senior Inter Student',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      comment: 'Organic reactions always felt like a nightmare of endless memorization. The reaction mechanism maps and named reaction flowcharts made it completely systematic. I scored 60/60 in my board exams and 170/180 in NEET Chemistry!',
      rating: 5,
      course: 'Senior Inter Chemistry Masterclass',
      achievement: '60/60 Board Score'
    },
    {
      name: 'Karthik Rao',
      role: 'Junior Inter Student & JEE Aspirant',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
      comment: 'Chemical bonding and states of matter became my strongest chapters. The 3D molecular orbital simulations made understanding VSEPR geometry effortless.',
      rating: 5,
      course: 'Junior Inter Chemistry Foundation',
      achievement: '99% Test Accuracy'
    },
    {
      name: 'Srinivas Murthy (Parent)',
      role: 'Father of AP Board Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      comment: 'The personalized attention on physical chemistry numericals and inorganic trends boosted my son score from 44 to 59 out of 60. Highly recommended academy!',
      rating: 5,
      course: '1-on-1 Elite Chemistry Mentorship',
      achievement: '15 Mark Jump'
    },
    {
      name: 'Meghana Joshi',
      role: 'Class 12 Student',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
      comment: 'The qualitative salt analysis practical guides and coordination chemistry rules gave me complete confidence in my board exam center.',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} className="text-emerald-600 dark:text-emerald-400" />
            Verified Chemistry Student Success
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Students. Trusted by Parents.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            Read how students achieved 60/60 board marks and top entrance percentiles in chemistry.
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
                <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-emerald-500/30" />
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

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                <span>{rev.course}</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">{rev.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
