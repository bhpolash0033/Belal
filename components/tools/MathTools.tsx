
import React, { useState } from 'react';

const MathTools: React.FC<{ toolId: string }> = ({ toolId }) => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [unitType, setUnitType] = useState('length');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    
    if (toolId === 'unit-converter') {
      if (isNaN(n1)) return;
      if (unitType === 'length') setResult(`${n1} Meters = ${(n1 * 3.28084).toFixed(2)} Feet`);
      if (unitType === 'weight') setResult(`${n1} KG = ${(n1 * 2.20462).toFixed(2)} LBS`);
      if (unitType === 'temp') setResult(`${n1} °C = ${((n1 * 9/5) + 32).toFixed(2)} °F`);
      return;
    }

    if (isNaN(n1) || (toolId !== 'unit-converter' && isNaN(n2))) return;

    if (toolId === 'percent-calc') {
      setResult((n1 / 100) * n2);
    } else if (toolId === 'discount-calc') {
      setResult(n1 - (n1 * (n2 / 100)));
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      {toolId === 'unit-converter' && (
        <div className="flex gap-2 mb-6">
          {['length', 'weight', 'temp'].map(type => (
            <button 
              key={type}
              onClick={() => { setUnitType(type); setResult(null); }}
              className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-all ${unitType === type ? 'bg-mint text-slate-800 shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'}`}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            {toolId === 'percent-calc' ? 'Percentage (%)' : toolId === 'unit-converter' ? 'Value to Convert' : 'Original Price ($)'}
          </label>
          <input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none text-slate-800 dark:text-white" placeholder="0.00" />
        </div>
        {toolId !== 'unit-converter' && (
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              {toolId === 'percent-calc' ? 'Of Value' : 'Discount Percentage (%)'}
            </label>
            <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none text-slate-800 dark:text-white" placeholder="0.00" />
          </div>
        )}
      </div>
      <button onClick={calculate} className="w-full bg-mint text-slate-800 font-bold py-4 rounded-2xl mb-6 shadow-lg hover:brightness-105 active:scale-95 transition-all">
        Process Now
      </button>
      {result !== null && (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl text-center border border-slate-100 dark:border-slate-700 animate-in zoom-in-95 duration-300">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Result</p>
          <p className="text-2xl font-black text-slate-800 dark:text-white">{typeof result === 'number' ? result.toFixed(2) : result}</p>
        </div>
      )}
    </div>
  );
};

export default MathTools;
