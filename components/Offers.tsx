
import React, { useState, useEffect } from 'react';
import { 
  Tag, 
  PlusCircle, 
  Target, 
  Search, 
  Filter, 
  Globe, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Layout, 
  Settings, 
  ClipboardList, 
  Shield, 
  Eye, 
  EyeOff, 
  UserCheck, 
  XCircle, 
  Star,
  ChevronDown,
  X,
  Calendar,
  Smartphone,
  Cpu,
  Wifi,
  Zap,
  Lock,
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Briefcase,
  Link as LinkIcon,
  Percent,
  Layers,
  BarChart3,
  CalendarDays
} from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_OFFERS, MOCK_ADVERTISERS, MOCK_AFFILIATES } from '../constants';

interface OffersProps {
  initialTab?: string;
}

const Offers: React.FC<OffersProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'marketplace';
    const n = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (n === 'marketplace') return 'marketplace';
    if (n === 'approvalqueue') return 'approvals';
    if (n === 'visibilityrules') return 'visibility';
    if (n === 'capsgoals') return 'caps';
    return 'marketplace';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));
  const [showAddModal, setShowAddModal] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
    }
  }, [initialTab]);

  const closeAndReset = () => {
    setShowAddModal(false);
    setFormStep(1);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Offers Registry</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Global conversion inventory and gateway logic."</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <PlusCircle size={18} /> New Offer
          </button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'marketplace', label: 'Marketplace', icon: <Tag size={16}/> },
          { id: 'approvals', label: 'Approval Queue', icon: <ClipboardList size={16}/> },
          { id: 'visibility', label: 'Visibility Rules', icon: <Shield size={16}/> },
          { id: 'caps', label: 'Caps & Goals', icon: <Target size={16}/> },
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
        {activeTab === 'marketplace' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input type="text" placeholder="Search by ID, Name, Advertiser or Geo..." className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-6 py-2 border rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-sm ${showFilters ? 'bg-blue-600 border-blue-600 text-white' : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'}`}
                >
                  <Filter size={16}/> {showFilters ? 'Hide Filters' : 'Logic Filters'}
                </button>
              </div>

              {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 bg-gray-800/40 border border-gray-700 rounded-2xl animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Category</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-[10px] font-black uppercase text-gray-300 outline-none">
                      <option>All Verticals</option>
                      <option>Finance</option>
                      <option>Nutra</option>
                      <option>Software</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Geo</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-[10px] font-black uppercase text-gray-300 outline-none">
                      <option>Global</option>
                      <option>US Only</option>
                      <option>Tier 1 Only</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Payout Type</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-[10px] font-black uppercase text-gray-300 outline-none">
                      <option>All Payouts</option>
                      <option>CPA</option>
                      <option>CPL</option>
                      <option>RevShare</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Visibility</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-[10px] font-black uppercase text-gray-300 outline-none">
                      <option>All Offers</option>
                      <option>Public</option>
                      <option>Permission</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_OFFERS.map(offer => (
                <Card key={offer.id} className="hover:border-blue-500/40 transition-all group cursor-pointer border-transparent shadow-none hover:shadow-xl hover:shadow-blue-500/5">
                  <div className="flex justify-between mb-4">
                    <span className="text-[10px] bg-gray-900 px-2 py-1 rounded font-mono text-gray-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest font-black">#{offer.id}</span>
                    <span className={`text-[10px] px-2 py-1 rounded font-black uppercase tracking-widest ${offer.status === 'active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'}`}>{offer.status}</span>
                  </div>
                  <h3 className="font-black text-gray-100 mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight line-clamp-1">{offer.title}</h3>
                  <p className="text-[10px] text-gray-500 mb-4 font-bold uppercase tracking-widest">{offer.category} • {offer.geo.join(', ')}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                     <div className="p-2 bg-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-800 shadow-inner group-hover:border-blue-500/20">
                        <Smartphone size={14} className="text-gray-600 mb-1" />
                        <span className="text-[8px] font-black text-gray-500 uppercase">OS TIER</span>
                     </div>
                     <div className="p-2 bg-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-800 shadow-inner group-hover:border-blue-500/20">
                        <Wifi size={14} className="text-gray-600 mb-1" />
                        <span className="text-[8px] font-black text-gray-500 uppercase">BROWSER</span>
                     </div>
                     <div className="p-2 bg-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-800 shadow-inner group-hover:border-blue-500/20">
                        <Globe size={14} className="text-gray-600 mb-1" />
                        <span className="text-[8px] font-black text-gray-500 uppercase">GEOS</span>
                     </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                    <div>
                      <p className="text-[9px] uppercase font-black text-gray-600 tracking-widest">Payout Basis</p>
                      <p className="text-xl font-black text-gray-100 font-mono leading-none">{offer.payout}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">{offer.conversionRate} CVR</span>
                      <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-600 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all shadow-inner">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              <button 
                onClick={() => setShowAddModal(true)}
                className="border-2 border-dashed border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-gray-700 hover:text-blue-400 hover:border-blue-500/40 transition-all bg-gray-900/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><PlusCircle size={24}/></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Provision New Offer</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-black text-gray-100 uppercase tracking-widest">Permission Requests</h2>
                <div className="flex gap-2">
                   <button className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-[9px] font-black uppercase text-gray-400">Bulk Approve</button>
                   <button className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-[9px] font-black uppercase text-gray-400">Bulk Decline</button>
                </div>
              </div>
              {[1, 2, 3].map(i => (
                <Card key={i} className="hover:border-blue-500/20 transition-all border-transparent bg-gray-900/40" noPadding>
                   <div className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-5">
                         <div className="p-3 bg-gray-800 rounded-xl text-indigo-400 border border-gray-700 shadow-inner">
                            <UserCheck size={24} />
                         </div>
                         <div>
                            <h4 className="font-black text-gray-100 uppercase tracking-tight">Partner Application #{100+i}</h4>
                            <div className="flex items-center gap-3 mt-1">
                               <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Elite Media Group</span>
                               <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest italic">Requesting: VPN Master Pro • {i*2}h ago</span>
                            </div>
                         </div>
                      </div>
                      <div className="flex gap-2">
                         <button className="p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-500 hover:text-red-500 transition-colors shadow-sm"><XCircle size={18}/></button>
                         <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">Grant Access</button>
                      </div>
                   </div>
                </Card>
              ))}
           </div>
        )}

        {activeTab === 'visibility' && (
           <div className="space-y-6">
              <Card title="Offer Visibility Logic" headerAction={<button className="px-4 py-1.5 bg-blue-600/10 text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-widest border border-blue-500/20 hover:bg-blue-600/20 transition-all">Create Visibility Group</button>}>
                 <div className="space-y-4">
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic">"Define specific partners or tags that can see specific inventory segments."</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-800 text-[10px] font-black text-gray-600 uppercase tracking-widest bg-gray-900/30">
                            <th className="p-4">Visibility Tier</th>
                            <th className="p-4">Rule Logic</th>
                            <th className="p-4 text-center">Applied Offers</th>
                            <th className="p-4 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-900">
                          {[
                            { name: 'Elite Partner Exclusive', rule: 'Tag: Platinum', count: 12 },
                            { name: 'US Internal Traffic Only', rule: 'Affiliate ID: [201, 204, 209]', count: 4 },
                            { name: 'Finance Vertical Opt-in', rule: 'Tag: Finance_Verified', count: 42 },
                          ].map((rule, i) => (
                            <tr key={i} className="hover:bg-gray-800/20 transition-colors group">
                              <td className="p-4 font-black text-gray-100 uppercase tracking-tight">{rule.name}</td>
                              <td className="p-4 text-[10px] font-mono text-blue-400">{rule.rule}</td>
                              <td className="p-4 text-center font-black text-gray-500">{rule.count}</td>
                              <td className="p-4 text-right">
                                <button className="text-[9px] font-black uppercase text-gray-600 hover:text-white underline decoration-gray-700">Modify Rule</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                 </div>
              </Card>
           </div>
        )}

        {activeTab === 'caps' && (
           <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_OFFERS.slice(0, 3).map(offer => (
                  <Card key={offer.id} title={offer.title} headerAction={<span className="text-[9px] font-black text-green-500 uppercase">Active</span>}>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Daily Global Cap</span>
                          <span className="text-[10px] font-black text-gray-100 font-mono">412 / {offer.caps.daily}</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                           <div className="h-full bg-blue-600 rounded-full shadow-lg shadow-blue-600/20" style={{ width: `${(412 / offer.caps.daily) * 100}%` }}></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-6">
                         <div>
                            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Cap State</p>
                            <p className="text-sm font-black text-gray-200 uppercase tracking-tight">Operating</p>
                         </div>
                         <div className="text-right">
                            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Reset In</p>
                            <p className="text-sm font-black text-gray-200 font-mono">04:12:00</p>
                         </div>
                      </div>
                      
                      <button className="w-full py-2 bg-gray-900 border border-gray-800 rounded-xl text-[9px] font-black uppercase tracking-widest text-gray-500 hover:text-blue-400 transition-all flex items-center justify-center gap-2">
                        <Settings size={12}/> Edit Cap Logic
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
           </div>
        )}
      </div>

      {/* --- NEW OFFER CREATION MODAL --- */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[600] flex items-center justify-center p-4">
           <Card className="w-full max-w-4xl border-t-4 border-blue-600 shadow-2xl bg-gray-900 h-[90vh] flex flex-col" noPadding>
              <div className="flex justify-between items-center p-6 border-b border-gray-800 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg"><Tag size={24}/></div>
                  <div>
                    <h3 className="text-lg font-black text-gray-100 uppercase tracking-tight">Onboard New Inventory</h3>
                    <div className="flex gap-2 mt-1">
                      {[1, 2, 3, 4].map(s => (
                        <div key={s} className={`h-1 w-10 rounded-full transition-colors duration-300 ${s <= formStep ? 'bg-blue-600' : 'bg-gray-800'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <button onClick={closeAndReset} className="p-2 text-gray-500 hover:text-white transition-colors"><X size={24}/></button>
              </div>
              
              <div className="p-8 space-y-8 overflow-y-auto flex-1 no-scrollbar">
                 {formStep === 1 && (
                   <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                         <div className="space-y-6">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Identity & Association</label>
                            <div className="space-y-4">
                               <div className="space-y-1">
                                  <span className="text-[10px] font-bold text-gray-600 uppercase">Offer Label *</span>
                                  <input type="text" placeholder="e.g. CyberShield VPN - Global - CPA" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none font-bold" />
                               </div>
                               <div className="space-y-1">
                                  <span className="text-[10px] font-bold text-gray-600 uppercase">Advertiser Relationship *</span>
                                  <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500 font-black text-gray-100 uppercase tracking-tight">
                                     <option value="">Select Advertiser...</option>
                                     {MOCK_ADVERTISERS.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                                  </select>
                               </div>
                               <div className="space-y-1">
                                  <span className="text-[10px] font-bold text-gray-600 uppercase">Category Vertical</span>
                                  <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none">
                                     <option>Utilities / Software</option>
                                     <option>Finance / Fintech</option>
                                     <option>Health / Wellness</option>
                                     <option>Gaming / E-sports</option>
                                  </select>
                               </div>
                            </div>
                         </div>
                         <div className="space-y-6">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">URL Configuration</label>
                            <div className="space-y-4">
                               <div className="space-y-1">
                                  <span className="text-[10px] font-bold text-gray-600 uppercase">Target Base URL *</span>
                                  <div className="relative">
                                     <LinkIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"/>
                                     <input type="text" placeholder="https://tracking.advertiser.com/click?aff_id={aff_id}&sub1={click_id}" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 pl-10 text-xs font-mono focus:ring-1 focus:ring-blue-500 outline-none text-blue-400" />
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <span className="text-[10px] font-bold text-gray-600 uppercase">Visibility Tier</span>
                                  <div className="grid grid-cols-3 gap-2">
                                     <button className="py-2 bg-blue-600 text-white rounded-lg text-[9px] font-black uppercase">Public</button>
                                     <button className="py-2 bg-gray-950 text-gray-500 border border-gray-800 rounded-lg text-[9px] font-black uppercase">Apply</button>
                                     <button className="py-2 bg-gray-950 text-gray-500 border border-gray-800 rounded-lg text-[9px] font-black uppercase">Private</button>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                 )}

                 {formStep === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-6">
                             <div className="flex items-center justify-between">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block flex items-center gap-2"><DollarSign size={14}/> Advertiser Revenue</label>
                                <span className="text-[9px] font-black bg-gray-800 px-2 py-0.5 rounded text-gray-400 uppercase">Receivable</span>
                             </div>
                             <div className="p-6 bg-gray-950 rounded-2xl border border-gray-800 space-y-4">
                                <div className="space-y-1">
                                   <span className="text-[10px] font-bold text-gray-500 uppercase">Event Metric</span>
                                   <select className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none">
                                      <option>CPA (Cost Per Action)</option>
                                      <option>CPC (Cost Per Click)</option>
                                      <option>CPS (Revenue Share)</option>
                                      <option>CPL (Cost Per Lead)</option>
                                   </select>
                                </div>
                                <div className="space-y-1">
                                   <span className="text-[10px] font-bold text-gray-500 uppercase">Network Revenue Value</span>
                                   <div className="relative">
                                      <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"/>
                                      <input type="number" placeholder="25.00" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 pl-10 text-sm font-black text-gray-100 outline-none" />
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="space-y-6">
                             <div className="flex items-center justify-between">
                                <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest block flex items-center gap-2"><Percent size={14}/> Affiliate Payout</label>
                                <span className="text-[9px] font-black bg-blue-500/10 px-2 py-0.5 rounded text-blue-400 uppercase">Payable</span>
                             </div>
                             <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-500/20 space-y-4">
                                <div className="space-y-1">
                                   <span className="text-[10px] font-bold text-blue-400 uppercase">Publisher Payout</span>
                                   <div className="relative">
                                      <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600"/>
                                      <input type="number" placeholder="18.00" className="w-full bg-gray-900 border border-blue-500/30 rounded-xl p-3 pl-10 text-sm font-black text-blue-400 outline-none" />
                                   </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                   <div>
                                      <span className="text-[10px] font-black text-gray-500 uppercase block">Est. Gross Margin</span>
                                      <span className="text-xl font-black text-green-500 uppercase tracking-widest">$7.00</span>
                                   </div>
                                   <div className="text-right">
                                      <span className="text-[10px] font-black text-gray-500 uppercase block">Percentage</span>
                                      <span className="text-sm font-black text-indigo-400 uppercase tracking-widest">28%</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 )}

                 {formStep === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-10">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-6">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Inventory Logistics</label>
                             <div className="space-y-4">
                                <div className="space-y-1">
                                   <span className="text-[10px] font-bold text-gray-600 uppercase">Daily Global Cap</span>
                                   <input type="number" defaultValue="1000" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm font-black outline-none focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="space-y-1">
                                   <span className="text-[10px] font-bold text-gray-600 uppercase">Cap Redirect Node</span>
                                   <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none">
                                      <option>Network Fallback</option>
                                      {MOCK_OFFERS.map(o => <option key={o.id}>{o.title}</option>)}
                                   </select>
                                </div>
                             </div>
                          </div>
                          <div className="space-y-6">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Geographic Scope</label>
                             <div className="space-y-4">
                                <div className="space-y-1">
                                   <span className="text-[10px] font-bold text-gray-600 uppercase">ISO Country Target (CSV)</span>
                                   <input type="text" placeholder="US, UK, CA, DE" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-xs font-mono uppercase tracking-widest outline-none focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-800/40 rounded-xl border border-gray-700">
                                   <Globe size={18} className="text-blue-500"/>
                                   <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest italic leading-tight">System will automatically reject traffic from outside specified nodes.</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 )}

                 {formStep === 4 && (
                   <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block flex items-center gap-2"><CalendarDays size={14}/> Lifetime Scheduling</label>
                          <div className="space-y-4 p-6 bg-gray-950 rounded-2xl border border-gray-800">
                             <div className="grid grid-cols-2 gap-4">
                               <div className="space-y-1">
                                 <span className="text-[9px] font-black text-gray-600 uppercase">Go-Live Date</span>
                                 <input type="date" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-[10px] font-black text-gray-400" />
                               </div>
                               <div className="space-y-1">
                                 <span className="text-[9px] font-black text-gray-600 uppercase">End Date (Optional)</span>
                                 <input type="date" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-[10px] font-black text-gray-400" />
                               </div>
                             </div>
                             <div className="flex items-center justify-between p-3 bg-blue-600/5 border border-blue-500/20 rounded-xl mt-4">
                                <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Permanent Active Mode</span>
                                <div className="w-8 h-4 bg-blue-600 rounded-full flex items-center px-0.5"><div className="w-3 h-3 bg-white rounded-full ml-auto"></div></div>
                             </div>
                          </div>
                        </div>
                        <div className="space-y-6">
                           <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block flex items-center gap-2"><Shield size={14}/> Security & Compliance</label>
                           <div className="space-y-3">
                              {[
                                'Force S2S Only Tracking',
                                'Reject Proxy/VPN Traffic',
                                'Enable Click Verification',
                                'Require Privacy Consent'
                              ].map(rule => (
                                <div key={rule} className="flex items-center justify-between p-3 bg-gray-950 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
                                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{rule}</span>
                                   <div className="w-8 h-4 bg-gray-800 rounded-full flex items-center px-0.5"><div className="w-3 h-3 bg-gray-700 rounded-full"></div></div>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                   </div>
                 )}
              </div>

              <div className="p-6 border-t border-gray-800 bg-gray-950 shrink-0 flex justify-between items-center">
                 <button 
                  disabled={formStep === 1}
                  onClick={() => setFormStep(prev => prev - 1)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formStep === 1 ? 'opacity-0' : 'text-gray-500 hover:text-white bg-gray-900 border border-gray-800'}`}
                 >
                   Back
                 </button>
                 <div className="flex gap-4">
                    <button onClick={closeAndReset} className="px-6 py-3 text-gray-600 hover:text-gray-300 text-[10px] font-black uppercase tracking-widest transition-colors">Discard</button>
                    {formStep < 4 ? (
                      <button 
                        onClick={() => setFormStep(prev => prev + 1)}
                        className="px-10 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
                      >
                        Continue
                      </button>
                    ) : (
                      <button 
                        onClick={closeAndReset}
                        className="px-12 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center gap-2"
                      >
                        <Zap size={14}/> Authorize & Launch
                      </button>
                    )}
                 </div>
              </div>
           </Card>
        </div>
      )}
    </div>
  );
};

export default Offers;
