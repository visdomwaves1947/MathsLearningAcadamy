import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Award, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  UserCheck, 
  Search, 
  Layers, 
  Eye, 
  Briefcase,
  X
} from 'lucide-react';

const LEADERS = [
  {
    id: 'dr-srinivas-sivarathri',
    role: 'Founder & Managing Director',
    name: 'Dr. Srinivas Sivarathri',
    tagline: 'Seasoned technology leader and academician with 27+ years of experience in AI, digital transformation, and scalable enterprise solutions.',
    bio: 'Dr. Srinivas Sivarathri is a seasoned technology leader, academician, and strategist with over 27 years of combined experience in IT development, higher education, and global project leadership. His visionary guidance bridges state-of-the-art technological advancement with pedagogical excellence, spearheading MyMarks and Visdom Waves toward redefining modern education.',
    link: 'https://www.visdomwaves.com/leadership-team/dr-srinivas-sivarathri',
    initials: 'SS',
    category: 'Leadership',
    icon: Cpu,
    accentGradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    tags: [
      '27+ Years Experience',
      'Artificial Intelligence',
      'Digital Transformation',
      'Enterprise Architecture',
      'Academic Leadership'
    ],
    highlights: [
      'Over 27 years of combined experience across IT and higher education',
      'Extensive expertise in AI, digital transformation, and global scale systems',
      'Leading strategy and educational innovation at Visdom Waves'
    ]
  },
  {
    id: 'gopi-chand-vempati',
    role: 'Head of Technology & Strategy',
    name: 'Gopi Chand Vempati',
    tagline: 'Seasoned technology leader and entrepreneur with 16+ years of experience in building scalable, mission-critical digital platforms and driving innovation-led growth.',
    bio: 'Gopi Chand Vempati is a seasoned technology leader and entrepreneur with over 16 years of hands-on experience in building scalable, mission-critical digital products and leading technology strategy for high-impact organizations. He architects high-throughput infrastructure and oversees robust technological execution across all learning platforms.',
    link: 'https://www.visdomwaves.com/leadership-team/gopi-chand-vempati',
    initials: 'GV',
    category: 'Technology',
    icon: Compass,
    accentGradient: 'from-cyan-500 via-teal-600 to-emerald-500',
    glowColor: 'rgba(20, 184, 166, 0.25)',
    tags: [
      '16+ Years Experience',
      'Platform Architecture',
      'Tech Entrepreneurship',
      'Mission-Critical Systems',
      'Growth Strategy'
    ],
    highlights: [
      '16+ years building enterprise-grade, high-availability digital solutions',
      'Proven track record in scaling technology startups and products',
      'Directing core tech innovation, platform reliability, and roadmap'
    ]
  },
  {
    id: 'vishwanath-chinthakindi',
    role: 'Head of Cyber Security & Quality Assurance',
    name: 'Vishwanath Chinthakindi',
    tagline: 'Cybersecurity leader and quality evangelist with deep expertise in secure architecture, risk management, and compliance.',
    bio: 'Vishwanath Chinthakindi is a seasoned cybersecurity leader and the Founder & CEO of Nivi Cyber Solutions, with a strong blend of industry, consulting, and training experience. He spent five years with IBM as a Service Delivery Specialist, where he built a solid foundation in enterprise security operations, service excellence, and risk management.',
    link: 'https://www.visdomwaves.com/leadership-team/vishwanath-chinthakindi',
    initials: 'VC',
    category: 'Cyber Security',
    icon: ShieldCheck,
    accentGradient: 'from-indigo-600 via-blue-600 to-sky-500',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    tags: [
      'Founder & CEO, Nivi Cyber',
      'Ex-IBM Service Delivery',
      'Secure Architecture',
      'Risk & Compliance',
      'Quality Evangelist'
    ],
    highlights: [
      '5+ years at IBM heading service delivery and enterprise security operations',
      'Founder & CEO of specialized cybersecurity firm Nivi Cyber Solutions',
      'Guarantees bank-grade security, data privacy, and student trust'
    ]
  },
  {
    id: 'prof-s-ramachandram',
    role: 'Head of Advisory Board',
    name: 'Prof. S. Ramachandram',
    tagline: 'Eminent academic leader and computer science expert with decades of experience in higher education.',
    bio: 'Professor S. Ramachandram is a highly respected academic leader with over three decades of experience in teaching, research, and university administration. As a senior faculty member and former Vice-Chancellor of Osmania University, he has played a pivotal role in shaping academic programs, mentoring students, and advancing research in emerging technology domains.',
    link: 'https://www.visdomwaves.com/leadership-team/prof-s-ramachandram',
    initials: 'SR',
    category: 'Advisory Board',
    icon: GraduationCap,
    accentGradient: 'from-amber-500 via-orange-600 to-rose-600',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    tags: [
      '30+ Years Academic Leadership',
      'Former Vice-Chancellor, OU',
      'Computer Science Veteran',
      'University Administration',
      'Curriculum Development'
    ],
    highlights: [
      'More than 30 years guiding higher education and academic reform',
      'Distinguished tenure as Vice-Chancellor of renowned Osmania University',
      'Shapes foundational pedagogy and academic governance for MyMarks'
    ]
  },
  {
    id: 'mr-gedela-srinivasa-rao',
    role: 'Advisor – Academic Excellence',
    name: 'Mr. Gedela Srinivasa Rao',
    tagline: 'Popularly known in the student and parent community as MSR Sir (Mathematics Srinivasa Rao), a highly respected academic leader, mathematics mentor, and strategic education expert with nearly two decades of distinguished experience in competitive examination training.',
    bio: 'Gedela Srinivasa Rao, popularly known in the student and parent community as MSR Sir (Mathematics Srinivasa Rao), is a highly respected academic leader, mathematics mentor, and strategic education expert with nearly two decades of distinguished experience in competitive examination training, particularly for JEE Main and JEE Advanced. His mastery in breaking down complex concepts has guided thousands of students to top ranks.',
    link: 'https://www.visdomwaves.com/leadership-team/mr-gedela-srinivasa-rao',
    initials: 'GR',
    category: 'Academic Excellence',
    icon: Award,
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    tags: [
      'MSR Sir (Maths Mentor)',
      '20+ Years Experience',
      'JEE Main & Advanced Specialist',
      'Competitive Exam Strategist',
      'Top Rank Producer'
    ],
    highlights: [
      'Two decades mentoring premier rankers for JEE Main and Advanced',
      'Celebrated pedagogy for deep conceptual problem-solving intuition',
      'Oversees curriculum rigor, test papers, and board exam alignment'
    ]
  }
];

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('one-by-one'); // 'one-by-one' or 'all'
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');
  const sectionRef = useRef(null);

  const currentLeader = LEADERS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % LEADERS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + LEADERS.length) % LEADERS.length);
  };

  const handleSelectLeader = (index) => {
    setActiveIndex(index);
    if (viewMode === 'all') {
      const el = document.getElementById(`leader-card-${index}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Filtered leaders for navigator modal
  const filteredLeaders = LEADERS.filter(
    (l) =>
      l.name.toLowerCase().includes(navSearch.toLowerCase()) ||
      l.role.toLowerCase().includes(navSearch.toLowerCase()) ||
      l.category.toLowerCase().includes(navSearch.toLowerCase()) ||
      l.tags.some((t) => t.toLowerCase().includes(navSearch.toLowerCase()))
  );

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 bg-[#F4F7FC] dark:bg-[#070B14] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-800/80"
    >
      {/* Decorative Atmosphere Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/15 via-cyan-400/20 to-indigo-400/15 dark:from-blue-600/10 dark:via-cyan-600/10 dark:to-indigo-600/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/15 dark:bg-cyan-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-300/15 dark:bg-indigo-600/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              About Us • Leadership & Advisory
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            Guided by Visionaries, Educators & Industry Leaders
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Meet the distinguished pioneers powering <span className="font-semibold text-slate-900 dark:text-white">Visdom Waves</span> and <span className="font-semibold text-slate-900 dark:text-white">MyMarks</span>, bringing together 70+ cumulative years of enterprise innovation, deep academic excellence, and student mentorship.
          </p>

          {/* Prompt Highlight: "Need help navigating? Click me! ✨" */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsNavModalOpen(true)}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 dark:shadow-cyan-950/50 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer border border-white/20"
              title="Click to open interactive leadership navigator"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow group-hover:scale-125 transition-transform" />
              <span>Need help navigating? Click me! ✨</span>
            </button>

            {/* View Mode Toggle Button */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <button
                onClick={() => setViewMode('one-by-one')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'one-by-one'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <UserCheck size={14} />
                <span>One-by-One Spotlight</span>
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Layers size={14} />
                <span>View All (Sequential)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Person Tabs / Pagination Indicator */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
            {LEADERS.map((leader, idx) => {
              const isSelected = activeIndex === idx;
              const Icon = leader.icon;
              return (
                <button
                  key={leader.id}
                  onClick={() => handleSelectLeader(idx)}
                  className={`group flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 border-blue-500/80 dark:border-cyan-400/80 text-blue-700 dark:text-cyan-300 shadow-md shadow-blue-500/10 scale-[1.02]'
                      : 'bg-white/70 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                    isSelected 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-blue-100 dark:group-hover:bg-slate-700'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="truncate max-w-[140px] sm:max-w-none">{leader.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* VIEW MODE 1: ONE-BY-ONE SPOTLIGHT */}
        {viewMode === 'one-by-one' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-white dark:bg-[#0c1222] border border-slate-200/90 dark:border-slate-800/90 shadow-2xl overflow-hidden transition-all duration-300">
              
              {/* Top Accent Gradient Bar */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${currentLeader.accentGradient}`} />

              <div className="p-6 sm:p-10 lg:p-12">
                
                {/* Person Header with Monogram / Avatar and Info */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 mb-8 text-center md:text-left">
                  
                  {/* Large Stylized Monogram Badge */}
                  <div className="relative shrink-0">
                    <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br ${currentLeader.accentGradient} p-1 shadow-xl flex items-center justify-center text-white relative group`}>
                      <div className="w-full h-full rounded-[22px] bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 group-hover:scale-105">
                        <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sans">
                          {currentLeader.initials}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold text-cyan-300 uppercase tracking-widest mt-1">
                          {currentLeader.category}
                        </span>
                      </div>
                    </div>
                    {/* Floating verified badge */}
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white dark:border-slate-950">
                      <CheckCircle2 size={18} />
                    </div>
                  </div>

                  {/* Main Details */}
                  <div className="grow">
                    {/* Role Chip */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                      <currentLeader.icon size={14} className="shrink-0" />
                      <span>{currentLeader.role}</span>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-2">
                      {currentLeader.name}
                    </h3>

                    {/* Tagline / Experience Summary */}
                    <p className="text-sm sm:text-base font-semibold text-cyan-700 dark:text-cyan-400 leading-snug mb-4 max-w-2xl">
                      {currentLeader.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                      {currentLeader.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed Biography Box */}
                <div className="p-5 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 mb-8">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>Leadership Profile & Background</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {currentLeader.bio}
                  </p>
                </div>

                {/* Key Highlights Bullet points */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                    <Award size={14} />
                    <span>Strategic Impact</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentLeader.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3.5 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5"
                      >
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Read More Link & Previous/Next Controls */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Read More Link */}
                  <a
                    href={currentLeader.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-md"
                  >
                    <span>Read more about {currentLeader.name}</span>
                    <ExternalLink size={15} />
                  </a>

                  {/* Navigation Steps (Previous / Next) */}
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Person {activeIndex + 1} of {LEADERS.length}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
                        title="Previous Leader"
                        aria-label="Previous Leader"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20"
                        title="Next Leader"
                        aria-label="Next Leader"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: ALL PROFILES ONE-BY-ONE VERTICAL STACK */}
        {viewMode === 'all' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {LEADERS.map((leader, idx) => {
              const Icon = leader.icon;
              return (
                <div
                  key={leader.id}
                  id={`leader-card-${idx}`}
                  className="rounded-3xl bg-white dark:bg-[#0c1222] border border-slate-200/90 dark:border-slate-800/90 shadow-xl overflow-hidden hover:border-blue-400 dark:hover:border-cyan-500/60 transition-all duration-300"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${leader.accentGradient}`} />

                  <div className="p-6 sm:p-9">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      
                      {/* Monogram Badge */}
                      <div className="shrink-0">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${leader.accentGradient} p-1 shadow-md flex items-center justify-center text-white`}>
                          <div className="w-full h-full rounded-[14px] bg-slate-950/85 flex flex-col items-center justify-center p-2 text-center">
                            <span className="text-xl sm:text-2xl font-black text-white font-sans">
                              {leader.initials}
                            </span>
                            <span className="text-[9px] font-semibold text-cyan-300 uppercase tracking-widest mt-0.5">
                              #{idx + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="grow">
                        {/* Role Chip */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                          <Icon size={14} className="shrink-0" />
                          <span>{leader.role}</span>
                        </div>

                        {/* Name */}
                        <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-2">
                          {leader.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 leading-snug mb-3">
                          {leader.tagline}
                        </p>

                        {/* Bio */}
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                          {leader.bio}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-5">
                          {leader.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More Link */}
                        <a
                          href={leader.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors group"
                        >
                          <span>Read more about {leader.name}</span>
                          <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* INTERACTIVE NAVIGATION MODAL ("Need help navigating? Click me! ✨") */}
        {isNavModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsNavModalOpen(false)}
          >
            <div 
              className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsNavModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close Navigator"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                  <Sparkles size={20} className="animate-spin-slow" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Leadership Navigation Assistant
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Jump directly to any leader, advisor, or topic in one click
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative mb-5">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, role, or specialty (e.g., AI, JEE, IBM, Osmania)..."
                  value={navSearch}
                  onChange={(e) => setNavSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>

              {/* List of Leaders */}
              <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                {filteredLeaders.map((leader) => {
                  const index = LEADERS.findIndex((l) => l.id === leader.id);
                  const Icon = leader.icon;
                  return (
                    <button
                      key={leader.id}
                      onClick={() => {
                        handleSelectLeader(index);
                        setIsNavModalOpen(false);
                      }}
                      className="w-full text-left p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/50 transition-all flex items-center justify-between gap-3 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${leader.accentGradient} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs`}>
                          {leader.initials}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
                            <Icon size={12} />
                            <span>{leader.role}</span>
                          </div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            {leader.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-sm">
                            {leader.tagline}
                          </div>
                        </div>
                      </div>

                      <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  );
                })}

                {filteredLeaders.length === 0 && (
                  <div className="text-center py-8 text-sm text-slate-500 dark:text-slate-400">
                    No matching leaders found for "{navSearch}".
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Select a person to view their profile one by one</span>
                <button
                  onClick={() => {
                    setViewMode('all');
                    setIsNavModalOpen(false);
                  }}
                  className="text-blue-600 dark:text-cyan-400 hover:underline font-semibold cursor-pointer"
                >
                  Switch to View All
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
