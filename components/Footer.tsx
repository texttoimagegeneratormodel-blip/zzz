
import React from 'react';
import { ShieldCheck, Wifi, Server, Activity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="h-7 bg-[#0d0d0d] border-t border-white/5 flex items-center justify-between px-4 text-[9px] uppercase tracking-widest font-bold text-slate-500 cursor-default">
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2 group">
          <Activity size={10} className="text-indigo-500 animate-pulse" />
          <span className="group-hover:text-slate-300 transition-colors">Core: Idle</span>
        </div>
        <div className="flex items-center space-x-2 text-emerald-500">
          <Wifi size={10} />
          <span>Secure Uplink</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-1.5">
          <Server size={10} />
          <span>Region: Google Cloud Central</span>
        </div>
        <div className="flex items-center space-x-1.5 bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={10} />
          <span>Verified Runtime</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
