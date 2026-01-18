
import React, { useState } from 'react';
import { APP_LOGO } from '../constants';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onMenuToggle: () => void;
  onHomeClick: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, onMenuToggle, onHomeClick, isDarkMode, toggleTheme }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuToggle}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors md:hidden text-slate-600 dark:text-slate-400"
          >
            <i className="fa-solid fa-bars-staggered text-xl"></i>
          </button>
          
          <div 
            onClick={onHomeClick}
            className="flex items-center cursor-pointer select-none active:scale-95 transition-transform"
          >
            {!imageError ? (
              <img 
                src={APP_LOGO} 
                alt="ToolsBD" 
                onError={() => setImageError(true)}
                className={`h-8 md:h-10 w-auto object-contain min-w-[100px] ${isDarkMode ? 'brightness-125' : ''}`}
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-mint rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-screwdriver-wrench text-slate-800 text-sm"></i>
                </div>
                <span className="text-xl font-black text-slate-800 dark:text-white tracking-tighter">Tools<span className="text-mint">BD</span></span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-grow max-w-md mx-6 hidden md:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search 32+ tools..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 dark:text-slate-100 border-none rounded-2xl py-2.5 pl-11 pr-4 focus:ring-2 focus:ring-mint shadow-inner text-sm font-medium"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm"></i>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2.5 text-slate-400 dark:text-slate-500 hover:text-mint dark:hover:text-mint transition-all rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-90"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
             <i className={`fa-solid ${isDarkMode ? 'fa-sun text-orange-400' : 'fa-moon'} text-lg`}></i>
          </button>
          
          <button 
            onClick={() => window.location.reload()}
            className="p-2.5 text-slate-400 dark:text-slate-500 hover:text-mint transition-all rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hidden sm:block"
          >
             <i className="fa-solid fa-rotate text-lg"></i>
          </button>
          
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-white dark:border-slate-600 shadow-sm ml-2 hidden sm:block">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Belal" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
