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
    <footer className="bg-[#DCE5F2] text-slate-700 border-t border-[#BAC9DC] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Academy Mission Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#CAD8EA] items-center">
          <div className="lg:col-span-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Get Free Weekly Olympiad Math Puzzles
            </h3>
            <p className="text-sm text-slate-700">
              Join over 35,000 students and parents receiving our curated weekly brain-teasers with detailed visual solutions.
            </p>
          </div>

          <div className="lg:col-span-6">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md ml-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="px-4 py-3 bg-[#CFDCED] border border-[#BACADF] rounded-xl text-slate-900 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 grow font-medium"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/25 cursor-pointer shrink-0 transition-colors"
                >
                  <Send size={14} />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-900 text-xs sm:text-sm flex items-center gap-2 max-w-md ml-auto font-medium">
                <CheckCircle2 size={16} className="text-emerald-700" />
                <span>You are subscribed! Check your inbox for this week's puzzle.</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          
          {/* Brand Info */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group inline-block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-px flex items-center justify-center shadow-xs">
                <span className="text-xl font-bold font-mono text-white">∑</span>
              </div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                Maths Learning <span className="text-indigo-700 font-bold text-xs border border-indigo-300 bg-indigo-50 px-1.5 py-0.5 rounded">ACADEMY</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 max-w-sm font-medium">
              Empowering students from primary school to university with joyful mathematical confidence, visual conceptual mastery, and premier Olympiad mentorship.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-700" /> STEM Accredited
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Award size={14} className="text-amber-700" /> Top Ranked 2026
              </span>
            </div>
          </div>

          {/* Curriculum Tracks */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Curriculum</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#courses" className="hover:text-indigo-700 transition-colors">Elementary (Grades 1-5)</a></li>
              <li><a href="#courses" className="hover:text-indigo-700 transition-colors">Middle School Pre-Algebra</a></li>
              <li><a href="#courses" className="hover:text-indigo-700 transition-colors">High School Algebra & Trig</a></li>
              <li><a href="#courses" className="hover:text-indigo-700 transition-colors">AP Calculus AB / BC</a></li>
              <li><a href="#courses" className="hover:text-indigo-700 transition-colors">AMC 8/10/12 & Olympiad</a></li>
              <li><a href="#courses" className="hover:text-indigo-700 transition-colors">SAT & ACT Math 800 Prep</a></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Math Labs</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#interactive-lab" className="hover:text-indigo-700 transition-colors">Function & Curve Lab</a></li>
              <li><a href="#speed-quiz" className="hover:text-indigo-700 transition-colors">Speed Mental Math Quiz</a></li>
              <li><a href="#courses" className="hover:text-indigo-700 transition-colors">Diagnostic Assessment</a></li>
              <li><a href="#methodology" className="hover:text-indigo-700 transition-colors">Visual Pedagogy</a></li>
              <li><a href="#reviews" className="hover:text-indigo-700 transition-colors">Student Case Studies</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Contact & Help</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li className="flex items-center gap-2 text-slate-800">
                <Phone size={13} className="text-indigo-700" />
                <span>+1 (800) 555-MATH</span>
              </li>
              <li className="flex items-center gap-2 text-slate-800">
                <Mail size={13} className="text-indigo-700" />
                <span>admissions@mathslearningacademy.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-800">
                <MapPin size={13} className="text-indigo-700" />
                <span>Boston & San Francisco (Global Online)</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors cursor-pointer shadow-xs"
                >
                  Book 1-on-1 Class
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#CAD8EA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
          <div>
            © {new Date().getFullYear()} Maths Learning Academy Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-900">Terms of Service</a>
            <a href="#safety" className="hover:text-slate-900">Child Online Safety</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
