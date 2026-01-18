
import React, { useState, useEffect } from 'react';
import { 
  Link, 
  RotateCw, 
  ListChecks, 
  Plus, 
  Sparkles, 
  Copy, 
  Trash2, 
  Edit2, 
  Play, 
  Pause, 
  ChevronDown, 
  Search, 
  Split, 
  Zap, 
  ArrowRightLeft,
  X,
  Target,
  Users,
  Settings,
  ChevronRight,
  Monitor,
  ShieldCheck,
  MousePointer2,
  Globe,
  // Added missing CheckCircle import
  CheckCircle
} from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_OFFERS, MOCK_AFFILIATES } from '../constants';

interface CampaignsProps {
  initialTab?: string;
}

const Campaigns: React.FC<CampaignsProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'urls';
    const n = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (n === 'trackinglinks') return 'urls';
    if (n === 'smartlinks') return 'tasks';
    if (n === 'rotations') return 'rotations';
    return 'urls';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Form State
  const [formAffiliate, setFormAffiliate] = useState('');
  const [formOffer, setFormOffer] = useState('');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
    }
  }, [initialTab]);

  const [selectedOffer, setSelectedOffer] = useState(MOCK_OFFERS[0].id);
  const [selectedAff, setSelectedAff] = useState(MOCK_AFFILIATES[0].id);

  const rotations = [
    { id: 'ROT-001', name: 'Global Split Test', type: 'Weighted', offers: ['VPN Pro', 'VPN Shield'], weight: '50/50', status: 'active', clicks: '12,400' },
    { id: 'ROT-002', name: 'Desktop Priority Path', type: 'OS-Based', offers: ['Desktop Offer'], weight: 'Dynamic', status: 'paused', clicks: '8,200' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Campaign Logistics</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Mapping publisher demand to inventory nodes."</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <Plus size={18} /> New Campaign
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'urls', label: 'Tracking URLs', icon: <Link size={16}/> },
          { id: 'tasks', label: 'SmartLinks', icon: <Zap size={16}/> },
          { id: 'rotations', label: 'Rotations', icon: <RotateCw size={16}/> },
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
        {activeTab === 'urls' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Direct Link Generator">
               <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Target Offer</label>
                     <select 
                       value={selectedOffer}
                       onChange={(e) => setSelectedOffer(e.target.value)}
                       className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500"
                     >
                       {MOCK_OFFERS.map(o => <option key={o.id} value={o.id}>{o.title}</option>)}
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Source Affiliate</label>
                     <select 
                       value={selectedAff}
                       onChange={(e) => setSelectedAff(e.target.value)}
                       className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500"
                     >
                       {MOCK_AFFILIATES.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                     </select>
                  </div>
                  <div className="pt-4 space-y-2">
                     <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Network Click URL</label>
                     <div className="flex gap-2">
                        <input 
                          readOnly 
                          value={`https://t.affflow.net/click?o=${selectedOffer}&a=${selectedAff}`} 
                          className="flex-1 bg-gray-950 border border-gray-700 rounded-xl p-3 text-xs font-mono text-gray-500 outline-none" 
                        />
                        <button className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-colors shadow-sm"><Copy size={18}/></button>
                     </div>
                  </div>
               </div>
            </Card>
            <Card title="Deployment Stats">
               <div className="flex flex-col items-center justify-center h-full py-6 text-center">
                  <Globe size={48} className="text-gray-800 mb-4" />
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Historical Performance for this Link pair</p>
                  <p className="text-2xl font-black text-gray-700 mt-2 font-mono">$0.00</p>
               </div>
            </Card>
          </div>
        )}

        {activeTab === 'tasks' && (
           <div className="p-8 text-center text-gray-500 italic uppercase font-black text-[10px] tracking-widest">Advanced SmartLink Logic Engine Operating Normally</div>
        )}

        {activeTab === 'rotations' && (
          <Card noPadding>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-800 text-[10px] font-black text-gray-500 uppercase tracking-widest bg-gray-800/30">
                    <th className="p-4">Rotation Name</th>
                    <th className="p-4">Logic Type</th>
                    <th className="p-4">Offers</th>
                    <th className="p-4 text-right">Throughput</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {rotations.map((rot) => (
                    <tr key={rot.id} className="hover:bg-gray-800/20 transition-colors group">
                      <td className="p-4 font-bold text-gray-100 uppercase tracking-tight group-hover:text-blue-400">{rot.name}</td>
                      <td className="p-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">{rot.type}</td>
                      <td className="p-4 font-mono text-[10px] text-blue-400">{rot.offers.join(', ')}</td>
                      <td className="p-4 text-right text-xs font-mono text-gray-400 font-black">{rot.clicks} CLKS</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>

      {/* --- NEW CAMPAIGN CREATION MODAL --- */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[600] flex items-center justify-center p-4">
           <Card className="w-full max-w-4xl border-t-4 border-indigo-600 shadow-2xl bg-gray-900" noPadding>
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-600/10 text-indigo-500 rounded-lg"><Zap size={24}/></div>
                  <div>
                    <h3 className="text-lg font-black text-gray-100 uppercase tracking-tight">Deploy New Campaign</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Mapping partner traffic to conversion nodes.</p>
                  </div>
                </div>
                <button onClick={() => setShowAddModal(false)} className="p-2 text-gray-500 hover:text-white transition-colors"><X size={24}/></button>
              </div>
              
              <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Entity Association</label>
                       <div className="space-y-4">
                          <div className="space-y-1">
                             <span className="text-[10px] font-bold text-gray-600 uppercase">Affiliate Partner *</span>
                             <select 
                               value={formAffiliate}
                               onChange={(e) => setFormAffiliate(e.target.value)}
                               className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500 font-black text-gray-100 uppercase tracking-tight"
                             >
                                <option value="">Choose Partner...</option>
                                {MOCK_AFFILIATES.map(a => <option key={a.id} value={a.id}>{a.name} ({a.id})</option>)}
                             </select>
                          </div>
                          <div className="space-y-1">
                             <span className="text-[10px] font-bold text-gray-600 uppercase">Target Offer *</span>
                             <select 
                               value={formOffer}
                               onChange={(e) => setFormOffer(e.target.value)}
                               className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500 font-black text-gray-100 uppercase tracking-tight"
                             >
                                <option value="">Choose Offer...</option>
                                {MOCK_OFFERS.map(o => <option key={o.id} value={o.id}>{o.title}</option>)}
                             </select>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Campaign Identity</label>
                       <div className="space-y-4">
                          <div className="space-y-1">
                             <span className="text-[10px] font-bold text-gray-600 uppercase">Internal Descriptor</span>
                             <input type="text" placeholder="e.g. MediaBuy-Summer-T1-VPN" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none" />
                          </div>
                          <div className="space-y-1">
                             <span className="text-[10px] font-bold text-gray-600 uppercase">Deployment State</span>
                             <div className="flex gap-2">
                                <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase shadow-lg shadow-blue-600/20">Active</button>
                                <button className="flex-1 py-2 bg-gray-950 text-gray-500 border border-gray-800 rounded-lg text-[10px] font-black uppercase">Paused</button>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-gray-800 space-y-6">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Routing Intelligence</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       <div className="p-5 bg-gray-950 border-2 border-blue-500/50 rounded-2xl cursor-pointer hover:border-blue-500 transition-all group relative overflow-hidden">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg"><MousePointer2 size={18}/></div>
                             <span className="text-xs font-black text-gray-100 uppercase tracking-tight">Direct Link</span>
                          </div>
                          <p className="text-[9px] text-gray-500 font-bold uppercase leading-relaxed">Single target landing page redirect node.</p>
                          <div className="absolute bottom-1 right-1"><CheckCircle size={14} className="text-blue-500"/></div>
                       </div>
                       <div className="p-5 bg-gray-950 border border-gray-800 rounded-2xl cursor-pointer hover:border-blue-500 transition-all group relative overflow-hidden">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="p-2 bg-gray-900 text-gray-600 rounded-lg"><RotateCw size={18}/></div>
                             <span className="text-xs font-black text-gray-100 uppercase tracking-tight">Offer Rotation</span>
                          </div>
                          <p className="text-[9px] text-gray-500 font-bold uppercase leading-relaxed">A/B split test multiple offer destinations.</p>
                       </div>
                       <div className="p-5 bg-gray-950 border border-gray-800 rounded-2xl cursor-pointer hover:border-blue-500 transition-all group relative overflow-hidden">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="p-2 bg-gray-900 text-gray-600 rounded-lg"><Monitor size={18}/></div>
                             <span className="text-xs font-black text-gray-100 uppercase tracking-tight">OS Filter</span>
                          </div>
                          <p className="text-[9px] text-gray-500 font-bold uppercase leading-relaxed">Dynamic routing based on mobile vs desktop.</p>
                       </div>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-gray-800 space-y-6">
                    <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest block">Deployment Preview</label>
                    <div className="p-5 bg-gray-950 border border-gray-800 rounded-2xl border-dashed">
                       <div className="flex items-center gap-3">
                          <div className="flex-1 bg-gray-900/50 p-3 rounded-xl border border-gray-800 font-mono text-[10px] text-gray-500 overflow-hidden truncate">
                             https://t.affflow.net/click?o={formOffer || 'OFF_ID'}&a={formAffiliate || 'AFF_ID'}
                          </div>
                          <button className="p-3 bg-gray-800 text-gray-400 rounded-xl hover:text-white transition-colors"><Copy size={18}/></button>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-6 border-t border-gray-800 bg-gray-950 flex justify-end gap-4 shrink-0">
                 <button onClick={() => setShowAddModal(false)} className="px-6 py-3 text-gray-600 hover:text-gray-300 text-[10px] font-black uppercase tracking-widest transition-colors">Discard</button>
                 <button onClick={() => setShowAddModal(false)} className="px-12 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95 transition-all">Launch Campaign</button>
              </div>
           </Card>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
