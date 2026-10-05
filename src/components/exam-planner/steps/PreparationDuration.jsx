import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

export default function PreparationDuration({ data, onUpdate, onNext, onBack }) {
  const [mode, setMode] = useState('duration'); // 'duration' | 'date'
  const durations = [1, 3, 7, 15, 20, 30, 45, 60];

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const diffTime = Math.abs(selectedDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    onUpdate(diffDays);
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Time Remaining</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Select your exam date, or tell us how many days you have to prepare.</p>
      </div>

      <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-8 w-fit mx-auto sm:mx-0">
        <button 
          onClick={() => setMode('duration')}
          className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${mode === 'duration' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
        >
          Select Days
        </button>
        <button 
          onClick={() => setMode('date')}
          className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${mode === 'date' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
        >
          Select Date
        </button>
      </div>

      {mode === 'duration' ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {durations.map((days) => (
            <div 
              key={days}
              onClick={() => onUpdate(days)}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                data === days 
                ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 shadow-md transform -translate-y-1' 
                : 'bg-white dark:bg-[#131927] border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg'
              }`}
            >
              <div className="text-3xl font-black mb-1">{days}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{days === 1 ? 'Day' : 'Days'}</div>
            </div>
          ))}
          <div 
            onClick={() => {
              const custom = prompt("Enter custom number of days:");
              if(custom && !isNaN(custom)) onUpdate(parseInt(custom));
            }}
            className="group flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300 cursor-pointer bg-slate-50 dark:bg-slate-800/50"
          >
            <div className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-1">Custom</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enter Days</div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto sm:mx-0 bg-white dark:bg-[#131927] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Select your exam date</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="date"
              min={new Date().toISOString().split('T')[0]}
              onChange={handleDateChange}
              className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl py-4 pl-12 pr-4 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      )}

      {data && (
        <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-4 text-emerald-800 dark:text-emerald-300">
          <Clock size={24} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
          <p className="font-semibold text-lg">Your exam is in <strong>{data} {data === 1 ? 'day' : 'days'}</strong>. We'll build a high-intensity plan for this timeframe.</p>
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
            ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 shadow-md hover:shadow-xl hover:shadow-emerald-500/20' 
            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
          }`}
        >
          Next Step <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
