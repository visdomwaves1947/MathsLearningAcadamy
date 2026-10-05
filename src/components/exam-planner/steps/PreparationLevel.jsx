import React from 'react';
import { CircleDot, ChevronRight, ChevronLeft } from 'lucide-react';

export default function PreparationLevel({ data, onUpdate, onNext, onBack }) {
  const levels = [
    { 
      id: 'beginner', 
      label: 'Just Starting', 
      desc: "I haven't started yet.", 
      color: 'rose', 
      bg: 'bg-rose-50 dark:bg-rose-900/20', 
      border: 'border-rose-500',
      icon: 'text-rose-500'
    },
    { 
      id: 'basic', 
      label: 'Basic Preparation', 
      desc: "I know some concepts.", 
      color: 'amber', 
      bg: 'bg-amber-50 dark:bg-amber-900/20', 
      border: 'border-amber-500',
      icon: 'text-amber-500'
    },
    { 
      id: 'good', 
      label: 'Good Preparation', 
      desc: "I have completed several chapters.", 
      color: 'emerald', 
      bg: 'bg-emerald-50 dark:bg-emerald-900/20', 
      border: 'border-emerald-500',
      icon: 'text-emerald-500'
    },
    { 
      id: 'advanced', 
      label: 'Almost Ready', 
      desc: "I mainly need revision and tests.", 
      color: 'blue', 
      bg: 'bg-blue-50 dark:bg-blue-900/20', 
      border: 'border-blue-500',
      icon: 'text-blue-500'
    }
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Current Preparation Level</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">How prepared are you right now? Be honest, this helps us create the best plan.</p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {levels.map((level) => {
          const isSelected = data === level.id;
          return (
            <div 
              key={level.id}
              onClick={() => onUpdate(level.id)}
              className={`group flex items-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected 
                ? `${level.bg} ${level.border} shadow-md transform -translate-x-2` 
                : 'bg-white dark:bg-[#131927] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
              }`}
            >
              <div className="mr-6 shrink-0">
                <CircleDot size={28} className={isSelected ? level.icon : 'text-slate-300 dark:text-slate-600 group-hover:text-slate-400'} />
              </div>
              <div>
                <h3 className={`font-bold text-xl mb-1 transition-colors ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                  {level.label}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">{level.desc}</p>
              </div>
              {isSelected && (
                <div className="ml-auto">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${level.icon} bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700`}>
                    Selected
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <button 
          onClick={onNext}
          disabled={!data}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
            data 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 shadow-md hover:shadow-xl hover:shadow-indigo-500/20' 
            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
          }`}
        >
          Next Step <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
