
import React from 'react';
import { Wifi, ShieldCheck, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="h-8 bg-slate-900 border-t border-slate-800 flex items-center justify-between px-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          <span>System Online</span>
        </div>
        <div className="flex items-center space-x-1">
          <Wifi size={12} className="text-emerald-500" />
          <span>Encrypted Tunnel Established</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Cpu size={12} />
          <span>Optimized View</span>
        </div>
        <div className="flex items-center space-x-1 text-slate-400">
          <ShieldCheck size={12} />
          <span>Sandboxed Environment</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
