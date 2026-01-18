
import React, { useState } from 'react';

const RobotsGenerator: React.FC = () => {
  const [sitemapUrl, setSitemapUrl] = useState('');
  const [allowAdmin, setAllowAdmin] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = () => {
    let text = `User-agent: *\nDisallow: /search\nDisallow: /category/\nDisallow: /tag/`;
    if (!allowAdmin) text += `\nDisallow: /admin\nDisallow: /login`;
    if (sitemapUrl) text += `\n\nSitemap: ${sitemapUrl.replace(/\/$/, "")}/sitemap.xml`;
    
    setGeneratedText(text);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Sitemap URL (Optional)</label>
          <input 
            type="url" 
            placeholder="https://www.toolsbd.top"
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint outline-none text-slate-800 dark:text-slate-100"
            value={sitemapUrl}
            onChange={(e) => setSitemapUrl(e.target.value)}
          />
        </div>

        <label className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
          <input 
            type="checkbox" 
            checked={allowAdmin} 
            onChange={() => setAllowAdmin(!allowAdmin)} 
            className="w-5 h-5 accent-mint" 
          />
          <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Allow Admin Indexing?</span>
        </label>
      </div>

      <button 
        onClick={handleGenerate}
        className="w-full bg-slate-800 dark:bg-slate-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform active:scale-95"
      >
        Generate Robots.txt
      </button>

      {generatedText && (
        <div className="mt-8 animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Your Robots.txt</span>
            <button 
              onClick={() => navigator.clipboard.writeText(generatedText)}
              className="text-mint font-bold text-sm hover:underline"
            >
              Copy Text
            </button>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl font-mono text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line shadow-inner">
            {generatedText}
          </div>
        </div>
      )}
    </div>
  );
};

export default RobotsGenerator;
