
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ToolGrid from './components/ToolGrid';
import Sidebar from './components/Sidebar';
import ToolDetail from './components/ToolDetail';
import AIChat from './components/AIChat';
import HeroSlider from './components/HeroSlider';
import { TOOLS as STATIC_TOOLS, APP_LOGO } from './constants';
import { Tool, ToolCategory } from './types';

const App: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>(STATIC_TOOLS);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All'>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'ai'>('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Slightly longer for better visual impact
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, tools]);

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool);
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetView = () => {
    setSelectedTool(null);
    setActiveTab('home');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 transition-colors duration-500">
        <div className="relative w-44 h-44 mb-10 flex items-center justify-center">
          {/* Outer Spinning Ring */}
          <div className="absolute inset-0 border-[6px] border-slate-200 dark:border-slate-800 rounded-full opacity-20"></div>
          <div className="absolute inset-0 border-[6px] border-mint border-t-transparent rounded-full animate-spin"></div>
          
          {/* Inner Counter-Spinning Ring */}
          <div className="absolute inset-4 border-[3px] border-slate-300 dark:border-slate-700 rounded-full opacity-30 animate-reverse-spin"></div>
          
          {/* Logo Container with Glassmorphism */}
          <div className="relative z-10 w-28 h-28 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl flex items-center justify-center p-5 border border-white/50 dark:border-slate-800/50 backdrop-blur-xl">
            <img 
              src={APP_LOGO} 
              alt="ToolsBD" 
              className="w-full h-auto animate-pulse brightness-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/150?text=TBD";
              }}
            />
          </div>
        </div>
        
        <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
            <h2 className="text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tighter">
              Tools<span className="text-mint">BD</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-1 w-8 bg-mint rounded-full"></div>
              <p className="text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">Native Suite</p>
              <div className="h-1 w-8 bg-mint rounded-full"></div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} pb-20 md:pb-0`}>
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onHomeClick={resetView}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activeCategory={activeCategory}
        setActiveCategory={(cat) => { setActiveCategory(cat); resetView(); setIsSidebarOpen(false); }}
      />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {selectedTool ? (
          <ToolDetail tool={selectedTool} onBack={resetView} />
        ) : (
          <>
            <HeroSlider />
            
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <div>
                <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-1 leading-none">
                  {activeCategory === 'All' ? 'Native Tools' : activeCategory}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Powered by www.toolsbd.top</p>
              </div>
              
              <div className="flex gap-2 no-scrollbar overflow-x-auto pb-2">
                  <button 
                    onClick={() => setActiveCategory('All')}
                    className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === 'All' ? 'bg-mint text-slate-800 shadow-lg' : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800'}`}
                  >
                    All
                  </button>
                  {Object.values(ToolCategory).map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-mint text-slate-800 shadow-lg' : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800'}`}
                    >
                      {cat.split(' ')[0]}
                    </button>
                  ))}
              </div>
            </div>

            <ToolGrid tools={filteredTools} onToolClick={handleToolClick} />
          </>
        )}
      </main>

      <AIChat forceOpen={activeTab === 'ai'} />
      
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-10 py-3 flex justify-around items-center z-50 md:hidden pb-safe transition-colors">
        <button 
            onClick={() => { setActiveTab('home'); resetView(); }}
            className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-mint font-black' : 'text-slate-400 dark:text-slate-500'}`}
        >
            <i className="fa-solid fa-grid-2 text-xl"></i>
            <span className="text-[10px] uppercase tracking-wider">Tools</span>
        </button>

        <button 
            onClick={() => setActiveTab('ai')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'ai' ? 'text-mint font-black' : 'text-slate-400 dark:text-slate-500'}`}
        >
            <i className="fa-solid fa-sparkles text-xl"></i>
            <span className="text-[10px] uppercase tracking-wider">AI Support</span>
        </button>
      </div>

      <div className="hidden md:block">
        <Footer onCategorySelect={(cat) => { setActiveCategory(cat); resetView(); }} />
      </div>
    </div>
  );
};

export default App;
