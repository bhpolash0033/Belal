
import React, { useState } from 'react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-800 transition-colors">
      <div className="mb-6">
        <textarea 
          placeholder="Paste your text here..." 
          className="w-full h-64 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 focus:ring-2 focus:ring-mint focus:outline-none resize-none text-lg text-slate-800 dark:text-slate-200"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-center shadow-inner border border-transparent dark:border-slate-700">
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{words}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Words</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-center shadow-inner border border-transparent dark:border-slate-700">
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{characters}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Chars</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-center shadow-inner border border-transparent dark:border-slate-700">
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{charsNoSpaces}</p>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter leading-none">Chars (No Spc)</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-center shadow-inner border border-transparent dark:border-slate-700">
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{sentences}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Sentences</p>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <button 
          onClick={() => navigator.clipboard.writeText(text)}
          className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-all active:scale-95"
        >
          <i className="fa-solid fa-copy mr-2"></i> Copy
        </button>
        <button 
          onClick={() => setText('')}
          className="px-6 py-3 rounded-xl bg-rose-50 dark:bg-rose-900/30 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-bold transition-all active:scale-95"
        >
          <i className="fa-solid fa-trash mr-2"></i> Clear
        </button>
      </div>
    </div>
  );
};

export default WordCounter;
