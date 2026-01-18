
import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Bell, Webhook, Plus, Power, Settings, ShieldAlert, Activity } from 'lucide-react';
import Card from './Shared/Card';

interface AutomationProps {
  initialTab?: string;
}

const Automation: React.FC<AutomationProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'rules';
    const n = tab.toLowerCase().replace(/\s/g, '');
    if (n === 'smartrules') return 'rules';
    if (n === 'webhooks') return 'webhooks';
    if (n === 'alerts') return 'alerts';
    return 'rules';
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
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Automation Core</h1>
          <p className="text-sm text-gray-500 font-medium">Automate caps, approval workflows, and anomaly detection.</p>
        </div>
        <button className="bg-blue-600 px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          <Plus size={16} className="inline mr-2"/> New Logic Rule
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'rules', label: 'Smart Rules', icon: <Cpu size={16}/> },
          { id: 'webhooks', label: 'Webhooks', icon: <Webhook size={16}/> },
          { id: 'alerts', label: 'Alert Center', icon: <Bell size={16}/> },
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
        {activeTab === 'rules' && (
          <div className="space-y-4">
             {[
               { name: 'Auto-Pause VPN Master', trigger: 'Caps hit 100%', action: 'Redirect traffic to Offer #201', active: true, icon: <ShieldAlert size={18} className="text-yellow-500"/> },
               { name: 'Fraud Threshold Blocking', trigger: 'Risk score > 90', action: 'Blacklist IP & Alert Manager', active: true, icon: <Zap size={18} className="text-red-500"/> },
             ].map((rule, i) => (
               <Card key={i} className="p-0 border-transparent">
                  <div className="p-6 flex items-center justify-between bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all">
                     <div className="flex items-center gap-5">
                        <div className="p-3 bg-gray-800 rounded-xl border border-gray-700 shadow-inner">{rule.icon}</div>
                        <div>
                           <h4 className="font-black text-gray-100 uppercase tracking-tight">{rule.name}</h4>
                           <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1"><span className="text-blue-500">IF</span> {rule.trigger} <span className="text-blue-500 ml-2">THEN</span> {rule.action}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${rule.active ? 'text-green-500' : 'text-gray-600'}`}>
                           <Power size={12}/> {rule.active ? 'Active' : 'Offline'}
                        </div>
                        <button className="p-2 bg-gray-800 border border-gray-700 rounded-xl text-gray-500 hover:text-white transition-colors"><Settings size={14}/></button>
                     </div>
                  </div>
               </Card>
             ))}
          </div>
        )}

        {activeTab === 'webhooks' && (
          <Card title="External Event Listeners">
             <div className="p-12 text-center">
                <div className="p-4 bg-gray-900 border border-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-500"><Webhook size={32}/></div>
                <h3 className="text-lg font-black text-gray-100 uppercase tracking-tight">No Active Webhooks</h3>
                <p className="text-xs text-gray-500 mt-2 font-medium">Trigger real-time events in your CRM or external analytics when conversions fire.</p>
             </div>
          </Card>
        )}

        {activeTab === 'alerts' && (
          <Card title="Anomaly Detection Feed" headerAction={<div className="flex items-center gap-2 text-[10px] text-gray-600 font-black uppercase tracking-widest"><Activity size={14}/> Live Sync</div>}>
             <div className="space-y-4">
                {[
                  { event: 'Sudden EPC Drop', detail: 'Offer #101 down by 45% in last hour', time: '5m ago', type: 'critical' },
                  { event: 'Click Spike Detected', detail: 'AFF-002 showing 10k clicks/min', time: '12m ago', type: 'warning' },
                ].map((alert, i) => (
                  <div key={i} className={`p-5 rounded-2xl border flex justify-between items-center ${
                    alert.type === 'critical' ? 'bg-red-500/5 border-red-500/20' : 'bg-yellow-500/5 border-yellow-500/20'
                  }`}>
                     <div>
                        <h5 className="text-sm font-black text-gray-100 uppercase tracking-tight">{alert.event}</h5>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 italic">{alert.detail}</p>
                     </div>
                     <span className="text-[10px] font-mono text-gray-700 font-black">{alert.time}</span>
                  </div>
                ))}
             </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Automation;
