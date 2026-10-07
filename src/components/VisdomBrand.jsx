import React from 'react';

export function VisdomBrand({ onClick, className = "" }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0 select-none ${className}`}
    >
      {/* Exact uploaded logo image */}
      <img 
        src="/Visdomlogo.png" 
        alt="Visdom Waves" 
        className="h-8 sm:h-9 md:h-10 w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
      />

      {/* Brand Typography */}
      <div className="flex flex-col items-start justify-center shrink-0">
        <h1 className="text-slate-950 dark:text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-[1.1rem] tracking-wide whitespace-nowrap leading-none font-sans">
          Visdom Waves
        </h1>
        <h2 className="text-slate-800 dark:text-slate-100 font-medium text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap mt-0.5 leading-none font-sans">
          Innovations Private Limited
        </h2>
        <div className="flex whitespace-nowrap pointer-events-none mt-0.5">
          <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] text-slate-700 dark:text-slate-300 font-medium whitespace-pre flex tracking-[0.1em]">
            Driven by vision
          </span>
        </div>
      </div>
    </div>
  );
}
