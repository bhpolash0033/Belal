
import React, { useState } from 'react';

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Select Date of Birth</label>
        <input 
          type="date" 
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint focus:outline-none text-lg text-slate-800 dark:text-slate-100 transition-colors"
        />
      </div>

      <button 
        onClick={calculateAge}
        className="w-full bg-mint hover:bg-opacity-90 text-slate-800 font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 text-lg"
      >
        Calculate Age
      </button>

      {result && (
        <div className="mt-10 grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl text-center border-b-4 border-mint">
            <p className="text-3xl font-black text-slate-800 dark:text-white">{result.years}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mt-1">Years</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl text-center border-b-4 border-mint">
            <p className="text-3xl font-black text-slate-800 dark:text-white">{result.months}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mt-1">Months</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl text-center border-b-4 border-mint">
            <p className="text-3xl font-black text-slate-800 dark:text-white">{result.days}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mt-1">Days</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
