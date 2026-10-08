import React from 'react';

export default function PhysicsWhyChooseUs({ onOpenBooking }) {
  const features = [
    {
      title: "100% AP & TS Board Syllabus Match",
      subtitle: "Tailored to BIEAP & TS BIE intermediate blueprints with 60/60 question distributions.",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Master Physics & JEE Faculty",
      subtitle: "Mentored by veteran board examiners and top IIT-JEE physics ranker specialists.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Step-by-Step Derivation Blueprints",
      subtitle: "Complete blueprints for 8-mark and 4-mark derivations with exact board marking schemes.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Timed Numerical Problem Solving",
      subtitle: "Master tricky kinematics, circuits, and thermodynamics calculations with shortcut formulas.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "10+ Years Previous Solved Papers",
      subtitle: "Fully solved board exam question papers with 60/60 model answers and presentation tips.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Visual Formula Cheat Sheets",
      subtitle: "Chapter-wise formula sheets, unit dimensions, and sign convention summary cards.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Expected Board Questions & Weightage",
      subtitle: "High-probability predicted questions and chapter weightage maps for maximum score efficiency.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interactive 3D Physics Simulation Lab",
      subtitle: "Simulate electric fields, lenses, projectile trajectories, and magnetic induction visually.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Practical Examination Guidance",
      subtitle: "Complete experimental procedures, viva-voce questions, and error analysis guidance.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "JEE & NEET Numerical Bridge",
      subtitle: "Transition effortlessly from board derivations to competitive objective problem solving.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Official Subject Performance Badges",
      subtitle: "Demonstrated score achievements verified through timed full-syllabus board simulations.",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "100% Concept Clarity & Zero Blind Rote",
      subtitle: "Build real fundamental physical intuition that stays with you for entrance exams and engineering.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0B0F19] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Students Choose Physics Learning Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Engineered to build crystal-clear conceptual physics understanding, 60/60 board marks, and competitive problem-solving speed.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="group bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-44 w-full overflow-hidden relative">
                <img 
                  src={feat.image} 
                  alt={feat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
