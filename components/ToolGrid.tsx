
import React from 'react';
import { Tool } from '../types';
import AdUnit from './AdUnit';

interface ToolGridProps {
  tools: Tool[];
  onToolClick: (tool: Tool) => void;
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools, onToolClick }) => {
  const renderGridItems = () => {
    const items = [];
    const adInterval = 8;

    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];
      items.push(
        <button
          key={tool.id}
          onClick={() => onToolClick(tool)}
          className="group flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-slate-200 dark:ring-slate-800"
        >
          <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-mint transition-colors shadow-inner">
            <i className={`fa-solid ${tool.icon} text-2xl text-mint group-hover:text-slate-800`}></i>
          </div>
          <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1 line-clamp-1 text-sm sm:text-base">{tool.name}</h3>
          <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{tool.description}</p>
        </button>
      );

      if ((i + 1) % adInterval === 0 && i !== tools.length - 1) {
        items.push(
          <div key={`ad-${i}`} className="col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-5">
            <AdUnit />
          </div>
        );
      }
    }
    return items;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 animate-in fade-in duration-700">
      {renderGridItems()}
    </div>
  );
};

export default ToolGrid;
