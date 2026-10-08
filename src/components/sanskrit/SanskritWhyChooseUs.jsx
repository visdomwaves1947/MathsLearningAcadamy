import React from 'react';

export default function SanskritWhyChooseUs({ onOpenBooking }) {
  const features = [
    {
      title: "Guaranteed 99/100 Board Blueprint",
      subtitle: "Master the exact presentation style that board examiners reward with full marks.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Master Sanskrit Scholars & Examiners",
      subtitle: "Learn directly from university Vidwans, Sahitya Acharyas, and veteran paper evaluators.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Line-by-Line Shloka Anvaya & Meaning",
      subtitle: "Complete word-by-word breakdowns, padacheda, grammatical notes, and reference contexts.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sandhi & Samasa Shortcut Rules",
      subtitle: "Crack complicated vowel/consonant sandhis and compound identifications with formula keys.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "10+ Years Previous Solved Board Papers",
      subtitle: "Fully solved board exam papers with exact question numbering and flawless handwriting tips.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Shabda & Dhatu Rupani Quick Tables",
      subtitle: "Color-coded declension charts (Rama, Hari, Guru, etc.) for zero-effort board memorization.",
      image: "https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "High-Yield Essay Blueprints & Gadya",
      subtitle: "Model Sanskrit essay answers, character sketches, and moral story summaries.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Zero Prior Background Required",
      subtitle: "Start even if you studied another language in school; our bilingual approach makes it simple.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pronunciation & Shloka Audio Chants",
      subtitle: "Native audio recitations to develop correct Vedic/classical Sanskrit meter and intonation.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Timed Board Model Exam Series",
      subtitle: "Exact 3-hour board pattern simulator tests with line-by-line mark evaluation by teachers.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Official Sanskrit Distinction Badges",
      subtitle: "Credentials recognizing high-achievement mastery of classical Sanskrit language & literature.",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Overall Intermediate Rank Booster",
      subtitle: "Scoring 99 in Sanskrit acts as the ultimate cushion to secure 980+ overall board totals.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0B0F19] relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Students Choose Sanskrit Learning Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Designed to build deep appreciation for Sanskrit literature and secure effortless 99/100 marks in intermediate board exams.
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
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
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
