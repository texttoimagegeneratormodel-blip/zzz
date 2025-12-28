
import React, { useState, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import { Terminal, Cpu, Zap, ShieldCheck, ChevronRight, Share2, Globe } from 'lucide-react';

const TARGET_URL = "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true";

const App: React.FC = () => {
  const [bootProgress, setBootProgress] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsBooted(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleLaunch = () => {
    // Opening in the same window to maintain the "only one site" experience
    window.location.href = TARGET_URL;
  };

  if (!isBooted) {
    return (
      <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-8 text-indigo-500 font-mono">
        <div className="w-full max-w-md border border-indigo-500/20 bg-indigo-500/5 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1"></div>
            <span className="text-[10px] tracking-widest uppercase opacity-50">System Booting</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] uppercase tracking-tighter">
              <span>Initializing Core</span>
              <span>{bootProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 ease-out"
                style={{ width: `${bootProgress}%` }}
              ></div>
            </div>
            <div className="text-[9px] text-slate-500 flex flex-col space-y-1">
              <p className="animate-pulse flex items-center"><ChevronRight size={10} className="mr-1"/> Loading secure environment...</p>
              {bootProgress > 40 && <p className="flex items-center text-indigo-400/70"><ChevronRight size={10} className="mr-1"/> Bypassing node protocols...</p>}
              {bootProgress > 80 && <p className="flex items-center text-indigo-400/70"><ChevronRight size={10} className="mr-1"/> Interface ready.</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-full bg-[#050505] text-white overflow-hidden select-none">
      <AppHeader 
        toggleFullscreen={() => {}}
        isFullscreen={false}
        onLaunch={handleLaunch}
      />

      <main className="flex-1 relative flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-black to-black">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="z-10 w-full max-w-4xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck size={12} />
              <span>Verified App Connection</span>
            </div>
            
            <h1 className="text-5xl font-black tracking-tighter leading-none">
              DEDICATED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">WORKSPACE</span>
            </h1>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              You are accessing a high-performance, single-instance environment for Google AI Studio. 
              External search and navigation are disabled to ensure peak focus.
            </p>

            <div className="flex flex-col space-y-3">
              <button 
                onClick={handleLaunch}
                className="group flex items-center justify-between px-8 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-2xl shadow-indigo-500/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-lg">Connect to Studio</div>
                    <div className="text-[10px] opacity-60 uppercase font-light tracking-widest">Instant Sync Enabled</div>
                  </div>
                </div>
                <ChevronRight className="opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </button>
            </div>
          </div>

          <div className="hidden md:block relative">
             <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full"></div>
             <div className="relative border border-white/10 bg-[#0a0a0a] rounded-3xl p-8 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                  <Globe size={120} className="text-indigo-500" />
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                      <Cpu className="text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">System Status</h3>
                      <p className="text-[10px] text-indigo-400 uppercase tracking-widest">Optimized for AI Studio</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-[10px] text-slate-500 uppercase mb-1">Latency</div>
                      <div className="text-lg font-bold">2.4ms</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-[10px] text-slate-500 uppercase mb-1">Security</div>
                      <div className="text-lg font-bold text-emerald-500 flex items-center">Encrypted <ShieldCheck size={14} className="ml-2"/></div>
                    </div>
                  </div>
                  <div className="p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/20">
                     <div className="text-[9px] text-indigo-300/60 uppercase mb-2">Connected Target</div>
                     <div className="text-xs font-mono text-indigo-400 truncate">aistudio.google.com/workspace/v3</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
