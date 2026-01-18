
import React, { useState } from 'react';

const LoremIpsumGenerator: React.FC = () => {
  const [paras, setParas] = useState(3);
  const [text, setText] = useState('');

  const generate = () => {
    const base = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
    setText(Array(paras).fill(base).join("\n\n"));
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="flex items-center gap-4 mb-6">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Paragraphs:</label>
        <input type="number" value={paras} onChange={e => setParas(parseInt(e.target.value))} className="w-20 p-2 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-lg outline-none text-slate-800 dark:text-white" />
        <button onClick={generate} className="flex-grow bg-mint text-slate-800 font-bold py-3 rounded-xl shadow-md active:scale-95 transition-all">Generate</button>
      </div>
      {text && (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl relative border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">{text}</p>
            <button onClick={() => navigator.clipboard.writeText(text)} className="mt-4 text-mint font-black uppercase text-[10px] tracking-widest hover:underline">Copy Everything</button>
        </div>
      )}
    </div>
  );
};

export default LoremIpsumGenerator;
