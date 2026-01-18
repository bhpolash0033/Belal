
import React, { useState } from 'react';

const JSONFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJSON = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON structure. Please check your syntax.');
      setOutput('');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <textarea 
        className="w-full h-48 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-4 font-mono text-sm focus:ring-2 focus:ring-mint outline-none text-slate-800 dark:text-slate-100"
        placeholder="Paste your JSON code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={formatJSON} className="w-full bg-mint text-slate-800 font-bold py-4 rounded-2xl mb-6">
        Format & Beautify
      </button>

      {error && <p className="text-rose-500 dark:text-rose-400 text-sm font-bold mb-4">{error}</p>}

      {output && (
        <div className="bg-slate-900 p-6 rounded-2xl relative">
            <pre className="text-xs text-mint font-mono overflow-auto max-h-64 leading-relaxed">
                {output}
            </pre>
            <button 
                onClick={() => navigator.clipboard.writeText(output)}
                className="absolute top-4 right-4 bg-white/10 text-white px-3 py-1 rounded-lg text-xs font-bold"
            >
                Copy JSON
            </button>
        </div>
      )}
    </div>
  );
};

export default JSONFormatter;
