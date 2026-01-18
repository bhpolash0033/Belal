
import React, { useState } from 'react';

const HashGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const simulateHash = () => {
    const fakeHash = Array.from({length: 32}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setResult(fakeHash);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Input String</label>
      <input 
        type="text" 
        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-6 focus:ring-2 focus:ring-mint outline-none text-slate-800 dark:text-slate-100"
        placeholder="Enter text to hash..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button onClick={simulateHash} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-bold text-xs uppercase">MD5</button>
        <button onClick={simulateHash} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-bold text-xs uppercase">SHA-256</button>
      </div>

      {result && (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 relative">
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase mb-1">Generated Hash</p>
            <p className="text-sm font-mono break-all text-slate-800 dark:text-slate-200">{result}</p>
            <button 
                onClick={() => navigator.clipboard.writeText(result)}
                className="mt-3 text-mint font-bold text-xs hover:underline uppercase tracking-widest"
            >
                Copy Hash Value
            </button>
        </div>
      )}
    </div>
  );
};

export default HashGenerator;
