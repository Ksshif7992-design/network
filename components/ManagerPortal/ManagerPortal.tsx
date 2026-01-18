
import React, { useState } from 'react';
import { PageId } from '../../types';
import Card from '../Shared/Card';
import { Users, Tag, TrendingUp, UserPlus, ClipboardList, MessageSquare, Link as LinkIcon, Copy, CheckCircle2, ShieldCheck, Mail, Globe, Star, X } from 'lucide-react';
import { MOCK_AFFILIATES } from '../../constants';

const ManagerPortal: React.FC<{ activePage: PageId, activeSubPage?: string }> = ({ activePage }) => {
  const [copied, setCopied] = useState(false);
  const [showProvision, setShowProvision] = useState(false);

  const referralLink = "https://logicpulse.net/apply?am_ref=JD_001";

  const copyRef = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (activePage === 'dashboard') {
    return (
      <div className="space-y-6 pb-10">
        <div className="flex justify-between items-center">
           <div>
              <h1 className="text-2xl font-black uppercase tracking-tight">AM Relationship Desk</h1>
              <p className="text-sm text-gray-500 font-medium">"Overseeing L o G i c P u l s e™ portfolio retention and performance growth."</p>
           </div>
           <div className="flex gap-3">
              <button 
                onClick={() => setShowProvision(true)}
                className="bg-cyan-600 hover:bg-cyan-500 px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-cyan-600/20 active:scale-95 transition-all flex items-center gap-2"
              >
                <UserPlus size={18}/> Provision New Partner
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {[
             { label: 'My Portfolio Rev', value: '$45,210', change: '+12%', icon: <TrendingUp size={14}/> },
             { label: 'Active Partners', value: '42', change: '+2', icon: <Users size={14}/> },
             { label: 'Pending Apps', value: '8', change: 'NEW', icon: <ClipboardList size={14}/> },
             { label: 'Chat Requests', value: '3', change: 'ALIVE', icon: <MessageSquare size={14}/> },
           ].map((s, i) => (
             <Card key={i} className="p-5 border-transparent bg-gray-900/40 border border-gray-800">
                <div className="flex justify-between mb-1">
                   <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{s.label}</p>
                   <span className="text-cyan-500">{s.icon}</span>
                </div>
                <p className="text-2xl font-black text-white font-mono">{s.value}</p>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <Card title="MY MANAGED PORTFOLIO" className="lg:col-span-2" noPadding>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-gray-800 bg-gray-800/30 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                          <th className="p-4">Partner Node</th>
                          <th className="p-4">Growth Curve</th>
                          <th className="p-4 text-right">Revenue MTD</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-900">
                       {MOCK_AFFILIATES.map(a => (
                          <tr key={a.id} className="hover:bg-gray-800/30 transition-all cursor-pointer group">
                             <td className="p-4">
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center font-black text-[10px] text-cyan-500 shadow-inner group-hover:bg-cyan-600 group-hover:text-white transition-all">{a.name[0]}</div>
                                   <div>
                                      <p className="text-xs font-black text-gray-100 uppercase tracking-tight">{a.name}</p>
                                      <span className="text-[8px] bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded uppercase font-black tracking-widest border border-cyan-500/20">{a.tier}</span>
                                   </div>
                                </div>
                             </td>
                             <td className="p-4">
                                <div className="flex items-center gap-2 text-green-500 font-black text-[10px] uppercase tracking-widest">
                                   <TrendingUp size={12}/> +12.4%
                                </div>
                             </td>
                             <td className="p-4 text-right text-sm font-black text-white font-mono group-hover:text-cyan-400 transition-colors">$18,204</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>

           <div className="space-y-6">
              {/* UNIQUE AM REFERRAL LINK */}
              <Card title="YOUR RECRUITMENT LINK" className="border-t-2 border-cyan-500">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic mb-6 leading-relaxed">
                    "New partners signing up via this URL are automatically bound to your AM profile node."
                 </p>
                 <div className="relative group">
                    <div className="bg-[#0a0f18] border border-gray-800 rounded-xl p-4 font-mono text-[10px] text-cyan-400 truncate pr-12 select-all">
                       {referralLink}
                    </div>
                    <button 
                      onClick={copyRef}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-all"
                    >
                       {copied ? <CheckCircle2 size={16} className="text-green-500"/> : <Copy size={16}/>}
                    </button>
                 </div>
                 {copied && <p className="text-[8px] font-black text-green-500 uppercase tracking-widest mt-2 animate-pulse text-center">Node Link Captured</p>}
              </Card>

              <Card title="RESOURCES FOR PARTNERS">
                 <div className="space-y-3">
                    <div className="p-4 bg-gray-950 border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all cursor-pointer flex items-center gap-4 group">
                       <div className="p-2 bg-gray-900 rounded-lg text-gray-600 group-hover:text-cyan-400 transition-colors"><LinkIcon size={16}/></div>
                       <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-widest">Training Bridge Kit</span>
                    </div>
                    <div className="p-4 bg-gray-950 border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all cursor-pointer flex items-center gap-4 group">
                       <div className="p-2 bg-gray-900 rounded-lg text-gray-600 group-hover:text-cyan-400 transition-colors"><Mail size={16}/></div>
                       <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-widest">Global Payout Rules</span>
                    </div>
                 </div>
              </Card>
           </div>
        </div>

        {/* DIRECT PROVISIONING MODAL */}
        {showProvision && (
           <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[600] flex items-center justify-center p-4">
              <Card className="w-full max-w-2xl border-t-4 border-cyan-600 shadow-2xl bg-[#0a0f18]" noPadding>
                 <div className="flex justify-between items-center p-6 border-b border-gray-800">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-cyan-600/10 text-cyan-500 rounded-2xl"><UserPlus size={24}/></div>
                       <div>
                          <h3 className="text-xl font-black text-gray-100 uppercase tracking-tight">Provision Partner Node</h3>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Instantly create a managed affiliate account.</p>
                       </div>
                    </div>
                    <button onClick={() => setShowProvision(false)} className="p-2 text-gray-500 hover:text-white transition-colors"><X size={24}/></button>
                 </div>
                 
                 <div className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-1.5">
                          <span className="text-[10px] font-black text-gray-600 uppercase ml-1">Company Name *</span>
                          <input type="text" placeholder="e.g. Acme Traffic Group" className="w-full bg-[#111827] border border-gray-800 rounded-xl p-4 text-sm font-black focus:ring-1 focus:ring-cyan-500 outline-none" />
                       </div>
                       <div className="space-y-1.5">
                          <span className="text-[10px] font-black text-gray-600 uppercase ml-1">Contact Email *</span>
                          <input type="email" placeholder="partner@domain.com" className="w-full bg-[#111827] border border-gray-800 rounded-xl p-4 text-sm font-black focus:ring-1 focus:ring-cyan-500 outline-none" />
                       </div>
                       <div className="space-y-1.5">
                          <span className="text-[10px] font-black text-gray-600 uppercase ml-1">Initial Tier</span>
                          <select className="w-full bg-[#111827] border border-gray-800 rounded-xl p-4 text-sm font-black outline-none focus:ring-1 focus:ring-cyan-500">
                             <option>Silver (Standard)</option>
                             <option>Gold (Premium)</option>
                             <option>Platinum (Elite)</option>
                          </select>
                       </div>
                       <div className="space-y-1.5">
                          <span className="text-[10px] font-black text-gray-600 uppercase ml-1">Billing Cycle</span>
                          <select className="w-full bg-[#111827] border border-gray-800 rounded-xl p-4 text-sm font-black outline-none focus:ring-1 focus:ring-cyan-500">
                             <option>Net 30 (Default)</option>
                             <option>Net 15</option>
                             <option>Net 7 (Weekly)</option>
                          </select>
                       </div>
                    </div>
                    
                    <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl flex items-start gap-4">
                       <ShieldCheck size={24} className="text-cyan-500 shrink-0"/>
                       <div>
                          <p className="text-[11px] font-black text-gray-200 uppercase tracking-tight">Security & Ownership</p>
                          <p className="text-[10px] text-gray-500 font-medium leading-relaxed uppercase tracking-tight mt-1">
                             This account will be automatically verified and assigned to your AM portfolio. Credentials will be dispatched via secure link.
                          </p>
                       </div>
                    </div>
                 </div>

                 <div className="p-8 border-t border-gray-800 bg-[#0a0f18] flex justify-end gap-4 rounded-b-3xl">
                    <button onClick={() => setShowProvision(false)} className="px-8 py-3 text-gray-500 hover:text-white font-black uppercase text-[11px] tracking-widest transition-all">Cancel</button>
                    <button onClick={() => setShowProvision(false)} className="px-12 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase text-[11px] tracking-widest rounded-xl shadow-xl shadow-cyan-600/20 active:scale-95 transition-all flex items-center gap-2">
                       <UserPlus size={16}/> Authorize Partner
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

export default ManagerPortal;