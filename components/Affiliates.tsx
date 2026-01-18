
import React, { useState, useEffect } from 'react';
import {
  Search,
  UserPlus,
  ClipboardList,
  Users,
  Share2,
  Trophy,
  CreditCard,
  MoreVertical,
  CheckSquare,
  Square,
  Package,
  Mail,
  UserCheck,
  X,
  Globe,
  LogIn,
  Edit2,
  History,
  ShieldAlert,
  ArrowUpRight,
  TrendingUp,
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  ShieldCheck,
  Zap,
  Star,
  Building2,
  Lock,
  User,
  Plus
} from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_AFFILIATES } from '../constants';

interface AffiliatesProps {
  initialTab?: string;
}

const Affiliates: React.FC<AffiliatesProps> = ({ initialTab }) => {
  const getTabFromSubpage = (subpage?: string) => {
    if (!subpage) return 'manage';
    const normalized = subpage.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalized === 'directory') return 'manage';
    if (normalized === 'approvals') return 'onboarding';
    if (normalized === 'referralprogram') return 'referral';
    if (normalized === 'tiers') return 'tiers';
    if (normalized === 'payouts') return 'payouts';
    return 'manage';
  };

  const [activeTab, setActiveTab] = useState(getTabFromSubpage(initialTab));
  const [selectedAffs, setSelectedAffs] = useState<string[]>([]);
  const [activeActionMenu, setActiveActionMenu] = useState<string | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(getTabFromSubpage(initialTab));
    }
  }, [initialTab]);

  const toggleSelect = (id: string) => {
    setSelectedAffs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleSelectAll = () => {
    if (selectedAffs.length === MOCK_AFFILIATES.length) setSelectedAffs([]);
    else setSelectedAffs(MOCK_AFFILIATES.map(a => a.id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Partner CRM</h1>
          <p className="text-sm text-gray-500 font-medium italic">"Managing {MOCK_AFFILIATES.length} enterprise publisher nodes."</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowMapModal(true)}
            className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2 hover:border-gray-600 transition-all"
          >
            <Globe size={14} /> Advanced Map
          </button>
          <button
            onClick={() => setShowInviteModal(true)}
            className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2 hover:border-gray-600 transition-all"
          >
            <Mail size={14} /> Invite Partner
          </button>
          <button
            onClick={() => setShowInviteModal(true)}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <UserPlus size={18} /> Create Affiliate Account
          </button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'manage', label: 'Directory', icon: <Users size={16} /> },
          { id: 'onboarding', label: 'Approvals', icon: <ClipboardList size={16} /> },
          { id: 'referral', label: 'Referral Program', icon: <Share2 size={16} /> },
          { id: 'tiers', label: 'Tiers', icon: <Trophy size={16} /> },
          { id: 'payouts', label: 'Payouts', icon: <CreditCard size={16} /> },
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
        {activeTab === 'manage' && (
          <div className="space-y-4">
            <Card>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input type="text" placeholder="Search partners..." className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="overflow-x-auto mt-6 overflow-visible">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700 bg-gray-800/30 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      <th className="p-4 w-10">
                        <button onClick={toggleSelectAll} className="text-gray-500 hover:text-blue-500 transition-colors" title="Select all partners">
                          {selectedAffs.length === MOCK_AFFILIATES.length ? <CheckSquare size={16} /> : <Square size={16} />}
                        </button>
                      </th>
                      <th className="p-4">Partner Entity</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Tier</th>
                      <th className="p-4">Revenue MTD</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {MOCK_AFFILIATES.map(aff => (
                      <tr key={aff.id} className={`hover:bg-gray-800/30 transition-colors group ${selectedAffs.includes(aff.id) ? 'bg-blue-600/5' : ''}`}>
                        <td className="p-4">
                          <button onClick={() => toggleSelect(aff.id)} className={`${selectedAffs.includes(aff.id) ? 'text-blue-500' : 'text-gray-700 group-hover:text-gray-500'}`} title={`Select ${aff.name}`}>
                            {selectedAffs.includes(aff.id) ? <CheckSquare size={16} /> : <Square size={16} />}
                          </button>
                        </td>
                        <td className="p-4">
                          <div className="font-black text-gray-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{aff.name}</div>
                          <div className="text-[9px] text-gray-600 font-mono tracking-tighter uppercase">ID: {aff.id}</div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border ${aff.status === 'active' ? 'text-green-500 border-green-500/20' : 'text-yellow-500 border-yellow-500/20'
                            }`}>{aff.status}</span>
                        </td>
                        <td className="p-4 font-black text-xs text-gray-400">{aff.tier}</td>
                        <td className="p-4 text-sm font-black text-blue-400 font-mono">{aff.revenue}</td>
                        <td className="p-4 text-right relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveActionMenu(activeActionMenu === aff.id ? null : aff.id);
                            }}
                            className={`p-2 rounded-lg transition-colors ${activeActionMenu === aff.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-700'}`}
                            title="More actions"
                          >
                            <MoreVertical size={16} />
                          </button>

                          {activeActionMenu === aff.id && (
                            <>
                              <div className="fixed inset-0 z-[290]" onClick={() => setActiveActionMenu(null)}></div>
                              <div className="absolute right-0 top-full mt-2 w-56 bg-gray-950 border border-gray-700 rounded-xl shadow-2xl z-[300] overflow-hidden border-t-2 border-t-blue-500 text-left">
                                <div className="p-2 space-y-1">
                                  <button className="w-full flex items-center gap-3 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-400 hover:bg-blue-400/5 rounded-lg transition-all">
                                    <LogIn size={14} /> Login As Affiliate
                                  </button>
                                  <button className="w-full flex items-center gap-3 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-400 hover:bg-blue-400/5 rounded-lg transition-all">
                                    <Edit2 size={14} /> Edit Profile
                                  </button>
                                  <button className="w-full flex items-center gap-3 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-400 hover:bg-blue-400/5 rounded-lg transition-all">
                                    <History size={14} /> Activity Logs
                                  </button>
                                  <div className="h-[1px] bg-gray-800 my-1 mx-2"></div>
                                  <button className="w-full flex items-center gap-3 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                                    <ShieldAlert size={14} /> Suspend Access
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {selectedAffs.length > 0 && (
              <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-950 border border-blue-500/50 shadow-2xl rounded-2xl p-4 flex items-center gap-6 animate-in slide-in-from-bottom-10 z-[200]">
                <div className="flex items-center gap-2 border-r border-gray-800 pr-6 mr-2">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black">{selectedAffs.length}</span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-nowrap">Selected</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-300 hover:border-gray-500 transition-all">
                    <Mail size={14} /> Mass Email
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-300 hover:border-gray-500 transition-all">
                    <Package size={14} /> Tier
                  </button>
                </div>
                <button onClick={() => setSelectedAffs([])} className="p-2 text-gray-500 hover:text-white" title="Clear selection"><X size={16} /></button>
              </div>
            )}
          </div>
        )}

        {/* --- Approvals Tab --- */}
        {activeTab === 'onboarding' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-black text-gray-100 uppercase tracking-widest">Pending Applications</h2>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">3 Reviews Required</span>
            </div>
            <div className="space-y-4">
              {[
                { id: 'APP-99', name: 'Z-Alpha Media', website: 'zalphamedia.net', category: 'Finance', date: '2h ago', risk: 'Low' },
                { id: 'APP-98', name: 'Nutra Gains Group', website: 'nutragains.io', category: 'Health', date: '5h ago', risk: 'High' },
                { id: 'APP-97', name: 'Social Wave Agencies', website: 'socialwave.agency', category: 'E-commerce', date: 'Yesterday', risk: 'Medium' },
              ].map(app => (
                <Card key={app.id} className="hover:border-blue-500/20 transition-all border-transparent bg-gray-900/40" noPadding>
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="p-3 bg-gray-800 rounded-xl text-gray-500 border border-gray-700 shadow-inner">
                        <ClipboardList size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-100 uppercase tracking-tight">{app.name}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest flex items-center gap-1"><Globe size={10} /> {app.website}</span>
                          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">{app.category} • Applied {app.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[9px] font-black text-gray-600 uppercase mb-1">Risk Profile</p>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${app.risk === 'Low' ? 'text-green-500' : app.risk === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>{app.risk} RISK</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-500 hover:text-red-500 transition-colors shadow-sm" title="Reject application"><XCircle size={18} /></button>
                        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:bg-blue-500 active:scale-95 transition-all">Review & Approve</button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* --- Referral Program Tab --- */}
        {activeTab === 'referral' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border-blue-500/20">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">Total Referral Earnings</p>
                <h3 className="text-3xl font-black text-white font-mono">$12,840.00</h3>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-green-500">
                  <TrendingUp size={12} /> +12% this month
                </div>
              </Card>
              <Card>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Referred Conversion Flow</p>
                <h3 className="text-3xl font-black text-white font-mono">4,820</h3>
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-2">Across 12 referred partners</p>
              </Card>
              <Card>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Global Referral Fee</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-black text-blue-500 font-mono">5.00%</h3>
                  <span className="text-[10px] font-black text-gray-600 uppercase">of Payout</span>
                </div>
                <button className="mt-6 text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-1 hover:underline">Customize Rules <ArrowUpRight size={12} /></button>
              </Card>
            </div>

            <Card title="Partner Referral Performance">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-800 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      <th className="pb-4">Referrer Node</th>
                      <th className="pb-4 text-center">Referrals</th>
                      <th className="pb-4 text-center">Referral Revenue</th>
                      <th className="pb-4 text-right">Last Conversion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {MOCK_AFFILIATES.map(aff => (
                      <tr key={aff.id} className="hover:bg-gray-800/20 transition-colors group">
                        <td className="py-4">
                          <div className="font-black text-gray-200 uppercase tracking-tight group-hover:text-blue-400">{aff.name}</div>
                          <div className="text-[9px] text-gray-600 font-mono uppercase tracking-tighter">ID: {aff.id}</div>
                        </td>
                        <td className="py-4 text-center font-black text-gray-400">8</td>
                        <td className="py-4 text-center font-black text-green-500 font-mono">$1,240.50</td>
                        <td className="py-4 text-right text-[10px] text-gray-600 font-mono uppercase font-black">2h ago</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {/* --- Tiers Tab --- */}
        {activeTab === 'tiers' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Platinum', icon: <Star className="text-blue-400" size={24} />, partners: 12, threshold: '$50,000+', color: 'border-blue-500' },
              { name: 'Gold', icon: <Star className="text-yellow-500" size={24} />, partners: 45, threshold: '$10,000+', color: 'border-yellow-500' },
              { name: 'Silver', icon: <Users className="text-gray-500" size={24} />, partners: 285, threshold: '$0+', color: 'border-gray-500' },
            ].map(tier => (
              <Card key={tier.name} className={`border-t-4 ${tier.color}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-900 rounded-xl border border-gray-700 shadow-inner">{tier.icon}</div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Partners</p>
                    <p className="text-2xl font-black text-white">{tier.partners}</p>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-100 uppercase tracking-tight">{tier.name} Layer</h3>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Threshold: {tier.threshold} / Month</p>
                <button className="w-full mt-8 py-3 bg-gray-900 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all">Configure Rule Set</button>
              </Card>
            ))}
          </div>
        )}

        {/* --- Payouts Tab --- */}
        {activeTab === 'payouts' && (
          <div className="space-y-6">
            <Card title="Partner Payout Ledger">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-800 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      <th className="pb-4">Affiliate</th>
                      <th className="pb-4">Billing Cycle</th>
                      <th className="pb-4">Gateway</th>
                      <th className="pb-4">Current Payout</th>
                      <th className="pb-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {MOCK_AFFILIATES.map(aff => (
                      <tr key={aff.id} className="hover:bg-gray-800/30 transition-colors group">
                        <td className="py-5 font-black text-gray-100 uppercase tracking-tight group-hover:text-blue-400">{aff.name}</td>
                        <td className="py-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">{aff.billingSchedule}</td>
                        <td className="py-5">
                          <div className="flex items-center gap-2">
                            <CreditCard size={14} className="text-gray-500" />
                            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Payoneer</span>
                          </div>
                        </td>
                        <td className="py-5 text-sm font-black text-blue-400 font-mono">{aff.payout}</td>
                        <td className="py-5 text-right">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border ${aff.status === 'active' ? 'text-green-500 bg-green-500/10 border-green-500/20' : 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'
                            }`}>
                            {aff.status === 'active' ? 'Settled' : 'In Review'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Upcoming Settlements" headerAction={<Clock size={14} className="text-gray-600" />}>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-black text-gray-200 uppercase tracking-tight">Weekly Cycle (Friday)</p>
                      <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mt-1">24 Partners Scheduled</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-blue-400 font-mono">$42,104.20</p>
                      <span className="text-[8px] font-black text-gray-700 uppercase">Estimated</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card title="Accounting Governance">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Auto-Invoicing</span>
                    <span className="text-[10px] font-black text-green-500 uppercase bg-green-500/10 px-2 rounded">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Minimum Threshold</span>
                    <span className="text-[10px] font-black text-gray-300">$100.00</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 bg-gray-900 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all">Update Billing Rules</button>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* --- MODALS --- */}

      {/* Affiliate Creation Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[500] flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl border-t-4 border-blue-600 shadow-2xl bg-gray-900" noPadding>
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg"><UserPlus size={20} /></div>
                <h3 className="text-sm font-black text-gray-100 uppercase tracking-widest">Create Affiliate Account</h3>
              </div>
              <button onClick={() => setShowInviteModal(false)} className="p-2 text-gray-500 hover:text-white transition-colors" title="Close modal"><X size={20} /></button>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Building2 size={12} /> Company Name
                  </label>
                  <input type="text" placeholder="e.g. Acme Performance" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <User size={12} /> Contact Name
                  </label>
                  <input type="text" placeholder="Full legal name" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} /> Email Address
                  </label>
                  <input type="email" placeholder="partner@domain.com" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Lock size={12} /> Initial Password
                  </label>
                  <div className="relative">
                    <input type="password" placeholder="••••••••" className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none font-medium" />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black text-blue-500 uppercase tracking-widest hover:text-blue-400">Generate</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-800/50">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Account Manager</label>
                  <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500 font-bold" title="Account Manager">
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                    <option>Alex Kim</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Initial Tier</label>
                  <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500 font-bold" title="Initial Tier">
                    <option>Silver (Baseline)</option>
                    <option>Gold (Premium)</option>
                    <option>Platinum (Exclusive)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Billing Schedule</label>
                  <select className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-blue-500 font-bold" title="Billing Schedule">
                    <option>Weekly (Net-7)</option>
                    <option>Bi-Weekly (Net-15)</option>
                    <option>Monthly (Net-30)</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button onClick={() => setShowInviteModal(false)} className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 text-gray-400 font-black uppercase text-[11px] tracking-widest rounded-xl transition-all">Cancel</button>
                <button onClick={() => setShowInviteModal(false)} className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[11px] tracking-widest rounded-xl shadow-xl shadow-blue-600/20 active:scale-95 transition-all">Provision Affiliate</button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[500] flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl border-transparent shadow-2xl bg-gray-900" noPadding>
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h3 className="text-sm font-black text-gray-100 uppercase tracking-tight">Geospatial Distribution</h3>
              <button onClick={() => setShowMapModal(false)} className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-lg" title="Close modal"><X size={18} /></button>
            </div>
            <div className="p-10 flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-full max-w-2xl aspect-[2/1] bg-gray-950 rounded-3xl border border-gray-800 overflow-hidden flex items-center justify-center group">
                <Globe size={80} className="text-blue-600/20 mb-4 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest border border-blue-500/20 px-4 py-2 rounded-full bg-blue-500/5">Scanning Density...</p>
                </div>
                <div className="absolute top-[20%] left-[25%] w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-50"></div>
                <div className="absolute top-[35%] right-[20%] w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-30"></div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Affiliates;
