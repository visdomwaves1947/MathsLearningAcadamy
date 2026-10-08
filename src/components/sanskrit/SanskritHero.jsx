import React, { useState } from 'react';
import {
  ArrowRight,
  Scroll,
  Feather
} from 'lucide-react';

export default function SanskritHero({ onOpenBooking, onOpenVideoDemo }) {
  const [isBookOpen, setIsBookOpen] = useState(false);

  const handleStartLearning = () => {
    if (onOpenBooking) {
      onOpenBooking('Sanskrit Language Program');
    }
  };

  const handleExplorePractice = () => {
    const practiceSection = document.getElementById('sanskrit-curriculum') || document.getElementById('roadmaps') || document.getElementById('courses');
    if (practiceSection) {
      practiceSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenVideoDemo) {
      onOpenVideoDemo();
    }
  };

  return (
    <section className="relative pt-8 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16 overflow-hidden bg-[#EBF0F7] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-math-grid opacity-70 dark:opacity-40 pointer-events-none -z-10"></div>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-400/25 dark:bg-rose-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-amber-400/25 dark:bg-amber-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-orange-400/20 dark:bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-3">
              Master Sanskrit.{' '}
              <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-orange-600 dark:from-rose-400 dark:via-amber-400 dark:to-orange-300 bg-clip-text text-transparent">
                Score 99/100 with Ease.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              Unlock the secrets of Vyakaranam, Sandhi, Samasa, Shabda Rupani, and Kavya recitation. Engineered specifically to boost your AP & TS Intermediate Board aggregate to 99/100 marks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-7 w-full sm:w-auto">
              <button
                onClick={handleStartLearning}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-rose-500/50"
              >
                <span>Book Free Sanskrit Diagnostic</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={handleExplorePractice}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base border border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-slate-400 cursor-pointer"
              >
                <Scroll size={16} className="text-rose-500" />
                <span>Explore Shlokas & Grammar</span>
              </button>
            </div>

            {/* Board Selection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-xl mx-auto lg:mx-0">
              {/* Andhra Pradesh */}
              <div 
                onClick={() => onOpenBooking && onOpenBooking('AP Intermediate Sanskrit Track')}
                className="group relative bg-[#DFE7F2] dark:bg-[#131927] hover:bg-white dark:hover:bg-slate-800 p-4 rounded-2xl border border-[#BAC9DC] dark:border-[#243048] hover:border-rose-500/50 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center font-black text-sm shrink-0 group-hover:scale-110 transition-transform">
                    AP
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors flex items-center gap-1">
                      Andhra Pradesh Sanskrit <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">BIEAP 1st & 2nd Year 99/100 Blueprint</p>
                  </div>
                </div>
              </div>

              {/* Telangana */}
              <div 
                onClick={() => onOpenBooking && onOpenBooking('TS Intermediate Sanskrit Track')}
                className="group relative bg-[#DFE7F2] dark:bg-[#131927] hover:bg-white dark:hover:bg-slate-800 p-4 rounded-2xl border border-[#BAC9DC] dark:border-[#243048] hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-sm shrink-0 group-hover:scale-110 transition-transform">
                    TS
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors flex items-center gap-1">
                      Telangana Sanskrit <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">TS BIE 1st & 2nd Year Shlokas & Vyakaranam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Sanskrit Granth Book */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full border border-rose-500/20 dark:border-rose-400/10 animate-spin-slow pointer-events-none"></div>

              <div 
                onClick={() => setIsBookOpen(!isBookOpen)}
                className="relative z-10 w-64 h-84 sm:w-72 sm:h-96 rounded-2xl bg-gradient-to-br from-rose-700 via-amber-800 to-slate-950 text-white p-6 shadow-2xl border border-rose-400/30 flex flex-col justify-between cursor-pointer group hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300">
                    <Scroll size={12} />
                    <span>Devavani Sanskritam</span>
                  </div>
                  <span className="text-xs font-mono text-rose-200">99/100 Score</span>
                </div>

                <div className="my-auto text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-amber-300 group-hover:rotate-12 transition-transform">
                    <Feather size={36} />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-white mb-1">Intermediate Sanskrit</h2>
                  <p className="text-xs text-rose-200">Padya, Gadya & Vyakaranam</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Shlokas & Sandhi Tricks</span>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform">Click to Inspect →</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
