
import React, { useState } from 'react';

const Base64Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const handleAction = () => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (e) {
      setOutput('Error: Invalid input for processing.');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="flex gap-2 mb-6">
        <button 
            onClick={() => setMode('encode')}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'encode' ? 'bg-mint text-slate-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
        >
            Encode
        </button>
        <button 
            onClick={() => setMode('decode')}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'decode' ? 'bg-mint text-slate-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
        >
            Decode
        </button>
      </div>

      <textarea 
        className="w-full h-32 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-4 focus:ring-2 focus:ring-mint outline-none text-slate-800 dark:text-slate-100"
        placeholder={`Enter text to ${mode}...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAction} className="w-full bg-slate-800 dark:bg-slate-700 text-white font-bold py-4 rounded-2xl mb-6">
        Process Now
      </button>

      {output && (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl relative border border-slate-200 dark:border-slate-700">
            <p className="text-[10px] text-slate-400 font-black uppercase mb-2">Output Result</p>
            <p className="text-sm font-mono break-all text-slate-700 dark:text-slate-300">{output}</p>
            <button 
                onClick={() => navigator.clipboard.writeText(output)}
                className="absolute top-4 right-4 text-mint font-bold text-xs"
            >
                Copy
            </button>
        </div>
      )}
    </div>
  );
};

export default Base64Tool;
