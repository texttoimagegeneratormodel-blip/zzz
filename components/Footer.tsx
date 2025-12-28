
import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="h-6 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between px-4 text-[8px] uppercase tracking-[0.2em] font-bold text-slate-600 cursor-default select-none">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1.5">
          <Activity size={8} className="text-indigo-500" />
          <span>System Active</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <ShieldCheck size={8} className="text-slate-500" />
          <span>Encrypted Session</span>
        </div>
      </div>
      
      <div>
        <span>Workspace Environment v3.5.0-Stable</span>
      </div>
    </footer>
  );
};

export default Footer;
