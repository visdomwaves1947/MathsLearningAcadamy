import React, { useState } from 'react';
import { courseCategories, courses } from '../data/coursesData';
import { 
  Star, 
  ArrowRight, 
  Layers,
  GraduationCap
} from 'lucide-react';

export default function CoursesSection({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="py-24 relative bg-[#E5ECF4] border-t border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers size={14} className="text-indigo-700" />
            Structured Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curated Programs for Every Math Milestone
          </h2>
          <p className="text-slate-700 mt-4 text-base sm:text-lg">
            From establishing joyful number sense in early grades to mastering Olympiad proofs and AP Calculus 5s. Each pathway is mapped to international competitive standards.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                    : 'bg-[#D2DFEE] text-slate-800 hover:text-slate-950 hover:bg-[#C5D5E7] border border-[#B8CADF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl bg-[#DFE7F2] border border-[#BAC9DC] hover:border-indigo-400 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Top Row: Level & Tag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-700 bg-[#D2DFEE] px-2.5 py-1 rounded-md border border-[#B8CADF]">
                    {course.level}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-indigo-100 text-indigo-800 border-indigo-200">
                    {course.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mb-2.5">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 text-sm leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Key Skills Pills */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                    Key Mastery Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#D2DFEE] text-slate-800 px-2.5 py-1 rounded-md border border-[#B8CADF] font-mono font-semibold"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="pt-5 border-t border-[#CAD8EA]">
                {/* Meta details */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-700 mb-4 bg-[#D2DFEE] py-2 rounded-lg border border-[#B8CADF]">
                  <div>
                    <span className="block font-bold text-slate-950">{course.lessonsCount}</span>
                    <span className="text-[10px] text-slate-600 font-medium">Live Lessons</span>
                  </div>
                  <div className="border-x border-[#B8CADF]">
                    <span className="block font-bold text-slate-950">{course.durationWeeks} wks</span>
                    <span className="text-[10px] text-slate-600 font-medium">Duration</span>
                  </div>
                  <div>
                    <span className="block font-bold text-amber-700 flex items-center justify-center gap-0.5">
                      <Star size={11} className="fill-amber-500 text-amber-500" /> {course.rating}
                    </span>
                    <span className="text-[10px] text-slate-600 font-medium">{course.reviewsCount} reviews</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-[11px]">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold">{course.instructor}</div>
                      <div className="text-[10px] text-slate-600 font-medium">{course.instructorTitle}</div>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onOpenBooking(course.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs"
                >
                  <span>Book Free Trial for this Track</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Curriculum Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-100 via-[#DFE7F2] to-purple-100 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Need a customized syllabus for your school curriculum?</h4>
              <p className="text-sm text-slate-700">
                We adapt 1-on-1 sessions to IB, Cambridge IGCSE, AP, Common Core, and CBSE syllabi.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('Custom Curriculum Consultation')}
            className="shrink-0 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
          >
            Request Custom Plan
          </button>
        </div>

      </div>
    </section>
  );
}
