
import React, { useState, useRef } from 'react';
import { 
  RotateCw, 
  ExternalLink, 
  ShieldCheck, 
  Settings, 
  Maximize2, 
  Minimize2,
  Lock,
  Wifi
} from 'lucide-react';
import BrowserHeader from './components/BrowserHeader';
import Footer from './components/Footer';

const TARGET_URL = "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true";

const App: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
    setTimeout(() => setIsRefreshing(false), 1000);
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
    <div className="flex flex-col h-screen w-full bg-slate-950 text-slate-200 overflow-hidden select-none">
      {/* Browser Toolbar (No Search Bar) */}
      <BrowserHeader 
        onRefresh={handleRefresh} 
        isRefreshing={isRefreshing}
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative bg-white">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-slate-900">
          <div className="flex flex-col items-center animate-pulse">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 font-medium">Connecting to AI Studio...</p>
          </div>
        </div>
        
        <iframe
          ref={iframeRef}
          src={TARGET_URL}
          className="absolute inset-0 w-full h-full border-none z-10"
          title="AI Studio Webview"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        />
      </main>

      {/* Connection Status Footer */}
      <Footer />
    </div>
  );
};

export default App;
