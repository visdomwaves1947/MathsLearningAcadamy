import React from 'react';

export default function TeluguWhyChooseUs({ onOpenBooking }) {
  const features = [
    {
      title: "Official Board Curriculum Aligned",
      subtitle: "100% matched with TS BIE, BIEAP, CBSE, and competitive Telugu exam standards.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Master Literature & Language Faculty",
      subtitle: "Learn from university professors, published authors, and veteran board examiners.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Line-by-Line Poetry & Prose Breakdowns",
      subtitle: "Deep analytical notes, theme explanations, character sketches, and stanza annotations.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Timed Essay & Grammar Mock Tests",
      subtitle: "Real simulators of board examinations with time management techniques.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "10+ Years Previous Solved Papers",
      subtitle: "Fully solved board papers with 100/100 model answers and scoring secrets.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Daily Vocabulary & Reading Planners",
      subtitle: "Curated word banks, phrasal verbs, idioms, and reading habit builders.",
      image: "https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Expected Board Questions & Blueprints",
      subtitle: "High-yield essay predictions, letter formats, and summary blueprints for maximum marks.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Smart Writing & Progress Tracking",
      subtitle: "Automated analysis of vocabulary richness, grammar precision, and syllabus mastery.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interactive Phonetics & Grammar Lab",
      subtitle: "Interactive IPA phonetic transcriptions, sentence transformations, and tense charts.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Speech & Pronunciation Clinics",
      subtitle: "Build spoken Telugu confidence, public speaking delivery, and accent clarity.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Official Language Certificates",
      subtitle: "Credentials showcasing advanced Telugu writing, literature, and communication mastery.",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "100% Concept & Fluency Clarity",
      subtitle: "Zero mindless rote memorization—only genuine mastery of language mechanics.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0B0F19] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Thousands Choose Telugu Learning Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            The premier platform engineered to build impeccable Telugu grammar, deep literary appreciation, 100/100 board scores, and articulate spoken fluency.
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
