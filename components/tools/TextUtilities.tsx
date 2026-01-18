
import React, { useState } from 'react';

const TextUtilities: React.FC<{ toolId: string }> = ({ toolId }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const process = () => {
    if (toolId === 'text-reverse') {
      setOutput(input.split('').reverse().join(''));
    } else if (toolId === 'duplicate-remover') {
      const words = input.split(/\s+/);
      setOutput([...new Set(words)].join(' '));
    } else if (toolId === 'num-to-word') {
      const units = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
      setOutput(input.split('').map(d => units[parseInt(d)] || d).join(' '));
    } else if (toolId === 'text-to-slug') {
      setOutput(input.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''));
    } else if (toolId === 'tts-tool') {
      const msg = new SpeechSynthesisUtterance();
      msg.text = input;
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <textarea 
        className="w-full h-40 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-4 focus:ring-2 focus:ring-mint outline-none text-slate-800 dark:text-slate-100"
        placeholder="Enter your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={process} className="w-full bg-slate-800 dark:bg-slate-700 text-white font-bold py-4 rounded-2xl mb-6 shadow-lg active:scale-95 transition-transform">
        {toolId === 'tts-tool' ? 'Speak Text' : 'Process Text'}
      </button>
      {output && (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl relative border border-slate-200 dark:border-slate-700">
          <p className="text-sm leading-relaxed break-all text-slate-700 dark:text-slate-300">{output}</p>
          <button onClick={() => navigator.clipboard.writeText(output)} className="mt-4 text-mint font-bold text-xs uppercase tracking-widest hover:underline">Copy Output</button>
        </div>
      )}
      {toolId === 'tts-tool' && (
        <p className="text-xs text-slate-400 dark:text-slate-500 text-center italic">Make sure your volume is up!</p>
      )}
    </div>
  );
};

export default TextUtilities;
