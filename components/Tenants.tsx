
import React, { useState } from 'react';
import { Network, Plus, ShieldCheck, Globe, DollarSign, Search, Filter, MoreVertical, ExternalLink, Cpu, Package, CheckCircle2 } from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_TENANTS } from '../constants';

const Tenants: React.FC = () => {
  const [activeTab, setActiveTab] = useState('instances');

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Tenant Control Plane</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Managing platform Tracking Nodes and Branded Instances."</p>
        </div>
        <button className="bg-blue-600 px-6 py-2 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 active:scale-95 transition-all flex items-center gap-2">
          <Plus size={18} /> Provision New Instance
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'instances', label: 'Active Instances', icon: <Cpu size={16}/> },
          { id: 'packages', label: 'Packages & Billing', icon: <Package size={16}/> },
          { id: 'domains', label: 'Domain Registry', icon: <Globe size={16}/> },
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
           {activeTab === 'instances' && (
             <Card noPadding>
                <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex gap-4">
                   <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={14} />
                      <input type="text" placeholder="Search by Instance ID or Admin..." className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-9 pr-4 py-2 text-[10px] font-black outline-none focus:ring-1 focus:ring-blue-500" />
                   </div>
                   <button className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-[9px] font-black uppercase text-gray-500"><Filter size={14}/></button>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="text-[10px] font-black text-gray-600 uppercase tracking-widest border-b border-gray-800">
                            <th className="p-4">Instance / Admin</th>
                            <th className="p-4">Tracking Domain</th>
                            <th className="p-4">Tier</th>
                            <th className="p-4">Volume MTD</th>
                            <th className="p-4 text-right">Action</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-900">
                         {MOCK_TENANTS.map(t => (
                           <tr key={t.id} className="hover:bg-gray-800/30 group transition-colors">
                              <td className="p-4">
                                 <p className="text-[11px] font-black text-gray-100 uppercase tracking-tight">{t.adminName}</p>
                                 <p className="text-[9px] text-gray-600 font-mono font-black">{t.id}</p>
                              </td>
                              <td className="p-4">
                                 <code className="text-[10px] text-blue-400 font-mono">{t.domain}</code>
                              </td>
                              <td className="p-4">
                                 <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${
                                   t.package === 'Enterprise' ? 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10' : 'border-gray-700 text-gray-500'
                                 }`}>{t.package}</span>
                              </td>
                              <td className="p-4 font-mono text-xs font-black text-gray-300">{t.revenue}</td>
                              <td className="p-4 text-right">
                                 <button className="p-2 text-gray-700 hover:text-white transition-colors"><MoreVertical size={16}/></button>
                              </td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </Card>
           )}

           {activeTab === 'packages' && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Core', price: '$299', cap: '1M Events', features: ['S2S Tracking', 'Basic Reporting'] },
                  { name: 'Scale', price: '$999', cap: '10M Events', features: ['Advanced Fraud', 'SmartLinks', 'API'] },
                  { name: 'Enterprise', price: 'Custom', cap: 'Unlimited', features: ['Dedicated Node', 'Full White Label', 'Support SLA'] },
                ].map(pkg => (
                  <Card key={pkg.name} title={`${pkg.name} Tier`} className="border-t-2 border-t-blue-500 flex flex-col h-full">
                     <div className="mb-6">
                        <p className="text-3xl font-black text-white">{pkg.price}</p>
                        <p className="text-[10px] text-gray-500 font-black uppercase mt-1">per instance / month</p>
                     </div>
                     <div className="space-y-3 mb-8 flex-1">
                        <div className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded inline-block uppercase tracking-widest">{pkg.cap}</div>
                        {pkg.features.map(f => (
                          <div key={f} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                             <CheckCircle2 size={12} className="text-blue-500"/> {f}
                          </div>
                        ))}
                     </div>
                     <button className="w-full py-3 bg-gray-900 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all">Modify Rules</button>
                  </Card>
                ))}
             </div>
           )}
        </div>

        <div className="lg:col-span-1 space-y-6">
           <Card title="Infrastructure Load">
              <div className="space-y-4">
                 <div>
                    <div className="flex justify-between text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">
                       <span>CPU Nodes</span>
                       <span>82%</span>
                    </div>
                    <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                       <div className="bg-blue-600 h-full w-[82%]"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">
                       <span>Data Storage</span>
                       <span>12.4 TB</span>
                    </div>
                    <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                       <div className="bg-indigo-600 h-full w-[45%]"></div>
                    </div>
                 </div>
              </div>
           </Card>

           <Card title="Platform Alerts">
              <div className="space-y-3">
                 <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex gap-3">
                    <ShieldCheck size={16} className="text-red-500 shrink-0"/>
                    <p className="text-[9px] font-black text-red-500 uppercase leading-tight">Instance TEN-005: Exceeded Bandwidth Cap</p>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
