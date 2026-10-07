import React from 'react';
import { Star, Quote, Award, CheckCircle } from 'lucide-react';

export default function PhysicsTestimonials({ onOpenBooking }) {
  const physicsReviews = [
    {
      name: 'Aditya Rao',
      role: 'Class 12 / Senior Inter Student (IIT-JEE Ranker)',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
      comment: 'I scored a perfect 60/60 in my Intermediate Board Physics and 99.4 percentile in JEE Main Physics! The step-by-step derivation guides for Optics and EM Induction made exam writing effortless.',
      rating: 5,
      course: 'Senior Inter & JEE Physics Masterclass',
      achievement: '60/60 Board & 99.4%ile JEE'
    },
    {
      name: 'Sneha Kulkarni',
      role: 'NEET Aspirant & Junior Inter Student',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      comment: 'Physics numericals used to terrify me, especially Rotational Motion and Thermodynamics. The interactive 3D simulations and free body diagram shortcuts gave me crystal-clear visualization.',
      rating: 5,
      course: 'Mechanics & Thermodynamics Foundation',
      achievement: '170/180 in NEET Physics'
    },
    {
      name: 'Dr. Venkat Raman (Parent)',
      role: 'Father of AP Board Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      comment: 'The personalized feedback on derivations, circuit diagrams, and numerical calculation speed helped my daughter leap from 38 to 59 marks in Physics. Tutors are remarkably patient and thorough.',
      rating: 5,
      course: '1-on-1 Elite Physics Mentorship',
      achievement: '21 Mark Board Jump'
    },
    {
      name: 'Kavya Madhavan',
      role: 'Class 11 / Junior Inter Student',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
      comment: 'The 10-year previous board question banks and formula cheat sheets made my exam revision super structured. I entered the exam hall with 100% confidence and finished 20 minutes early!',
      rating: 5,
      course: 'Junior Inter Physics Foundation',
      achievement: '100% Pass in Mock Series'
    }
  ];

  return (
    <section id="reviews" className="py-24 relative bg-[#E5ECF4] overflow-hidden border-t border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} className="text-purple-700" />
            Verified Physics Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by Students. Trusted by Parents.
          </h2>
          <p className="text-slate-700 mt-4 text-base sm:text-lg">
            Read how students transformed numerical anxiety into 60/60 board marks, intuitive physical understanding, and top competitive ranks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {physicsReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] hover:border-purple-400 dark:hover:border-purple-500 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg relative group"
            >
              <div className="absolute top-6 right-6 text-slate-400/40 dark:text-slate-600/40 group-hover:text-purple-600/30 transition-colors">
                <Quote size={40} />
              </div>

              <div>
                {/* Rating & Achievement Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-purple-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-purple-500 text-purple-500" />
                    ))}
                  </div>

                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/70">
                    ★ {review.achievement}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic relative z-10 font-medium">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Course info */}
              <div className="pt-4 border-t border-[#CAD8EA] dark:border-[#1E293B] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                      {review.name}
                      <CheckCircle size={14} className="text-purple-500" />
                    </h4>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{review.role}</span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">Course Completed:</span>
                  <span className="text-xs font-bold text-purple-800 dark:text-purple-400 font-mono">
                    {review.course}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Impact Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-purple-700 dark:text-purple-400 font-mono mb-1">50,000+</div>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">Live Hours Taught</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-cyan-700 dark:text-cyan-400 font-mono mb-1">99.6%</div>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">Board Pass Rate</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700 dark:text-emerald-400 font-mono mb-1">4.97 / 5</div>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">Parent Satisfaction</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-indigo-700 dark:text-indigo-400 font-mono mb-1">320+</div>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">55+ Marks Scorers</div>
          </div>
        </div>

      </div>
    </section>
  );
}
