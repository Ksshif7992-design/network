
import React, { useState } from 'react';
import { List, Search, ShieldAlert, MousePointer2, Filter, Download, Globe, Smartphone, Monitor, Clock, MoreHorizontal } from 'lucide-react';
import Card from './Shared/Card';

const Conversions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('clicks');

  const mockClicks = [
    { id: 'CLK-882101', offer: 'VPN Master Pro', aff: 'Elite Media', ip: '192.168.1.42', geo: 'US', device: 'iPhone 15', os: 'iOS 17.4', time: 'Just now' },
    { id: 'CLK-882102', offer: 'Crypto Wallet', aff: 'Social Pulse', ip: '45.122.10.12', geo: 'DE', device: 'Samsung S24', os: 'Android 14', time: '12s ago' },
    { id: 'CLK-882103', offer: 'VPN Master Pro', aff: 'Elite Media', ip: '104.18.2.1', geo: 'UK', device: 'MacBook Pro', os: 'macOS 14.2', time: '45s ago' },
    { id: 'CLK-882104', offer: 'Nutra Gains', aff: 'Growth Media', ip: '172.67.1.99', geo: 'CA', device: 'Windows PC', os: 'Windows 11', time: '1m ago' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Live Traffic Ledger</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Real-time event stream and click-through analytics across the network."</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-gray-800 border border-gray-700 p-2.5 rounded-xl text-gray-400 hover:text-white transition-all">
              <Download size={18}/>
           </button>
           <button className="bg-blue-600 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
              Export Filtered Logs
           </button>
        </div>
      </div>
      
      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'clicks', label: 'All Clicks', icon: <MousePointer2 size={16}/> },
          { id: 'conversions', label: 'Conversions Only', icon: <List size={16}/> },
          { id: 'fraud', label: 'Threat Blocks', icon: <ShieldAlert size={16}/> },
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

      <div className="space-y-4">
        {activeTab === 'clicks' && (
          <Card noPadding>
            <div className="p-4 border-b border-gray-800 flex flex-col md:flex-row gap-4 bg-gray-900/50">
               <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  <input type="text" placeholder="Global search click ID, IP, or partner ID..." className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-10 pr-4 py-2 text-xs outline-none focus:ring-1 focus:ring-blue-500" />
               </div>
               <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <Filter size={14}/> Node Filter
               </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-black text-gray-600 uppercase tracking-widest border-b border-gray-800 bg-gray-800/20">
                    <th className="p-4">Event ID / Time</th>
                    <th className="p-4">Target Offer</th>
                    <th className="p-4">Source Partner</th>
                    <th className="p-4">Network IP</th>
                    <th className="p-4">Environment</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900">
                  {mockClicks.map(click => (
                    <tr key={click.id} className="hover:bg-gray-800/30 group transition-colors">
                      <td className="p-4">
                        <div className="font-mono text-[10px] text-blue-400 font-black">{click.id}</div>
                        <div className="text-[9px] text-gray-600 uppercase font-black flex items-center gap-1 mt-1"><Clock size={8}/> {click.time}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-[11px] font-black text-gray-200 uppercase tracking-tight">{click.offer}</div>
                        <div className="text-[9px] text-gray-600 font-bold uppercase tracking-widest italic">Node 101</div>
                      </td>
                      <td className="p-4 text-[11px] font-black text-gray-400 uppercase tracking-widest">{click.aff}</td>
                      <td className="p-4">
                        <div className="font-mono text-[10px] text-gray-300">{click.ip}</div>
                        <div className="text-[9px] text-blue-500 font-black uppercase tracking-widest flex items-center gap-1 mt-1"><Globe size={10}/> {click.geo}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-gray-400">
                           {click.device.includes('iPhone') || click.device.includes('Samsung') ? <Smartphone size={14}/> : <Monitor size={14}/>}
                           <span className="text-[9px] font-black uppercase tracking-widest">{click.os}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                         <button className="p-2 text-gray-700 hover:text-white transition-colors"><MoreHorizontal size={16}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'conversions' && (
          <Card noPadding>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-black text-gray-600 uppercase tracking-widest border-b border-gray-800 bg-gray-800/20">
                    <th className="p-4">Transaction ID</th>
                    <th className="p-4">Offer Name</th>
                    <th className="p-4">Partner Payout</th>
                    <th className="p-4">Adv Revenue</th>
                    <th className="p-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900">
                  {[1, 2, 3].map(i => (
                    <tr key={i} className="hover:bg-gray-800/30 group transition-colors">
                      <td className="p-4 font-mono text-[10px] text-green-500 font-black">TXN_22090{i}</td>
                      <td className="p-4 text-[11px] font-black text-gray-200 uppercase tracking-tight">VPN Master Pro</td>
                      <td className="p-4 text-sm font-black text-blue-400 font-mono">$15.00</td>
                      <td className="p-4 text-sm font-black text-gray-500 font-mono">$22.00</td>
                      <td className="p-4 text-right text-[10px] text-gray-600 font-black uppercase tracking-widest">FINALIZED</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'fraud' && (
           <div className="p-12 text-center text-gray-500 italic uppercase font-black text-[10px] tracking-widest border border-gray-800 border-dashed rounded-2xl">
              Advanced Traffic Verification Node Active. Scanning 100% of global signals.
           </div>
        )}
      </div>
    </div>
  );
};

export default Conversions;
