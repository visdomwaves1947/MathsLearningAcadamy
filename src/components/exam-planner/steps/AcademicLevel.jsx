import React from 'react';
import { BookOpen, Award, GraduationCap, ChevronRight } from 'lucide-react';

export default function AcademicLevel({ data, onUpdate, onNext }) {
  const levels = [
    { id: 'inter-1', label: 'Inter 1st Year', desc: 'Mathematics 1A & 1B', icon: BookOpen },
    { id: 'inter-2', label: 'Inter 2nd Year', desc: 'Mathematics 2A & 2B', icon: Award }
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Select Your Academic Level</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">We'll tailor the mathematical concepts to your exact grade.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {levels.map((level) => {
          const Icon = level.icon;
          const isSelected = data === level.id;
          return (
            <div 
              key={level.id}
              onClick={() => onUpdate(level.id)}
              className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected 
                ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-md transform -translate-y-1' 
                : 'bg-white dark:bg-[#131927] border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
              }`}>
                <Icon size={24} />
              </div>
              <h3 className={`font-bold text-lg mb-1 transition-colors ${isSelected ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-900 dark:text-white'}`}>
                {level.label}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{level.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-auto pt-6 flex justify-end border-t border-slate-200 dark:border-slate-800">
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
