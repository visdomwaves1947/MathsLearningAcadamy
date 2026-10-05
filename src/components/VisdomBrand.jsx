import React from 'react';

export function VisdomBrand({ onClick, className = "" }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2 xs:gap-3 cursor-pointer group flex-shrink-0 min-w-0 select-none ${className}`}
    >
      {/* Exact uploaded logo image */}
      <img 
        src="/Visdomlogo.png" 
        alt="Visdom Waves" 
        className="h-8 xs:h-9 sm:h-10 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      />

      {/* Brand Typography */}
      <div className="flex flex-col items-start justify-center min-w-0">
        <h1 className="text-slate-950 dark:text-white font-bold text-[clamp(11px,2.8vw,1.15rem)] tracking-wide whitespace-nowrap leading-none font-sans">
          Visdom Waves
        </h1>
        <h2 className="text-slate-800 dark:text-slate-100 font-medium text-[clamp(9.5px,2.2vw,0.88rem)] whitespace-nowrap mt-0.5 leading-none font-sans">
          Innovations Private Limited
        </h2>
        <div className="flex whitespace-nowrap pointer-events-none mt-1">
          <span className="text-[clamp(7px,1.5vw,0.72rem)] text-slate-700 dark:text-slate-300 font-medium -mt-0.5 whitespace-pre flex tracking-[0.1em]">
            Driven by vision
          </span>
        </div>
      </div>
    </div>
  );
}
