import React from 'react';
import { FileText, ChevronRight, ChevronLeft } from 'lucide-react';

export default function ExamSelector({ data, onUpdate, onNext, onBack }) {
  const exams = [
    { id: 'school', label: 'School Examination', desc: 'Standard class tests and unit exams' },
    { id: 'quarterly', label: 'Quarterly Examination', desc: 'First term major assessment' },
    { id: 'half-yearly', label: 'Half-Yearly Examination', desc: 'Mid-term comprehensive exams' },
    { id: 'pre-final', label: 'Pre-Final / Pre-Board', desc: 'Mock examination before finals' },
    { id: 'board', label: 'Board Examination', desc: 'Class 10 or 12 State/CBSE/ICSE Boards' },
    { id: 'final', label: 'Final Examination', desc: 'End of academic year tests' },
    { id: 'competitive', label: 'Competitive Examination', desc: 'Olympiads, JEE, SAT, etc.' },
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Which exam are you preparing for?</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Your study plan will adapt to the intensity of your exam.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {exams.map((exam) => {
          const isSelected = data === exam.id;
          return (
            <div 
              key={exam.id}
              onClick={() => onUpdate(exam.id)}
              className={`group flex items-center p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected 
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 shadow-md transform -translate-y-1' 
                : 'bg-white dark:bg-[#131927] border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors shrink-0 ${
                isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-600 dark:group-hover:text-blue-400'
              }`}>
                <FileText size={24} />
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-0.5 transition-colors ${isSelected ? 'text-blue-900 dark:text-blue-100' : 'text-slate-900 dark:text-white'}`}>
                  {exam.label}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{exam.desc}</p>
              </div>
              {isSelected && (
                <div className="ml-auto w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
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
            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md hover:shadow-xl hover:shadow-blue-500/20' 
            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
          }`}
        >
          Next Step <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
