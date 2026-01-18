
import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import {
  Plus,
  TrendingUp,
  Users,
  Activity,
  ChevronDown,
  RotateCw,
  Target,
  MousePointer2,
  ShieldAlert,
  FileCheck,
  Zap,
  Star,
  Trophy,
  Smartphone,
  Briefcase,
  UserCheck,
  Monitor,
  Globe,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import Card from './Shared/Card';
import { MOCK_STATS, MOCK_CHART_DATA, MOCK_CHANNEL_DATA, MOCK_OFFERS, MOCK_AFFILIATES, MOCK_ADVERTISERS, MOCK_MANAGERS } from '../constants';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Today');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-100 tracking-tight flex items-center gap-2 uppercase">
            Network Intelligence <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-md uppercase tracking-widest font-black">Live Hub</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium italic">"Real-time monitoring for Master Admin Node."</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleRefresh} className={`p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white transition-all ${isRefreshing ? 'animate-spin' : ''}`} title="Refresh dashboard">
            <RotateCw size={18} />
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-black shadow-lg shadow-blue-600/20 transition-all active:scale-95 uppercase tracking-widest">
            <Plus size={16} /> Add Entity
          </button>
        </div>
      </div>

      {/* TOP STATS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {MOCK_STATS.map((stat, i) => (
          <div key={i} className="bg-gray-800 border border-gray-700 p-4 rounded-xl hover:border-blue-500/30 transition-all group relative overflow-hidden min-w-0">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</span>
              <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[9px] font-black">
                <TrendingUp size={10} /> {stat.change}%
              </div>
            </div>
            <p className="text-xl font-black text-gray-100 group-hover:text-blue-400 transition-colors font-mono">{stat.value}</p>
            <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600/20 w-full group-hover:bg-blue-600/50 transition-all"></div>
          </div>
        ))}
      </div>

      {/* PERFORMANCE HUD ROW (RING, CLICKS, EPC, PARTNERS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* RESTORED: NETWORK PERFORMANCE RING */}
        <Card title="NETWORK PERFORMANCE" noPadding className="border-t-2 border-t-blue-500 bg-[#161d2a]">
          <div className="flex flex-col items-center justify-center p-6 min-h-[260px]">
            <div className="relative w-32 h-32 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full border-10 border-gray-950 shadow-inner"></div>
              <div className="absolute inset-0 rounded-full border-10 border-blue-600/20 border-t-blue-500 border-l-blue-500 rotate-35"></div>
              <div className="text-center z-10">
                <p className="text-xl font-black text-white">$1.25M</p>
                <p className="text-[7px] font-bold text-gray-500 uppercase tracking-widest">Revenue</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full border-t border-gray-800 pt-4">
              <div className="text-center border-r border-gray-800">
                <p className="text-xs font-black text-green-500 uppercase">150k</p>
                <p className="text-[7px] font-bold text-gray-600 uppercase tracking-tighter">Conversions</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-black text-indigo-400 uppercase">25.0%</p>
                <p className="text-[7px] font-bold text-gray-600 uppercase tracking-tighter">Net Margin</p>
              </div>
            </div>
          </div>
        </Card>

        {/* TOTAL CLICKS CARD */}
        <Card noPadding className="border-t-2 border-t-blue-500/50 bg-[#161d2a]">
          <div className="p-6 h-full flex flex-col min-h-[260px]">
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-blue-600/10 text-blue-500 border border-blue-500/20 rounded-lg shadow-inner">
                <Navigation size={22} className="rotate-45" />
              </div>
              <span className="text-[9px] font-black text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">+12.4%</span>
            </div>
            <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">TOTAL CLICKS</p>
            <p className="text-4xl font-black text-gray-100 tracking-tighter mb-4 font-mono leading-none">4,821,040</p>
            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Unique: <span className="text-blue-400">3.2M (66.3%)</span></p>

            <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
              <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest italic leading-none">SCANNED</span>
              <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-1 leading-none">100% SECURE</span>
            </div>
          </div>
        </Card>

        {/* NETWORK EPC CARD */}
        <Card noPadding className="border-t-2 border-t-green-500/50 bg-[#161d2a]">
          <div className="p-6 h-full flex flex-col min-h-[260px]">
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-green-600/10 text-green-500 border border-green-500/20 rounded-lg shadow-inner">
                <Target size={22} />
              </div>
              <span className="text-[9px] font-black text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">3.11% CVR</span>
            </div>
            <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">NETWORK EPC</p>
            <p className="text-4xl font-black text-gray-100 tracking-tighter mb-4 font-mono leading-none">$1.84</p>
            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">GLOBAL TARGET: <span className="text-gray-400 font-black">$1.75</span></p>

            <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
              <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest italic leading-none">PERFORMANCE</span>
              <span className="text-[8px] font-black text-green-500 uppercase tracking-widest leading-none">TIER 1 ELITE</span>
            </div>
          </div>
        </Card>

        {/* ACTIVE PARTNERS CARD */}
        <Card noPadding className="border-t-2 border-t-purple-500/50 bg-[#161d2a]">
          <div className="p-6 h-full flex flex-col min-h-[260px]">
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-purple-600/10 text-purple-400 border border-purple-500/20 rounded-lg shadow-inner">
                <Users size={22} />
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-gray-900 bg-gray-800 flex items-center justify-center font-black text-[6px] text-gray-500 uppercase">U{i}</div>)}
              </div>
            </div>
            <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">ACTIVE PARTNERS</p>
            <div className="flex items-baseline gap-2 mb-4">
              <p className="text-4xl font-black text-gray-100 tracking-tighter font-mono leading-none">245</p>
              <span className="text-xl font-black text-gray-800 italic leading-none">/ 42</span>
            </div>
            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">AFFILIATES / ADVERTISERS</p>

            <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
              <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest italic flex items-center gap-1 leading-none"><RotateCw size={10} className="animate-spin-slow" /> PENDING</span>
              <span className="text-[8px] font-black text-yellow-500 uppercase tracking-widest leading-none">12 REVIEWS</span>
            </div>
          </div>
        </Card>
      </div>

      {/* MOMENTUM & LOGISTICS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="FINANCIAL MOMENTUM" className="lg:col-span-2">
          <div className="h-[300px] w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProfitMain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" fontSize={10} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#4b5563" fontSize={10} axisLine={false} tickLine={false} dx={-5} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                <Area type="monotone" name="Net Profit" dataKey="profit" stroke="#10b981" strokeWidth={3} fill="url(#colorProfitMain)" isAnimationActive={false} />
                <Area type="monotone" name="Total Revenue" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} strokeDasharray="5 5" fill="transparent" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* LOGISTICS HUD */}
        <Card title="NETWORK LOGISTICS" headerAction={<span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">8 Actionable</span>}>
          <div className="space-y-3">
            {[
              { label: 'Compliance Docs', count: 8, color: 'text-red-500', icon: <FileCheck size={14} /> },
              { label: 'Affiliate Apps', count: 12, color: 'text-yellow-500', icon: <Users size={14} /> },
              { label: 'Fraud Alerts', count: 2, color: 'text-red-500', icon: <ShieldAlert size={14} /> },
            ].map((item, i) => (
              <div key={i} className="p-3 bg-gray-900/80 border border-gray-800 rounded-xl flex items-center justify-between group cursor-pointer hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg bg-gray-800 ${item.color}`}>{item.icon}</div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
                </div>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black ${item.count > 5 ? 'bg-red-500/10 text-red-500' : 'bg-gray-800 text-gray-400'}`}>
                  {item.count}
                </span>
              </div>
            ))}
            <button className="w-full mt-2 py-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600/20 transition-all shadow-sm">Review Center</button>
          </div>
        </Card>
      </div>

      {/* TOP ENTITIES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="TOP SMARTLINKS" headerAction={<Zap size={14} className="text-indigo-400" />}>
          <div className="space-y-3">
            {[
              { name: 'Global Finance Rotator', rev: '$12.4k', yield: '14.2%' },
              { name: 'US Sweeps Path v2', rev: '$9.1k', yield: '11.8%' },
            ].map((link, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500/30 transition-all cursor-pointer">
                <div>
                  <p className="text-[10px] font-black text-gray-100 uppercase tracking-tight line-clamp-1">{link.name}</p>
                  <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest mt-0.5">Yield: {link.yield}</p>
                </div>
                <span className="text-xs font-black text-white font-mono">{link.rev}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="TOP ADVERTISERS" headerAction={<Briefcase size={14} className="text-gray-500" />}>
          <div className="space-y-3">
            {MOCK_ADVERTISERS.slice(0, 2).map((adv, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 transition-all group cursor-pointer">
                <div>
                  <p className="text-[10px] font-black text-gray-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors line-clamp-1">{adv.name}</p>
                  <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mt-0.5">Spend: {adv.spend}</p>
                </div>
                <span className="text-xs font-black text-blue-400 font-mono">{adv.balance}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* RESTORED: SYSTEM HEALTH MONITOR */}
        <Card title="SYSTEM HEALTH" headerAction={<Activity size={14} className="text-green-500" />}>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Redirect Engine</span>
              <span className="text-green-500">STABLE</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Postback Relay</span>
              <span className="text-green-500">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Node Latency</span>
              <span className="text-blue-400 font-mono">1.2ms</span>
            </div>
          </div>
        </Card>

        <Card title="TOP AMs" headerAction={<UserCheck size={14} className="text-green-500" />}>
          <div className="space-y-3">
            {MOCK_MANAGERS.slice(0, 2).map((mgr, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-[8px] font-black">{mgr.name[0]}</div>
                  <div>
                    <p className="text-[10px] font-black text-gray-100 uppercase tracking-tight">{mgr.name}</p>
                    <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mt-0.5">G: <span className="text-green-500 font-black">{mgr.growth}</span></p>
                  </div>
                </div>
                <span className="text-xs font-black text-gray-300 font-mono">{mgr.portfolio}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* BOTTOM ROW: PARTNERS & TRAFFIC BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="TOP PARTNERS TODAY" headerAction={<Trophy size={16} className="text-yellow-500" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {MOCK_AFFILIATES.slice(0, 4).map((aff, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-2xl group hover:border-blue-500/30 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-[9px] font-black text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">P{i + 1}</div>
                  <div>
                    <p className="text-[11px] font-black text-gray-100 uppercase tracking-tight line-clamp-1">{aff.name}</p>
                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest italic">{aff.tier}</p>
                  </div>
                </div>
                <span className="text-xs font-black text-blue-400 font-mono">$18.2k</span>
              </div>
            ))}
          </div>
        </Card>

        {/* RESTORED: TRAFFIC CHANNEL BREAKDOWN */}
        <Card title="TRAFFIC CHANNEL BREAKDOWN">
          <div className="flex items-center gap-6 min-h-[160px]">
            <div className="h-[140px] w-1/2 relative min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={MOCK_CHANNEL_DATA} cx="50%" cy="50%" innerRadius={45} outerRadius={65} paddingAngle={8} dataKey="value" stroke="none" isAnimationActive={false}>
                    {MOCK_CHANNEL_DATA.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-lg font-black text-white leading-none">100%</span>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              {MOCK_CHANNEL_DATA.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-gray-950 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-400 font-black uppercase text-[9px] tracking-widest whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color } as React.CSSProperties}></div>
                    {c.name}
                  </div>
                  <span className="text-xs font-black text-gray-100 font-mono">{c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
