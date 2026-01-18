
import React, { useState, useEffect } from 'react';
import { Search, UserCog, UserPlus, Shield, Activity, Mail, MoreHorizontal, Check, ShieldAlert, Lock, UserCheck, Clock, Plus, DollarSign, RotateCw, Network, Monitor, Briefcase } from 'lucide-react';
import Card from './Shared/Card';

const MOCK_STAFF = [
  { id: 'EMP-01', name: 'John Doe', role: 'Super Admin', team: 'Management', status: 'online', assigned: '342 Accounts', lastActive: 'Now' },
  { id: 'EMP-02', name: 'Jane Smith', role: 'Account Manager', team: 'Affiliates', status: 'offline', assigned: '124 Affiliates', lastActive: '2h ago' },
  { id: 'EMP-03', name: 'Alex Kim', role: 'Sales Lead', team: 'Advertisers', status: 'away', assigned: '45 Advertisers', lastActive: '12m ago' },
  { id: 'EMP-04', name: 'Robert Chen', role: 'Compliance Officer', team: 'Risk', status: 'online', assigned: 'Global Infrastructure', lastActive: 'Now' },
];

interface EmployeesProps {
  initialTab?: string;
}

const Employees: React.FC<EmployeesProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'staff';
    const n = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (n === 'directory') return 'staff';
    if (n === 'audittrail') return 'activity';
    if (n === 'roles') return 'roles';
    return 'staff';
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
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Staff Infrastructure</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Managing internal user nodes and Role-Based Access Control (RBAC)."</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          <UserPlus size={18} /> Invite Staff Member
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'staff', label: 'Staff Directory', icon: <UserCog size={16}/> },
          { id: 'roles', label: 'Access Roles', icon: <Shield size={16}/> },
          { id: 'activity', label: 'Audit Logs', icon: <Activity size={16}/> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-xs font-black uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
              activeTab === tab.id ? 'border-blue-500 text-blue-400 bg-blue-500/5' : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {activeTab === 'staff' && (
          <Card>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input type="text" placeholder="Search by name, role, email..." className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-1 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <th className="pb-4">Team Member</th>
                    <th className="pb-4">Role / Department</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Portfolio</th>
                    <th className="pb-4">Last Sync</th>
                    <th className="pb-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {MOCK_STAFF.map(emp => (
                    <tr key={emp.id} className="hover:bg-gray-800/20 transition-colors group">
                      <td className="py-4 flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xs shadow-inner">
                           {emp.name.split(' ').map(n => n[0]).join('')}
                         </div>
                         <div>
                           <div className="font-black text-gray-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{emp.name}</div>
                           <div className="text-[10px] text-gray-600 font-mono tracking-tighter uppercase">{emp.id}</div>
                         </div>
                      </td>
                      <td className="py-4">
                        <div className="text-xs font-black text-gray-300 uppercase tracking-tight">{emp.role}</div>
                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{emp.team}</div>
                      </td>
                      <td className="py-4">
                         <div className="flex items-center gap-2">
                           <div className={`w-2 h-2 rounded-full shadow-[0_0_8px] ${
                             emp.status === 'online' ? 'bg-green-500 shadow-green-500/50' : emp.status === 'away' ? 'bg-yellow-500 shadow-yellow-500/50' : 'bg-gray-600'
                           }`}></div>
                           <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{emp.status}</span>
                         </div>
                      </td>
                      <td className="py-4">
                         <span className="text-[10px] font-black text-indigo-400 bg-indigo-400/5 px-2 py-1 rounded border border-indigo-400/20 uppercase tracking-widest">{emp.assigned}</span>
                      </td>
                      <td className="py-4 text-[10px] font-mono text-gray-600 uppercase font-black">{emp.lastActive}</td>
                      <td className="py-4 text-right">
                         <button className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors shadow-sm"><MoreHorizontal size={14}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'roles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* SUPER ADMIN ROLE */}
             <Card title="Super Administrator" headerAction={<Shield size={18} className="text-red-500" />} className="border-t-2 border-red-500">
                 <p className="text-[11px] font-bold text-gray-500 mb-8 uppercase tracking-widest leading-relaxed italic">"Root access. Can manage Tenants, Billing, and Infrastructure."</p>
                 <div className="space-y-4 mb-8">
                    {[
                      { p: 'Tenant Control Plane', has: true, icon: <Network size={12}/> },
                      { p: 'Settlements & Billing', has: true, icon: <DollarSign size={12}/> },
                      { p: 'Global Analytics Hub', has: true, icon: <Activity size={12}/> },
                      { p: 'Infrastructure Root', has: true, icon: <Monitor size={12}/> },
                    ].map(perm => (
                      <div key={perm.p} className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-gray-300 flex items-center gap-2">{perm.icon} {perm.p}</span>
                        <Check size={14} className="text-blue-500" />
                      </div>
                    ))}
                 </div>
                 <button className="w-full py-3 bg-gray-900 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Assign Permissions</button>
             </Card>

             {/* ACCOUNT MANAGER ROLE */}
             <Card title="Account Manager" headerAction={<Shield size={18} className="text-blue-400" />} className="border-t-2 border-blue-400">
                 <p className="text-[11px] font-bold text-gray-500 mb-8 uppercase tracking-widest leading-relaxed italic">"Restricted to partner relationship management."</p>
                 <div className="space-y-4 mb-8">
                    {[
                      { p: 'Tenant Control Plane', has: false, icon: <Network size={12}/> },
                      { p: 'Affiliate Approvals', has: true, icon: <UserCheck size={12}/> },
                      { p: 'Offer Marketplace', has: true, icon: <Briefcase size={12}/> },
                      { p: 'Global Billing', has: false, icon: <DollarSign size={12}/> },
                    ].map(perm => (
                      <div key={perm.p} className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className={`flex items-center gap-2 ${perm.has ? 'text-gray-300' : 'text-gray-700 italic'}`}>{perm.icon} {perm.p}</span>
                        {perm.has ? <Check size={14} className="text-blue-500" /> : <Lock size={14} className="text-gray-900" />}
                      </div>
                    ))}
                 </div>
                 <button className="w-full py-3 bg-gray-900 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Assign Permissions</button>
             </Card>

             <button className="border-2 border-dashed border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center text-gray-600 hover:text-gray-400 hover:border-blue-500/50 transition-all bg-gray-900/20 group">
                <Plus size={32} className="mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Custom Policy Builder</span>
             </button>
          </div>
        )}

        {activeTab === 'activity' && (
          <Card title="Master Node Audit History">
             <div className="space-y-1">
                {[
                  { user: 'John Doe', action: 'Created Instance Node', detail: 'TEN-004: Alpha Marketing', time: '10m ago', icon: <Plus size={14} className="text-green-400"/> },
                  { user: 'Security Bot', action: 'Fraud Alert Block', detail: 'IP: 45.12.1.2 blocked (DDoS Pattern)', time: '2h ago', icon: <ShieldAlert size={14} className="text-red-400"/> },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-gray-900/40 hover:bg-gray-800/40 rounded-xl transition-colors border-b border-gray-800/50 last:border-none">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700 shadow-inner">
                          {log.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-black text-gray-200 uppercase tracking-tight">{log.user}</span>
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">— {log.action}</span>
                          </div>
                          <p className="text-[10px] text-gray-500 font-mono uppercase tracking-tighter mt-1 italic">{log.detail}</p>
                        </div>
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-gray-700">{log.time}</span>
                  </div>
                ))}
             </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Employees;
