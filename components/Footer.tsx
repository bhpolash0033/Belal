
import React from 'react';
import { ToolCategory } from '../types';

interface FooterProps {
  onCategorySelect: (cat: ToolCategory) => void;
}

const Footer: React.FC<FooterProps> = ({ onCategorySelect }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU9j8V4qM3O7q7z_H1U2v-z-P_I_Y_Z_A_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P/s1600/ToolsBD.png" 
                   alt="ToolsBD Logo" className="h-10 w-auto opacity-90 brightness-110" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your one-stop destination for high-quality, free online utility tools. Professional, fast, and always native.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-mint hover:text-slate-800 transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-mint hover:text-slate-800 transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-mint hover:text-slate-800 transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Categories</h3>
            <ul className="space-y-3 text-sm">
              {Object.values(ToolCategory).slice(0, 4).map(cat => (
                <li key={cat}>
                  <button onClick={() => onCategorySelect(cat)} className="hover:text-mint transition-colors">{cat}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Native Tools</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => {}} className="hover:text-mint transition-colors">Age Calculator</button></li>
              <li><button onClick={() => {}} className="hover:text-mint transition-colors">SEO Audit</button></li>
              <li><button onClick={() => {}} className="hover:text-mint transition-colors">Text Tools</button></li>
              <li><button onClick={() => {}} className="hover:text-mint transition-colors">QR Engine</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Stay Updated</h3>
            <p className="text-sm mb-4">No spam, only useful updates about new tools.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-mint outline-none"
              />
              <button className="bg-mint text-slate-800 p-2 rounded-lg hover:bg-opacity-90 transition-all">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide text-slate-500 uppercase">
          <p>© {new Date().getFullYear()} ToolsBD.top. Professional Native Suite.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">DMCA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
