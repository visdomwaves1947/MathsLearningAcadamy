import React, { useState, useMemo } from 'react';
import { 
  Play, 
  ExternalLink, 
  Search, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Tv,
  Tag
} from 'lucide-react';

const TOPICS_DATA = [
  {
    id: 'functions',
    number: '1',
    name: 'Functions',
    description: 'Ordered pairs, relations, function types, inverse theorems, and real-valued domains & ranges.',
    color: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    videos: [
      {
        id: '1-0',
        code: '1.0',
        title: 'Ordered Pairs',
        url: 'https://youtu.be/jQUrfmX0uko?si=F6A0izpSfZNcAW3S',
        videoId: 'jQUrfmX0uko',
        keywords: [
          'Ordered Pairs',
          'Cartesian Product',
          'Equality of Ordered Pairs',
          'Ordered Triplets',
          'Number of Elements in Cartesian Product'
        ]
      },
      {
        id: '1-1',
        code: '1.1',
        title: 'Types of Functions – Definitions',
        url: 'https://youtu.be/7JZ0IfCQ488?si=cvqx900nZChKmBXZ',
        videoId: '7JZ0IfCQ488',
        keywords: [
          'Types of Functions',
          'One-One Function',
          'Many-One Function',
          'Into Function',
          'Onto Function',
          'Bijective Function',
          'Injective Function',
          'Surjective Function',
          'Identity Function',
          'Constant Function',
          'Domain Codomain Range'
        ]
      },
      {
        id: '1-2',
        code: '1.2',
        title: 'Inverse Functions and Theorems',
        url: 'https://youtu.be/9fJsrnE1go0?si=SxRsU1JAB7rvkVIl',
        videoId: '9fJsrnE1go0',
        keywords: [
          'Inverse Functions',
          'Inverse of a Function',
          'One-One Function Inverse',
          'Inverse Function Theorems',
          'Composite Functions',
          'Finding Inverse Function',
          'Properties of Inverse Functions'
        ]
      },
      {
        id: '1-3',
        code: '1.3',
        title: 'Real-Valued Functions – Domain, Range and Inverse',
        url: 'https://youtu.be/FdK9_Fp76cw?si=GlJrwQ-IVeJTY8Pp',
        videoId: 'FdK9_Fp76cw',
        keywords: [
          'Real Valued Functions',
          'Domain of Function',
          'Range of Function',
          'Inverse of Real Valued Function',
          'Domain and Range',
          'Finding Domain',
          'Finding Range'
        ]
      }
    ]
  },
  {
    id: 'induction',
    number: '2',
    name: 'Mathematical Induction',
    description: 'Foundational principles of mathematical induction, proof theorems, applications, and divisibility proofs.',
    color: 'from-indigo-600 to-violet-600',
    badgeColor: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    videos: [
      {
        id: '2-1',
        code: '2.1',
        title: 'Principles of Mathematical Induction and Theorems',
        url: 'https://youtu.be/JTgWbq-S6Zc?si=d-WF3hNP-7qMx12i',
        videoId: 'JTgWbq-S6Zc',
        keywords: [
          'Principle of Mathematical Induction',
          'PMI',
          'Mathematical Induction Theorem',
          'Base Step',
          'Inductive Hypothesis',
          'Inductive Step'
        ]
      },
      {
        id: '2-2',
        code: '2.2',
        title: 'Applications of Mathematical Induction',
        url: 'https://youtu.be/Wtc9PNk7f40?si=B7zCA6o3ADkMqCUi',
        videoId: 'Wtc9PNk7f40',
        keywords: [
          'Applications of Mathematical Induction',
          'Mathematical Induction Problems',
          'Proof by Induction',
          'Sum Formula by Induction',
          'Series by Mathematical Induction'
        ]
      },
      {
        id: '2-3',
        code: '2.3',
        title: 'Problems on Divisibility',
        url: 'https://youtu.be/0DMBjvUdtMo?si=0DDlrwdYyD9lhALx',
        videoId: '0DMBjvUdtMo',
        keywords: [
          'Divisibility by Mathematical Induction',
          'Divisibility Problems',
          'Divisibility Proof',
          'Induction Divisibility Problems',
          'Number Theory Induction'
        ]
      }
    ]
  },
  {
    id: 'matrices',
    number: '3',
    name: 'Matrices',
    description: 'Types, multiplication, transpose, determinants, adjoint, matrix rank, and systems of linear equations.',
    color: 'from-violet-600 to-purple-600',
    badgeColor: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    videos: [
      {
        id: '3-1',
        code: '3.1',
        title: 'Types of Matrices',
        url: 'https://youtu.be/3-s0IwdDcgE?si=dO_AU4OLmV4Uac9p',
        videoId: '3-s0IwdDcgE',
        keywords: [
          'Types of Matrices',
          'Row Matrix',
          'Column Matrix',
          'Square Matrix',
          'Zero Matrix',
          'Diagonal Matrix',
          'Scalar Matrix',
          'Identity Matrix',
          'Triangular Matrix'
        ]
      },
      {
        id: '3-2',
        code: '3.2',
        title: 'Scalar Multiple of a Matrix and Multiplication of Matrices',
        url: 'https://youtu.be/iJERwUVuwtY?si=fHLZtuIKk4FP3iPk',
        videoId: 'iJERwUVuwtY',
        keywords: [
          'Scalar Multiplication of Matrix',
          'Scalar Multiple Matrix',
          'Matrix Multiplication',
          'Multiplication of Matrices',
          'Matrix Product',
          'Properties of Matrix Multiplication'
        ]
      },
      {
        id: '3-3',
        code: '3.3',
        title: 'Transpose of a Matrix',
        url: 'https://youtu.be/g_Rz94DXvNo?si=701K18XPR_z_EieQ',
        videoId: 'g_Rz94DXvNo',
        keywords: [
          'Transpose of Matrix',
          'Transpose Matrix',
          'Properties of Transpose',
          'Transpose of Matrix Examples',
          'Symmetric Matrix',
          'Skew Symmetric Matrix'
        ]
      },
      {
        id: '3-4',
        code: '3.4',
        title: 'Determinants',
        url: 'https://youtu.be/YFGTpSkfT40?si=v863mINJRpERwclW',
        videoId: 'YFGTpSkfT40',
        keywords: [
          'Determinants',
          'Determinant of Matrix',
          '2x2 Determinant',
          '3x3 Determinant',
          'Properties of Determinants',
          'Evaluation of Determinants',
          'Determinant Problems'
        ]
      },
      {
        id: '3-5',
        code: '3.5',
        title: 'Adjoint and Inverse of a Matrix',
        url: 'https://youtu.be/oHzpMgKuI9Q?si=87H12QC-_X5YRbCx',
        videoId: 'oHzpMgKuI9Q',
        keywords: [
          'Adjoint of Matrix',
          'Adjoint Matrix',
          'Inverse of Matrix',
          'Matrix Inverse',
          'Adjoint Method',
          'Inverse Using Determinants',
          'Properties of Inverse Matrix'
        ]
      },
      {
        id: '3-6',
        code: '3.6',
        title: 'Consistency and Inconsistency of System of Simultaneous Equations – Rank of a Matrix',
        url: 'https://youtu.be/bq5gDsEdN3Q?si=22A4fYvaZthBbD7U',
        videoId: 'bq5gDsEdN3Q',
        keywords: [
          'Consistency of Linear Equations',
          'Inconsistency of Linear Equations',
          'Rank of Matrix',
          'System of Linear Equations',
          'Consistent System',
          'Inconsistent System'
        ]
      },
      {
        id: '3-7',
        code: '3.7',
        title: 'Solution of Simultaneous Linear Equations',
        url: 'https://youtu.be/tHm3X_Ta_iE?si=_Wz2i82xmNZWeKsB',
        videoId: 'tHm3X_Ta_iE',
        keywords: [
          'Simultaneous Linear Equations',
          'Solution of Linear Equations',
          'Matrix Method',
          'Solving Linear Equations',
          "Cramer's Rule",
          'Cramers Rule',
          'Matrix Method of Linear Equations'
        ]
      }
    ]
  },
  {
    id: 'addition-vectors',
    number: '4',
    name: 'Addition of Vectors',
    description: 'Vectors in 3D, classification, addition, scalar multiplication, angle between vectors, linear combinations, and equations of lines & planes.',
    color: 'from-emerald-600 to-teal-600',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    videos: [
      {
        id: '4-1',
        code: '4.1',
        title: 'Vectors as a Triad of Real Numbers – Some Basic Concepts',
        url: 'https://youtu.be/ZM2-Bb8Zdt0?si=Afa_B6QdYT900VgN',
        videoId: 'ZM2-Bb8Zdt0',
        keywords: [
          'Vectors',
          'Vector as Triad of Real Numbers',
          '3D Vector',
          'Position Vector',
          'Components of Vector',
          'Magnitude of Vector'
        ]
      },
      {
        id: '4-2',
        code: '4.2',
        title: 'Classification (Types) of Vectors',
        url: 'https://youtu.be/QS3hyhUqHOQ?si=8KhKfY0xxRN0aot_',
        videoId: 'QS3hyhUqHOQ',
        keywords: [
          'Types of Vectors',
          'Zero Vector',
          'Unit Vector',
          'Equal Vectors',
          'Negative Vector',
          'Parallel Vectors',
          'Collinear Vectors',
          'Coplanar Vectors'
        ]
      },
      {
        id: '4-3',
        code: '4.3',
        title: 'Sum (Addition) of Vectors',
        url: 'https://youtu.be/EwSHKuSxX_8?si=Epa4a2FPl1b7jciz',
        videoId: 'EwSHKuSxX_8',
        keywords: [
          'Addition of Vectors',
          'Vector Addition',
          'Sum of Vectors',
          'Triangle Law of Vector Addition',
          'Parallelogram Law'
        ]
      },
      {
        id: '4-4',
        code: '4.4',
        title: 'Scalar Multiplication of a Vector',
        url: 'https://youtu.be/EwSHKuSxX_8?si=Epa4a2FPl1b7jciz',
        videoId: 'EwSHKuSxX_8',
        keywords: [
          'Scalar Multiplication',
          'Scalar Multiple of Vector',
          'Multiplication of Vector by Scalar',
          'Vector Magnitude'
        ]
      },
      {
        id: '4-5',
        code: '4.5',
        title: 'Angle Between Two Non-Zero Vectors',
        url: 'https://youtu.be/tY94KCHqgUs?si=1IZIpbgPWcGpL03j',
        videoId: 'tY94KCHqgUs',
        keywords: [
          'Angle Between Vectors',
          'Angle Between Two Vectors',
          'Vector Angle Formula',
          'Dot Product and Angle',
          'Direction Cosines'
        ]
      },
      {
        id: '4-6',
        code: '4.6',
        title: 'Linear Combination of Vectors',
        url: 'https://youtu.be/MplzZTkblNY?si=zpmCWwPEEaVDBxnz',
        videoId: 'MplzZTkblNY',
        keywords: [
          'Linear Combination of Vectors',
          'Vector Linear Combination',
          'Linear Dependence of Vectors',
          'Linear Independence of Vectors'
        ]
      },
      {
        id: '4-7',
        code: '4.7',
        title: 'Components of a Vector in Three Dimensions',
        url: 'https://youtu.be/hXkWzpONpG4?si=dZkUsSXlDV98Ecjb',
        videoId: 'hXkWzpONpG4',
        keywords: [
          'Vector Components',
          'Components of Vector in 3D',
          'Three Dimensional Vectors',
          'Vector Components i j k',
          'Resolution of Vector'
        ]
      },
      {
        id: '4-8',
        code: '4.8',
        title: 'Vector Equations of Line and Plane',
        url: 'https://youtu.be/MkjazYnvNP8?si=iN-FfnbrUD-9yFHQ',
        videoId: 'MkjazYnvNP8',
        keywords: [
          'Vector Equation of Line',
          'Vector Equation of Plane',
          'Equation of Line in Vector Form',
          'Equation of Plane in Vector Form',
          '3D Geometry'
        ]
      }
    ]
  },
  {
    id: 'product-vectors',
    number: '5',
    name: 'Product of Vectors',
    description: 'Dot & cross products, geometrical vector methods, planes, vector areas, scalar triple products, skew lines, and triple products.',
    color: 'from-amber-600 to-rose-600',
    badgeColor: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    videos: [
      {
        id: '5-1',
        code: '5.1',
        title: 'Scalar/Dot Product of Two Vectors – Geometrical Interpretation, Orthogonal Projections',
        url: 'https://youtu.be/ePS_EM4_2Vs?si=RwOG85kXZFpw46xO',
        videoId: 'ePS_EM4_2Vs',
        keywords: [
          'Dot Product',
          'Scalar Product',
          'Geometrical Interpretation of Dot Product',
          'Orthogonal Projection',
          'Projection of Vector'
        ]
      },
      {
        id: '5-2',
        code: '5.2',
        title: 'Properties of Dot Product',
        url: 'https://youtu.be/5qv8RmIpM_I?si=Ca0jPDUai8ok-BMs',
        videoId: '5qv8RmIpM_I',
        keywords: [
          'Properties of Dot Product',
          'Scalar Product Properties',
          'Dot Product Rules',
          'Vector Dot Product'
        ]
      },
      {
        id: '5-3',
        code: '5.3',
        title: 'Scalar Product and Angle Between Two Vectors',
        url: 'https://youtu.be/5qv8RmIpM_I?si=4AK1zz1_fff3e4AD',
        videoId: '5qv8RmIpM_I',
        keywords: [
          'Scalar Product',
          'Dot Product and Angle',
          'Angle Between Vectors',
          'Vector Angle Formula'
        ]
      },
      {
        id: '5-4',
        code: '5.4',
        title: 'Geometrical Vector Methods',
        url: 'https://youtu.be/ZM2-Bb8Zdt0?si=bdXH2Ui2n5mWv4xV',
        videoId: 'ZM2-Bb8Zdt0',
        keywords: [
          'Geometrical Vector Methods',
          'Vector Geometry',
          'Vector Method',
          'Geometry Using Vectors',
          'Vector Applications'
        ]
      },
      {
        id: '5-5',
        code: '5.5',
        title: 'Vector Equation of a Plane – Normal Form',
        url: 'https://youtu.be/Tvtc9dH63NI?si=zBfI097qi1I-rd_-',
        videoId: 'Tvtc9dH63NI',
        keywords: [
          'Vector Equation of Plane',
          'Normal Form of Plane',
          'Plane Equation Vector Form',
          'Normal Vector',
          'Equation of Plane'
        ]
      },
      {
        id: '5-6',
        code: '5.6',
        title: 'Angle Between Two Planes',
        url: 'https://youtu.be/7G07dPSlWbY?si=s2ecBH75R2XbxQ3e',
        videoId: '7G07dPSlWbY',
        keywords: [
          'Angle Between Two Planes',
          'Angle Between Planes Formula',
          'Dihedral Angle',
          'Normal Vectors'
        ]
      },
      {
        id: '5-7',
        code: '5.7',
        title: 'Vector Product/Cross Product of Two Vectors and Properties',
        url: 'https://youtu.be/48ByCfHYcE4?si=0NKeEeinDWLVGlVT',
        videoId: '48ByCfHYcE4',
        keywords: [
          'Cross Product',
          'Vector Product',
          'Cross Product of Vectors',
          'Properties of Cross Product',
          'Vector Product Formula'
        ]
      },
      {
        id: '5-8',
        code: '5.8',
        title: 'Vector Product in (i, j, k) System',
        url: 'https://youtu.be/gPnWm-IXoAY?si=bQw0-UxxpUmpfHFH',
        videoId: 'gPnWm-IXoAY',
        keywords: [
          'Cross Product i j k',
          'Vector Product i j k',
          'Determinant Method Cross Product',
          'i j k Vector Product'
        ]
      },
      {
        id: '5-9',
        code: '5.9',
        title: 'Vector Areas',
        url: 'https://youtu.be/PxDfkq3FMaw?si=_5OYOZf5OFoBmD5h',
        videoId: 'PxDfkq3FMaw',
        keywords: [
          'Vector Area',
          'Area Using Vectors',
          'Area of Triangle Using Vectors',
          'Area of Parallelogram Using Vectors',
          'Cross Product Area'
        ]
      },
      {
        id: '5-10',
        code: '5.10',
        title: 'Scalar Triple Product',
        url: 'https://youtu.be/rhwQ_5ZJ-8g?si=asTabyQEjR8IRRU6',
        videoId: 'rhwQ_5ZJ-8g',
        keywords: [
          'Scalar Triple Product',
          'Scalar Triple Product of Vectors',
          'Volume Using Scalar Triple Product',
          'Coplanarity'
        ]
      },
      {
        id: '5-11',
        code: '5.11',
        title: 'Vector Equation of a Plane – Different Forms, Skew Lines, Shortest Distance, Coplanarity',
        url: 'https://youtu.be/Q3hcxDoSymc?si=1M1a84pkV8CoLGCf',
        videoId: 'Q3hcxDoSymc',
        keywords: [
          'Vector Equation of Plane',
          'Plane Different Forms',
          'Skew Lines',
          'Shortest Distance Between Skew Lines',
          'Coplanarity of Vectors',
          'Distance Between Lines'
        ]
      },
      {
        id: '5-12',
        code: '5.12',
        title: 'Vector Triple Product – Results',
        url: 'https://youtu.be/MPHFx6LOUec?si=4T8TmK_oA6GooxIk',
        videoId: 'MPHFx6LOUec',
        keywords: [
          'Vector Triple Product',
          'Vector Triple Product Formula',
          'Vector Triple Product Identity',
          'BAC-CAB Rule',
          'BAC CAB Rule'
        ]
      },
      {
        id: '5-13',
        code: '5.13',
        title: 'Solved Problems on Vector Algebra',
        url: 'https://youtu.be/MPHFx6LOUec?si=4T8TmK_oA6GooxIk',
        videoId: 'MPHFx6LOUec',
        keywords: [
          'Vector Problems',
          'Vector Algebra Problems',
          'Product of Vectors Problems',
          'Vector Solved Examples',
          'Vector Practice Problems'
        ]
      }
    ]
  }
];

