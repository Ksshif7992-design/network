
import React, { useState, useEffect } from 'react';
import { CreditCard, Wallet, History, Calendar, DollarSign, ArrowUpRight, ArrowDownRight, Clock, Plus, ShieldCheck, TrendingUp } from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_AFFILIATES } from '../constants';

interface FinanceProps {
   initialTab?: string;
}

const Finance: React.FC<FinanceProps> = ({ initialTab }) => {
   const normalizeTab = (tab?: string) => {
      if (!tab) return 'wallet';
      const n = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (n === 'wallet') return 'wallet';
      if (n === 'payouthistory') return 'payouts';
      if (n === 'commissionrules') return 'holds';
      return 'wallet';
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
               <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Network Treasury</h1>
               <p className="text-sm text-gray-500 font-medium">Manage advertiser wallets, affiliate payouts, and cash flow cycles.</p>
            </div>
            <button className="bg-blue-600 px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">
               <Plus size={16} className="inline mr-2" /> Run Payout Cycle
            </button>
         </div>

         <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
            {[
               { id: 'wallet', label: 'Network Wallet', icon: <Wallet size={16} /> },
               { id: 'payouts', label: 'Payout History', icon: <History size={16} /> },
               { id: 'holds', label: 'Commission Rules', icon: <ShieldCheck size={16} /> },
            ].map(tab => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-xs font-black uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id ? 'border-blue-500 text-blue-400 bg-blue-500/5' : 'border-transparent text-gray-500 hover:text-gray-300'
                     }`}
               >
                  {tab.icon} {tab.label}
               </button>
            ))}
         </div>

         <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {activeTab === 'wallet' && (
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1 space-y-6">
                     <Card className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border-indigo-500/30">
                        <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-4">Master Ledger Balance</p>
                        <h2 className="text-4xl font-black text-white">$452,109.80</h2>
                        <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-green-500">
                           <TrendingUp size={12} /> +4.2% since yesterday
                        </div>
                     </Card>
                     <Card title="Operational Settlement">
                        <div className="space-y-4">
                           <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic leading-relaxed">"Settlements are processed hourly. primary bank feed is connected."</p>
                           <button className="w-full py-3 bg-gray-900 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all">Force Bank Sync</button>
                        </div>
                     </Card>
                  </div>

                  <Card title="Real-Time Ledger Feed" className="lg:col-span-2">
                     <div className="space-y-3">
                        {[
                           { type: 'Deposit', source: 'Fintech Flow (ADV-002)', amount: '+$12,500', time: '12m ago', status: 'completed' },
                           { type: 'Payout', source: 'Elite Performance (AFF-001)', amount: '-$4,200', time: '2h ago', status: 'completed' },
                           { type: 'Tax Hold', source: 'Direct Click LLC', amount: '-$120', time: '5h ago', status: 'pending' },
                        ].map((entry, i) => (
                           <div key={i} className="flex items-center justify-between p-4 bg-gray-900/40 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all">
                              <div className="flex items-center gap-4">
                                 <div className={`p-2 rounded-lg border ${entry.amount.startsWith('+') ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                                    {entry.amount.startsWith('+') ? <ArrowDownRight size={18} /> : <ArrowUpRight size={18} />}
                                 </div>
                                 <div>
                                    <p className="text-sm font-black text-gray-200 uppercase tracking-tight">{entry.source}</p>
                                    <p className="text-[9px] text-gray-600 font-mono uppercase font-black">{entry.type} • {entry.time}</p>
                                 </div>
                              </div>
                              <div className="text-right">
                                 <p className={`text-sm font-black ${entry.amount.startsWith('+') ? 'text-green-400' : 'text-gray-200'}`}>{entry.amount}</p>
                                 <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">{entry.status}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </div>
            )}

            {activeTab === 'payouts' && (
               <Card title="Historical Settlement Logs">
                  <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="border-b border-gray-700 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                              <th className="pb-4">Partner Entity</th>
                              <th className="pb-4">Cycle Date</th>
                              <th className="pb-4">Gateway</th>
                              <th className="pb-4">Net Payout</th>
                              <th className="pb-4 text-right">Confirmation</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                           {MOCK_AFFILIATES.map(aff => (
                              <tr key={aff.id} className="hover:bg-gray-800/30 transition-colors">
                                 <td className="py-5 font-bold text-gray-100 uppercase tracking-tight">{aff.name}</td>
                                 <td className="py-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">May 24, 2024</td>
                                 <td className="py-5 text-xs text-gray-500 font-bold uppercase tracking-widest">Payoneer</td>
                                 <td className="py-5 text-sm font-black text-blue-400">{aff.payout}</td>
                                 <td className="py-5 text-right"><span className="text-[9px] font-black uppercase tracking-widest text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">Settled</span></td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </Card>
            )}

            {activeTab === 'holds' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card title="Active Payout Governance">
                     <div className="space-y-4">
                        <div className="p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl">
                           <div className="flex items-start gap-4">
                              <div className="p-3 bg-gray-900 rounded-xl text-yellow-500 border border-gray-700 shadow-inner"><Clock size={24} /></div>
                              <div>
                                 <h4 className="font-black text-gray-100 uppercase tracking-tight">Fraud Threshold Hold</h4>
                                 <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1 uppercase tracking-tight italic">"Automatic 72h hold for Click Fraud Score &gt; 85%."</p>
                                 <div className="mt-4 flex gap-2">
                                    <button className="px-4 py-1.5 bg-yellow-500 text-black text-[9px] font-black uppercase tracking-widest rounded-lg">Active</button>
                                    <button className="px-4 py-1.5 bg-gray-800 text-gray-500 text-[9px] font-black uppercase tracking-widest rounded-lg border border-gray-700">Modify</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Card>
               </div>
            )}
         </div>
      </div>
   );
};

export default Finance;
