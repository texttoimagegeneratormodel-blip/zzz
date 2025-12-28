
import React from 'react';
import { 
  Maximize2, 
  Minimize2, 
  Cpu, 
  Layers,
  Power,
  Zap,
  ChevronRight
} from 'lucide-react';

interface AppHeaderProps {
  toggleFullscreen: () => void;
  isFullscreen: boolean;
  onLaunch: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  toggleFullscreen, 
  isFullscreen,
  onLaunch
}) => {
  return (
    <header className="h-12 bg-[#0d0d0d] border-b border-white/5 flex items-center justify-between px-4 flex-shrink-0 z-50">
      {/* Brand Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-lg shadow-lg shadow-indigo-500/20">
          <Cpu size={16} className="text-white" />
        </div>
        <div className="flex items-center text-sm">
          <span className="font-extrabold tracking-tighter text-white">STUDIO</span>
          <span className="font-light text-slate-400 ml-1">PRO</span>
          <div className="ml-3 px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md">
            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">v3.5</span>
          </div>
        </div>
      </div>

      {/* Center Nav - App Mode Only */}
      <div className="hidden md:flex items-center space-x-1 bg-black/40 p-1 rounded-lg border border-white/5">
        <button className="px-4 py-1.5 rounded-md bg-indigo-600 text-[11px] font-bold text-white shadow-lg transition-all">
          Main Console
        </button>
        <button className="px-4 py-1.5 rounded-md hover:bg-white/5 text-[11px] font-bold text-slate-500 hover:text-slate-300 transition-all">
          Data Stream
        </button>
      </div>

      {/* System Actions */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={onLaunch}
          className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all group"
        >
          <Zap size={14} className="text-amber-400 group-hover:scale-110" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Fast Launch</span>
          <ChevronRight size={12} className="text-slate-600" />
        </button>

        <div className="h-5 w-[1px] bg-white/10"></div>

        <button 
          onClick={toggleFullscreen}
          className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all"
          title="Fullscreen Mode"
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>

        <button 
          className="p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-all border border-red-500/20"
          title="Shutdown Session"
        >
          <Power size={16} />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
