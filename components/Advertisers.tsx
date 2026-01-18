
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Briefcase, 
  Plus, 
  ExternalLink, 
  Mail, 
  Phone, 
  Wallet, 
  FileText, 
  ChevronRight, 
  User, 
  FileCheck, 
  Download,
  CheckCircle,
  XCircle,
  Clock,
  ClipboardList,
  X,
  Building2,
  DollarSign,
  UserCheck
} from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_ADVERTISERS } from '../constants';
import { Advertiser } from '../types';

interface AdvertisersProps {
  initialTab?: string;
}

const Advertisers: React.FC<AdvertisersProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'manage';
    const n = tab.toLowerCase().replace(/\s/g, '');
    // Sidebar matches: Directory, Approvals, Billing, IO Manager
    if (n === 'directory') return 'manage';
    if (n === 'approvals') return 'approvals';
    if (n === 'billing') return 'billing';
    if (n === 'iomanager') return 'iomanager';
    return 'manage';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));
  const [selectedAdv, setSelectedAdv] = useState<Advertiser | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
      setSelectedAdv(null);
    }
  }, [initialTab]);

  const renderApprovals = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-black uppercase tracking-tight text-gray-100">Pending Advertiser Applications</h2>
        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">3 Reviews Remaining</span>
      </div>
      
      <div className="space-y-4">
        {[
          { id: 'ADV-APP-001', name: 'Global Solvers Ltd', category: 'Finance', date: '4h ago', risk: 'Low', website: 'globalsolvers.io' },
          { id: 'ADV-APP-002', name: 'NextGen Gaming', category: 'Entertainment', date: 'Yesterday', risk: 'Medium', website: 'nextgen.play' },
          { id: 'ADV-APP-003', name: 'HealthFirst Pharma', category: 'Nutra', date: '2 days ago', risk: 'High', website: 'h1pharma.com' },
        ].map(app => (
          <div key={app.id} className="bg-gray-800 border border-gray-700 p-5 rounded-2xl flex items-center justify-between hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-gray-900 rounded-xl text-indigo-400 border border-gray-700 shadow-inner">
                <ClipboardList size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{app.name}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  Domain: <span className="text-blue-400 lowercase">{app.website}</span> • Category: {app.category} • Applied {app.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <p className="text-[9px] font-black text-gray-600 uppercase mb-1">Risk Profile</p>
                <span className={`text-[10px] font-black uppercase ${app.risk === 'Low' ? 'text-green-500' : app.risk === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>{app.risk}</span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-900 rounded-lg text-gray-500 hover:text-red-500 transition-colors border border-gray-700 shadow-sm"><XCircle size={18}/></button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 active:scale-95 transition-all">Approve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIOManager = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <h2 className="text-lg font-black uppercase tracking-tight text-gray-100">Contract Registry</h2>
         <button className="bg-blue-600 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95 transition-all"><Plus size={14}/> New IO Template</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          {[
            { id: 'IO-2401', partner: 'CyberShield Global', date: 'May 12, 2024', status: 'Signed', rep: 'John Doe' },
            { id: 'IO-2405', partner: 'Fintech Flow', date: 'May 05, 2024', status: 'Draft', rep: 'Jane Smith' },
            { id: 'IO-2389', partner: 'Elite Media Group', date: 'Jan 10, 2024', status: 'Expired', rep: 'John Doe' },
          ].map(io => (
            <div key={io.id} className="bg-gray-800 border border-gray-700 p-5 rounded-2xl flex items-center justify-between hover:border-blue-500/30 transition-all group">
               <div className="flex items-center gap-5">
                  <div className="p-3 bg-gray-900 rounded-xl text-blue-400 border border-gray-700 shadow-inner"><FileCheck size={24}/></div>
                  <div>
                    <h4 className="font-bold text-gray-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{io.partner}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                       Ref: <span className="font-mono">{io.id}</span> • Created: {io.date} • Rep: {io.rep}
                    </p>
                  </div>
               </div>
               <div className="flex items-center gap-6">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${
                    io.status === 'Signed' ? 'text-green-500 bg-green-500/10 border border-green-500/20' :
                    io.status === 'Draft' ? 'text-blue-500 bg-blue-500/10 border border-blue-500/20' : 'text-red-500 bg-red-500/10 border border-red-500/20'
                  }`}>{io.status}</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-900 rounded-lg text-gray-500 hover:text-white transition-colors border border-gray-700"><Download size={14}/></button>
                    <button className="p-2 bg-gray-900 rounded-lg text-gray-500 hover:text-white transition-colors border border-gray-700"><ExternalLink size={14}/></button>
                  </div>
               </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1 space-y-6">
           <Card title="Legal Stats">
              <div className="space-y-6">
                 <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Active IOs</p>
                    <p className="text-2xl font-black text-gray-100">42</p>
                 </div>
                 <div className="pt-4 border-t border-gray-700">
                    <p className="text-[10px] font-black text-gray-600 uppercase mb-3 tracking-widest">Expiring Soon</p>
                    <div className="space-y-2">
                       <div className="p-2 bg-red-500/5 border border-red-500/10 rounded-lg flex items-center justify-between text-[10px] font-bold">
                          <span className="text-red-500">Z-Alpha Media</span>
                          <span className="text-gray-600 font-mono">12 Days</span>
                       </div>
                    </div>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );

  const renderAdvertiserDetail = (adv: Advertiser) => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <button onClick={() => setSelectedAdv(null)} className="text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300 mb-2 flex items-center gap-1 transition-colors">
        <ChevronRight size={14} className="rotate-180" /> Back to list
      </button>
      <Card title={adv.name} className="border-t-2 border-t-blue-500 shadow-xl shadow-blue-500/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 border-r border-gray-700 pr-6">
                  <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gray-900 rounded-lg text-gray-500 border border-gray-700 shadow-inner"><User size={16} /></div>
                      <div>
                          <p className="text-gray-600 text-[9px] uppercase font-black tracking-widest">Main Contact</p>
                          <p className="text-sm font-bold text-gray-200">{adv.contact.name}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gray-900 rounded-lg text-gray-500 border border-gray-700 shadow-inner"><Mail size={16} /></div>
                      <div>
                          <p className="text-gray-600 text-[9px] uppercase font-black tracking-widest">Email Node</p>
                          <p className="text-sm font-bold text-blue-400">{adv.contact.email}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-900 rounded-lg text-gray-500 border border-gray-700 shadow-inner"><Phone size={16} /></div>
                      <div>
                          <p className="text-gray-600 text-[9px] uppercase font-black tracking-widest">Phone Link</p>
                          <p className="text-sm font-bold text-gray-200">{adv.contact.phone}</p>
                      </div>
                  </div>
              </div>
              <div className="md:col-span-2 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all">
                          <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Total Spend</p>
                          <p className="text-2xl font-black text-white">{adv.spend}</p>
                      </div>
                      <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all">
                          <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Balance</p>
                          <p className="text-2xl font-black text-green-500">{adv.balance}</p>
                      </div>
                      <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-indigo-500/30 transition-all">
                          <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Live Offers</p>
                          <p className="text-2xl font-black text-blue-500">{adv.offers}</p>
                      </div>
                  </div>
                  <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Wallet size={20} className="text-blue-500" />
                        <div>
                           <p className="text-[10px] font-black text-gray-200 uppercase tracking-widest">Invoicing Mode: Pre-Paid</p>
                           <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Low Balance Alert set at $500.00</p>
                        </div>
                     </div>
                     <button className="px-6 py-2 bg-gray-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Add Funds</button>
                  </div>
              </div>
          </div>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {!selectedAdv && (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Advertiser Hub</h1>
              <p className="text-sm text-gray-500 font-medium">Oversee advertiser partners, budgets, and operational compliance.</p>
            </div>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              <Plus size={18} /> Add Advertiser
            </button>
          </div>

          <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
            {[
              { id: 'manage', label: 'Directory', icon: <Briefcase size={16}/> },
              { id: 'approvals', label: 'Approvals', icon: <ClipboardList size={16}/> },
              { id: 'billing', label: 'Billing & Wallet', icon: <Wallet size={16}/> },
              { id: 'iomanager', label: 'IO Manager', icon: <FileCheck size={16}/> },
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
            {activeTab === 'manage' && (
              <Card>
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="text" placeholder="Global partner search by name, ID, or POC..." className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <button className="px-6 py-2 bg-gray-900 border border-gray-700 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <Filter size={16} /> Filters
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                        <th className="pb-4 text-gray-500">Company Entity</th>
                        <th className="pb-4 text-gray-500">Lifecycle Status</th>
                        <th className="pb-4 text-gray-500 text-center">Offers</th>
                        <th className="pb-4 text-gray-500 text-center">Spend MTD</th>
                        <th className="pb-4 text-gray-500 text-right">Insight</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {MOCK_ADVERTISERS.map(adv => (
                        <tr key={adv.id} onClick={() => setSelectedAdv(adv)} className="hover:bg-gray-800/50 transition-colors group cursor-pointer">
                          <td className="py-5">
                            <div className="font-bold text-gray-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{adv.name}</div>
                            <div className="text-[10px] text-gray-600 font-mono tracking-tighter uppercase">{adv.id}</div>
                          </td>
                          <td className="py-5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${adv.status === 'active' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5'}`}>{adv.status}</span>
                          </td>
                          <td className="py-5 text-xs text-gray-400 font-black tracking-widest text-center">{adv.offers}</td>
                          <td className="py-5 text-sm font-black text-blue-400 text-center">{adv.spend}</td>
                          <td className="py-5 text-right"><ChevronRight size={16} className="ml-auto text-gray-700 group-hover:text-blue-500 transition-all" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {activeTab === 'approvals' && renderApprovals()}

            {activeTab === 'billing' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card title="Billing & Invoicing" headerAction={<div className="flex items-center gap-2"><Clock size={12} className="text-gray-500"/> <span className="text-[9px] font-black text-gray-600 uppercase">Cycle: Net 30</span></div>}>
                    <div className="space-y-6 py-2">
                       <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest italic leading-relaxed">"System automated invoicing pulls data from live conversion logs every 24h."</p>
                       <div className="flex gap-4">
                          <div className="flex-1 bg-gray-900 border border-gray-700 p-4 rounded-xl">
                             <p className="text-[9px] font-black text-gray-600 uppercase mb-1">Unbilled Revenue</p>
                             <p className="text-xl font-black text-gray-200">$24,802.10</p>
                          </div>
                          <div className="flex-1 bg-gray-900 border border-gray-700 p-4 rounded-xl">
                             <p className="text-[9px] font-black text-gray-600 uppercase mb-1">Overdue Invoices</p>
                             <p className="text-xl font-black text-red-500">2</p>
                          </div>
                       </div>
                       <button className="w-full bg-blue-600 text-white font-black uppercase tracking-widest py-3 rounded-xl text-xs shadow-lg shadow-blue-600/20 active:scale-95 transition-all">Generate Bulk Cycle Pack</button>
                    </div>
                 </Card>
                 <Card title="Global Enterprise Wallet Balances">
                    <div className="space-y-1">
                       {MOCK_ADVERTISERS.map(a => (
                          <div key={a.id} className="flex justify-between items-center p-4 bg-gray-900/40 border-b border-gray-800/50 last:border-none hover:bg-gray-800 transition-colors rounded-xl mb-1">
                             <div>
                                <p className="text-xs font-black text-gray-300 uppercase tracking-tight">{a.name}</p>
                                <p className="text-[9px] text-gray-600 font-mono uppercase tracking-tighter">{a.id}</p>
                             </div>
                             <div className="text-right">
                                <span className="font-black text-green-400 block">{a.balance}</span>
                                <span className="text-[8px] font-black text-gray-600 uppercase">Pre-paid</span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </Card>
              </div>
            )}

            {activeTab === 'iomanager' && renderIOManager()}
          </div>
        </>
      )}
      {selectedAdv && renderAdvertiserDetail(selectedAdv)}

      {/* Advertiser Creation Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[500] flex items-center justify-center p-4">
           <Card className="w-full max-w-2xl border-t-4 border-indigo-600 shadow-2xl bg-gray-900" noPadding>
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600/10 text-indigo-500 rounded-lg"><Briefcase size={20}/></div>
                  <h3 className="text-sm font-black text-gray-100 uppercase tracking-widest">Create Advertiser Account</h3>
                </div>
                <button onClick={() => setShowAddModal(false)} className="p-2 text-gray-500 hover:text-white transition-colors"><X size={20}/></button>
              </div>
              
              <div className="p-8 space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <Building2 size={12}/> Company Entity
                       </label>
                       <input type="text" placeholder="e.g. Global Tech Solutions" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-indigo-500 outline-none font-medium" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <UserCheck size={12}/> Main Contact Person
                       </label>
                       <input type="text" placeholder="POC full name" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-indigo-500 outline-none font-medium" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <Mail size={12}/> Email Node
                       </label>
                       <input type="email" placeholder="billing@domain.com" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-indigo-500 outline-none font-medium" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <Phone size={12}/> Contact Phone
                       </label>
                       <input type="text" placeholder="+1 555-0000" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-indigo-500 outline-none font-medium" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-800/50">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Base Currency</label>
                       <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-indigo-500 font-bold">
                          <option>USD ($)</option>
                          <option>EUR (€)</option>
                          <option>GBP (£)</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Billing Logic</label>
                       <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-indigo-500 font-bold">
                          <option>Pre-payment</option>
                          <option>Post-payment (Net-30)</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Initial Balance</label>
                       <div className="relative">
                          <DollarSign size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"/>
                          <input type="number" placeholder="0.00" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 pl-8 text-sm focus:ring-1 focus:ring-indigo-500 outline-none font-bold" />
                       </div>
                    </div>
                 </div>

                 <div className="flex gap-4 pt-6">
                    <button onClick={() => setShowAddModal(false)} className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 text-gray-400 font-black uppercase text-[11px] tracking-widest rounded-xl transition-all">Discard</button>
                    <button onClick={() => setShowAddModal(false)} className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase text-[11px] tracking-widest rounded-xl shadow-xl shadow-indigo-600/20 active:scale-95 transition-all">Authorize Advertiser</button>
                 </div>
              </div>
           </Card>
        </div>
      )}
    </div>
  );
};

export default Advertisers;
