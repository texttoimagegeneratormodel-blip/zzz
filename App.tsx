
import React, { useState, useRef } from 'react';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';

const TARGET_URL = "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true";

const App: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSync = () => {
    setIsSyncing(true);
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
    setTimeout(() => setIsSyncing(false), 1500);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#0a0a0a] text-slate-100 overflow-hidden select-none border border-slate-800/50">
      {/* App Top Bar */}
      <AppHeader 
        onSync={handleSync} 
        isSyncing={isSyncing}
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Main Workspace */}
      <main className="flex-1 relative bg-black">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0f0f0f]">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 border-2 border-indigo-500/20 rounded-full animate-ping absolute"></div>
              <div className="w-16 h-16 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-slate-500 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
              Initializing Workspace...
            </p>
          </div>
        </div>
        
        <iframe
          ref={iframeRef}
          src={TARGET_URL}
          className="absolute inset-0 w-full h-full border-none z-10"
          title="AI Studio App"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        />
      </main>

      {/* App Status Bar */}
      <Footer />
    </div>
  );
};

export default App;
