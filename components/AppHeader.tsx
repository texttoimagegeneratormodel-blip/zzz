
import React from 'react';
import { 
  RefreshCw, 
  Maximize, 
  Minimize, 
  Activity,
  Box,
  Layout,
  MoreVertical
} from 'lucide-react';

interface AppHeaderProps {
  onSync: () => void;
  isSyncing: boolean;
  toggleFullscreen: () => void;
  isFullscreen: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  onSync, 
  isSyncing, 
  toggleFullscreen, 
  isFullscreen 
}) => {
  return (
    <header className="h-10 bg-[#141414] border-b border-white/5 flex items-center justify-between px-3 flex-shrink-0 z-50">
      {/* App Brand & Icon */}
      <div className="flex items-center space-x-3 group cursor-default">
        <div className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded shadow-indigo-500/20 shadow-lg">
          <Box size={14} className="text-white fill-current" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold tracking-wider uppercase text-slate-300">AI Studio Pro</span>
          <span className="text-[8px] font-medium text-indigo-400 -mt-1 uppercase tracking-widest opacity-80">v3.5 Build Alpha</span>
        </div>
      </div>

      {/* App-Style Navigation / Tabs (Static) */}
      <div className="flex items-center h-full space-x-1">
        <div className="px-4 h-full flex items-center border-b-2 border-indigo-500 bg-white/5 text-white text-[11px] font-semibold cursor-pointer">
          <Layout size={12} className="mr-2 opacity-70" />
          Primary Workspace
        </div>
        <div className="px-4 h-full flex items-center border-b-2 border-transparent hover:bg-white/5 text-slate-500 text-[11px] font-medium transition-all duration-200 cursor-not-allowed">
          System Console
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center px-2 py-1 bg-black/30 rounded border border-white/5 mr-2">
          <Activity size={12} className="text-emerald-500 mr-2 animate-pulse" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Real-time Connected</span>
        </div>

        <button 
          onClick={onSync}
          className="p-1.5 hover:bg-white/5 rounded transition-all active:scale-95 text-slate-400 hover:text-white"
          title="Force Sync State"
        >
          <RefreshCw size={14} className={isSyncing ? 'animate-spin text-indigo-400' : ''} />
        </button>

        <button 
          onClick={toggleFullscreen}
          className="p-1.5 hover:bg-white/5 rounded transition-all text-slate-400 hover:text-white"
          title={isFullscreen ? "Restore View" : "Maximize Workspace"}
        >
          {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
        </button>

        <div className="h-4 w-[1px] bg-white/10 mx-1"></div>

        <button 
          className="p-1.5 hover:bg-white/5 rounded transition-all text-slate-400 hover:text-white"
        >
          <MoreVertical size={14} />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
