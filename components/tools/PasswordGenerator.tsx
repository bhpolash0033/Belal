
import React, { useState, useEffect } from 'react';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
    setCopied(false);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="relative mb-8">
        <div className="bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
          <p className="text-xl sm:text-2xl font-mono font-bold text-slate-800 dark:text-slate-100 break-all select-all">{password}</p>
        </div>
        <button 
          onClick={copyToClipboard}
          className={`absolute -bottom-4 right-6 px-6 py-2 rounded-full font-bold shadow-lg transition-all ${copied ? 'bg-green-500 text-white' : 'bg-mint text-slate-800'}`}
        >
          {copied ? <><i className="fa-solid fa-check mr-2"></i> Copied!</> : <><i className="fa-solid fa-copy mr-2"></i> Copy</>}
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password Length: {length}</label>
          </div>
          <input 
            type="range" 
            min="8" 
            max="64" 
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full accent-mint"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="w-5 h-5 accent-mint" />
            <span className="font-semibold text-slate-700 dark:text-slate-200">Uppercase (A-Z)</span>
          </label>
          <label className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="w-5 h-5 accent-mint" />
            <span className="font-semibold text-slate-700 dark:text-slate-200">Numbers (0-9)</span>
          </label>
          <label className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="w-5 h-5 accent-mint" />
            <span className="font-semibold text-slate-700 dark:text-slate-200">Symbols (&^%$#)</span>
          </label>
        </div>

        <button 
          onClick={generatePassword}
          className="w-full bg-slate-800 dark:bg-slate-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 text-lg"
        >
          <i className="fa-solid fa-rotate mr-2"></i> Generate New Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
