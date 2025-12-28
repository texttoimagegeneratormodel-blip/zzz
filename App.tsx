
import React from 'react';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';

const TARGET_URL = "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#050505] text-white overflow-hidden">
      {/* Minimal App Header */}
      <AppHeader 
        toggleFullscreen={() => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        }}
        isFullscreen={!!document.fullscreenElement}
        onLaunch={() => window.open(TARGET_URL, '_blank')}
      />

      {/* Main Container for the Website */}
      <main className="flex-1 relative bg-black overflow-hidden">
        <iframe
          src={TARGET_URL}
          className="absolute inset-0 w-full h-full border-none shadow-2xl bg-[#0a0a0a]"
          title="AI Studio Workspace"
          // Allowing all necessary permissions for Google AI Studio to function correctly
          allow="camera; microphone; geolocation; encrypted-media; autoplay; fullscreen; clipboard-read; clipboard-write"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads allow-presentation"
          loading="eager"
        />
        
        {/* Subtle overlay to handle loading state visually if needed */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
           <div className="w-1 h-1 bg-indigo-500 rounded-full animate-ping"></div>
        </div>
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
