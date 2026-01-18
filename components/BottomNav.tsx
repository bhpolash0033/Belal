
import React from 'react';

interface BottomNavProps {
  activeTab: 'home' | 'web' | 'ai';
  setActiveTab: (tab: 'home' | 'web' | 'ai') => void;
  onHomeClick: () => void;
  onMenuToggle: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, onHomeClick, onMenuToggle }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-50 md:hidden pb-safe">
      <button 
        onClick={() => { setActiveTab('home'); onHomeClick(); }}
        className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-mint' : 'text-slate-400'}`}
      >
        <i className="fa-solid fa-house text-xl"></i>
        <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
      </button>

      <button 
        onClick={() => setActiveTab('web')}
        className={`flex flex-col items-center gap-1 ${activeTab === 'web' ? 'text-blue-500 font-bold' : 'text-slate-400'}`}
      >
        <i className="fa-solid fa-globe text-xl"></i>
        <span className="text-[10px] font-bold uppercase tracking-wider">Website</span>
      </button>

      <button 
        onClick={() => setActiveTab('ai')}
        className={`flex flex-col items-center gap-1 ${activeTab === 'ai' ? 'text-mint' : 'text-slate-400'}`}
      >
        <div className="relative">
          <i className="fa-solid fa-robot text-xl"></i>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">Assistant</span>
      </button>
    </div>
  );
};

export default BottomNav;
