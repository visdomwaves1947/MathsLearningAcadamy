import React from 'react';
import { UserPlus, BookOpen, PenTool, TrendingUp } from 'lucide-react';

export default function HowToUse({ onOpenSignUp }) {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Create Your Account",
      desc: "Sign up for free to access your personalized student dashboard and track your progress."
    },
    {
      icon: BookOpen,
      title: "2. Choose Your Subjects",
      desc: "Enroll in the specific AP/TS Intermediate subjects you want to master."
    },
    {
      icon: PenTool,
      title: "3. Learn & Practice",
      desc: "Watch interactive lessons, read premium notes, and use our smart simulators."
    },
    {
      icon: TrendingUp,
      title: "4. Test & Improve",
      desc: "Take mock tests designed for BIE patterns and see your scores skyrocket."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            How to Use My Marks
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-xl font-medium">
            Follow these four simple steps to begin your journey towards board exam excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-[#131927] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
                {/* Arrow connector for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-4 w-8 border-t-2 border-dashed border-slate-300 dark:border-slate-700"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => onOpenSignUp && onOpenSignUp()}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-slate-900 dark:bg-cyan-600 rounded-xl hover:bg-cyan-700 dark:hover:bg-cyan-500 transition-colors shadow-md hover:shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
