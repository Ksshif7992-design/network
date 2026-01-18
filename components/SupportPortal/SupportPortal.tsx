
import React from 'react';
import { PageId } from '../../types';
import Card from '../Shared/Card';
import { MessageSquare, LifeBuoy, AlertTriangle, ShieldCheck, Zap, ExternalLink, Activity, Network } from 'lucide-react';

const SupportPortal: React.FC<{ activePage: PageId, activeSubPage?: string }> = ({ activePage }) => {
  if (activePage === 'dashboard') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
           <div>
              <h1 className="text-2xl font-black uppercase tracking-tight">Support Incident Command</h1>
              <p className="text-sm text-gray-500 font-medium">"Guiding the platform and resolving partner friction."</p>
           </div>
           <div className="flex gap-2">
              <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl text-green-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                 <ShieldCheck size={14}/> SYSTEM STABLE
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <Card title="OPEN TICKETS" className="lg:col-span-2" headerAction={<span className="bg-rose-500 text-white px-2 py-0.5 rounded text-[9px] font-black uppercase">8 Urgent</span>}>
              <div className="space-y-3">
                 {[
                   { id: 'TKT-991', user: 'Elite Performance', issue: 'Postback Mismatch', priority: 'High', time: '12m ago' },
                   { id: 'TKT-988', user: 'Growth Media', issue: 'API Authentication Failure', priority: 'Medium', time: '2h ago' },
                   { id: 'TKT-985', user: 'CyberShield Global', issue: 'Budget Top-up Delay', priority: 'High', time: '5h ago' },
                 ].map(t => (
                    <div key={t.id} className="p-4 bg-gray-950 border border-gray-800 rounded-xl flex items-center justify-between hover:border-rose-500/30 transition-all cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${t.priority === 'High' ? 'bg-rose-500/10 text-rose-500' : 'bg-gray-800 text-gray-500'}`}><MessageSquare size={18}/></div>
                          <div>
                             <p className="text-xs font-black text-gray-200 uppercase tracking-tight">{t.issue}</p>
                             <p className="text-[10px] text-gray-600 font-black uppercase">{t.user} • {t.id}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <span className="text-[10px] font-black text-gray-400 uppercase font-mono">{t.time}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </Card>

           <div className="space-y-6">
              <Card title="ADMIN GUIDANCE SYSTEM" className="bg-rose-600/5 border-rose-500/20">
                 <div className="flex flex-col items-center text-center p-4">
                    <LifeBuoy size={40} className="text-rose-500 mb-4 animate-bounce-slow" />
                    <h4 className="text-sm font-black text-gray-100 uppercase tracking-tight mb-2">Master Admin Tips</h4>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tight leading-relaxed italic mb-6">
                       "Did you know? You can increase throughput by batching advertiser postbacks in the Automation Core."
                    </p>
                    <button className="w-full py-3 bg-rose-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-rose-600/20 active:scale-95 transition-all">
                       Read Guidance Manual
                    </button>
                 </div>
              </Card>
              
              <Card title="QUICK INFRA MONITOR">
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-500 tracking-widest">
                       <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Main Redirector</span>
                       <span className="text-green-500">1.2ms</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-500 tracking-widest">
                       <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Click Log Queue</span>
                       <span className="text-gray-400">0 PENDING</span>
                    </div>
                 </div>
              </Card>
           </div>
        </div>
      </div>
    );
  }
  return <div className="p-12 text-center text-gray-600 font-black uppercase tracking-widest italic">{activePage} Content Loading...</div>;
};

export default SupportPortal;
