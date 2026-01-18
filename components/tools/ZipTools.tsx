
import React, { useState } from 'react';
// @ts-ignore
import JSZip from 'https://esm.sh/jszip';

const ZipTools: React.FC<{ toolId: string }> = ({ toolId }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedFiles, setExtractedFiles] = useState<{ name: string; blob: Blob }[]>([]);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      setExtractedFiles([]);
      setStatus('');
    }
  };

  const createZip = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setStatus('Creating ZIP archive...');
    
    try {
      const zip = new JSZip();
      files.forEach(file => {
        zip.file(file.name, file);
      });
      
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = "toolsbd_archive.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setStatus('ZIP created and download started!');
    } catch (error) {
      console.error(error);
      setStatus('Error creating ZIP.');
    } finally {
      setIsProcessing(false);
    }
  };

  const extractZip = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setStatus('Analyzing archive...');
    
    try {
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(files[0]);
      const extractedList: { name: string; blob: Blob }[] = [];
      
      const fileKeys = Object.keys(zipContent.files);
      for (const key of fileKeys) {
        const file = zipContent.files[key];
        if (!file.dir) {
          const content = await file.async('blob');
          extractedList.push({ name: key, blob: content });
        }
      }
      
      setExtractedFiles(extractedList);
      setStatus(`Found ${extractedList.length} files in archive.`);
    } catch (error) {
      console.error(error);
      setStatus('Error extracting ZIP. Is it a valid archive?');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadExtracted = (file: { name: string; blob: Blob }) => {
    const url = URL.createObjectURL(file.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors">
      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">
          {toolId === 'zip-create' ? 'Select files to bundle:' : 'Select ZIP file to extract:'}
        </label>
        
        <div className="relative group">
          <input 
            type="file" 
            multiple={toolId === 'zip-create'}
            accept={toolId === 'zip-extract' ? '.zip' : '*'}
            onChange={handleFileChange}
            className="hidden" 
            id="file-input"
          />
          <label 
            htmlFor="file-input"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer group-hover:border-mint"
          >
            <i className={`fa-solid ${toolId === 'zip-create' ? 'fa-plus' : 'fa-file-zipper'} text-3xl text-slate-300 dark:text-slate-700 mb-2 group-hover:text-mint`}></i>
            <span className="text-sm font-bold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
              {files.length > 0 ? `${files.length} file(s) selected` : 'Click to select files'}
            </span>
          </label>
        </div>
      </div>

      <button 
        onClick={toolId === 'zip-create' ? createZip : extractZip}
        disabled={files.length === 0 || isProcessing}
        className="w-full bg-mint disabled:opacity-50 hover:bg-opacity-90 text-slate-800 font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 text-lg flex items-center justify-center gap-3"
      >
        {isProcessing ? (
          <i className="fa-solid fa-spinner animate-spin"></i>
        ) : (
          <i className={`fa-solid ${toolId === 'zip-create' ? 'fa-file-zipper' : 'fa-box-open'}`}></i>
        )}
        {toolId === 'zip-create' ? 'Create ZIP Archive' : 'Extract ZIP Content'}
      </button>

      {status && (
        <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 animate-pulse">
          {status}
        </p>
      )}

      {extractedFiles.length > 0 && (
        <div className="mt-10 animate-in fade-in slide-in-from-top-4">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Inside Archive:</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2 no-scrollbar">
            {extractedFiles.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl">
                <div className="flex items-center gap-3 overflow-hidden">
                  <i className="fa-solid fa-file text-slate-400"></i>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">{file.name}</span>
                </div>
                <button 
                  onClick={() => downloadExtracted(file)}
                  className="p-2 text-mint hover:bg-mint/10 rounded-lg transition-colors"
                >
                  <i className="fa-solid fa-download"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ZipTools;
