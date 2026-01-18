
import React, { useState, useEffect } from 'react';
import { ShieldAlert, BarChart, Ban, ShieldCheck, Activity, Target, Fingerprint, Globe, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_FRAUD_ALERTS } from '../constants';

interface FraudDetectionProps {
  initialTab?: string;
}

const FraudDetection: React.FC<FraudDetectionProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'scoreboard';
    const n = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (n === 'scoreboard') return 'scoreboard';
    if (n === 'clickvalidation') return 'blocking';
    if (n === 'rules') return 'rules';
    return 'scoreboard';
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
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Threat Shield v4.0</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Active packet inspection and traffic fingerprinting logic."</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-500/20 shadow-lg shadow-green-500/5">
            <ShieldCheck size={14}/> Core Protection: ACTIVE
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'scoreboard', label: 'Scoreboard', icon: <BarChart size={16}/> },
          { id: 'rules', label: 'Validation Rules', icon: <Fingerprint size={16}/> },
          { id: 'blocking', label: 'Blacklist Manager', icon: <Ban size={16}/> },
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
        {activeTab === 'scoreboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Scanned Traffic', val: '4.8M', color: 'text-gray-100', icon: <Globe size={14}/> },
                { label: 'Blocked Nodes', val: '12,404', color: 'text-red-500', icon: <Ban size={14}/> },
                { label: 'Mean Risk Score', val: '08/100', color: 'text-green-500', icon: <Target size={14}/> },
                { label: 'Revenue Shielded', val: '$34,210', color: 'text-blue-400', icon: <ShieldCheck size={14}/> },
              ].map((stat, i) => (
                <Card key={i} className="p-5 border-transparent bg-gray-900/40 border border-gray-800 hover:border-blue-500/20 transition-all group">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] uppercase font-black text-gray-600 tracking-widest">{stat.label}</p>
                    <span className="text-gray-700 group-hover:text-blue-500 transition-colors">{stat.icon}</span>
                  </div>
                  <p className={`text-2xl font-black ${stat.color} font-mono`}>{stat.val}</p>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card title="Real-Time Threat Intelligence" className="lg:col-span-2" headerAction={<Activity size={16} className="text-red-500 animate-pulse"/>}>
                <div className="space-y-3">
                  {MOCK_FRAUD_ALERTS.map(alert => (
                    <div key={alert.id} className="p-4 bg-gray-950 border-l-4 border-red-600 rounded-xl flex justify-between items-center hover:bg-gray-800/40 transition-all cursor-crosshair">
                      <div className="flex items-center gap-4">
                         <div className="p-2 bg-red-500/5 text-red-500 rounded-lg"><AlertTriangle size={18}/></div>
                         <div>
                            <h5 className="text-sm font-black text-gray-200 uppercase tracking-tight">{alert.reason}</h5>
                            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{alert.source} • <span className="text-gray-400">{alert.timestamp}</span></p>
                         </div>
                      </div>
                      <div className="text-right">
                         <span className="text-[11px] font-black text-red-500 font-mono">{alert.score}% RISK</span>
                         <div className="flex gap-1 mt-1">
                            <div className="w-1 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-1 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-1 h-3 bg-red-500/20 rounded-full"></div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card title="Quick Actions">
                 <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-4 bg-gray-950 border border-gray-800 rounded-2xl hover:border-red-500/40 transition-all group">
                       <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-red-400">Flush Blocklist</span>
                       <Zap size={14} className="text-gray-700 group-hover:text-red-500"/>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-gray-950 border border-gray-800 rounded-2xl hover:border-blue-500/40 transition-all group">
                       <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-blue-400">Verify All Sub-IDs</span>
                       <CheckCircle2 size={14} className="text-gray-700 group-hover:text-blue-500"/>
                    </button>
                 </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Validation Logic">
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">Minimum Click-To-Conversion (CTC)</label>
                       <div className="flex gap-2">
                          <input type="number" defaultValue="15" className="flex-1 bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm font-bold outline-none focus:ring-1 focus:ring-blue-500" />
                          <div className="bg-gray-800 px-4 py-3 rounded-xl text-[10px] font-black text-gray-500 uppercase">Seconds</div>
                       </div>
                       <p className="text-[9px] text-gray-600 font-bold uppercase tracking-tight italic">Auto-reject conversions faster than 15s to prevent script-based fraud.</p>
                    </div>
                    <div className="pt-4 border-t border-gray-800 space-y-4">
                       <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Proxy/VPN Blocking</span>
                          <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center px-1"><div className="w-3 h-3 bg-white rounded-full ml-auto"></div></div>
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Data Center Exclusion</span>
                          <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center px-1"><div className="w-3 h-3 bg-white rounded-full ml-auto"></div></div>
                       </div>
                    </div>
                 </div>
              </Card>
              <Card title="Fingerprint Matching">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                    Compare hardware identifiers and browser fingerprints across multiple publishers to detect "Click Farm" clusters.
                 </p>
                 <div className="mt-8 p-12 text-center border-2 border-dashed border-gray-800 rounded-2xl">
                    <Fingerprint size={32} className="mx-auto text-gray-800 mb-2"/>
                    <span className="text-[10px] font-black text-gray-700 uppercase">Cluster Analysis Idle</span>
                 </div>
              </Card>
           </div>
        )}

        {activeTab === 'blocking' && (
          <Card title="Platform Global Blacklist">
             <div className="flex gap-4 mb-8">
                <input type="text" className="flex-1 bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-500 font-mono" placeholder="Target IP or CIDR (e.g. 192.168.1.0/24)" />
                <button className="bg-red-600 px-10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-red-600/20 active:scale-95 transition-all">Ban Entry</button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="text-[10px] font-black text-gray-600 uppercase tracking-widest border-b border-gray-800">
                         <th className="pb-4">Target Node</th>
                         <th className="pb-4">Scope</th>
                         <th className="pb-4">Creator</th>
                         <th className="pb-4 text-right">Expiration</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-900">
                      {[1, 2].map(i => (
                        <tr key={i} className="group">
                           <td className="py-4 font-mono text-xs text-gray-300">45.122.10.{i*14}</td>
                           <td className="py-4 text-[10px] font-black text-gray-500 uppercase">Global</td>
                           <td className="py-4 text-xs font-bold text-gray-400">System Bot</td>
                           <td className="py-4 text-right">
                              <button className="text-[9px] font-black uppercase text-gray-600 hover:text-white transition-colors">Lift Ban</button>
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

export default FraudDetection;
