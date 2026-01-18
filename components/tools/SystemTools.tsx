
import React, { useState, useEffect } from 'react';

const SystemTools: React.FC<{ toolId: string }> = ({ toolId }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => setTime(prev => prev + 10), 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  if (toolId === 'stopwatch') {
    return (
      <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl text-center border border-slate-200 dark:border-slate-800 transition-colors">
        <p className="text-5xl sm:text-6xl font-black text-slate-800 dark:text-white font-mono mb-8 tracking-tighter">
          {new Date(time).toISOString().slice(14, 21)}
        </p>
        <div className="flex gap-4">
          <button onClick={() => setRunning(!running)} className={`flex-1 py-4 rounded-2xl font-bold transition-all active:scale-95 ${running ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' : 'bg-mint text-slate-800'}`}>
            {running ? 'Pause' : 'Start'}
          </button>
          <button onClick={() => { setTime(0); setRunning(false); }} className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 py-4 rounded-2xl font-bold transition-all active:scale-95">Reset</button>
        </div>
      </div>
    );
  }

  if (toolId === 'color-picker') {
      return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 text-center transition-colors">
            <input type="color" className="w-32 h-32 rounded-full cursor-pointer border-none bg-transparent mb-6 transition-transform hover:scale-105" id="clr" />
            <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase mb-4">Click above to pick a color</p>
        </div>
      );
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl break-all font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {toolId === 'user-agent' ? navigator.userAgent : `${window.screen.width} x ${window.screen.height}`}
      </div>
      <button onClick={() => navigator.clipboard.writeText(toolId === 'user-agent' ? navigator.userAgent : `${window.screen.width}x${window.screen.height}`)} className="w-full mt-4 text-mint font-bold uppercase text-xs tracking-widest hover:underline">Copy Info</button>
    </div>
  );
};

export default SystemTools;
