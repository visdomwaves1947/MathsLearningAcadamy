import React, { useState } from 'react';
import { BookOpen, ArrowRight, Info, ChevronLeft, Feather, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UrduCurriculum({ onEnroll }) {
  const [activeEnroll, setActiveEnroll] = useState(null);
  const [activeExplore, setActiveExplore] = useState(null);
  const navigate = useNavigate();

  const urduModules = [
    {
      id: 'eng-1st-year',
      name: '1st Year Junior Urdu',
      category: 'AP / TS Intermediate',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop',
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      desc: 'Complete coverage of Junior Inter Prose, Poetry, Short Stories, Parts of Speech, Articles, Prepositions, Tenses, and Error Correction for 100/100 marks.'
    },
    {
      id: 'eng-2nd-year',
      name: '2nd Year Senior Urdu',
      category: 'AP / TS Intermediate',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop',
      color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      desc: 'Senior Inter Prose, Classic Poetry, Non-detailed texts, Letter Writing, Curriculum Vitae (CV) formatting, and Phonetics transcription for board exams.'
    },
    {
      id: 'eng-grammar',
      name: 'Grammar & Syntax Mastery',
      category: 'Core Language',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      desc: 'Master Active & Passive Voice, Direct & Indirect Speech, Degrees of Comparison, Question Tags, Sentence Transformation, and Clauses without memorization.'
    },
    {
      id: 'eng-comprehension',
      name: 'Reading Comprehension & Précis',
      category: 'Critical Thinking',
      image: 'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?q=80&w=600&auto=format&fit=crop',
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      desc: 'Fast reading strategies, skimming & scanning unseen passages, note-making blueprints, précis drafting, and inference-based question solving.'
    },
    {
      id: 'eng-writing',
      name: 'Essay & Creative Composition',
      category: 'Expressive Writing',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop',
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      desc: 'Structured essay templates, descriptive writing, persuasive articles, business & official letters, dialogue composition, and speech writing.'
    },
    {
      id: 'eng-phonetics',
      name: 'Phonetics & Spoken Fluency',
      category: 'Pronunciation & Speech',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
      color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      desc: 'Learn International Phonetic Alphabet (IPA) symbols, silent letters, syllable stress, intonation patterns, and confident public speaking.'
    },
    {
      id: 'eng-competitive',
      name: 'CUET, IELTS & Competitive Verbal',
      category: 'Entrance & Global',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      desc: 'High-frequency vocabulary, verbal analogies, idiom roots, contextual usage, sentence completion, and speed reading for CUET, EAMCET & IELTS.'
    }
  ];

  const renderModuleCard = (mod) => {
    const isEnrolling = activeEnroll === mod.id;
    const isExploring = activeExplore === mod.id;

    return (
      <div key={mod.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 h-[380px] group hover:-translate-y-1 relative">
        <div 
          className="h-40 w-full overflow-hidden relative shrink-0 cursor-pointer"
          onClick={() => setActiveExplore(mod.id)}
        >
          <img src={mod.image} alt={mod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/20 text-white`}>
            <BookOpen size={20} />
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-1 relative overflow-hidden">
          <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
            {mod.category}
          </div>
          <h4 
            className="text-xl font-bold text-slate-900 dark:text-white mb-3 cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            onClick={() => setActiveExplore(mod.id)}
          >
            {mod.name}
          </h4>

          {/* Default View */}
          <div className={`flex flex-col mt-auto transition-opacity duration-300 ${isExploring || isEnrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
              {mod.desc}
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveExplore(mod.id)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Info size={16} /> Explore
              </button>
              <button 
                onClick={() => setActiveEnroll(mod.id)}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-white text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                Enroll <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Explore View */}
          <div className={`absolute inset-0 bg-white dark:bg-slate-900 p-5 flex flex-col z-10 transition-transform duration-300 ${isExploring ? 'translate-y-0' : 'translate-y-full'}`}>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{mod.name} Overview</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed overflow-y-auto pr-1 mb-4 flex-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
              {mod.desc}
            </p>
            <button 
              onClick={() => setActiveExplore(null)}
              className="w-full mt-auto py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} /> Back
            </button>
          </div>

          {/* Enroll View */}
          <div className={`absolute inset-0 bg-white dark:bg-slate-900 p-5 flex flex-col z-10 transition-transform duration-300 ${isEnrolling ? 'translate-y-0' : 'translate-y-full'}`}>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 text-center">Select Track for {mod.name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <button 
                onClick={() => {
                  setActiveEnroll(null);
                  onEnroll && onEnroll(`${mod.name} - Regular Batch`);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-amber-500/20"
              >
                Regular Board Batch
              </button>
              <button 
                onClick={() => {
                  setActiveEnroll(null);
                  onEnroll && onEnroll(`${mod.name} - Intensive Score Booster`);
                }}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-indigo-500/20"
              >
                100/100 Intensive Booster
              </button>
            </div>
            <button 
              onClick={() => setActiveEnroll(null)}
              className="w-full mt-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800" id="urdu-curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Complete Urdu Academic Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Urdu Curriculum & Modules
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-xl font-medium">
            Complete subject-wise mastery for Junior & Senior Intermediate Urdu. Explore our structured modules and enroll to master grammar, literature, and expressive writing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {urduModules.map(renderModuleCard)}
        </div>
      </div>
    </section>
  );
}
