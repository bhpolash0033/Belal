
import React from 'react';
import { Tool } from '../types';
import AgeCalculator from './tools/AgeCalculator';
import WordCounter from './tools/WordCounter';
import PasswordGenerator from './tools/PasswordGenerator';
import SitemapGenerator from './tools/SitemapGenerator';
import RobotsGenerator from './tools/RobotsGenerator';
import BMICalculator from './tools/BMICalculator';
import CaseConverter from './tools/CaseConverter';
import EMICalculator from './tools/EMICalculator';
import QRGenerator from './tools/QRGenerator';
import Base64Tool from './tools/Base64Tool';
import JSONFormatter from './tools/JSONFormatter';
import HashGenerator from './tools/HashGenerator';
import MetaTagGenerator from './tools/MetaTagGenerator';
import LoremIpsumGenerator from './tools/LoremIpsumGenerator';
import MathTools from './tools/MathTools';
import TextUtilities from './tools/TextUtilities';
import DevUtilities from './tools/DevUtilities';
import SystemTools from './tools/SystemTools';
import ZipTools from './tools/ZipTools';
import AdUnit from './AdUnit';

interface ToolDetailProps {
  tool: Tool;
  onBack: () => void;
}

const ToolDetail: React.FC<ToolDetailProps> = ({ tool, onBack }) => {
  const renderTool = () => {
    switch(tool.id) {
      case 'word-counter': return <WordCounter />;
      case 'case-converter': return <CaseConverter />;
      case 'text-reverse':
      case 'duplicate-remover':
      case 'num-to-word':
      case 'text-to-slug': return <TextUtilities toolId={tool.id} />;
      case 'lorem-ipsum': return <LoremIpsumGenerator />;
      case 'pass-gen': return <PasswordGenerator />;
      case 'pass-strength': return <DevUtilities toolId="pass-strength" />;
      case 'hash-gen': return <HashGenerator />;
      case 'base64': return <Base64Tool />;
      case 'json-format': return <JSONFormatter />;
      case 'url-codec': return <Base64Tool />;
      case 'binary-tool':
      case 'html-entities':
      case 'markdown-preview': return <DevUtilities toolId={tool.id} />;
      case 'sitemap-gen': return <SitemapGenerator />;
      case 'robots-gen': return <RobotsGenerator />;
      case 'meta-gen': return <MetaTagGenerator />;
      case 'privacy-gen': return <DevUtilities toolId="privacy-gen" />;
      case 'age-calc': return <AgeCalculator />;
      case 'emi-calc': return <EMICalculator />;
      case 'bmi-calc': return <BMICalculator />;
      case 'percent-calc':
      case 'discount-calc': return <MathTools toolId={tool.id} />;
      case 'unit-converter': return <MathTools toolId="unit-converter" />;
      case 'qr-gen': return <QRGenerator />;
      case 'user-agent':
      case 'screen-res':
      case 'stopwatch': return <SystemTools toolId={tool.id} />;
      case 'color-picker': return <SystemTools toolId="color-picker" />;
      case 'tts-tool': return <TextUtilities toolId="tts-tool" />;
      case 'zip-create':
      case 'zip-extract': return <ZipTools toolId={tool.id} />;
      default:
        return (
            <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl text-center border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <i className="fa-solid fa-screwdriver-wrench text-5xl text-slate-200 dark:text-slate-800 mb-4"></i>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Tool Under Maintenance</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">This tool is being updated for offline use. Check back soon!</p>
            </div>
        );
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-mint transition-all font-bold bg-white dark:bg-slate-900 px-4 py-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 active:scale-95"
        >
          <i className="fa-solid fa-chevron-left"></i>
          <span>Back</span>
        </button>
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest bg-slate-100 dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800">
          <i className="fa-solid fa-shield-check text-mint"></i> 
          Secure Native Tool
        </div>
      </div>

      <div className="flex items-center gap-5 mb-8">
        <div className="w-16 h-16 bg-mint flex items-center justify-center rounded-3xl shadow-lg text-slate-800 flex-shrink-0">
          <i className={`fa-solid ${tool.icon} text-3xl`}></i>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100 leading-tight tracking-tight">{tool.name}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">{tool.description}</p>
        </div>
      </div>

      <AdUnit className="mb-8" />

      <div className="max-w-4xl mx-auto">
        {renderTool()}
      </div>

      <AdUnit className="mt-8" />
    </div>
  );
};

export default ToolDetail;
