
import React, { useState } from 'react';

const EMICalculator: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState<{ emi: string; total: string; interest: string } | null>(null);

  const calculateEMI = () => {
    const p = parseFloat(amount);
    const r = parseFloat(interest) / 12 / 100;
    const n = parseFloat(tenure);

    if (p > 0 && r > 0 && n > 0) {
      const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const totalPayable = emi * n;
      const totalInterest = totalPayable - p;

      setResult({
        emi: emi.toFixed(0),
        total: totalPayable.toFixed(0),
        interest: totalInterest.toFixed(0)
      });
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Loan Amount ($)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint dark:text-white outline-none" placeholder="100000" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Rate (% p.a)</label>
            <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint dark:text-white outline-none" placeholder="10.5" />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Tenure (Months)</label>
            <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint dark:text-white outline-none" placeholder="12" />
          </div>
        </div>
      </div>

      <button onClick={calculateEMI} className="w-full bg-slate-800 dark:bg-slate-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform active:scale-95">Calculate EMI</button>

      {result && (
        <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-2">
          <div className="bg-mint p-6 rounded-2xl text-center shadow-lg">
            <p className="text-slate-700 text-xs font-bold uppercase tracking-widest mb-1">Monthly EMI</p>
            <p className="text-4xl font-black text-slate-800">${result.emi}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-center border dark:border-slate-700">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase mb-1">Total Interest</p>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-200">${result.interest}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-center border dark:border-slate-700">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase mb-1">Total Amount</p>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-200">${result.total}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
