import React from 'react';

export default function ChemistryWhyChooseUs({ onOpenBooking }) {
  const features = [
    {
      title: "100% AP & TS Board Syllabus Match",
      subtitle: "Tailored to BIEAP & TS BIE chemistry blueprints with exact 60/60 mark distributions.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Master Organic & NEET Specialists",
      subtitle: "Mentored by university PhD professors and seasoned intermediate board examiners.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Organic Reaction Mechanism Maps",
      subtitle: "Visual flowcharts connecting conversions, named reactions, and electrophilic attacks.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Physical Chemistry Shortcut Formulas",
      subtitle: "Rapid mole concept, electrochemistry, and chemical kinetics numerical solving techniques.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "10+ Years Previous Solved Board Papers",
      subtitle: "Full-length solved board papers with 60/60 presentation style and step-mark secrets.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Inorganic Chemistry Trend Cheat Sheets",
      subtitle: "Memorize p-block, d-block, and coordination compounds without painful rote confusion.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "High-Probability Board Question Bank",
      subtitle: "Curated 8-mark, 4-mark, and 2-mark predictions with 95%+ historical alignment.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interactive Molecular Modeling Lab",
      subtitle: "Visualize hybridization, VSEPR shapes, crystal lattices, and isomerism in 3D.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Salt Analysis & Practical Viva Prep",
      subtitle: "Comprehensive qualitative salt analysis schemes, titration math, and viva-voce bank.",
      image: "https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "NEET & JEE Main High-Yield Bridge",
      subtitle: "Transform board reaction fundamentals into lightning-fast objective exam scoring.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Official Subject Mastery Credentials",
      subtitle: "Demonstrated score achievements verified through timed board simulation tests.",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Zero Rote Memorization Philosophy",
      subtitle: "Understand electronegativity, electron displacement, and thermodynamics deeply.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0B0F19] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Students Choose Chemistry Learning Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Designed to build clear chemical intuition, flawless reaction recall, and 60/60 board examination mastery.
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
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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
