
import React, { useState, useEffect } from 'react';
import { BookOpen, Video, FileText, Code, Download, ExternalLink, Search, PlayCircle } from 'lucide-react';
import Card from './Shared/Card';

interface ResourcesProps {
  initialTab?: string;
}

const Resources: React.FC<ResourcesProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'library';
    const n = tab.toLowerCase().replace(/\s/g, '');
    if (n === 'library') return 'library';
    if (n === 'tutorials') return 'tutorials';
    if (n === 'apidocs') return 'api';
    return 'library';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
    }
  }, [initialTab]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Partner Intelligence</h1>
          <p className="text-sm text-gray-500 font-medium">Provide training, documentation, and tools to help your partners scale.</p>
        </div>
        <button className="bg-gray-800 border border-gray-700 px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">
          Resource Manager
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'library', label: 'Knowledge Library', icon: <BookOpen size={16}/> },
          { id: 'tutorials', label: 'Video Tutorials', icon: <Video size={16}/> },
          { id: 'api', label: 'API Reference', icon: <Code size={16}/> },
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

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {activeTab === 'library' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'PPC Traffic Best Practices', type: 'Guide', length: '12m', color: 'text-blue-400' },
              { title: 'Optimizing S2S Tracking', type: 'Technical', length: '8m', color: 'text-indigo-400' },
              { title: 'Compliance Standards 2024', type: 'Legal', length: '15m', color: 'text-red-400' },
            ].map((item, i) => (
              <Card key={i} className="hover:border-blue-500/30 transition-all cursor-pointer group border-transparent">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gray-900 border border-gray-700 shadow-inner ${item.color}`}>
                    <FileText size={24} />
                  </div>
                  <button className="p-2 bg-gray-900 rounded-lg text-gray-600 hover:text-blue-400 transition-colors"><Download size={16}/></button>
                </div>
                <h3 className="font-black text-gray-100 mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">{item.type}</span>
                  <span className="text-[9px] text-gray-600 font-mono font-black">{item.length}</span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'tutorials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Network Onboarding Masterclass', duration: '5:24', thumb: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&fit=crop' },
              { title: 'Advanced Analytics Configuration', duration: '12:10', thumb: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?w=800&fit=crop' },
            ].map((vid, i) => (
              <Card key={i} className="p-0 overflow-hidden group border-transparent hover:border-blue-500/30 transition-all shadow-none">
                <div className="aspect-video relative overflow-hidden bg-gray-900">
                  <img src={vid.thumb} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                       <PlayCircle size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-[10px] font-black text-white font-mono">{vid.duration}</div>
                </div>
                <div className="p-5 bg-gray-800/50">
                  <h4 className="font-black text-gray-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{vid.title}</h4>
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1">Uploaded 3 days ago • 1.2k views</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'api' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-2">
              <Card title="Rest API Endpoints" noPadding>
                <div className="p-2 space-y-1">
                  {['Authentication', 'Offers', 'Affiliates', 'Conversions', 'Postbacks'].map(ep => (
                    <button key={ep} className="w-full text-left px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-blue-400 hover:bg-blue-400/5 rounded-lg transition-all">
                      {ep}
                    </button>
                  ))}
                </div>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <Card title="GET /v1/network/offers">
                <p className="text-xs text-gray-500 mb-8 font-medium leading-relaxed italic">"Fetch high-payout offers from your live directory using secure bearer authentication."</p>
                <div className="bg-gray-950 rounded-2xl p-6 font-mono text-xs text-blue-400 border border-gray-800 shadow-inner">
                  <div className="flex gap-4 mb-4 text-[9px] font-black uppercase tracking-widest text-gray-700">
                    <span>Shell Request</span>
                  </div>
                  <code>
                    curl -X GET "https://api.affiliflow.com/v1/offers" \<br/>
                    &nbsp;&nbsp;-H "Authorization: Bearer XXXXXX" \<br/>
                    &nbsp;&nbsp;-H "Accept: application/json"
                  </code>
                </div>
                <div className="mt-8 flex justify-end">
                   <button className="text-[10px] font-black uppercase tracking-widest text-blue-400 hover:underline flex items-center gap-2 transition-all">Go to Full API Reference <ExternalLink size={14}/></button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
