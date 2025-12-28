
import React from 'react';
import { 
  Cpu, 
  Maximize2,
  Minimize2,
  Lock,
  Zap
} from 'lucide-react';

interface AppHeaderProps {
  toggleFullscreen: () => void;
  isFullscreen: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  toggleFullscreen,
  isFullscreen
}) => {
  return (
    <header className="h-10 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between px-4 flex-shrink-0 z-50">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded shadow-lg shadow-indigo-500/20">
          <Cpu size={12} className="text-white" />
        </div>
        <div className="flex items-center">
          <span className="text-[11px] font-black tracking-tighter text-white uppercase">WORKSPACE</span>
          <span className="text-[11px] font-light text-slate-500 ml-1 uppercase">BROWSER</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
          <Lock size={10} className="text-emerald-500" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Single-Site Mode</span>
        </div>
        
        <div className="h-4 w-[1px] bg-white/10"></div>

        <button 
          onClick={toggleFullscreen}
          className="p-1.5 hover:bg-white/5 rounded text-slate-500 hover:text-white transition-all"
        >
          {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
