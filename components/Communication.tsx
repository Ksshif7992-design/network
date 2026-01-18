
import React, { useState, useEffect } from 'react';
import { MessageSquare, Bell, Mail, Send, Plus, Search, Filter, User, Clock, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';
import Card from './Shared/Card';

interface CommunicationProps {
  initialTab?: string;
}

const Communication: React.FC<CommunicationProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'announcements';
    const n = tab.toLowerCase().replace(/\s/g, '');
    if (n === 'announcements') return 'announcements';
    if (n === 'supporttickets') return 'tickets';
    if (n === 'emailcenter') return 'email';
    return 'announcements';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
    }
  }, [initialTab]);

  const announcements = [
    { id: 1, title: 'New Offer: VPN Master Pro WW', date: '2h ago', author: 'Marketing Team', target: 'All Affiliates', priority: 'High' },
    { id: 2, title: 'Network Maintenance - Scheduled Downtime', date: '5h ago', author: 'Systems', target: 'All Users', priority: 'Critical' },
    { id: 3, title: 'Update to Payout Tiers for Finance Vertical', date: 'Yesterday', author: 'Finance', target: 'Tier 1 & 2', priority: 'Medium' },
  ];

  const tickets = [
    { id: 'TKT-1042', subject: 'Postback not firing for OFF-101', user: 'Elite Performance', status: 'open', lastUpdate: '10m ago', priority: 'High' },
    { id: 'TKT-1041', subject: 'Invoice Question - May 2024', user: 'Social Pulse', status: 'in-progress', lastUpdate: '2h ago', priority: 'Low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Partner Relay</h1>
          <p className="text-sm text-gray-500 font-medium">Broadcast news, manage support requests, and engage your partners.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          <Plus size={18} /> New Broadcaster
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'announcements', label: 'Announcements', icon: <Bell size={16}/> },
          { id: 'tickets', label: 'Support Tickets', icon: <MessageSquare size={16}/> },
          { id: 'email', label: 'Email Center', icon: <Mail size={16}/> },
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
        {activeTab === 'announcements' && (
          <div className="space-y-4">
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input type="text" placeholder="Filter announcements..." className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
            </div>
            {announcements.map(ann => (
              <Card key={ann.id} className="hover:border-blue-500/30 transition-all group border-transparent">
                <div className="flex items-start justify-between">
                  <div className="flex gap-5">
                    <div className={`p-3 rounded-xl border ${ann.priority === 'Critical' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}`}>
                      <Bell size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{ann.title}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                        To: <span className="text-gray-400">{ann.target}</span> • Dept: {ann.author} • {ann.date}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                    ann.priority === 'Critical' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-400'
                  }`}>{ann.priority}</span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'tickets' && (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <th className="pb-4">Ticket Identifier</th>
                    <th className="pb-4">Partner Node</th>
                    <th className="pb-4">Severity</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4 text-right">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {tickets.map(tkt => (
                    <tr key={tkt.id} className="hover:bg-gray-800/30 transition-colors group">
                      <td className="py-5 font-bold text-gray-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{tkt.subject}</td>
                      <td className="py-5 text-xs text-blue-400 font-bold uppercase tracking-widest">{tkt.user}</td>
                      <td className="py-5"><span className="text-[10px] font-black uppercase tracking-widest text-red-500">{tkt.priority}</span></td>
                      <td className="py-5">
                        <span className={`text-[10px] font-black uppercase tracking-widest border px-2 py-0.5 rounded ${tkt.status === 'open' ? 'text-blue-500 border-blue-500/20 bg-blue-500/5' : 'text-gray-500 border-gray-700'}`}>{tkt.status}</span>
                      </td>
                      <td className="py-5 text-right"><ChevronRight size={16} className="ml-auto text-gray-700 group-hover:text-blue-500 transition-all" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'email' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card title="Mass SMTP Broadcaster" className="lg:col-span-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Segment Targeting</label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500">
                    <option>All Active Affiliates</option>
                    <option>Top 100 Revenue Earners</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Subject</label>
                  <input type="text" placeholder="Network Update Summary..." className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Body Configuration (Markdown/HTML)</label>
                   <textarea rows={6} className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-sm outline-none font-mono text-blue-400" placeholder="Hello {{name}}, welcome to AffiliFlow..."></textarea>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl text-xs shadow-lg shadow-blue-600/20 active:scale-95 transition-all">Execute Send Broadcast</button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communication;
