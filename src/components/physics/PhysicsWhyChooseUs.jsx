import React from 'react';

export default function PhysicsWhyChooseUs({ onOpenBooking }) {
  const features = [
    {
      title: "Official Board Curriculum Aligned",
      subtitle: "100% matched with TS BIE, BIEAP, CBSE, JEE Main & Advanced, and NEET Physics exam syllabi.",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Master Physics Faculty & Rankers",
      subtitle: "Learn from top IITians, university professors, and veteran board examiners with 15+ years experience.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Step-by-Step Derivation Blueprints",
      subtitle: "Comprehensive step-by-step proofs for Gauss Law, Carnot Engine, Wave Optics, and EM Induction for 60/60 marks.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Numerical Problem-Solving Labs",
      subtitle: "Master HC Verma, Irodov, and board numericals using intuitive mental visualization and dimensional tricks.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "10+ Years Previous Solved Papers",
      subtitle: "Fully solved board papers with 60/60 model answer keys and high-yield question predictions.",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Daily Physics Formula & Unit Planners",
      subtitle: "Curated formula cheat sheets, dimensional analysis charts, and SI conversion mnemonics.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Expected Board VSAQs & LAQs Blueprints",
      subtitle: "High-yield 8-mark and 4-mark question predictions with foolproof presentation guidelines.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interactive 3D Simulation Labs",
      subtitle: "Simulate projectile trajectories, ray optics reflections, magnetic fields, and atomic transitions in real-time.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Circuit & Ray Diagram Studios",
      subtitle: "Master prism refraction, telescope ray diagrams, Wheatstone bridges, and logic gates effortlessly.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Practical Lab & Viva Masterclasses",
      subtitle: "Complete guidance on Vernier Calipers, Screw Gauge, Simple Pendulum, and Sonometer lab exams.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Official Physics Certification",
      subtitle: "Accredited certificates demonstrating mastery of Newtonian mechanics, electromagnetism, and modern physics.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "100% Concept & Physical Intuition",
      subtitle: "Zero blind rote learning—develop deep physical intuition that unlocks top ranks in JEE, NEET, and Boards.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0B0F19] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Thousands Choose Physics Learning Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            The premier platform engineered to build profound physical intuition, flawless derivations, 60/60 board marks, and top competitive ranks.
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
