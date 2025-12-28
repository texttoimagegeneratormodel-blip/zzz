
import React, { useState, useEffect } from 'react';

const TARGET_URL = "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // লোডিং স্ক্রিনটি ১.৫ সেকেন্ড পর চলে যাবে
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden">
      {/* লোডিং অ্যানিমেশন */}
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-400">
            Secure Session Starting
          </p>
        </div>
      )}

      {/* 
          ১০০% ফুল স্ক্রিন iframe 
          নোট: গুগলের নিজস্ব সিকিউরিটি পলিসির কারণে এটি অনেক সময় ব্রাউজারে ব্লক হতে পারে।
      */}
      <iframe
        src={TARGET_URL}
        className="w-full h-full border-none"
        title="AI Studio Browser"
        allow="camera; microphone; geolocation; encrypted-media; autoplay; fullscreen; clipboard-read; clipboard-write"
        // sandbox দেওয়া হয়েছে যাতে সর্বোচ্চ সিকিউরিটি নিশ্চিত হয়
        sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads allow-presentation"
      />
      
      {/* যদি গুগল ব্লক করে থাকে, তবে এই বাটনটি দিয়ে সরাসরি ওপেন করা যাবে */}
      <div className="fixed bottom-4 right-4 z-40 opacity-20 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => window.open(TARGET_URL, '_blank')}
          className="bg-white/5 hover:bg-white/10 text-white/30 hover:text-white px-3 py-1.5 rounded text-[9px] uppercase tracking-widest border border-white/10 backdrop-blur-sm"
        >
          Emergency Link
        </button>
      </div>
    </div>
  );
};

export default App;
