
import React, { useState, useEffect } from 'react';

const REPORTS = [
  {
    title: "System Status: Online",
    description: "35+ Professional native tools are currently active and optimized for performance.",
    icon: "fa-circle-check",
    color: "from-mint to-emerald-400",
    tag: "Real-time"
  },
  {
    title: "Security & Privacy Report",
    description: "100% Secure. All data is processed locally on your device. We never store your inputs.",
    icon: "fa-shield-halved",
    color: "from-blue-500 to-indigo-600",
    tag: "Audit Pass"
  },
  {
    title: "New Tools Available",
    description: "Zip Creator, Extractor and Password Strength checker have been added to the suite.",
    icon: "fa-bolt",
    color: "from-amber-400 to-orange-500",
    tag: "Update"
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REPORTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-44 sm:h-48 mb-10 group overflow-hidden rounded-[2rem] shadow-2xl">
      {REPORTS.map((report, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex items-center p-6 sm:p-10 bg-gradient-to-br ${report.color} ${idx === current ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}`}
        >
          <div className="flex-grow pr-12">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest mb-3">
              {report.tag}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-none mb-2 tracking-tight">
              {report.title}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm font-medium line-clamp-2 max-w-md">
              {report.description}
            </p>
          </div>
          <div className="hidden sm:flex w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl items-center justify-center border border-white/20">
            <i className={`fa-solid ${report.icon} text-4xl text-white`}></i>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-6 flex gap-1.5">
        {REPORTS.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Navigation Arrows (Optional visual) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => setCurrent((prev) => (prev - 1 + REPORTS.length) % REPORTS.length)} className="w-8 h-8 rounded-full bg-black/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/20"><i className="fa-solid fa-chevron-up text-[10px]"></i></button>
          <button onClick={() => setCurrent((prev) => (prev + 1) % REPORTS.length)} className="w-8 h-8 rounded-full bg-black/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/20"><i className="fa-solid fa-chevron-down text-[10px]"></i></button>
      </div>
    </div>
  );
};

export default HeroSlider;
