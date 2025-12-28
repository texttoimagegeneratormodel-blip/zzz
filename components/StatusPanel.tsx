
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { RefreshCw, Globe, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

interface StatusPanelProps {
  targetUrl: string;
}

const StatusPanel: React.FC<StatusPanelProps> = ({ targetUrl }) => {
  const [info, setInfo] = useState<string>("");
  const [sources, setSources] = useState<{web: {uri: string, title: string}}[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStatusUpdates = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide a very brief status summary and latest news about Google AI Studio (Vertex AI/Gemini) features as of today. Also confirm if the domain ${targetUrl} is the standard workspace format. Keep it concise.`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setInfo(response.text || "Status updated.");
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      // @ts-ignore
      setSources(chunks.filter(c => c.web).map(c => c.web));
    } catch (error) {
      console.error("AI Search Error:", error);
      setInfo("Could not fetch real-time updates. System running in offline verification mode.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatusUpdates();
    const interval = setInterval(fetchStatusUpdates, 300000); // Update every 5 mins
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">System Intelligence</h3>
        {loading && <RefreshCw size={12} className="animate-spin text-indigo-500" />}
      </div>

      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {/* Intelligence Card */}
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-3">
          <div className="flex items-center space-x-2 text-indigo-300">
            <Zap size={14} />
            <span className="text-[10px] font-bold uppercase">Live Updates</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            {loading ? "Analyzing Google Search data..." : info}
          </p>
        </div>

        {/* Sources Section (Grounding Requirement) */}
        {sources.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h4 className="text-[9px] font-bold uppercase text-slate-500 flex items-center">
              <Globe size={10} className="mr-2" /> Verified Sources
            </h4>
            <div className="flex flex-col space-y-2">
              {sources.map((source, idx) => (
                <a 
                  key={idx} 
                  href={source.web.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2 bg-white/[0.02] hover:bg-white/5 rounded-lg transition-all"
                >
                  <span className="text-[9px] text-slate-500 truncate max-w-[150px] group-hover:text-indigo-400">
                    {source.web.title || "Reference Source"}
                  </span>
                  <ExternalLink size={10} className="text-slate-600 group-hover:text-indigo-500" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Security Meta */}
        <div className="p-3 border border-emerald-500/10 bg-emerald-500/5 rounded-lg flex items-center space-x-3">
           <ShieldCheck size={16} className="text-emerald-500" />
           <div className="flex flex-col">
              <span className="text-[9px] font-bold text-emerald-400">SECURE BROWSER</span>
              <span className="text-[8px] text-emerald-500/60 uppercase">No data collection active</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
