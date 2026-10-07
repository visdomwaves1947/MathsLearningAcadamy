import React, { useState } from 'react';
import { BookOpen, ArrowRight, Info, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function IntermediateSubjects({ onEnroll }) {
  const [activeEnroll, setActiveEnroll] = useState(null);
  const [activeExplore, setActiveExplore] = useState(null);
  const navigate = useNavigate();

  const subjects = [
    { id: 'maths', name: 'Mathematics', category: 'MPC', image: 'https://i.pinimg.com/736x/7e/ff/20/7eff2083afbca2a2e99a1525fcc40ce6.jpg', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400', desc: 'Master algebra, calculus, geometry, and trigonometry. Interactive simulations help visualize complex functions. Essential for JEE and EAMCET preparation.' },
    { id: 'phy', name: 'Physics', category: 'MPC / BiPC', image: 'https://i.pinimg.com/736x/59/63/26/596326ea62c6f1c23ff12882c8c00e7e.jpg', color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400', desc: 'Understand mechanics, thermodynamics, and electromagnetism with practical real-world applications and numerical problem-solving techniques.' },
    { id: 'chem', name: 'Chemistry', category: 'MPC / BiPC', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400', desc: 'Explore organic, inorganic, and physical chemistry. Memorize reactions easily with our curated cheat sheets and molecular models.' },
    { id: 'bot', name: 'Botany', category: 'BiPC', image: 'https://i.pinimg.com/736x/73/a6/34/73a634a96be17ca114e7ac1375713492.jpg', color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400', desc: 'Study plant biology, anatomy, and physiology in detail. Our diagrams and notes are perfectly tailored for high NEET and Board scores.' },
    { id: 'zoo', name: 'Zoology', category: 'BiPC', image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=600&auto=format&fit=crop', color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400', desc: 'Dive into animal sciences, human anatomy, genetics, and evolution. Expert guidance for medical entrance exams.' },
    { id: 'eng', name: 'English', category: 'Languages', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400', desc: 'Improve grammar, vocabulary, and literature comprehension. Learn how to structure essays perfectly for maximum board exam marks.' },
    { id: 'san', name: 'Sanskrit', category: 'Languages', image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=600&auto=format&fit=crop', color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400', desc: 'Learn ancient texts, fundamental grammar rules, and translation strategies to score 98+ marks easily in your language board exams.' }
  ];

  const handleCardClick = (subject) => {
    if (subject.id === 'maths') {
      navigate('/mymarks/maths');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'eng') {
      navigate('/mymarks/english');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveExplore(activeExplore === subject.id ? null : subject.id);
    }
  };

  const handleExploreClick = (subject) => {
    if (subject.id === 'maths') {
      navigate('/mymarks/maths');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (subject.id === 'eng') {
      navigate('/mymarks/english');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveExplore(subject.id);
    }
  };

  const handleEnrollClick = (subject) => {
    setActiveEnroll(subject.id);
  };

  const renderSubjectCard = (subject) => {
    const isEnrolling = activeEnroll === subject.id;
    const isExploring = activeExplore === subject.id;

    return (
      <div key={subject.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 h-[380px] group hover:-translate-y-1 relative">
        <div 
          className="h-40 w-full overflow-hidden relative shrink-0 cursor-pointer"
          onClick={() => handleCardClick(subject)}
        >
          <img src={subject.image} alt={subject.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/20 text-white`}>
            <BookOpen size={20} />
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-1 relative overflow-hidden">
          <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
            {subject.category}
          </div>
          <h4 
            className="text-xl font-bold text-slate-900 dark:text-white mb-3 cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            onClick={() => handleCardClick(subject)}
          >
            {subject.name}
          </h4>

          {/* Default View */}
          <div className={`flex flex-col mt-auto transition-opacity duration-300 ${isExploring || isEnrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
              {subject.desc}
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => handleExploreClick(subject)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Info size={16} /> Explore
              </button>
              <button 
                onClick={() => handleEnrollClick(subject)}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-600 dark:bg-cyan-700 dark:hover:bg-cyan-500 text-white text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                Enroll <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Explore View */}
          <div className={`absolute inset-0 bg-white dark:bg-slate-900 p-5 flex flex-col z-10 transition-transform duration-300 ${isExploring ? 'translate-y-0' : 'translate-y-full'}`}>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{subject.name} Overview</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed overflow-y-auto pr-1 mb-4 flex-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
              {subject.desc}
            </p>
            <button 
              onClick={() => setActiveExplore(null)}
              className="w-full mt-auto py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} /> Back
            </button>
          </div>

          {/* Enroll View */}
          <div className={`absolute inset-0 bg-white dark:bg-slate-900 p-5 flex flex-col z-10 transition-transform duration-300 ${isEnrolling ? 'translate-y-0' : 'translate-y-full'}`}>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 text-center">Select Year for {subject.name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <button 
                onClick={() => {
                  setActiveEnroll(null);
                  onEnroll && onEnroll(`${subject.name} (1st Year)`);
                }}
                className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
              >
                1st Year (Junior)
              </button>
              <button 
                onClick={() => {
                  setActiveEnroll(null);
                  onEnroll && onEnroll(`${subject.name} (2nd Year)`);
                }}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm shadow-blue-500/20"
              >
                2nd Year (Senior)
              </button>
            </div>
            <button 
              onClick={() => setActiveEnroll(null)}
              className="w-full mt-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            <span>AP/TS Board Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Intermediate Subjects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-xl font-medium">
            Complete subject-wise mastery for Intermediate students. Explore our subjects and select your year to enroll and boost your board exam scores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {subjects.map(renderSubjectCard)}
        </div>
      </div>
    </section>
  );
}
