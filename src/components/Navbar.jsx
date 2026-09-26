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
      <aside aria-label="Announcement" className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-xs sm:text-sm py-2 px-4 font-medium relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-indigo-950 font-bold text-xs animate-pulse">
              <Flame size={13} className="text-amber-950 fill-amber-950" />
            </span>
            <span>
              <strong>Spring 2026 Admissions Open:</strong> 1-on-1 Math Diagnostic Assessment is 100% Free this week!
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-indigo-100">
            <a href="tel:+18005556284" className="hover:text-white flex items-center gap-1 transition-colors">
              <PhoneCall size={12} /> +1 (800) 555-MATH
            </a>
            <span className="text-indigo-300">|</span>
            <button 
              onClick={onOpenBooking} 
              className="text-amber-300 hover:text-amber-200 underline font-semibold cursor-pointer"
            >
              Claim Free Spot →
            </button>
          </div>
        </div>
      </aside>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#E2EAF4]/95 backdrop-blur-xl border-b border-[#CBD5E1] shadow-md py-3' 
            : 'bg-[#EBF0F7]/90 backdrop-blur-md py-4 border-b border-[#CBD5E1]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 p-[1px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="w-full h-full bg-indigo-600 rounded-[11px] flex items-center justify-center">
                  <span className="text-2xl font-bold font-mono text-white group-hover:rotate-12 transition-transform duration-300 inline-block">
                    ∑
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 leading-none">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Maths Learning
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-200">
                    Academy
                  </span>
                </div>
                <span className="text-[9px] text-slate-500 tracking-wider uppercase font-semibold mt-1">
                  Pure Understanding • Proven Mastery
                </span>
              </div>
            </a>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenPortal}
                className="text-xs font-semibold text-slate-800 hover:text-slate-950 px-3.5 py-2.5 rounded-xl bg-[#DCE5F2] hover:bg-[#CFDCED] transition-all border border-[#BACADF] cursor-pointer shadow-xs"
              >
                Student Login
              </button>
              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs tracking-wide shadow-md shadow-indigo-600/20 active:scale-95 transition-all cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-1.5 px-4 py-2.5 rounded-[11px] bg-indigo-600 text-white group-hover:bg-opacity-95 transition-all">
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
