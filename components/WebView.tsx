
import React from 'react';

interface WebViewProps {
  url: string;
  title: string;
}

const WebView: React.FC<WebViewProps> = ({ url, title }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 animate-in fade-in duration-500">
      <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-hidden">
          <i className="fa-solid fa-lock text-[10px] text-green-500"></i>
          <span className="text-[10px] font-bold text-slate-400 truncate tracking-tight">{url}</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
      <div className="flex-grow relative bg-slate-50">
        <iframe 
          src={url} 
          title={title}
          className="w-full h-[600px] border-none"
          sandbox="allow-scripts allow-same-origin allow-forms"
        ></iframe>
        <div className="absolute bottom-4 right-4">
           <a 
            href={url} 
            target="_blank" 
            className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
           >
             <i className="fa-solid fa-arrow-up-right-from-square"></i>
           </a>
        </div>
      </div>
    </div>
  );
};

export default WebView;
