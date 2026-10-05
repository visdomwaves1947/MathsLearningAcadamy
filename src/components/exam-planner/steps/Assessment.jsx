import React from 'react';
import { Target, Zap, ChevronRight, Check } from 'lucide-react';

export default function Assessment({ onComplete, onSkip, onBack }) {
  // A simulated assessment step where a student would theoretically take a test.
  // We'll provide a button to simulate taking it, or skip.

  const simulateAssessment = () => {
    // Return dummy strength scores
    const dummyScore = {
      algebra: 78,
      geometry: 64,
      trigonometry: 52,
      statistics: 81
    };
    onComplete(dummyScore);
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500 items-center justify-center py-10">
      
      <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-8 relative">
        <Zap size={40} className="text-indigo-600 dark:text-indigo-400" />
        <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-[#0B0F19]">
          <Target size={14} className="text-white" />
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 text-center">Take a Quick Maths Assessment</h2>
      
      <p className="text-slate-600 dark:text-slate-400 text-lg text-center max-w-lg mb-10 leading-relaxed">
        Before we generate your personalized plan, taking a quick 5-10 question assessment helps our AI understand your exact strengths and weak areas.
      </p>

      <div className="bg-white dark:bg-[#131927] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm w-full max-w-md mb-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Check size={16} />
          </div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Measures Concept Strength & Speed</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Check size={16} />
          </div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Identifies specific weak topics</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Check size={16} />
          </div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Takes less than 10 minutes</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <button 
          onClick={simulateAssessment}
          className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 hover:scale-105 transition-all shadow-lg shadow-indigo-500/20"
        >
          Start Assessment <ChevronRight size={20} />
        </button>
        <button 
          onClick={onSkip}
          className="flex-1 px-8 py-4 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
        >
          Skip for Now
        </button>
      </div>
      
      <button 
        onClick={onBack}
        className="mt-8 text-sm font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        Go Back to Syllabus
      </button>

    </div>
  );
}
