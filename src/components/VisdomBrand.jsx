import React from 'react';

export function VisdomBrand({ onClick, className = "" }) {
  return (
    <div 
      onClick={onClick}
      className={`relative flex items-center gap-1.5 sm:gap-2.5 cursor-pointer group shrink-0 select-none bg-white text-slate-950 rounded-full px-2 py-0.5 sm:px-3.5 sm:py-1.5 border border-sky-200/80 dark:border-sky-700/60 shadow-xs animate-brand-border hover:scale-[1.015] active:scale-[0.985] transition-transform duration-200 overflow-hidden ${className}`}
    >
      {/* Subtle Light Blue Inner Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-blue-400/5 to-cyan-500/5 pointer-events-none rounded-full"></div>

      {/* Left: Brand Icon / Mascot Logo with Very Light Yellow Circle Background */}
      <div className="relative shrink-0 flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#FFFDE7] dark:bg-yellow-950/30 p-0.5 sm:p-1 ring-1 ring-yellow-200/60 dark:ring-yellow-700/40">
        <img 
          src="/logomymarks.png" 
          alt="MyMarks Logo" 
          className="h-full w-full object-contain shrink-0 animate-mascot-breathe transform-gpu"
        />
      </div>

      {/* Right: Code-rendered Typography, Tagline, and Powered-by */}
      <div className="flex flex-col items-center justify-center pr-0.5 sm:pr-1 relative z-10">
        {/* Main Brand Title: MY MARKS */}
        <div className="flex items-center justify-center leading-none font-bold text-[13px] xs:text-[15px] sm:text-lg md:text-[1.3rem] tracking-tight font-sans">
          {/* MY (Deep Dark Royal Blue) */}
          <span className="text-[#002255] font-bold mr-1 tracking-tight">
            MY
          </span>

          {/* MARKS (Electric Bright Azure Blue with Stylized Arrow in A) */}
          <span className="flex items-center text-[#0066ee] font-bold tracking-tight">
            <span>M</span>
            {/* Custom stylized 'A' with inner white rocket/arrow */}
            <span className="inline-flex items-center justify-center mx-[0.5px]">
              <svg 
                viewBox="0 0 100 115" 
                className="h-[0.88em] w-auto inline-block group-hover:scale-105 transition-transform"
                fill="none"
              >
                <defs>
                  <linearGradient id="marksGradA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0077ff" />
                    <stop offset="100%" stopColor="#0055cc" />
                  </linearGradient>
                </defs>
                {/* Body of A */}
                <path 
                  d="M 50 2 L 98 112 L 72 112 L 59 81 L 41 81 L 28 112 L 2 112 Z" 
                  fill="url(#marksGradA)" 
                />
                {/* White Arrow Negative Space inside A */}
                <path 
                  d="M 50 22 L 69 56 L 57.5 56 L 57.5 81 L 42.5 81 L 42.5 56 L 31 56 Z" 
                  fill="#ffffff" 
                />
              </svg>
            </span>
            <span>RKS</span>
          </span>
        </div>

        {/* Tagline: — Learning Without Language Barriers — */}
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-0.5 w-full">
          {/* Left Gradient Bar */}
          <span className="h-[1.5px] w-2 sm:w-3.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shrink-0"></span>

          {/* Slogan Text - Crisp & Readable */}
          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] font-semibold text-[#0a2540] tracking-tight whitespace-nowrap leading-none font-sans">
            Learning Without Language Barriers
          </span>

          {/* Right Gradient Bar */}
          <span className="h-[1.5px] w-2 sm:w-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 shrink-0"></span>
        </div>

        {/* Powered by Visdom Waves */}
        <div className="flex items-center justify-center gap-1 mt-0.5 w-full">
          <span className="text-[6.5px] xs:text-[7.5px] sm:text-[8px] font-normal text-slate-600 tracking-normal">
            powered by
          </span>
          <img 
            src="/Visdomlogo.png" 
            alt="Visdom Waves" 
            className="h-1.5 xs:h-2 sm:h-2.5 w-auto object-contain shrink-0 group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-[7px] xs:text-[8px] sm:text-[8.5px] font-semibold text-slate-950 tracking-tight leading-none">
            Visdom Waves
          </span>
          <span className="hidden xs:inline text-[6.5px] sm:text-[7.5px] font-normal text-slate-700 tracking-tight leading-none">
            Innovations Private Limited
          </span>
        </div>
      </div>
    </div>
  );
}



