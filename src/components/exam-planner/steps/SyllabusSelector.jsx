import React, { useState } from 'react';
import { Book, CheckSquare, Square, ChevronRight, ChevronLeft } from 'lucide-react';

export default function SyllabusSelector({ data = [], onUpdate, onNext, onBack }) {
  const syllabus = [
    {
      category: 'Algebra',
      topics: ['Number Systems', 'Polynomials', 'Linear Equations', 'Quadratic Equations']
    },
    {
      category: 'Geometry',
      topics: ['Triangles', 'Circles', 'Coordinate Geometry']
    },
    {
      category: 'Trigonometry',
      topics: ['Ratios', 'Identities', 'Applications']
    },
    {
      category: 'Statistics',
      topics: ['Data Interpretation', 'Probability']
    },
    {
      category: 'Calculus',
      topics: ['Limits', 'Differentiation', 'Integration']
    }
  ];

  const handleToggle = (topic) => {
    if (data.includes(topic)) {
      onUpdate(data.filter(t => t !== topic));
    } else {
      onUpdate([...data, topic]);
    }
  };

  const handleSelectAll = () => {
    const allTopics = syllabus.flatMap(cat => cat.topics);
    if (data.length === allTopics.length) {
      onUpdate([]);
    } else {
      onUpdate(allTopics);
    }
  };

  const totalTopics = syllabus.reduce((acc, cat) => acc + cat.topics.length, 0);

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Syllabus Selection</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Select the topics included in your upcoming exam.</p>
        </div>
        <button 
          onClick={handleSelectAll}
          className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-lg"
        >
          {data.length === totalTopics ? 'Deselect All' : 'Select All Topics'}
        </button>
      </div>

      <div className="space-y-6 mb-8">
        {syllabus.map((category) => (
          <div key={category.category} className="bg-white dark:bg-[#131927] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <Book size={18} className="text-slate-400" />
              <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">{category.category}</h3>
            </div>
            <div className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.topics.map(topic => {
                const isSelected = data.includes(topic);
                return (
                  <div 
                    key={topic}
                    onClick={() => handleToggle(topic)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      isSelected 
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-100' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {isSelected ? (
                      <CheckSquare size={20} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                    ) : (
                      <Square size={20} className="text-slate-300 dark:text-slate-600 shrink-0" />
                    )}
                    <span className="font-medium text-sm sm:text-base">{topic}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19] sticky bottom-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <button 
          onClick={onNext}
          disabled={data.length === 0}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
            data.length > 0 
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
