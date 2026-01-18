
import React, { useState } from 'react';
import { PageId } from '../../types';
import Card from '../Shared/Card';
import { Wallet, Target, TrendingUp, Tag, Plus, Target as TargetIcon, Search, Globe, Filter, Link as LinkIcon, DollarSign, X, CheckCircle2, AlertCircle, ShieldAlert, Users, MousePointer2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_CHART_DATA, MOCK_OFFERS } from '../../constants';

const AdvertiserPortal: React.FC<{ activePage: PageId, activeSubPage?: string }> = ({ activePage }) => {
  const [showAddOffer, setShowAddOffer] = useState(false);
  const [activeTab, setActiveTab] = useState('performance');

  if (activePage === 'dashboard') {
    return (
      <div className="space-y-6 pb-10">
        <div className="flex justify-between items-center">
           <div>
              <h1 className="text-2xl font-black uppercase tracking-tight">Brand Command Center</h1>
              <p className="text-sm text-gray-500 font-medium italic">"Monitoring CyberShield Global ad spend & ROI."</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl flex items-center gap-3">
                 <Wallet size={18} className="text-emerald-500"/>
                 <div>
                    <p className="text-[9px] font-black text-gray-500 uppercase leading-none mb-1">Total Balance</p>
                    <p className="text-lg font-black text-emerald-400 leading-none">$4,200.00</p>
                 </div>
              </div>
              <button 
                onClick={() => setShowAddOffer(true)}
                className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
              >
                <Plus size={18}/> Provision New Offer
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {[
             { label: 'Spend Today', value: '$1,240', change: '+5%', color: 'text-white' },
             { label: 'Total Conversions', value: '42', change: '+12%', color: 'text-emerald-400' },
             { label: 'Avg CPA', value: '$29.52', change: '-2%', color: 'text-white' },
             { label: 'Offer Count', value: '12', change: '0%', color: 'text-white' },
           ].map((s, i) => (
             <Card key={i} className="p-4 border-transparent bg-gray-900/40 border border-gray-800">
                <p className="text-[9px] font-black text-gray-600 uppercase mb-1">{s.label}</p>
                <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
             </Card>
           ))}
        </div>

        <Card title="REVENUE VELOCITY">
           <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={MOCK_CHART_DATA}>
                    <defs>
                       <linearGradient id="colorEmerald" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                       </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis dataKey="name" stroke="#4b5563" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#4b5563" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                    <Area type="monotone" name="Conversions" dataKey="conversions" stroke="#10b981" strokeWidth={3} fill="url(#colorEmerald)" isAnimationActive={false} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </Card>

        {/* GRANULAR REPORTING FOR ADVERTISER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <Card title="TRAFFIC BY SOURCE (AFFILIATE)" className="lg:col-span-2" noPadding>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-gray-800 bg-gray-800/30 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                          <th className="p-4">Affiliate ID</th>
                          <th className="p-4">Sub-ID Analysis</th>
                          <th className="p-4 text-center">Clicks</th>
                          <th className="p-4 text-center">Conv.</th>
                          <th className="p-4 text-right">Fraud Score</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-900">
                       {[
                         { id: 'AFF-001', sub: 'google_ppc_main', clicks: 1240, conv: 54, risk: 2 },
                         { id: 'AFF-005', sub: 'facebook_retarget', clicks: 850, conv: 12, risk: 15 },
                         { id: 'AFF-012', sub: 'native_ad_t1', clicks: 420, conv: 2, risk: 94 },
                       ].map(row => (
                         <tr key={row.sub} className="hover:bg-gray-800/20 group transition-all">
                            <td className="p-4">
                               <div className="flex items-center gap-2">
                                  <Users size={12} className="text-emerald-500"/>
                                  <span className="font-black text-gray-100 uppercase tracking-tight">{row.id}</span>
                               </div>
                            </td>
                            <td className="p-4 text-[10px] font-mono text-gray-400 italic">"{row.sub}"</td>
                            <td className="p-4 text-center font-black text-gray-300 font-mono text-xs">{row.clicks}</td>
                            <td className="p-4 text-center font-black text-emerald-400 font-mono text-xs">{row.conv}</td>
                            <td className="p-4 text-right">
                               <div className={`text-[10px] font-black uppercase flex items-center justify-end gap-1 ${row.risk > 80 ? 'text-red-500' : 'text-gray-500'}`}>
                                  {row.risk > 80 && <ShieldAlert size={12}/>}
                                  {row.risk}%
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>

           <div className="space-y-6">
              <Card title="MY ACTIVE INVENTORY" headerAction={<button className="text-[10px] font-black uppercase text-emerald-400 hover:underline">Manage All</button>}>
                 <div className="space-y-3">
                    {MOCK_OFFERS.map(o => (
                       <div key={o.id} className="p-4 bg-gray-950 border border-gray-800 rounded-2xl flex items-center justify-between hover:border-emerald-500/20 transition-all cursor-pointer group">
                          <div>
                             <p className="text-[11px] font-black text-gray-200 uppercase tracking-tight group-hover:text-emerald-400">{o.title}</p>
                             <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mt-0.5">Cap: {o.caps.daily} / day</p>
                          </div>
                          <div className="text-right">
                             <p className="text-xs font-black text-emerald-500">$25.00 CPA</p>
                             <span className="text-[8px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded uppercase font-black">Active</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </Card>

              <Card title="S2S PIXEL MONITOR" headerAction={<TargetIcon size={14} className="text-emerald-500"/>}>
                 <div className="p-8 text-center border-2 border-dashed border-gray-800 rounded-3xl group hover:border-emerald-500/30 transition-all">
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest italic leading-relaxed mb-6">
                       "All endpoints operational. Last conversion signal received 4m ago."
                    </p>
                    <button className="w-full py-3 bg-gray-900 border border-gray-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all shadow-inner">
                       Fire Simulation Test
                    </button>
                 </div>
              </Card>
           </div>
        </div>

        {/* ADD OFFER MODAL FOR ADVERTISER */}
        {showAddOffer && (
           <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[600] flex items-center justify-center p-4">
              <Card className="w-full max-w-3xl border-t-4 border-emerald-600 shadow-2xl bg-[#0a0f18]" noPadding>
                 <div className="flex justify-between items-center p-6 border-b border-gray-800">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-emerald-600/10 text-emerald-500 rounded-2xl"><Plus size={24}/></div>
                       <div>
                          <h3 className="text-xl font-black text-gray-100 uppercase tracking-tight">Provision New Offer</h3>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Self-service campaign deployment engine.</p>
                       </div>
                    </div>
                    <button onClick={() => setShowAddOffer(false)} className="p-2 text-gray-500 hover:text-white transition-colors"><X size={24}/></button>
                 </div>
                 
                 <div className="p-10 space-y-8 max-h-[70vh] overflow-y-auto no-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-6">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Identity Details</label>
                          <div className="space-y-4">
                             <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-gray-600 uppercase ml-1">Campaign Title *</span>
                                <input type="text" placeholder="e.g. CyberShield VPN - CPA - Global" className="w-full bg-[#111827] border border-gray-800 rounded-xl p-4 text-sm font-black focus:ring-1 focus:ring-emerald-500 outline-none text-gray-100" />
                             </div>
                             <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-gray-600 uppercase ml-1">Traffic Vertical</span>
                                <select className="w-full bg-[#111827] border border-gray-800 rounded-xl p-4 text-sm font-black outline-none focus:ring-1 focus:ring-emerald-500">
                                   <option>Utilities / Software</option>
                                   <option>Finance / Fintech</option>
                                   <option>E-commerce</option>
                                   <option>Gaming</option>
                                </select>
                             </div>
                          </div>
                       </div>
                       <div className="space-y-6">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">The Link Node</label>
                          <div className="space-y-4">
                             <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-gray-600 uppercase ml-1">Target Landing Page URL *</span>
                                <div className="relative">
                                   <LinkIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"/>
                                   <input type="text" placeholder="https://advertiser.com/land?c_id={click_id}" className="w-full bg-[#111827] border border-gray-800 rounded-xl p-4 pl-12 text-xs font-mono text-emerald-400 focus:ring-1 focus:ring-emerald-500 outline-none" />
                                </div>
                             </div>
                             <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-tight italic leading-relaxed">
                                   Ensure your system is set to catch our <code>{'{click_id}'}</code> macro for Server-to-Server postback reconciliation.
                                </p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block flex items-center gap-2"><DollarSign size={14}/> Economics</label>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-gray-600 uppercase">Your CPA Payout</span>
                                <div className="relative">
                                   <DollarSign size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"/>
                                   <input type="number" placeholder="25.00" className="w-full bg-[#111827] border border-gray-800 rounded-xl p-3 pl-8 text-sm font-black outline-none" />
                                </div>
                             </div>
                             <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-gray-600 uppercase">Daily Global Cap</span>
                                <input type="number" defaultValue="500" className="w-full bg-[#111827] border border-gray-800 rounded-xl p-3 text-sm font-black outline-none" />
                             </div>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block flex items-center gap-2"><Globe size={14}/> Regional Mapping</label>
                          <div className="space-y-1.5">
                             <span className="text-[10px] font-bold text-gray-600 uppercase">ISO Country Allowed List (CSV)</span>
                             <input type="text" placeholder="US, UK, CA, DE, FR" className="w-full bg-[#111827] border border-gray-800 rounded-xl p-3 text-xs font-mono uppercase tracking-widest outline-none focus:ring-1 focus:ring-emerald-500" />
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="p-8 border-t border-gray-800 bg-[#0a0f18] flex justify-end gap-4 rounded-b-3xl">
                    <button onClick={() => setShowAddOffer(false)} className="px-8 py-3 text-gray-500 hover:text-white font-black uppercase text-[11px] tracking-widest transition-all">Cancel</button>
                    <button onClick={() => setShowAddOffer(false)} className="px-12 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-[11px] tracking-widest rounded-xl shadow-xl shadow-emerald-600/20 active:scale-95 transition-all flex items-center gap-2">
                       <CheckCircle2 size={16}/> Authorize & Launch
                    </button>
                 </div>
              </Card>
           </div>
        )}
      </div>
    );
  }
  return <div className="p-12 text-center text-gray-600 font-black uppercase tracking-widest italic">{activePage} Content Loading...</div>;
};

export default AdvertiserPortal;
