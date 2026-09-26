import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  PhoneCall, 
  Flame
} from 'lucide-react';

export default function Navbar({ onOpenBooking, onOpenPortal }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <aside aria-label="Announcement" className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-purple-950 text-slate-100 text-xs sm:text-sm py-2.5 px-3 sm:px-4 font-medium relative z-50 border-b border-indigo-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 text-center sm:text-left">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-indigo-950 font-bold text-xs animate-pulse shrink-0 shadow-sm shadow-amber-400/50">
              <Flame size={13} className="text-amber-950 fill-amber-950" />
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm leading-tight">
              <strong className="text-white">Spring 2026 Admissions Open:</strong> <span className="text-amber-300 font-semibold">Free 1-on-1 Math Assessment</span> this week!
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-indigo-200 shrink-0">
            <a href="tel:+18005556284" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <PhoneCall size={13} className="text-indigo-300" /> +1 (800) 555-MATH
            </a>
            <span className="text-indigo-700">|</span>
            <button 
              onClick={onOpenBooking} 
              className="text-amber-400 hover:text-amber-300 underline font-bold cursor-pointer transition-colors"
            >
              Claim Spot →
            </button>
          </div>
        </div>
      </aside>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#15123A]/95 backdrop-blur-xl border-b border-indigo-800/50 shadow-xl shadow-indigo-950/40 py-2.5 sm:py-3' 
            : 'bg-[#1E1B4B]/95 backdrop-blur-md py-3 sm:py-4 border-b border-indigo-800/40 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-500 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="w-full h-full bg-[#15123A] rounded-[11px] flex items-center justify-center border border-indigo-500/30">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white group-hover:rotate-12 transition-transform duration-300 inline-block drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                    ∑
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 sm:gap-2 leading-none">
                  <span className="font-extrabold text-base sm:text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    Maths Learning
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold bg-indigo-900/80 text-indigo-200 px-1.5 sm:px-2 py-0.5 rounded-md border border-indigo-700/60 shadow-xs">
                    Academy
                  </span>
                </div>
                <span className="text-[8.5px] sm:text-[9.5px] text-indigo-200/80 tracking-wider uppercase font-semibold mt-1 hidden xs:block">
                  Pure Understanding • Proven Mastery
                </span>
              </div>
            </a>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenPortal}
                className="text-xs font-semibold text-indigo-100 hover:text-white px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-indigo-900/70 hover:bg-indigo-800 transition-all border border-indigo-700/60 hover:border-indigo-500 cursor-pointer shadow-sm"
              >
                Student Login
              </button>
              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs tracking-wide shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 active:scale-95 transition-all cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-[11px] bg-indigo-600 text-white group-hover:bg-indigo-500 transition-all">
                  <Sparkles size={14} className="text-amber-300 animate-spin-slow" />
                  <span>Book Free Class</span>
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}





