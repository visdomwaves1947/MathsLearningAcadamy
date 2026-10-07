import React from 'react';

export function VisdomBrand({ onClick, className = "" }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2.5 cursor-pointer group shrink-0 select-none ${className}`}
    >
      {/* Exact uploaded logo image */}
      <img 
        src="/Visdomlogo.png" 
        alt="Visdom Waves" 
        className="h-8 sm:h-9 md:h-10 w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
      />

      {/* Brand Typography */}
      <div className="flex flex-col items-start justify-center shrink-0">
        <h1 className="text-slate-950 dark:text-white font-bold text-xs sm:text-sm md:text-base lg:text-[1.12rem] tracking-tight whitespace-nowrap leading-none font-sans drop-shadow-2xs">
          Visdom Waves
        </h1>
        <h2 className="text-slate-950 dark:text-cyan-100 font-semibold text-[9.5px] sm:text-[10.5px] md:text-xs whitespace-nowrap mt-0.5 leading-none font-sans">
          Innovations Private Limited
        </h2>
        <div className="flex whitespace-nowrap pointer-events-none mt-0.5">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-900 dark:text-cyan-300 font-semibold whitespace-pre flex tracking-[0.08em]">
            Driven by vision
          </span>
        </div>
      </div>
    </div>
  );
}
