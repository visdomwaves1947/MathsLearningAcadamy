import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, User, Mail, Phone, GraduationCap, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, preselectedTrack = '' }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentEmail: '',
    parentPhone: '',
    gradeLevel: 'Grade 9-10 (High School)',
    goalArea: preselectedTrack || 'Overcoming Math Anxiety & Building Confidence',
    preferredSlot: 'Tomorrow at 5:00 PM EST',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#DFE7F2] dark:bg-[#131927] border border-[#BAC9DC] dark:border-[#243048] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white p-1 rounded-lg hover:bg-[#D2DFEE] dark:hover:bg-[#1E293B] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 text-xs font-bold mb-2 border border-emerald-300 dark:border-emerald-800/70">
                <Sparkles size={13} />
                <span>100% Free • No Credit Card Required</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Book Free 1-on-1 Math Diagnostic Session
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mt-1 font-medium">
                45 minutes with a master instructor to pinpoint exact learning gaps and provide a personalized roadmap.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-800 dark:text-slate-200 font-bold mb-1 flex items-center gap-1.5">
                  <User size={14} className="text-indigo-700 dark:text-indigo-400" />
                  Student Full Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Smith"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] rounded-xl text-slate-950 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 font-medium focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-800 dark:text-slate-200 font-bold mb-1 flex items-center gap-1.5">
                    <Mail size={14} className="text-indigo-700 dark:text-indigo-400" />
                    Parent Email:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] rounded-xl text-slate-950 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 font-medium focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 dark:text-slate-200 font-bold mb-1 flex items-center gap-1.5">
                    <Phone size={14} className="text-indigo-700 dark:text-indigo-400" />
                    Phone / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] rounded-xl text-slate-950 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 font-medium focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-800 dark:text-slate-200 font-bold mb-1 flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-indigo-700 dark:text-indigo-400" />
                    Current Grade Level:
                  </label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] rounded-xl text-slate-950 dark:text-white font-medium focus:outline-none focus:border-indigo-600 transition-colors cursor-pointer"
                  >
                    <option>Elementary (Grades 1-5)</option>
                    <option>Middle School (Grades 6-8)</option>
                    <option>Grade 9-10 (High School)</option>
                    <option>Grade 11-12 (Pre-College / AP)</option>
                    <option>College / University</option>
                    <option>Olympiad / AMC Competition Track</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-800 dark:text-slate-200 font-bold mb-1 flex items-center gap-1.5">
                    <Clock size={14} className="text-indigo-700 dark:text-indigo-400" />
                    Preferred Slot:
                  </label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] rounded-xl text-slate-950 dark:text-white font-medium focus:outline-none focus:border-indigo-600 transition-colors cursor-pointer"
                  >
                    <option>Today at 6:00 PM EST</option>
                    <option>Tomorrow at 4:00 PM EST</option>
                    <option>Tomorrow at 6:00 PM EST</option>
                    <option>This Saturday at 11:00 AM EST</option>
                    <option>This Sunday at 2:00 PM EST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-800 dark:text-slate-200 font-bold mb-1">
                  Primary Focus / Challenge:
                </label>
                <input
                  type="text"
                  placeholder="e.g. AP Calculus preparation, Algebra 2 foundations, test anxiety..."
                  value={formData.goalArea}
                  onChange={(e) => setFormData({ ...formData, goalArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] rounded-xl text-slate-950 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 font-medium focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <Sparkles size={16} className="text-amber-300" />
                <span>Confirm My Free Diagnostic Session</span>
              </button>

              <div className="text-[11px] text-center text-slate-600 dark:text-slate-400 font-medium">
                🔒 Privacy guaranteed. We never spam or sell contact information.
              </div>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-300 dark:border-emerald-800/70 shadow-sm">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Diagnostic Session Confirmed!</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm max-w-sm mx-auto font-medium">
              Thank you, <strong>{formData.studentName || 'Student'}</strong>! We have reserved your free diagnostic slot:
            </p>

            <div className="p-4 rounded-xl bg-[#D2DFEE] dark:bg-[#0D121F] border border-[#B8CADF] dark:border-[#243048] text-left text-xs font-mono text-indigo-950 dark:text-indigo-200 space-y-1.5 max-w-sm mx-auto font-bold shadow-xs">
              <div>📅 <strong>Time:</strong> {formData.preferredSlot}</div>
              <div>🎓 <strong>Level:</strong> {formData.gradeLevel}</div>
              <div>🎯 <strong>Focus:</strong> {formData.goalArea}</div>
              <div>📩 <strong>Zoom link sent to:</strong> {formData.parentEmail}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer transition-colors shadow-sm"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
