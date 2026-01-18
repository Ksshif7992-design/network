
import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Palette, Activity, Clock, Search, ChevronRight, Lock, Globe, DollarSign, Languages } from 'lucide-react';
import Card from './Shared/Card';

interface SettingsProps {
  initialTab?: string;
}

const Settings: React.FC<SettingsProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'account';
    const n = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (n === 'account') return 'account';
    if (n === 'security') return 'permissions';
    if (n === 'whitelabel') return 'branding';
    return 'account';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
    }
  }, [initialTab]);

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'BTC', name: 'Bitcoin', symbol: '₿' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Global Configuration</h1>
            <p className="text-sm text-gray-500 font-medium">Manage L o G i c P u l s e™ identity, security policies, and accounting defaults.</p>
         </div>
         <div className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
            v2.4.1-STABLE
         </div>
      </div>
      
      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'account', label: 'Personal Account', icon: <User size={16}/> },
          { id: 'permissions', label: 'Security Policy', icon: <ShieldCheck size={16}/> },
          { id: 'branding', label: 'White Label', icon: <Palette size={16}/> },
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
        {activeTab === 'account' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="USER IDENTITY" className="max-w-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-5 p-5 bg-gray-900 rounded-2xl border border-gray-800 shadow-inner">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-black text-2xl shadow-lg shadow-blue-600/30">JD</div>
                   <div>
                      <h4 className="font-black text-gray-100 text-xl tracking-tight uppercase">John Doe</h4>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">System Master Administrator</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Node</label>
                      <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500" defaultValue="admin@logicpulse.io" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Operational Timezone</label>
                      <select className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500">
                        <option>(UTC-05:00) EST</option>
                        <option>(UTC+00:00) GMT</option>
                      </select>
                   </div>
                   <button className="w-full py-3 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl text-xs shadow-lg shadow-blue-600/20 active:scale-95 transition-all">Update Identity Profile</button>
                </div>
              </div>
            </Card>
            <Card title="Security Preferences">
               <div className="space-y-4">
                  <div className="p-4 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-between">
                     <div>
                        <p className="text-xs font-black text-gray-200 uppercase tracking-tight">Login Notifications</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Alert on new IP detected</p>
                     </div>
                     <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center px-1">
                        <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                     </div>
                  </div>
               </div>
            </Card>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Security Infrastructure">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-gray-900 rounded-2xl border border-gray-800">
                  <div className="flex gap-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-blue-400 border border-gray-700 shadow-inner"><Lock size={20} /></div>
                    <div>
                      <p className="text-sm font-black text-gray-100 uppercase tracking-tight">Two-Factor (2FA)</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Required for admin nodes</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-blue-600 rounded-full relative flex items-center p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 bg-gray-900 rounded-2xl border border-gray-800">
                  <div className="flex gap-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-yellow-500 border border-gray-700 shadow-inner"><ShieldCheck size={20} /></div>
                    <div>
                      <p className="text-sm font-black text-gray-100 uppercase tracking-tight">Password Rotation</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Force update every 90 days</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-gray-700 rounded-full relative flex items-center p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-gray-500 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'branding' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card title="White Label Identity">
                <div className="space-y-6">
                  <div className="p-10 border-2 border-dashed border-gray-800 rounded-2xl text-center hover:border-blue-500/40 cursor-pointer transition-all bg-gray-900/10 group">
                    <Palette size={32} className="mx-auto text-gray-600 mb-4 group-hover:scale-110 transition-transform"/>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Upload L o G i c P u l s e™ Identity (SVG/PNG)</span>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Network Accent Logic</label>
                    <div className="flex gap-4">
                      {['#3b82f6', '#10b981', '#f59e0b', '#ef4444'].map(color => (
                        <div key={color} className={`w-10 h-10 rounded-xl cursor-pointer border-2 transition-all ${color === '#3b82f6' ? 'border-white' : 'border-transparent shadow-inner'}`} style={{backgroundColor: color}}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card title="Network Localization & Currency">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                             <DollarSign size={12} className="text-blue-400"/> Base Accounting Currency
                          </label>
                          <div className="relative">
                             <select 
                               value={selectedCurrency}
                               onChange={(e) => setSelectedCurrency(e.target.value)}
                               className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm appearance-none outline-none focus:ring-1 focus:ring-blue-500 font-bold"
                             >
                                {currencies.map(c => (
                                   <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                                ))}
                             </select>
                             <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 pointer-events-none"/>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                             <Languages size={12} className="text-blue-400"/> Default Platform Language
                          </label>
                          <select className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500">
                             <option>English (United States)</option>
                             <option>English (United Kingdom)</option>
                             <option>Spanish (ES)</option>
                             <option>French (FR)</option>
                          </select>
                       </div>
                    </div>
                    <div className="p-5 bg-blue-600/5 border border-blue-500/20 rounded-2xl flex flex-col justify-center text-center">
                       <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">Financial Output Preview</p>
                       <div className="space-y-1">
                          <p className="text-3xl font-black text-white">
                             {currencies.find(c => c.code === selectedCurrency)?.symbol}1,240.00
                          </p>
                          <p className="text-[9px] font-black text-gray-600 uppercase tracking-tighter">Gross Network Volume</p>
                       </div>
                    </div>
                 </div>
                 <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <p className="text-[10px] text-gray-500 font-bold italic leading-relaxed uppercase tracking-tight">
                       Note: Changing the base currency affects all historical reporting and future payout calculations. Payouts will be converted at live market rates.
                    </p>
                 </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card title="Partner Portal Domain">
                 <div className="space-y-5">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">CNAME Mapping</label>
                       <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm font-mono text-gray-400 outline-none" defaultValue="partners.logicpulse.io" />
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
                       <ShieldCheck size={18} className="text-blue-500" />
                       <p className="text-[10px] text-gray-400 italic leading-relaxed font-bold uppercase tracking-widest">"SSL cert must be verified before domain activation."</p>
                    </div>
                    <button className="w-full py-3 bg-gray-800 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Preview Branded Portal</button>
                 </div>
              </Card>
              
              <Card title="Regional Defaults">
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                       <span>Metric System</span>
                       <span className="text-blue-400">Kilometers</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                       <span>Date Format</span>
                       <span className="text-blue-400">MM/DD/YYYY</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                       <span>First Day of Week</span>
                       <span className="text-blue-400">Monday</span>
                    </div>
                 </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;