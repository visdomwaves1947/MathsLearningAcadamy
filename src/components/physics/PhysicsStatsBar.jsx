import React from 'react';

export default function PhysicsStatsBar() {
  const stats = [
    { number: '150+', label: 'INTERACTIVE SIMULATIONS' },
    { number: '5,000+', label: 'SOLVED NUMERICALS' },
    { number: '100%', label: 'DERIVATION BLUEPRINTS' },
    { number: '300+', label: 'CONCEPT VIDEO CLASSES' },
    { number: '120+', label: 'BOARD MOCK TESTS' },
    { number: '99.6%', label: 'STUDENT PASS RATE' },
  ];

  return (
    <section className="w-full bg-[#E5ECF4] dark:bg-[#0B0F19] py-8 sm:py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="bg-white dark:bg-[#131927] rounded-[24px] shadow-sm border border-slate-200/50 dark:border-slate-800 py-8 sm:py-10 px-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-4 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-6 lg:pt-0 first:pt-0 lg:first:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 tracking-tight mb-2">
                  {stat.number}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
