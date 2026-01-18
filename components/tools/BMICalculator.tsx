
import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (w > 0 && h > 0) {
      const val = w / (h * h);
      setBmi(parseFloat(val.toFixed(1)));
    }
  };

  const getCategory = (v: number) => {
    if (v < 18.5) return { label: 'Underweight', color: 'text-blue-500 dark:text-blue-400' };
    if (v < 25) return { label: 'Normal', color: 'text-green-500 dark:text-green-400' };
    if (v < 30) return { label: 'Overweight', color: 'text-orange-500 dark:text-orange-400' };
    return { label: 'Obese', color: 'text-rose-500 dark:text-rose-400' };
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Weight (kg)</label>
          <input 
            type="number" 
            placeholder="e.g. 70"
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint focus:outline-none text-slate-800 dark:text-slate-100"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Height (cm)</label>
          <input 
            type="number" 
            placeholder="e.g. 175"
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-mint focus:outline-none text-slate-800 dark:text-slate-100"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>

      <button 
        onClick={calculateBMI}
        className="w-full bg-mint hover:bg-opacity-90 text-slate-800 font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-8 text-center animate-in fade-in duration-500">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Your BMI</p>
          <h3 className="text-5xl font-black text-slate-800 dark:text-white mb-2">{bmi}</h3>
          <p className={`text-xl font-bold ${getCategory(bmi).color}`}>
            {getCategory(bmi).label}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
