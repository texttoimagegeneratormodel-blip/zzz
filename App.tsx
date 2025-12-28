
import React, { useState, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import StatusPanel from './components/StatusPanel';
import Footer from './components/Footer';

const TARGET_URL = "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true";

const App: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      {/* Native-style App Header */}
      <AppHeader 
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content: The Iframe */}
        <main className="flex-1 relative bg-black border-r border-white/5">
          <iframe
            src={TARGET_URL}
            className="w-full h-full border-none shadow-2xl"
            title="AI Studio Browser"
            allow="camera; microphone; geolocation; encrypted-media; autoplay; fullscreen; clipboard-read; clipboard-write"
            sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads allow-presentation"
          />
        </main>

        {/* Side Panel: AI Status & Search Grounding (Automatic Info) */}
        <aside className="w-80 bg-[#080808] hidden lg:flex flex-col border-l border-white/5">
           <StatusPanel targetUrl={TARGET_URL} />
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default App;
