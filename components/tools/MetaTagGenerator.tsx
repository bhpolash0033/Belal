
import React, { useState } from 'react';

const MetaTagGenerator: React.FC = () => {
  const [data, setData] = useState({ title: '', desc: '', keys: '', author: '' });
  const [tags, setTags] = useState('');

  const generate = () => {
    const code = `
<!-- Primary Meta Tags -->
<title>${data.title}</title>
<meta name="title" content="${data.title}">
<meta name="description" content="${data.desc}">
<meta name="keywords" content="${data.keys}">
<meta name="author" content="${data.author}">
<meta name="robots" content="index, follow">`.trim();
    setTags(code);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="space-y-4 mb-6">
        <input placeholder="Website Title" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white" onChange={e => setData({...data, title: e.target.value})} />
        <textarea placeholder="Website Description" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white" onChange={e => setData({...data, desc: e.target.value})} />
        <input placeholder="Keywords" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white" onChange={e => setData({...data, keys: e.target.value})} />
      </div>
      <button onClick={generate} className="w-full bg-slate-800 dark:bg-slate-700 text-white font-bold py-4 rounded-2xl mb-6 shadow-lg active:scale-95 transition-transform">Generate Tags</button>
      {tags && (
        <div className="relative">
          <pre className="bg-slate-900 dark:bg-black p-6 rounded-2xl text-[10px] sm:text-xs overflow-auto font-mono text-mint border border-slate-800 max-h-64">
            {tags}
          </pre>
          <button onClick={() => navigator.clipboard.writeText(tags)} className="absolute top-4 right-4 text-white/50 text-[10px] font-bold uppercase hover:text-white">Copy</button>
        </div>
      )}
    </div>
  );
};

export default MetaTagGenerator;
