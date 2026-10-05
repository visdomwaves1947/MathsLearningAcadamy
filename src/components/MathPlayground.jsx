import React, { useState } from 'react';
import { quickMathChallenges } from '../data/quizData';
import {
  Trophy,
  Flame,
  HelpCircle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
  Award,
  ArrowRight,
  BrainCircuit
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MathPlayground({ onOpenBooking }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = quickMathChallenges[currentIdx];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correct) {
      setScore((prev) => prev + currentQ.points);
      setStreak((prev) => prev + 1);
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#4F46E5', '#10B981', '#F59E0B'],
      });
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIdx < quickMathChallenges.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
  };

  return (
    <section id="speed-quiz" className="py-20 relative bg-[#EBF0F7] border-t border-b border-[#CBD5E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <BrainCircuit size={14} className="text-purple-700" />
            Interactive Math Arena
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Put Your Math Brain to the Test
          </h2>
          <p className="text-slate-700 mt-3 text-base">
            Solve real conceptual problems crafted by our master instructors. Experience how we make complex logic intuitive!
          </p>
        </div>

        {/* Quiz Interactive Box */}
        <div className="bg-[#DFE7F2] rounded-2xl border border-[#BAC9DC] shadow-lg p-6 sm:p-10 relative overflow-hidden">

          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#CAD8EA]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                {currentQ.category}
              </span>
              <span className="text-xs text-slate-600 font-mono font-semibold">
                Problem {currentIdx + 1} of {quickMathChallenges.length}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-amber-800 font-bold text-sm bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                <Flame size={16} className="fill-amber-600 text-amber-600" />
                <span>Streak: {streak}</span>
              </div>

              <div className="flex items-center gap-1.5 text-indigo-800 font-bold text-sm bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200 font-mono">
                <Trophy size={16} className="text-indigo-700" />
                <span>{score} pts</span>
              </div>
            </div>
          </div>

          {!quizFinished ? (
            <div className="py-6 space-y-6">
              {/* Question Text */}
              <div className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = "bg-[#D2DFEE] border-[#B8CADF] text-slate-900 hover:bg-[#C5D5E7] hover:border-indigo-400";

                  if (isAnswered) {
                    if (idx === currentQ.correct) {
                      btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold shadow-xs";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-rose-100 border-rose-500 text-rose-950 font-bold shadow-xs";
                    } else {
                      btnStyle = "bg-[#CCD8E6] border-[#B8CADF] text-slate-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`p-4 rounded-xl border text-left font-mono font-semibold text-base transition-all duration-200 flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-[#BACADC] border border-[#A7B9CD] flex items-center justify-center text-xs font-bold text-slate-800 shadow-2xs">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isAnswered && idx === currentQ.correct && (
                        <CheckCircle size={20} className="text-emerald-700 shrink-0" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correct && (
                        <XCircle size={20} className="text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Hint Area */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-indigo-100/80 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/70 text-slate-900 dark:text-white text-sm animate-fadeIn">
                  <div className="font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5 mb-1">
                    <Sparkles size={16} className="text-amber-500" />
                    Conceptual Breakdown:
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 font-semibold">{currentQ.hint}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#CAD8EA] dark:border-[#1E293B]">
                {!isAnswered ? (
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer font-semibold"
                  >
                    <HelpCircle size={15} />
                    <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {showHint && !isAnswered && (
                  <span className="text-xs text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/70 px-3 py-1 rounded-md border border-amber-300 dark:border-amber-800/70 font-semibold">
                    💡 Tip: Break down numbers into manageable algebraic components!
                  </span>
                )}

                {isAnswered && (
                  <button
                    onClick={handleNext}
                    className="ml-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <span>{currentIdx < quickMathChallenges.length - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completion State */
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 p-0.5 mx-auto shadow-md shadow-amber-500/20">
                <div className="w-full h-full bg-[#D2DFEE] dark:bg-[#0D121F] rounded-full flex items-center justify-center text-amber-500">
                  <Award size={36} />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Challenge Completed!</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">
                  You earned <span className="font-bold text-amber-700 dark:text-amber-400 font-mono">{score} points</span> with a top streak of <span className="font-bold text-emerald-700 dark:text-emerald-400">{streak}</span>!
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/70 text-slate-800 dark:text-indigo-200 text-xs sm:text-sm text-left">
                💡 <strong className="text-slate-950 dark:text-white">Instructor Insight:</strong> You demonstrated sharp intuition! Our mentors help students systematically organize these concepts so exams feel effortless.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D2DFEE] dark:bg-[#0D121F] hover:bg-[#C5D5E7] dark:hover:bg-[#1A2338] text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-[#B8CADF] dark:border-[#243048] cursor-pointer"
                >
                  <RotateCcw size={15} />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles size={15} className="text-amber-300" />
                  <span>Get Personalized Diagnostic Report</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
