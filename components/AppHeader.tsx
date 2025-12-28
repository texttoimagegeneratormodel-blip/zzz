
import React from 'react';
import { 
  Cpu, 
  Power,
  Zap,
  MoreVertical,
  Activity
} from 'lucide-react';

interface AppHeaderProps {
  toggleFullscreen: () => void;
  isFullscreen: boolean;
  onLaunch: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  onLaunch
}) => {
  return (
    <header className="h-12 bg-[#050505] border-b border-white/5 flex items-center justify-between px-6 flex-shrink-0 z-50">
      {/* Brand Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-7 h-7 bg-indigo-600 rounded shadow-indigo-500/30 shadow-lg">
          <Cpu size={14} className="text-white" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-[12px]">
            <span className="font-black tracking-tighter text-white">WORKSPACE</span>
            <span className="font-light text-slate-500 ml-1">CONSOLE</span>
          </div>
        </div>
      </div>

      {/* System Status Indicators */}
      <div className="hidden sm:flex items-center space-x-6">
        <div className="flex items-center space-x-2">
           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Network Stable</span>
        </div>
        <div className="h-4 w-[1px] bg-white/10"></div>
        <div className="flex items-center space-x-2">
           <Activity size={12} className="text-indigo-400" />
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Link Encrypted</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={onLaunch}
          className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 rounded-lg border border-indigo-500/20 transition-all text-[10px] font-bold uppercase tracking-widest"
        >
          <Zap size={14} />
          <span>Sync View</span>
        </button>

        <button 
          className="p-2 hover:bg-white/5 rounded-lg text-slate-600 hover:text-red-500 transition-all"
          title="Exit Application"
          onClick={() => window.close()}
        >
          <Power size={16} />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
