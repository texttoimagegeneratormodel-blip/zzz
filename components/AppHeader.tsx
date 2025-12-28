
import React from 'react';
import { 
  Cpu, 
  Maximize2,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface AppHeaderProps {
  toggleFullscreen: () => void;
  isFullscreen: boolean;
  onLaunch: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  toggleFullscreen,
  onLaunch
}) => {
  return (
    <header className="h-10 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between px-4 flex-shrink-0 z-50">
      {/* Brand Section */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-md">
          <Cpu size={12} className="text-white" />
        </div>
        <div className="flex items-center">
          <span className="text-[11px] font-black tracking-tighter text-white uppercase">AI Studio</span>
          <span className="text-[11px] font-light text-slate-500 ml-1 uppercase">Native</span>
          <div className="ml-3 flex items-center space-x-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 font-bold uppercase tracking-widest">
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Connected</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={onLaunch}
          className="flex items-center space-x-2 px-2.5 py-1 hover:bg-white/5 text-slate-400 hover:text-white rounded transition-all text-[9px] font-bold uppercase tracking-widest"
          title="Open in new tab if block occurs"
        >
          <ExternalLink size={12} />
          <span>Mirror Link</span>
        </button>

        <div className="h-3 w-[1px] bg-white/10 mx-1"></div>

        <button 
          onClick={toggleFullscreen}
          className="p-1.5 hover:bg-white/5 rounded text-slate-500 hover:text-white transition-all"
          title="Toggle Fullscreen"
        >
          <Maximize2 size={14} />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
