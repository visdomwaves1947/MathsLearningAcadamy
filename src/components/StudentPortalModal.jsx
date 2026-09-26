import React, { useState } from 'react';
import { X, Lock, Mail, Clock, BookOpen } from 'lucide-react';

export default function StudentPortalModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#DFE7F2] border border-[#BAC9DC] rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setLoggedIn(false);
            onClose();
          }}
          className="absolute top-4 right-4 text-slate-600 hover:text-slate-950 p-1 rounded-lg hover:bg-[#D2DFEE] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {!loggedIn ? (
          <>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200 text-indigo-700 mx-auto flex items-center justify-center mb-3 shadow-xs">
                <Lock size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Student & Parent Portal</h3>
              <p className="text-slate-600 text-xs mt-1 font-medium">Access your live classes, whiteboards, and math homework</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-800 font-bold mb-1">Academy Email / ID:</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="student@mathslearningacademy.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#D2DFEE] border border-[#B8CADF] rounded-xl text-slate-950 placeholder:text-slate-500 font-medium focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-bold mb-1">Password:</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-3 text-slate-500" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#D2DFEE] border border-[#B8CADF] rounded-xl text-slate-950 placeholder:text-slate-500 font-medium focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded bg-[#D2DFEE] border-[#B8CADF] accent-indigo-600" defaultChecked />
                  Remember me
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link has been dispatched to your email."); }} className="text-indigo-700 font-bold hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
              >
                Sign In to Classroom
              </button>

              <div className="text-center text-xs text-slate-600 font-medium pt-2">
                Need demo credentials? Click Sign In with any details to preview portal.
              </div>
            </form>
          </>
        ) : (
          /* Logged In Dashboard Snapshot */
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center gap-3 pb-3 border-b border-[#CAD8EA]">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                JS
              </div>
              <div>
                <div className="text-slate-900 font-bold text-sm">Welcome back, Jordan!</div>
                <div className="text-xs text-emerald-700 font-semibold">● Active Student • Grade 11 AP Calculus</div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-[#D2DFEE] border border-[#B8CADF] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-indigo-700" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Next Live Class</strong>
                    <span className="text-slate-600 font-medium">Derivatives of Trig Functions</span>
                  </div>
                </div>
                <span className="bg-indigo-600 text-white font-bold px-2.5 py-1 rounded-md text-[11px]">
                  Join in 45m
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#D2DFEE] border border-[#B8CADF] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-purple-700" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Homework #7 Graded</strong>
                    <span className="text-slate-600 font-medium">Score: 98% (Feedback from Dr. Elena)</span>
                  </div>
                </div>
                <span className="text-emerald-700 font-bold font-mono text-sm">A+</span>
              </div>
            </div>

            <button
              onClick={() => {
                setLoggedIn(false);
                onClose();
              }}
              className="w-full py-2.5 mt-2 rounded-xl bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-900 font-bold text-xs cursor-pointer border border-[#B8CADF]"
            >
              Sign Out & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
