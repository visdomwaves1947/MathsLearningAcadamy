import React, { useState } from 'react';
import { ArrowRight, Info, ChevronLeft, FlaskConical } from 'lucide-react';

export default function ChemistryCurriculum({ onEnroll }) {
  const [activeEnroll, setActiveEnroll] = useState(null);
  const [activeExplore, setActiveExplore] = useState(null);

  const chemistryModules = [
    {
      id: 'chem-1st-year',
      name: '1st Year Junior Intermediate Chemistry',
      category: 'AP / TS Intermediate',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop',
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      desc: 'Atomic Structure, Periodic Classification, Chemical Bonding, States of Matter, Thermodynamics, Equilibrium, Hydrogen, s/p Block, and Organic Chemistry basics.'
    },
    {
      id: 'chem-2nd-year',
      name: '2nd Year Senior Intermediate Chemistry',
      category: 'AP / TS Intermediate',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop',
      color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      desc: 'Solid State, Solutions, Electrochemistry, Chemical Kinetics, Surface Chemistry, Metallurgy, p/d/f Block, Coordination Compounds, Haloalkanes to Amines, and Biomolecules.'
    },
    {
      id: 'chem-organic',
      name: 'Organic Reaction Mechanisms & Named Reactions',
      category: 'Organic Chemistry',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop',
      color: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
      desc: 'Master SN1/SN2, Aldol condensation, Cannizzaro reaction, Reimer-Tiemann, Diazotization, and multi-step organic synthesis conversion flowcharts.'
    },
    {
      id: 'chem-physical',
      name: 'Physical Chemistry & Numerical Mastery',
      category: 'Physical Chemistry',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      desc: 'Colligative properties, Nernst equation, rate laws, Arrhenius activation energy, Bragg equation, and equilibrium constant numerical formulas.'
    },
    {
      id: 'chem-inorganic',
      name: 'Inorganic Trends & Coordination Chemistry',
      category: 'Inorganic Chemistry',
      image: 'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?q=80&w=600&auto=format&fit=crop',
      color: 'bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
      desc: 'Werner theory, crystal field splitting (CFT), IUPAC nomenclature of complexes, lanthanoid contraction, and industrial contact/Ostwald processes.'
    },
    {
      id: 'chem-bonding',
      name: 'Chemical Bonding & Molecular Orbitals',
      category: 'Structural Chemistry',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      desc: 'VSEPR geometry, orbital hybridization (sp, sp2, sp3, dsp2), MOT bond order diagrams, hydrogen bonding, and resonance structures.'
    },
    {
      id: 'chem-neet-jee',
      name: 'NEET & JEE Main High-Yield Chemistry Bootcamp',
      category: 'Entrance Mastery',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop',
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      desc: 'Speed recall shortcuts, high-frequency NCERT line-by-line questions, previous 15-year questions, and full-length speed mock tests.'
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
          <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/20 text-white">
            <FlaskConical size={20} />
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-1 relative overflow-hidden">
          <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
            {mod.category}
          </div>
          <h4 
            className="text-xl font-bold text-slate-900 dark:text-white mb-3 cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
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
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                Enroll <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Explore View */}
          <div className={`absolute inset-0 bg-white dark:bg-slate-900 p-5 flex flex-col z-10 transition-transform duration-300 ${isExploring ? 'translate-y-0' : 'translate-y-full'}`}>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{mod.name}</h4>
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
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 text-center">Select Batch Track</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <button 
                onClick={() => {
                  setActiveEnroll(null);
                  if (onEnroll) onEnroll(`${mod.name} - Regular Batch`);
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-emerald-500/20"
              >
                Regular Board Batch (60/60)
              </button>
              <button 
                onClick={() => {
                  setActiveEnroll(null);
                  if (onEnroll) onEnroll(`${mod.name} - Intensive Score Booster`);
                }}
                className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-teal-500/20"
              >
                NEET & JEE Score Booster
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
    <section id="chemistry-curriculum" className="py-20 sm:py-24 bg-[#EBF0F7] dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-bold mb-4">
            <span>Official AP & TS Intermediate Chemistry Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Comprehensive Chemistry Modules
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
            Explore dedicated modules designed for first & second-year intermediate board dominance and competitive rank achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chemistryModules.map(renderModuleCard)}
        </div>
      </div>
    </section>
  );
}
