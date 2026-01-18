
import React, { useState } from 'react';

const QRGenerator: React.FC = () => {
  const [data, setData] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  const generateQR = () => {
    if (!data.trim()) return;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(data)}`;
    setQrUrl(url);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors text-center">
      <div className="mb-6">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 text-left">Enter Text or URL</label>
        <input 
          type="text" 
          placeholder="https://www.toolsbd.top"
          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint outline-none text-slate-800 dark:text-slate-100"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <button 
        onClick={generateQR}
        className="w-full bg-mint hover:bg-opacity-90 text-slate-800 font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 mb-8"
      >
        Generate QR Code
      </button>

      {qrUrl && (
        <div className="flex flex-col items-center animate-in zoom-in duration-500">
          <div className="p-4 bg-white rounded-3xl shadow-inner mb-4 border-8 border-slate-100 dark:border-slate-800">
            <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
          </div>
          <a 
            href={qrUrl} 
            download="qrcode.png" 
            target="_blank" 
            className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest hover:text-mint transition-colors"
          >
            Click to open in new tab
          </a>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
