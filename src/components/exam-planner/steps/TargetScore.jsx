import React from 'react';
import { Target, ChevronRight, ChevronLeft } from 'lucide-react';

export default function TargetScore({ data, onUpdate, onNext, onBack }) {
  const scores = [50, 60, 70, 75, 80, 85, 90, 95, 100];

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Target Score</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">What score are you aiming for in your upcoming exam?</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
        {scores.map((score) => {
          const isSelected = data === score;
          return (
            <div 
              key={score}
              onClick={() => onUpdate(score)}
              className={`group flex flex-col items-center justify-center py-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected 
                ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-md transform -translate-y-1' 
                : 'bg-white dark:bg-[#131927] border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg'
              }`}
            >
              <div className={`text-2xl sm:text-3xl font-black mb-1 transition-colors ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 group-hover:text-indigo-500'}`}>
                {score}%
              </div>
            </div>
          );
        })}
        
        <div 
          onClick={() => {
            const custom = prompt("Enter custom target score percentage (e.g. 98):");
            if(custom && !isNaN(custom) && custom <= 100) onUpdate(parseInt(custom));
          }}
          className="group flex flex-col items-center justify-center py-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer bg-slate-50 dark:bg-slate-800/50"
        >
          <div className="text-lg font-bold text-slate-500 dark:text-slate-400">Custom</div>
        </div>
      </div>

      {data && (
        <div className="mb-8 p-6 bg-slate-900 dark:bg-slate-800 rounded-2xl flex items-center justify-between text-white shadow-xl shadow-slate-900/10 transform animate-in fade-in zoom-in duration-300">
          <div>
            <p className="text-slate-400 font-medium mb-1">Your Target Goal</p>
            <div className="text-3xl font-black">{data}%</div>
          </div>
          <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <Target size={32} className="text-indigo-400" />
          </div>
        </div>
      )}

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
