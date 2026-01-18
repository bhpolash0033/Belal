
import React, { useEffect } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', className = "" }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ads might be blocked or not configured
    }
  }, []);

  return (
    <div className={`my-4 overflow-hidden rounded-2xl ${className}`}>
      <div className="ad-container bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 min-h-[100px] flex items-center justify-center relative transition-colors">
        <span className="absolute top-0 left-0 bg-slate-200 dark:bg-slate-800 text-[8px] font-black uppercase px-2 py-0.5 rounded-br-md text-slate-500 dark:text-slate-400">Sponsored</span>
        
        {/* AdSense ins tag */}
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" 
             data-ad-slot={slot || "XXXXXXXXXX"} 
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
             
        {/* Fallback for development/no ads */}
        <div className="flex flex-col items-center gap-1 opacity-20 dark:opacity-10 select-none">
           <i className="fa-solid fa-rectangle-ad text-3xl text-slate-400 dark:text-slate-600"></i>
           <p className="text-[10px] font-black tracking-widest uppercase text-slate-400">Ad Space</p>
        </div>
      </div>
    </div>
  );
};

export default AdUnit;
