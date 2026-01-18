
import React, { useState } from 'react';
import { ToolCategory } from '../types';
import { APP_LOGO } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: ToolCategory | 'All';
  setActiveCategory: (cat: ToolCategory | 'All') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeCategory, setActiveCategory }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-slate-900 z-50 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            {!imageError ? (
              <img 
                src={APP_LOGO} 
                alt="ToolsBD" 
                onError={() => setImageError(true)}
                className="h-8 w-auto object-contain dark:brightness-125" 
              />
            ) : (
              <span className="text-xl font-black text-slate-800 dark:text-white">Tools<span className="text-mint">BD</span></span>
            )}
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <i className="fa-solid fa-xmark text-xl text-slate-500 dark:text-slate-400"></i>
            </button>
          </div>

          <div className="space-y-1 overflow-y-auto flex-grow no-scrollbar">
            <button 
              onClick={() => setActiveCategory('All')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeCategory === 'All' ? 'bg-mint/10 text-mint font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}
            >
              <i className="fa-solid fa-house w-5"></i>
              <span>Dashboard</span>
            </button>

            <div className="pt-6 pb-2 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-4">Categories</div>
            
            {Object.values(ToolCategory).map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeCategory === cat ? 'bg-mint/10 text-mint font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}
              >
                <i className={`fa-solid ${getCategoryIcon(cat)} w-5`}></i>
                <span className="text-sm">{cat}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
             <a href="https://www.toolsbd.top" target="_blank" className="block p-4 bg-slate-900 dark:bg-slate-800 rounded-2xl text-white text-center hover:opacity-90 transition-opacity">
                <p className="text-xs opacity-50 uppercase font-black tracking-widest mb-1">Official Site</p>
                <p className="font-bold text-sm">www.toolsbd.top</p>
             </a>
          </div>
        </div>
      </div>
    </>
  );
};

const getCategoryIcon = (cat: ToolCategory) => {
  switch(cat) {
    case ToolCategory.SEO: return 'fa-chart-line';
    case ToolCategory.CALCULATOR: return 'fa-calculator';
    case ToolCategory.IMAGE: return 'fa-images';
    case ToolCategory.ZIP: return 'fa-file-zipper';
    case ToolCategory.TEXT: return 'fa-font';
    case ToolCategory.SECURITY: return 'fa-shield-halved';
    case ToolCategory.DEV: return 'fa-terminal';
    case ToolCategory.AUDIO: return 'fa-headphones';
    default: return 'fa-ellipsis-h';
  }
};

export default Sidebar;
