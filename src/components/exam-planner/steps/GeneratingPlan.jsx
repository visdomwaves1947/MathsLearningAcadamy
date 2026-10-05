import React, { useEffect, useState } from 'react';
import { Loader, Sparkles, Brain, Code, CheckCircle } from 'lucide-react';

export default function GeneratingPlan({ formData, onComplete }) {
  const [loadingText, setLoadingText] = useState('Analyzing your preparation level...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [
      { text: 'Analyzing your preparation level...', time: 1000 },
      { text: 'Cross-referencing syllabus weightage...', time: 2000 },
      { text: 'Allocating daily study hours...', time: 3500 },
      { text: 'Generating smart revision blueprint...', time: 5000 },
      { text: 'Finalizing projected score calculations...', time: 6500 }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLoadingText(step.text);
        setProgress((index + 1) * 20);
      }, step.time);
    });

    const timer = setTimeout(() => {
      onComplete();
    }, 7500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col h-full items-center justify-center py-12 animate-in fade-in duration-500">
      
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-indigo-500 blur-[40px] opacity-20 rounded-full animate-pulse"></div>
        <div className="w-32 h-32 relative bg-white dark:bg-[#131927] rounded-full shadow-2xl border-4 border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center">
          <Loader size={48} className="text-indigo-600 dark:text-indigo-400 animate-spin" />
          <Brain size={24} className="absolute text-indigo-600 dark:text-indigo-400 bg-white dark:bg-[#131927]" />
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 text-center">
        Building Your Blueprint
      </h2>
      
      <div className="h-8 flex items-center justify-center mb-10">
        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg animate-pulse">
          {loadingText}
        </p>
      </div>

      <div className="w-full max-w-md space-y-2 mb-12">
        <div className="flex justify-between text-sm font-bold text-slate-500">
          <span>AI Engine Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
        <div className="bg-white dark:bg-[#131927] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase">Target Score</div>
            <div className="font-bold text-slate-900 dark:text-white">{formData.targetScore}%</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#131927] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Code size={20} />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase">Algorithm</div>
            <div className="font-bold text-slate-900 dark:text-white">Active</div>
          </div>
        </div>
      </div>

    </div>
  );
}
