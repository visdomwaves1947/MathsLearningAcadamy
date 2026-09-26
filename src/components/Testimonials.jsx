import React from 'react';
import { reviewsData } from '../data/quizData';
import { Star, Quote, Award, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative bg-[#E5ECF4] overflow-hidden border-t border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} className="text-amber-700" />
            Verified Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by Students. Trusted by Parents.
          </h2>
          <p className="text-slate-700 mt-4 text-base sm:text-lg">
            Read how students transformed their math anxiety into top grades, perfect standardized test scores, and Olympiad medals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#DFE7F2] border border-[#BAC9DC] hover:border-indigo-400 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg relative group"
            >
              <div className="absolute top-6 right-6 text-slate-400/40 group-hover:text-indigo-600/30 transition-colors">
                <Quote size={40} />
              </div>

              <div>
                {/* Rating & Achievement Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    ★ {review.achievement}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6 italic relative z-10 font-medium">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Course info */}
              <div className="pt-4 border-t border-[#CAD8EA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      {review.name}
                      <CheckCircle size={14} className="text-sky-600" />
                    </h4>
                    <span className="text-xs text-slate-600 font-medium">{review.role}</span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] text-slate-500 font-medium block">Course Completed:</span>
                  <span className="text-xs font-bold text-indigo-700 font-mono">
                    {review.course}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Impact Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#DFE7F2] border border-[#BAC9DC] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-indigo-700 font-mono mb-1">50,000+</div>
            <div className="text-xs sm:text-sm text-slate-700 font-semibold">Live Hours Taught</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#DFE7F2] border border-[#BAC9DC] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-purple-700 font-mono mb-1">98.4%</div>
            <div className="text-xs sm:text-sm text-slate-700 font-semibold">Grade Improvement</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#DFE7F2] border border-[#BAC9DC] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-mono mb-1">4.95 / 5</div>
            <div className="text-xs sm:text-sm text-slate-700 font-semibold">Parent Satisfaction</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#DFE7F2] border border-[#BAC9DC] shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-amber-700 font-mono mb-1">120+</div>
            <div className="text-xs sm:text-sm text-slate-700 font-semibold">Olympiad Qualifiers</div>
          </div>
        </div>

      </div>
    </section>
  );
}
