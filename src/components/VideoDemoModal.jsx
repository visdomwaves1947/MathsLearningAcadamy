import React from 'react';
import { X, CheckCircle2, Monitor, Sparkles } from 'lucide-react';

export default function VideoDemoModal({ isOpen, onClose, onOpenBooking }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white p-1 rounded-lg hover:bg-[#D2DFEE] dark:hover:bg-[#1E293B] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-xs font-bold mb-2 border border-indigo-200 dark:border-indigo-800/70">
            <Monitor size={14} />
            <span>Interactive Classroom Tour</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            See How A Live 1-on-1 Math Lesson Works
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mt-1 font-medium">
            Real-time interactive whiteboarding, visual concept breakdown, and immediate doubt elimination.
          </p>
        </div>

        {/* Mock Interactive Classroom Video Simulation */}
        <div className="relative aspect-video rounded-xl bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] overflow-hidden flex flex-col justify-between p-4 my-4 shadow-inner">
          
          {/* Top Bar inside simulation */}
          <div className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 border-b border-[#B8CADF] dark:border-[#243048] pb-2 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-slate-900 dark:text-white font-bold">Live Whiteboard #A-409</span>
            </div>
            <span className="font-mono text-indigo-800 dark:text-indigo-300 font-bold">Dr. Elena Rostova & Maya (10th Grader)</span>
          </div>

          {/* Whiteboard content simulation */}
          <div className="my-auto py-2 text-center space-y-3">
            <div className="inline-block px-4 py-2 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/70 font-mono text-indigo-950 dark:text-indigo-200 font-bold text-sm sm:text-base shadow-xs">
              lim (x→0) [sin(x) / x] = 1 &nbsp;|&nbsp; Visual Squeeze Theorem Proof
            </div>
            <div className="text-xs text-slate-700 dark:text-slate-300 max-w-md mx-auto font-medium">
              "Notice how the arc length of the unit circle squeezes between cos(θ) and 1 as θ approaches zero..."
            </div>
            <div className="flex justify-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#C5D5E7] dark:bg-[#1E283D] text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/70">
                ✓ Student Whiteboard Synced
              </span>
              <span className="px-2.5 py-1 rounded bg-[#C5D5E7] dark:bg-[#1E283D] text-[11px] font-mono font-bold text-purple-800 dark:text-purple-400 border border-purple-300 dark:border-purple-800/70">
                ✓ Real-Time Audio & Video
              </span>
            </div>
          </div>

          {/* Bottom Bar inside simulation */}
          <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pt-2 border-t border-[#B8CADF] dark:border-[#243048] font-medium">
            <span>HD Classroom Audio/Video Active</span>
            <span>Recorded for Parent Review</span>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-800 dark:text-slate-200 mb-6 font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Interactive graph manipulation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Session recordings available 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Step-by-step diagnostic breakdown</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>No software downloads needed</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2 border-t border-[#CAD8EA] dark:border-[#1E293B]">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-bold cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles size={14} className="text-amber-300" />
            <span>Experience It In Your Free Trial</span>
          </button>
        </div>

      </div>
    </div>
  );
}
