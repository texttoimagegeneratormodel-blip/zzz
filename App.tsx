
import React, { useState, useRef, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import { ExternalLink, Terminal, ShieldAlert } from 'lucide-react';

const TARGET_URL = "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true";

const App: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Show fallback launcher if the app doesn't load within 5 seconds
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleManualLaunch = () => {
    window.open(TARGET_URL, '_blank');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#050505] text-white overflow-hidden select-none">
      <AppHeader 
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        onLaunch={handleManualLaunch}
      />

      <main className="flex-1 relative overflow-hidden bg-black">
        {/* Loading / Fallback Screen */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-[#0a0a0a]">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-2 border-indigo-500/10 rounded-full animate-ping absolute"></div>
            <div className="w-24 h-24 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
            <Terminal className="absolute inset-0 m-auto text-indigo-500 opacity-50" size={32} />
          </div>

          <div className="text-center px-6 max-w-md">
            <h2 className="text-xl font-bold tracking-tight mb-2">Initializing Secure Workspace</h2>
            <p className="text-slate-500 text-sm mb-8">
              Attempting to establish a secure connection with Google AI Studio. 
              Please note that corporate security policies might prevent direct embedding.
            </p>

            {showFallback && (
              <button 
                onClick={handleManualLaunch}
                className="group flex items-center justify-center space-x-3 w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-2xl shadow-indigo-500/20"
              >
                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Launch Full Workspace</span>
              </button>
            )}
            
            <div className="mt-6 flex items-center justify-center space-x-2 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
              <ShieldAlert size={12} className="text-amber-500" />
              <span>Identity Verification Required</span>
            </div>
          </div>
        </div>
        
        {/* Main Application Frame */}
        <iframe
          ref={iframeRef}
          src={TARGET_URL}
          className="absolute inset-0 w-full h-full border-none z-10"
          title="AI Studio Runtime"
          allow="camera; microphone; geolocation; encrypted-media; autoplay"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
