
import React, { useState } from 'react';

const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toTitle = () => {
    const title = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(title);
  };
  const toSentence = () => {
    const sentence = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    setText(sentence);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <textarea 
        className="w-full h-48 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 focus:ring-2 focus:ring-mint focus:outline-none resize-none mb-6 font-medium text-slate-800 dark:text-slate-100"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button onClick={toUpper} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors uppercase">UPPERCASE</button>
        <button onClick={toLower} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors uppercase">lowercase</button>
        <button onClick={toTitle} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors uppercase">Title Case</button>
        <button onClick={toSentence} className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors uppercase">Sentence case</button>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button onClick={() => navigator.clipboard.writeText(text)} className="text-mint font-bold hover:underline px-2 text-sm">Copy result</button>
        <button onClick={() => setText('')} className="text-rose-500 dark:text-rose-400 font-bold hover:underline px-2 text-sm">Clear</button>
      </div>
    </div>
  );
};

export default CaseConverter;
