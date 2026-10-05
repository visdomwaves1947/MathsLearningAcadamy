import React from 'react';
import { Clock, ChevronRight, ChevronLeft } from 'lucide-react';

export default function StudyHoursSelector({ data, onUpdate, onNext, onBack }) {
  const hours = [1, 2, 3, 4, 5, 6, 8, 10];

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Daily Study Time</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">How much time can you realistically dedicate to Mathematics each day?</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {hours.map((h) => {
          const isSelected = data === h;
          return (
            <div 
              key={h}
              onClick={() => onUpdate(h)}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected 
                ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500 shadow-md transform -translate-y-1' 
                : 'bg-white dark:bg-[#131927] border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-lg'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors ${isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40 group-hover:text-amber-500'}`}>
                <Clock size={20} />
              </div>
              <div className="text-2xl font-black mb-0.5 text-slate-900 dark:text-white">{h}{h === 10 ? '+' : ''}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{h === 1 ? 'Hour' : 'Hours'}</div>
            </div>
          );
        })}
        
        <div 
          onClick={() => {
            const custom = prompt("Enter custom hours per day:");
            if(custom && !isNaN(custom)) onUpdate(parseInt(custom));
          }}
          className="group flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 cursor-pointer bg-slate-50 dark:bg-slate-800/50 sm:col-span-4 lg:col-span-1"
        >
          <div className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-1">Custom</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enter Hours</div>
        </div>
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
            ? 'bg-amber-500 text-white hover:bg-amber-600 hover:scale-105 shadow-md hover:shadow-xl hover:shadow-amber-500/20' 
            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
          }`}
        >
          Next Step <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
