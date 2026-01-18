
import React, { useState } from 'react';

const DevUtilities: React.FC<{ toolId: string }> = ({ toolId }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleAction = () => {
    if (toolId === 'binary-tool') {
      setOutput(input.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '));
    } else if (toolId === 'html-entities') {
      const el = document.createElement('div');
      el.textContent = input;
      setOutput(el.innerHTML);
    }
  };

  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 8) score += 25;
    if (/[A-Z]/.test(pass)) score += 25;
    if (/[0-9]/.test(pass)) score += 25;
    if (/[^A-Za-z0-9]/.test(pass)) score += 25;
    return score;
  };

  const strength = getPasswordStrength(input);
  const strengthColor = strength <= 25 ? 'bg-rose-500' : strength <= 50 ? 'bg-orange-500' : strength <= 75 ? 'bg-yellow-500' : 'bg-green-500';
  const strengthText = strength <= 25 ? 'Weak' : strength <= 50 ? 'Fair' : strength <= 75 ? 'Good' : 'Strong';

  if (toolId === 'pass-strength') {
    return (
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Enter Password to Check</label>
        <input 
          type="text" 
          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-6 focus:ring-2 focus:ring-mint outline-none text-slate-800 dark:text-slate-100"
          placeholder="Type a password..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-center mb-2">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Strength: <span className={strengthColor.replace('bg-', 'text-')}>{strengthText}</span></span>
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{strength}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
            <div className={`h-full ${strengthColor} transition-all duration-500`} style={{ width: `${strength}%` }}></div>
          </div>
          <p className="mt-4 text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold leading-tight">
            Tip: Use at least 12 characters with mixed case, numbers, and symbols for better security.
          </p>
        </div>
      </div>
    );
  }

  if (toolId === 'privacy-gen') {
    return (
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
        <input placeholder="Website Name" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 outline-none dark:text-white border dark:border-slate-700" onChange={e => setInput(e.target.value)} />
        <button className="w-full bg-mint text-slate-800 font-bold py-4 rounded-2xl" onClick={() => setOutput(`Privacy Policy for ${input}... (Template Generated)`)}>Generate Template</button>
        {output && <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm text-slate-600 dark:text-slate-300 border dark:border-slate-700">{output}</div>}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      {toolId === 'markdown-preview' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <textarea 
            className="h-64 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none font-mono text-sm text-slate-800 dark:text-slate-100" 
            placeholder="Type Markdown..." 
            onChange={e => setInput(e.target.value)} 
          />
          <div className="h-64 p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-auto text-slate-700 dark:text-slate-300">
            {input || <span className="text-slate-300 dark:text-slate-600 italic">Preview will appear here...</span>}
          </div>
        </div>
      ) : (
        <>
          <textarea 
            className="w-full h-32 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-4 outline-none text-slate-800 dark:text-slate-100" 
            placeholder="Enter input data..." 
            value={input} 
            onChange={e => setInput(e.target.value)} 
          />
          <button onClick={handleAction} className="w-full bg-mint text-slate-800 font-bold py-4 rounded-2xl mb-6 shadow-lg">Process Now</button>
          {output && (
            <div className="relative">
              <pre className="bg-slate-900 p-6 rounded-2xl text-xs overflow-auto font-mono text-mint border border-slate-800">{output}</pre>
              <button onClick={() => navigator.clipboard.writeText(output)} className="absolute top-4 right-4 text-white/50 hover:text-white text-[10px] font-bold uppercase">Copy</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DevUtilities;