// Helper to normalize strings for flexible, resilient search (lowercased, alphanumeric only)
const normalize = (str) => 
  (str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// Flatten all videos for navigation and search
const ALL_VIDEOS = TOPICS_DATA.flatMap(topic => 
  topic.videos.map(video => ({
    ...video,
    topicId: topic.id,
    topicName: topic.name,
    topicNumber: topic.number,
    topicColor: topic.color,
    badgeColor: topic.badgeColor
  }))
);

export default function MathsCurriculum({ onEnroll }) {
  const [selectedTopicId, setSelectedTopicId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);

  // Search and filter logic
  const { filteredVideos, isSearching } = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    const isSearching = trimmedQuery.length > 0;

    let list = ALL_VIDEOS;

    // If not actively searching, filter by tab if a specific tab is chosen
    if (!isSearching && selectedTopicId !== 'all') {
      list = list.filter(v => v.topicId === selectedTopicId);
      return { filteredVideos: list, isSearching };
    }

    // When searching, match across ALL topics or current selected tab (or all topics if not found in tab)
    if (isSearching) {
      const rawLower = trimmedQuery.toLowerCase();
      const normQ = normalize(trimmedQuery);
      const queryTokens = normQ.split(' ').filter(Boolean);

      const matches = ALL_VIDEOS.map(video => {
        // Collect all text sources
        const titleNorm = normalize(video.title);
        const codeNorm = normalize(video.code);
        const topicNorm = normalize(video.topicName);
        const keywordsNorm = (video.keywords || []).map(k => normalize(k));

        // Check if raw or normalized query matches title, code, or topic
        const directTitleMatch = video.title.toLowerCase().includes(rawLower) || titleNorm.includes(normQ);
        const directCodeMatch = video.code.toLowerCase().includes(rawLower) || codeNorm.includes(normQ);
        const directTopicMatch = video.topicName.toLowerCase().includes(rawLower) || topicNorm.includes(normQ);

        // Check matching keywords
        const matchedKeywords = (video.keywords || []).filter(kw => {
          const kwNorm = normalize(kw);
          return kw.toLowerCase().includes(rawLower) || kwNorm.includes(normQ);
        });

        // Check multi-word token match (e.g. user types "cartesian product" or "cramer rule" or "pmi induction")
        const allTokensInCombined = queryTokens.length > 0 && queryTokens.every(token => {
          return (
            titleNorm.includes(token) ||
            codeNorm.includes(token) ||
            topicNorm.includes(token) ||
            keywordsNorm.some(kw => kw.includes(token))
          );
        });

        const isMatch = directTitleMatch || directCodeMatch || directTopicMatch || matchedKeywords.length > 0 || allTokensInCombined;

        if (isMatch) {
          return {
            ...video,
            matchedKeyword: matchedKeywords[0] || (directTitleMatch ? null : (video.keywords && video.keywords[0]))
          };
        }
        return null;
      }).filter(Boolean);

      // If user has a specific tab selected and results exist within that tab, optionally prioritize or show all
      if (selectedTopicId !== 'all') {
        const tabFiltered = matches.filter(v => v.topicId === selectedTopicId);
        // If results exist in the current tab, show them; otherwise show all matches so the user doesn't get zero results accidentally
        if (tabFiltered.length > 0) {
          return { filteredVideos: tabFiltered, isSearching };
        }
      }

      return { filteredVideos: matches, isSearching };
    }

    return { filteredVideos: list, isSearching };
  }, [selectedTopicId, searchQuery]);

  // Find index in filtered list for next/prev navigation
  const currentVideoIndex = useMemo(() => {
    if (!activeVideo) return -1;
    return filteredVideos.findIndex(v => v.id === activeVideo.id);
  }, [activeVideo, filteredVideos]);

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setActiveVideo(filteredVideos[currentVideoIndex - 1]);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex >= 0 && currentVideoIndex < filteredVideos.length - 1) {
      setActiveVideo(filteredVideos[currentVideoIndex + 1]);
    }
  };

  return (
    <section id="maths-curriculum" className="py-16 sm:py-24 bg-[#EBF0F7] dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-bold mb-4 border border-indigo-200/60 dark:border-indigo-800/60">
            <Tv size={15} />
            <span>AP & TS Intermediate Mathematics Video Lectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Mathematics Chapter-Wise Video Lectures
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
            Explore topic-by-topic concept explanations and theorem proofs for Functions, Mathematical Induction, Matrices, and Vectors with high-yield video solutions.
          </p>
        </div>

        {/* Filter Controls: Topic Tabs & Smart Keyword Search Bar */}
        <div className="mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Topic Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedTopicId('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedTopicId === 'all' && !isSearching
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              All Topics ({ALL_VIDEOS.length})
            </button>
            {TOPICS_DATA.map((topic) => {
              const isActive = selectedTopicId === topic.id && !isSearching;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {topic.number}. {topic.name} ({topic.videos.length})
                </button>
              );
            })}
          </div>

          {/* Smart Keyword Search Bar */}
          <div className="relative w-full lg:w-96 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topic or keyword (e.g. Cartesian Product, Cramer's, PMI, Dot Product...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400 shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                title="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Search Results Notification Banner */}
        {isSearching && (
          <div className="mb-6 px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-medium">
              <Search size={14} className="text-indigo-600 dark:text-indigo-400" />
              <span>
                Found <strong className="font-bold text-indigo-700 dark:text-indigo-300">{filteredVideos.length}</strong> related {filteredVideos.length === 1 ? 'video' : 'videos'} for "<em>{searchQuery}</em>"
              </span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              Clear filter <X size={12} />
            </button>
          </div>
        )}

        {/* Video Cards Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <BookOpen className="w-12 h-12 mx-auto text-slate-400 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No matching videos found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4">
              Try searching with general keywords like <strong>PMI</strong>, <strong>Determinants</strong>, <strong>Cross Product</strong>, or <strong>Inverse Functions</strong>.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTopicId('all'); }}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Reset Search & View All ({ALL_VIDEOS.length})
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => {
              const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

              return (
                <div
                  key={video.id}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800 hover:-translate-y-1"
                >
                  {/* Thumbnail Container */}
                  <div 
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Chapter / Topic Code Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg backdrop-blur-md bg-black/60 text-white font-mono text-xs font-bold border border-white/10 flex items-center gap-1.5 shadow-sm">
                      <Layers size={12} className="text-indigo-400" />
                      <span>Topic {video.code}</span>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-13 h-13 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/40 group-hover:scale-115 transition-transform duration-300 ring-4 ring-white/30">
                        <Play size={22} className="ml-0.5 fill-white" />
                      </div>
                    </div>

                    {/* YouTube Brand Indicator */}
                    <div className="absolute bottom-2.5 right-3 text-[11px] font-bold text-white/90 drop-shadow flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse"></span>
                      <span>YouTube Lecture</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Topic Name Breadcrumb */}
                      <div className="text-[11px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-1.5 flex items-center gap-1">
                        <span>{video.topicName}</span>
                      </div>

                      {/* Video Title */}
                      <h3 
                        onClick={() => setActiveVideo(video)}
                        className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer leading-snug mb-2"
                        title={video.title}
                      >
                        <span className="text-indigo-600 dark:text-indigo-400 font-extrabold mr-1.5">{video.code}</span>
                        {video.title}
                      </h3>

                      {/* Matching Keyword Indicator tag if matched via search */}
                      {isSearching && video.matchedKeyword && (
                        <div className="mb-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-[10px] font-semibold border border-indigo-200/60 dark:border-indigo-800/60 max-w-full truncate">
                          <Tag size={10} className="shrink-0" />
                          <span className="truncate">Matches: {video.matchedKeyword}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                      <button
                        onClick={() => setActiveVideo(video)}
                        className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-indigo-600/20"
                      >
                        <Play size={14} className="fill-white" /> Watch Now
                      </button>

                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                        title="Open in YouTube"
                        aria-label={`Open ${video.title} on YouTube`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Doubt Clearing & Live Tuition CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 border border-indigo-700/30 text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span>Live 1-on-1 Faculty Assistance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
                Need Personal Mentorship or Have Doubts in These Topics?
              </h3>
              <p className="text-indigo-200/80 text-sm sm:text-base max-w-2xl">
                Get 1-on-1 doubt clarification, step-by-step board presentation techniques, and customized chapter worksheets to score a guaranteed 75/75 in Maths.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onEnroll && onEnroll('Mathematics 1-on-1 Live Doubt & Board Coaching')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-indigo-500/25 cursor-pointer"
              >
                <span>Book 1-on-1 Doubt Session</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Video Player Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-600/30 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30 shrink-0">
                  Topic {activeVideo.code}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {activeVideo.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">YouTube</span>
                </a>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Responsive 16:9 YouTube Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="px-5 py-3.5 bg-slate-800/90 border-t border-slate-700/60 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevVideo}
                  disabled={currentVideoIndex <= 0}
                  className="px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 disabled:opacity-40 disabled:hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                <button
                  onClick={handleNextVideo}
                  disabled={currentVideoIndex >= filteredVideos.length - 1}
                  className="px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 disabled:opacity-40 disabled:hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Next <ChevronRight size={16} />
                </button>
                <span className="text-xs text-slate-400 font-medium ml-1">
                  {currentVideoIndex + 1} of {filteredVideos.length}
                </span>
              </div>

              <button
                onClick={() => {
                  const current = activeVideo;
                  setActiveVideo(null);
                  if (onEnroll) onEnroll(`Maths Help: Topic ${current.code} - ${current.title}`);
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer ml-auto"
              >
                <span>Ask Doubt in this Topic</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
