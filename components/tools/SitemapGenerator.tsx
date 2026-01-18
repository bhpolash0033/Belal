
import React, { useState } from 'react';

const SitemapGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [generatedSitemap, setGeneratedSitemap] = useState('');

  const handleGenerate = () => {
    if (!url) return;
    const cleanUrl = url.replace(/\/$/, "");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${cleanUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>${cleanUrl}/sitemap.xml</loc>
    <priority>0.80</priority>
  </url>
</urlset>`;
    setGeneratedSitemap(xml);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="mb-6">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Enter Website URL</label>
        <input 
          type="url" 
          placeholder="https://www.toolsbd.top"
          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint outline-none text-lg text-slate-800 dark:text-slate-100"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <button 
        onClick={handleGenerate}
        className="w-full bg-mint hover:bg-opacity-90 text-slate-800 font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 text-lg"
      >
        Generate XML Sitemap
      </button>

      {generatedSitemap && (
        <div className="mt-8 animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Generated XML Code</span>
            <button 
              onClick={() => navigator.clipboard.writeText(generatedSitemap)}
              className="text-mint font-bold text-sm hover:underline"
            >
              Copy XML
            </button>
          </div>
          <pre className="bg-slate-900 dark:bg-black text-mint p-6 rounded-2xl overflow-x-auto text-xs font-mono leading-relaxed shadow-inner max-h-64 border border-slate-800">
            {generatedSitemap}
          </pre>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic">
            * Note: This is a basic XML sitemap. For Blogger, you can also use /sitemap.xml directly.
          </p>
        </div>
      )}
    </div>
  );
};

export default SitemapGenerator;
