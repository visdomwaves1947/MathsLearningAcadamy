import React, { useState } from 'react';
import { ArrowRight, Info, ChevronLeft, Zap } from 'lucide-react';

export default function PhysicsCurriculum({ onEnroll }) {
  const [activeEnroll, setActiveEnroll] = useState(null);
  const [activeExplore, setActiveExplore] = useState(null);

  const physicsModules = [
    {
      id: 'phy-1st-year',
      name: '1st Year Junior Intermediate Physics',
      category: 'AP / TS Intermediate',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=600&auto=format&fit=crop',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      desc: 'Complete mastery of Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion, Gravitation, Mechanical Properties, and Thermodynamics for 60/60 marks.'
    },
    {
      id: 'phy-2nd-year',
      name: '2nd Year Senior Intermediate Physics',
      category: 'AP / TS Intermediate',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop',
      color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      desc: 'Ray Optics, Wave Optics, Electrostatics, Current Electricity, Moving Charges, Electromagnetic Induction, Alternating Current, and Modern Physics.'
    },
    {
      id: 'phy-mechanics',
      name: 'Classical Mechanics & Motion Mastery',
      category: 'Core Physics',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop',
      color: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
      desc: 'Free-body diagrams, conservation laws, moment of inertia calculations, orbital mechanics, and fluid dynamics numerical shortcuts.'
    },
    {
      id: 'phy-electromagnetism',
      name: 'Electromagnetism & AC Circuits',
      category: 'Advanced Theory',
      image: 'https://images.unsplash.com/photo-1517976487541-b0e513813a48?q=80&w=600&auto=format&fit=crop',
      color: 'bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
      desc: 'Coulomb law, Gauss law, Kirchhoff laws, potentiometer problems, Biot-Savart law, cyclotron, resonance circuits, and electromagnetic waves.'
    },
    {
      id: 'phy-optics',
      name: 'Ray & Wave Optics Simulation',
      category: 'Experimental Physics',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop',
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      desc: 'Prism formulas, telescope & microscope ray diagrams, Huygens wave theory, Young double slit interference, and polarization calculations.'
    },
    {
      id: 'phy-thermo',
      name: 'Thermal Physics & Kinetic Theory',
      category: 'Thermodynamics',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop',
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      desc: 'First and second laws of thermodynamics, Carnot engine efficiency, specific heat capacities, ideal gas equations, and heat conduction.'
    },
    {
      id: 'phy-jee-neet',
      name: 'JEE Main, Advanced & NEET Problem Set',
      category: 'Entrance Mastery',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      desc: 'Speed-solving tricks, multi-concept problems, previous 15-year questions, and high-difficulty numerical problem sets.'
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
            <Zap size={20} />
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-1 relative overflow-hidden">
          <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
            {mod.category}
          </div>
          <h4 
            className="text-xl font-bold text-slate-900 dark:text-white mb-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
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
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-blue-500/20"
              >
                Regular Board Batch (60/60)
              </button>
              <button 
                onClick={() => {
                  setActiveEnroll(null);
                  if (onEnroll) onEnroll(`${mod.name} - Intensive Score Booster`);
                }}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-indigo-500/20"
              >
                JEE & NEET Rank Booster
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
    <section id="physics-curriculum" className="py-20 sm:py-24 bg-[#EBF0F7] dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-bold mb-4">
            <span>Official AP & TS Intermediate Physics Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Comprehensive Physics Modules
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
            Explore dedicated modules designed for first & second-year intermediate board dominance and competitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {physicsModules.map(renderModuleCard)}
        </div>
      </div>
    </section>
  );
}
