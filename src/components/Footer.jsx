import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSub.trim()) {
      setSubscribed(true);
      setEmailSub('');
    }
  };

  return (
    <footer className="bg-[#1E1B4B] text-indigo-100 border-t border-indigo-800/60 pt-12 sm:pt-16 pb-12 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial-glow opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Academy Mission Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-indigo-800/50 items-center">
          <div className="lg:col-span-6 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Get Free Weekly Olympiad Math Puzzles
            </h3>
            <p className="text-xs sm:text-sm text-indigo-200">
              Join over 35,000 students and parents receiving our curated weekly brain-teasers with detailed visual solutions.
            </p>
          </div>

          <div className="lg:col-span-6 w-full">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:ml-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="px-4 py-3 bg-[#15123A] border border-indigo-700/60 rounded-xl text-white placeholder:text-indigo-300/60 text-xs sm:text-sm focus:outline-none focus:border-indigo-400 grow font-medium shadow-inner"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30 cursor-pointer shrink-0 transition-all active:scale-95"
                >
                  <Send size={14} />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700/60 rounded-xl text-emerald-300 text-xs sm:text-sm flex items-center gap-2 max-w-md mx-auto lg:ml-auto font-medium shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>You are subscribed! Check your inbox for this week's puzzle.</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-10 sm:py-12">
          
          {/* Brand Info */}
          <div className="col-span-1 sm:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group inline-block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-500 p-px flex items-center justify-center shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-[#15123A] rounded-[11px] flex items-center justify-center">
                  <span className="text-xl font-bold font-mono text-white">∑</span>
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-2">
                Maths Learning <span className="text-indigo-200 font-bold text-xs border border-indigo-700/60 bg-indigo-900/80 px-2 py-0.5 rounded shadow-xs">ACADEMY</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed mb-4 max-w-sm font-normal">
              Empowering students from primary school to university with joyful mathematical confidence, visual conceptual mastery, and premier Olympiad mentorship.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-indigo-300 font-semibold">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" /> STEM Accredited
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Award size={14} className="text-amber-400 shrink-0" /> Top Ranked 2026
              </span>
            </div>
          </div>

          {/* Curriculum Tracks */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 sm:mb-4">Curriculum</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#courses" className="text-indigo-200 hover:text-white transition-colors">Elementary (Grades 1-5)</a></li>
              <li><a href="#courses" className="text-indigo-200 hover:text-white transition-colors">Middle School Pre-Algebra</a></li>
              <li><a href="#courses" className="text-indigo-200 hover:text-white transition-colors">High School Algebra & Trig</a></li>
              <li><a href="#courses" className="text-indigo-200 hover:text-white transition-colors">AP Calculus AB / BC</a></li>
              <li><a href="#courses" className="text-indigo-200 hover:text-white transition-colors">AMC 8/10/12 & Olympiad</a></li>
              <li><a href="#courses" className="text-indigo-200 hover:text-white transition-colors">SAT & ACT Math 800 Prep</a></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 sm:mb-4">Math Labs</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#interactive-lab" className="text-indigo-200 hover:text-white transition-colors">Function & Curve Lab</a></li>
              <li><a href="#speed-quiz" className="text-indigo-200 hover:text-white transition-colors">Speed Mental Math Quiz</a></li>
              <li><a href="#courses" className="text-indigo-200 hover:text-white transition-colors">Diagnostic Assessment</a></li>
              <li><a href="#methodology" className="text-indigo-200 hover:text-white transition-colors">Visual Pedagogy</a></li>
              <li><a href="#reviews" className="text-indigo-200 hover:text-white transition-colors">Student Case Studies</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 sm:mb-4">Contact & Help</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="flex items-center gap-2 text-indigo-200">
                <Phone size={13} className="text-indigo-400 shrink-0" />
                <span>+1 (800) 555-MATH</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-200">
                <Mail size={13} className="text-indigo-400 shrink-0" />
                <span className="break-all">admissions@mathslearningacademy.com</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-200">
                <MapPin size={13} className="text-indigo-400 shrink-0" />
                <span>Boston & SF (Global Online)</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-indigo-600/30 active:scale-95"
                >
                  Book 1-on-1 Class
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-indigo-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-indigo-300 font-medium text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Maths Learning Academy Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#safety" className="hover:text-white transition-colors">Child Online Safety</a>
          </div>
        </div>

      </div>
    </footer>
  );
}




