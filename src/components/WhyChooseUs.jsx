import React from 'react';

export default function WhyChooseUs({ onOpenBooking }) {
  const features = [
    {
      title: "Official Curriculum Aligned",
      subtitle: "100% matched with school boards and competitive exam standards.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Expert Math Faculty",
      subtitle: "Learn from Olympiad medalists and veteran paper examiners.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Chapter-Wise Video Lessons",
      subtitle: "Deep analytical breakdowns of every mathematical concept.",
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Timed Mock Tests",
      subtitle: "Real simulators of board and competitive examinations.",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Previous Year Papers",
      subtitle: "Fully solved papers with step-by-step shortcuts.",
      image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Daily Practice Planners",
      subtitle: "Stay disciplined with scheduled checks and daily goals.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Expected Exam Questions",
      subtitle: "High yield predictions for maximum marks in your exams.",
      image: "https://i.pinimg.com/236x/73/5c/e6/735ce64e4b82a18fed47cf1bf6697aa8.jpg"
    },
    {
      title: "Smart Progress Tracking",
      subtitle: "Visual analytics of syllabus completed and weak areas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interactive Graphing Lab",
      subtitle: "Visualize equations and geometry in real-time.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Gamified Leaderboards",
      subtitle: "Study together with peers and reach the top spot.",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Signed Certificates",
      subtitle: "Official course completion credentials to showcase your skills.",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "100% Concept Clarity",
      subtitle: "Zero memorization, only pure mathematical understanding.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0B0F19] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Thousands Choose Maths Learning Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            The premier learning platform designed specifically to build strong foundations, match board requirements, and ensure competitive exam success.
          </p>
        </div>

        {/* 12 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-[#F8FAFC] dark:bg-[#131927] rounded-[20px] overflow-hidden border border-[#E2E8F0] dark:border-[#1E293B] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer group"
              onClick={onOpenBooking}
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-center bg-white dark:bg-[#131927]">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
