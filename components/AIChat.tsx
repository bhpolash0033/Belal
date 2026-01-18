
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  forceOpen?: boolean;
}

const AIChat: React.FC<AIChatProps> = ({ forceOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your ToolsBD assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceOpen) setIsOpen(true);
  }, [forceOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-20 md:bottom-6 right-6 z-50`}>
      {/* Floating Button (Desktop Only) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 md:w-16 md:h-16 bg-mint text-slate-800 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <i className="fa-solid fa-robot text-xl md:text-2xl"></i>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-20 md:right-0 w-full md:w-96 h-full md:h-[550px] bg-white md:rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-mint p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <i className="fa-solid fa-robot text-slate-800 text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 leading-none">ToolsBD Assistant</h3>
                <span className="text-[10px] text-slate-700 uppercase font-black tracking-widest">Always Active</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-800 hover:bg-white/20 p-2 rounded-xl transition-colors">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${msg.role === 'user' ? 'bg-mint text-slate-800 rounded-tr-none' : 'bg-white text-slate-600 border border-slate-100 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-mint rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-mint rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-mint rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 bg-white pb-safe">
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="How can I help you today?" 
                className="flex-grow bg-slate-100 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-mint outline-none shadow-inner"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-slate-800 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all disabled:opacity-30 active:scale-90"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
