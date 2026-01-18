
import React, { useState, useEffect } from 'react';
import { 
  ImageIcon, 
  Layout, 
  Plus, 
  Search, 
  Copy, 
  Download, 
  ExternalLink, 
  Globe, 
  FileText, 
  Filter, 
  ChevronDown, 
  Layers,
  BarChart3,
  CheckCircle2,
  Zap,
  Tag,
  Monitor,
  // Added missing ChevronRight icon
  ChevronRight
} from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_CREATIVES } from '../constants';

interface CreativeAssetsProps {
  initialTab?: string;
}

const CreativeAssets: React.FC<CreativeAssetsProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'banners';
    const n = tab.toLowerCase().replace(/\s/g, '');
    if (n === 'banners') return 'banners';
    if (n === 'landers') return 'landing';
    if (n === 'prelanders') return 'prelanders';
    return 'banners';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
    }
  }, [initialTab]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Asset Cloud</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Enterprise hosting for banners, landing nodes, and bridge kits."</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all flex items-center gap-2">
            <Layers size={14}/> Bulk Upload
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            <Plus size={18} /> Provision Asset
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar flex-1">
          {[
            { id: 'banners', label: 'Banners', icon: <ImageIcon size={16}/> },
            { id: 'landing', label: 'Landers', icon: <Globe size={16}/> },
            { id: 'prelanders', label: 'Prelanders', icon: <Layout size={16}/> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-xs font-black uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id ? 'border-blue-500 text-blue-400 bg-blue-500/5' : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
           <div className="flex bg-gray-800 border border-gray-700 rounded-lg p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Layout size={16}/>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <FileText size={16}/>
              </button>
           </div>
           <div className="relative group">
              <button className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                 Filter <ChevronDown size={12}/>
              </button>
           </div>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
         {viewMode === 'grid' ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {activeTab === 'prelanders' ? (
               <Card className="lg:col-span-3 py-16 text-center border-dashed border-2 border-gray-800">
                  <div className="w-16 h-16 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-700">
                     <FileText size={32} />
                  </div>
                  <h3 className="text-lg font-black text-gray-100 uppercase tracking-tight">No Prelanders Hosted</h3>
                  <p className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-widest max-w-md mx-auto leading-relaxed">Bridge pages increase conversion rates by priming traffic. Upload your first HTML/JS kit here to begin split testing.</p>
                  <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl text-xs shadow-xl shadow-blue-600/20 active:scale-95 transition-all">Upload Prelander Node</button>
               </Card>
             ) : (
               MOCK_CREATIVES.filter(c => activeTab === 'banners' ? c.type === 'banner' : c.type === 'landing').map(crt => (
                 <Card key={crt.id} className="group overflow-hidden border-gray-700/50 hover:border-blue-500/30 transition-all p-0 shadow-none hover:shadow-2xl hover:shadow-blue-500/5">
                    <div className="aspect-video relative overflow-hidden bg-gray-950 flex items-center justify-center border-b border-gray-800">
                       <img src={crt.previewUrl} alt={crt.title} className="max-h-full transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          <button className="p-3 bg-white text-blue-600 rounded-2xl shadow-2xl active:scale-90 transition-all"><Download size={22}/></button>
                          <button className="p-3 bg-white text-gray-900 rounded-2xl shadow-2xl active:scale-90 transition-all"><ExternalLink size={22}/></button>
                       </div>
                       {crt.size && (
                         <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-[8px] font-black text-white uppercase tracking-widest border border-white/10">
                            {crt.size}
                         </div>
                       )}
                       <div className="absolute bottom-3 right-3 flex gap-2">
                          <span className="px-2 py-0.5 bg-green-500/90 text-white text-[8px] font-black uppercase rounded shadow-lg">Live</span>
                       </div>
                    </div>
                    <div className="p-5 bg-gray-800/40">
                       <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                             <span className="text-[9px] text-gray-500 font-mono tracking-tighter uppercase font-black">{crt.id}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[9px] font-black text-indigo-400 uppercase">
                             <BarChart3 size={10}/> 4.2% CTR
                          </div>
                       </div>
                       <h3 className="font-black text-sm text-gray-100 mb-6 line-clamp-1 uppercase tracking-tight">{crt.title}</h3>
                       
                       <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-gray-900/50 p-2 rounded-lg border border-gray-800 flex items-center justify-center gap-2">
                             <Monitor size={12} className="text-gray-600"/>
                             <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Responsive</span>
                          </div>
                          <div className="bg-gray-900/50 p-2 rounded-lg border border-gray-800 flex items-center justify-center gap-2">
                             <Zap size={12} className="text-gray-600"/>
                             <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">V4 Cache</span>
                          </div>
                       </div>

                       <button className="w-full py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all flex items-center justify-center gap-2 shadow-sm">
                          <Copy size={12}/> Implementation Logic
                       </button>
                    </div>
                 </Card>
               ))
             )}
             
             {activeTab !== 'prelanders' && (
               <button className="border-2 border-dashed border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-gray-700 hover:text-blue-400 hover:border-blue-500/40 transition-all bg-gray-900/10 group h-full min-h-[300px]">
                  <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner"><Plus size={28}/></div>
                  <span className="text-[11px] font-black uppercase tracking-widest">Provision New {activeTab.slice(0, -1)}</span>
                  <p className="text-[8px] font-bold text-gray-600 uppercase mt-2 tracking-widest">Supports PNG, SVG, JPG, HTML5</p>
               </button>
             )}
           </div>
         ) : (
           <Card noPadding>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-gray-800 bg-gray-900/30 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                          <th className="p-4">Asset Identity</th>
                          <th className="p-4">Type / Format</th>
                          <th className="p-4">Dimensions</th>
                          <th className="p-4 text-center">CTR Avg</th>
                          <th className="p-4 text-right">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                       {MOCK_CREATIVES.filter(c => activeTab === 'banners' ? c.type === 'banner' : c.type === 'landing').map(crt => (
                          <tr key={crt.id} className="hover:bg-gray-800/30 transition-colors group">
                             <td className="p-4">
                                <div className="flex items-center gap-3">
                                   <div className="w-12 h-8 bg-gray-900 rounded border border-gray-800 overflow-hidden">
                                      <img src={crt.previewUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                   </div>
                                   <div>
                                      <p className="text-xs font-black text-gray-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{crt.title}</p>
                                      <p className="text-[9px] text-gray-600 font-mono font-black">{crt.id}</p>
                                   </div>
                                </div>
                             </td>
                             <td className="p-4">
                                <span className="text-[9px] font-black text-gray-500 uppercase bg-gray-900 px-2 py-0.5 rounded border border-gray-800">{crt.type} / JPG</span>
                             </td>
                             <td className="p-4 text-[10px] font-mono text-gray-400 font-black">{crt.size || 'Responsive'}</td>
                             <td className="p-4 text-center font-black text-indigo-400 text-xs font-mono">{(2.5 + Math.random() * 5).toFixed(1)}%</td>
                             <td className="p-4 text-right">
                                <button className="p-2 text-gray-700 hover:text-white transition-colors"><ChevronRight size={18}/></button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>
         )}
      </div>
    </div>
  );
};

export default CreativeAssets;
