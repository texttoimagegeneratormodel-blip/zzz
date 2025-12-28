
import React from 'react';
import { 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  ShieldCheck,
  Lock,
  Info
} from 'lucide-react';

interface BrowserHeaderProps {
  onRefresh: () => void;
  isRefreshing: boolean;
  toggleFullscreen: () => void;
  isFullscreen: boolean;
}

const BrowserHeader: React.FC<BrowserHeaderProps> = ({ 
  onRefresh, 
  isRefreshing, 
  toggleFullscreen, 
  isFullscreen 
}) => {
  return (
    <header className="h-12 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 flex-shrink-0 z-50 shadow-lg">
      <div className="flex items-center space-x-4">
        {/* Browser Controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>

        <div className="h-4 w-[1px] bg-slate-700 mx-2"></div>

        <button 
          onClick={onRefresh}
          className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white"
          title="Refresh Page"
        >
          <RotateCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Address Bar Replacement (Static Indicator) */}
      <div className="flex-1 max-w-2xl px-6">
        <div className="bg-slate-950 border border-slate-800 rounded-full py-1.5 px-4 flex items-center justify-center space-x-2 text-sm text-slate-400">
          <Lock size={14} className="text-emerald-500" />
          <span className="truncate font-medium tracking-tight">aistudio.google.com</span>
          <ShieldCheck size={14} className="text-blue-500" />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button 
          onClick={toggleFullscreen}
          className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
        <button 
          className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white"
          title="Information"
        >
          <Info size={18} />
        </button>
      </div>
    </header>
  );
};

export default BrowserHeader;
