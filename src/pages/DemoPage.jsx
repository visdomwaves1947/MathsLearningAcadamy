import React from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowLeft,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';
import IntermediateSubjects from '../components/IntermediateSubjects';
import HowToUse from '../components/HowToUse';

export default function DemoPage({ onOpenBooking, onOpenVideoDemo, currentUser, onOpenSignIn, onOpenSignUp }) {
  return (
    <div className="relative overflow-hidden bg-[#EBF0F7] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Background Math Grid Pattern & Glows */}
      <div className="absolute inset-0 bg-math-grid opacity-70 dark:opacity-40 pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/35 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-purple-300/30 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section className="relative">
          <div className="w-full relative group min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop" 
              alt="Interactive Learning Dashboard" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-slate-900/60 transition-colors duration-300"></div>
            
            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto flex flex-col items-center">
              {/* Live Demo Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold shadow-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Visdom Waves Live Demo</span>
                <Sparkles size={14} className="text-indigo-300" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
                State-of-the-Art Platform
              </h1>

              <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                Experience the interactive learning environment, real-time formula simulations, and smart question practice.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onOpenVideoDemo && onOpenVideoDemo()}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base sm:text-lg shadow-xl shadow-indigo-600/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer border border-indigo-500/50"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Watch Video Demo</span>
                </button>

                <button
                  onClick={() => onOpenBooking && onOpenBooking('Demo Session')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-base sm:text-lg border border-white/30 shadow-lg flex items-center justify-center gap-2.5 transition-all hover:border-white/50 cursor-pointer"
                >
                  <Laptop size={20} />
                  <span>Book 1-on-1 Live Demo</span>
                </button>
              </div>
            </div>
          </div>
      </section>

      {/* How To Use Section */}
      <HowToUse 
        onOpenSignUp={() => onOpenBooking && onOpenBooking('Sign Up')}
      />

      {/* AP/TS Intermediate Subjects Grid */}
      <IntermediateSubjects 
        onEnroll={(subjectName) => onOpenBooking && onOpenBooking(`Enroll in ${subjectName}`)}
        currentUser={currentUser}
        onOpenSignIn={onOpenSignIn}
        onOpenSignUp={onOpenSignUp}
      />
    </div>
  );
}
