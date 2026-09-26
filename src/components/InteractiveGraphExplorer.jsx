import React, { useState } from 'react';
import { Sliders, TrendingUp } from 'lucide-react';

export default function InteractiveGraphExplorer({ onOpenBooking }) {
  // Quadratic equation: f(x) = a*x^2 + b*x + c
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(-4);

  // Derived mathematical properties
  const discriminant = b * b - 4 * a * c;
  const vertexX = (-b / (2 * a)).toFixed(2);
  const vertexY = (a * Math.pow(-b / (2 * a), 2) + b * (-b / (2 * a)) + c).toFixed(2);
  
  let rootsDisplay = '';
  let root1 = null;
  let root2 = null;

  if (discriminant > 0) {
    root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    rootsDisplay = `x₁ = ${root1},  x₂ = ${root2}`;
  } else if (discriminant === 0) {
    root1 = (-b / (2 * a)).toFixed(2);
    rootsDisplay = `Double root at x = ${root1}`;
  } else {
    rootsDisplay = `No real roots (Δ = ${discriminant} < 0, complex roots)`;
  }

  // Presets
  const applyPreset = (presetA, presetB, presetC) => {
    setA(presetA);
    setB(presetB);
    setC(presetC);
  };

  const width = 420;
  const height = 300;
  const scaleX = width / 12;
  const scaleY = height / 16;
  const centerX = width / 2;
  const centerY = height / 2;

  const toSvgX = (x) => centerX + x * scaleX;
  const toSvgY = (y) => centerY - y * scaleY;

  const points = [];
  for (let x = -6; x <= 6; x += 0.2) {
    const y = a * x * x + b * x + c;
    const sx = toSvgX(x);
    const sy = toSvgY(y);
    points.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
  }
  const pathD = `M ${points.join(' L ')}`;

  return (
    <section id="interactive-lab" className="py-20 relative bg-[#E5ECF4] border-t border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sliders size={14} className="text-indigo-700" />
            Visual Intuition Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live Function & Curve Explorer
          </h2>
          <p className="text-slate-700 mt-3 text-base sm:text-lg">
            At Maths Learning Academy, formulas are never just memorized. Students manipulate coefficients in real-time to watch mathematical geometry dance.
          </p>
        </div>

        {/* Interactive Sandbox Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#DFE7F2] rounded-2xl border border-[#BAC9DC] p-6 sm:p-8 shadow-md">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-slate-600 tracking-wider">Formula Equation</span>
                <span className="text-xs font-mono font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200">Quadratic Function</span>
              </div>
              <div className="text-2xl font-mono font-bold text-slate-950 mt-1 bg-[#D2DFEE] p-3.5 rounded-xl border border-[#B8CADF] shadow-xs">
                f(x) = {a}x² {b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`} {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}
              </div>
            </div>

            {/* Presets */}
            <div>
              <span className="text-xs font-semibold text-slate-600 block mb-2">Try Quick Presets:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => applyPreset(1, 0, -4)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-800 border border-[#B8CADF] font-mono transition-colors cursor-pointer shadow-xs font-semibold"
                >
                  Standard Parabola
                </button>
                <button
                  onClick={() => applyPreset(-1, 0, 5)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-800 border border-[#B8CADF] font-mono transition-colors cursor-pointer shadow-xs font-semibold"
                >
                  Inverted Arch
                </button>
                <button
                  onClick={() => applyPreset(1, -4, 4)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-800 border border-[#B8CADF] font-mono transition-colors cursor-pointer shadow-xs font-semibold"
                >
                  Tangent Root (Δ=0)
                </button>
                <button
                  onClick={() => applyPreset(1, 2, 4)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-[#D2DFEE] hover:bg-[#C5D5E7] text-slate-800 border border-[#B8CADF] font-mono transition-colors cursor-pointer shadow-xs font-semibold"
                >
                  Complex Floating
                </button>
              </div>
            </div>

            {/* Parameter Sliders */}
            <div className="space-y-4 bg-[#D2DFEE] p-4 rounded-xl border border-[#B8CADF] shadow-xs">
              {/* Parameter a */}
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-semibold">
                  <span className="text-slate-800">Curvature & Direction (a):</span>
                  <span className="font-mono font-bold text-sky-700">{a}</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.5"
                  value={a}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setA(val === 0 ? 0.5 : val);
                  }}
                  className="w-full accent-sky-600 h-1.5 bg-[#B8C8DB] rounded-lg cursor-pointer"
                />
              </div>

              {/* Parameter b */}
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-semibold">
                  <span className="text-slate-800">Linear Shift (b):</span>
                  <span className="font-mono font-bold text-purple-700">{b}</span>
                </div>
                <input
                  type="range"
                  min="-6"
                  max="6"
                  step="0.5"
                  value={b}
                  onChange={(e) => setB(Number(e.target.value))}
                  className="w-full accent-purple-600 h-1.5 bg-[#B8C8DB] rounded-lg cursor-pointer"
                />
              </div>

              {/* Parameter c */}
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-semibold">
                  <span className="text-slate-800">Y-Intercept (c):</span>
                  <span className="font-mono font-bold text-emerald-700">{c}</span>
                </div>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  step="0.5"
                  value={c}
                  onChange={(e) => setC(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-[#B8C8DB] rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Key Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#D2DFEE] border border-[#B8CADF] shadow-xs">
                <span className="text-slate-600 block mb-0.5 font-semibold">Vertex (Extrema):</span>
                <span className="font-mono font-bold text-amber-700 text-sm">
                  ({vertexX}, {vertexY})
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#D2DFEE] border border-[#B8CADF] shadow-xs">
                <span className="text-slate-600 block mb-0.5 font-semibold">Discriminant (Δ = b² - 4ac):</span>
                <span className="font-mono font-bold text-indigo-700 text-sm">
                  {discriminant.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-indigo-100/90 border border-indigo-200 text-xs">
              <span className="text-indigo-950 font-semibold block mb-1">Roots / Zeroes:</span>
              <span className="font-mono font-bold text-emerald-800 text-sm">{rootsDisplay}</span>
            </div>

          </div>

          {/* SVG Graph Canvas Column */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full bg-[#D6E2F0] rounded-xl p-4 border border-[#B8CADF] relative shadow-inner overflow-hidden">
              
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-2 font-semibold">
                <span>Cartesian Grid [-6, +6] × [-8, +8]</span>
                <span className="text-indigo-700 font-bold flex items-center gap-1">
                  <TrendingUp size={13} /> Real-Time Rendering
                </span>
              </div>

              <svg 
                viewBox={`0 0 ${width} ${height}`} 
                className="w-full h-auto max-h-[360px] select-none"
              >
                {/* Grid Lines */}
                {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map((x) => (
                  <line
                    key={`gx-${x}`}
                    x1={toSvgX(x)}
                    y1="0"
                    x2={toSvgX(x)}
                    y2={height}
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                  />
                ))}
                {[-6, -4, -2, 2, 4, 6].map((y) => (
                  <line
                    key={`gy-${y}`}
                    x1="0"
                    y1={toSvgY(y)}
                    x2={width}
                    y2={toSvgY(y)}
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                  />
                ))}

                {/* X and Y Axes */}
                <line
                  x1="0"
                  y1={centerY}
                  x2={width}
                  y2={centerY}
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <line
                  x1={centerX}
                  y1="0"
                  x2={centerX}
                  y2={height}
                  stroke="#475569"
                  strokeWidth="1.5"
                />

                {/* Axis Labels */}
                <text x={width - 15} y={centerY - 8} fill="#334155" fontSize="11" fontFamily="monospace" fontWeight="bold">x</text>
                <text x={centerX + 8} y="15" fill="#334155" fontSize="11" fontFamily="monospace" fontWeight="bold">y</text>

                {/* Parabola Curve */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#curveGradientLight)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient id="curveGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4338CA" />
                    <stop offset="50%" stopColor="#7E22CE" />
                    <stop offset="100%" stopColor="#0369A1" />
                  </linearGradient>
                </defs>

                {/* Vertex Point Marker */}
                {Number(vertexX) >= -6 && Number(vertexX) <= 6 && Number(vertexY) >= -8 && Number(vertexY) <= 8 && (
                  <g>
                    <circle
                      cx={toSvgX(Number(vertexX))}
                      cy={toSvgY(Number(vertexY))}
                      r="6"
                      fill="#B45309"
                      stroke="#EBF0F7"
                      strokeWidth="2"
                    />
                    <text
                      x={toSvgX(Number(vertexX)) + 8}
                      y={toSvgY(Number(vertexY)) - 8}
                      fill="#92400E"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      Vertex ({vertexX}, {vertexY})
                    </text>
                  </g>
                )}

                {/* Root Markers */}
                {root1 !== null && Number(root1) >= -6 && Number(root1) <= 6 && (
                  <circle
                    cx={toSvgX(Number(root1))}
                    cy={centerY}
                    r="4.5"
                    fill="#047857"
                    stroke="#EBF0F7"
                    strokeWidth="1.5"
                  />
                )}
                {root2 !== null && Number(root2) >= -6 && Number(root2) <= 6 && root2 !== root1 && (
                  <circle
                    cx={toSvgX(Number(root2))}
                    cy={centerY}
                    r="4.5"
                    fill="#047857"
                    stroke="#EBF0F7"
                    strokeWidth="1.5"
                  />
                )}
              </svg>

              {/* Bottom Legend */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-700 mt-2 pt-2 border-t border-[#CAD8EA]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block"></span> Vertex
                  </span>
                  <span className="flex items-center gap-1 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 inline-block"></span> Roots (x-intercepts)
                  </span>
                </div>
                <span className="text-slate-600">Drag sliders to test variations</span>
              </div>
            </div>

            <div className="w-full mt-4 flex items-center justify-between p-3.5 rounded-xl bg-[#D2DFEE] border border-[#B8CADF] shadow-xs">
              <span className="text-xs text-slate-800 font-semibold">
                Want to learn advanced 3D graphing, polar coordinates & calculus integration?
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-indigo-700 hover:text-indigo-900 underline cursor-pointer"
              >
                Join Math Lab →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
