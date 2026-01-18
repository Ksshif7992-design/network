
import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  RotateCw,
  Globe,
  Smartphone,
  Download,
  Calendar as CalendarIcon,
  ChevronDown,
  Briefcase,
  Activity,
  Settings,
  Users,
  Layers,
  Settings2,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Search,
  Filter,
  ExternalLink,
  ChevronRight,
  MousePointer2,
  Zap,
  Target,
  // Added missing DollarSign icon
  DollarSign
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts';
import Card from './Shared/Card';
import { ReportView, Dimension } from '../types';

interface ReportsProps {
  initialTab?: ReportView;
}

const Reports: React.FC<ReportsProps> = ({ initialTab }) => {
  const getNormalizedTab = (tab?: string): ReportView => {
    if (!tab) return 'performance';
    const normalized = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalized === 'custombuilder') return 'custom';
    if (normalized === 'realtime') return 'realtime';
    return normalized as ReportView;
  };

  const [activeTab, setActiveTab] = useState<ReportView>(getNormalizedTab(initialTab as string));
  const [dateRange, setDateRange] = useState('Last 7 Days');
  const [isComparing, setIsComparing] = useState(false);
  const [groupBy, setGroupBy] = useState<Dimension[]>(['Offer']);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(getNormalizedTab(initialTab as string));
    }
  }, [initialTab]);

  const toggleGroupBy = (dim: Dimension) => {
    setGroupBy(prev => prev.includes(dim) ? prev.filter(d => d !== dim) : [...prev, dim]);
  };

  const tabs = [
    { id: 'performance', label: 'Performance', icon: <BarChart3 size={18} /> },
    { id: 'conversions', label: 'Conversions', icon: <RotateCw size={18} /> },
    { id: 'advertiser', label: 'Advertiser', icon: <Briefcase size={18} /> },
    { id: 'affiliate', label: 'Affiliate', icon: <Users size={18} /> },
    { id: 'realtime', label: 'Real-time', icon: <Activity size={18} /> },
    { id: 'custom', label: 'Custom Builder', icon: <Settings size={18} /> },
    { id: 'scheduled', label: 'Scheduled', icon: <Clock size={18} /> },
    { id: 'geographic', label: 'Geographic', icon: <Globe size={18} /> },
    { id: 'device', label: 'Device', icon: <Smartphone size={18} /> },
  ];

  const renderActiveReport = () => {
    switch (activeTab) {
      case 'conversions': return <div className="p-16 text-center text-gray-500 italic uppercase font-black text-[10px] tracking-widest border border-gray-800 rounded-2xl">Conversion event ledger loading...</div>;
      case 'geographic': return <GeographicReport />;
      case 'device': return <DeviceReport />;
      case 'scheduled': return <ScheduledReport />;
      case 'advertiser': return <EntityReport type="Advertiser" />;
      case 'affiliate': return <EntityReport type="Affiliate" />;
      default: return <PerformanceReport isComparing={isComparing} groupBy={groupBy} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-100 uppercase tracking-tight">Report Engine</h1>
          <p className="text-gray-400 text-sm font-medium italic">"Data precision for enterprise scale operations."</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsComparing(!isComparing)}
            className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md transition-all ${isComparing ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-gray-800 text-gray-500'}`}
          >
            Compare
          </button>

          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
              <CalendarIcon size={16} /> {dateRange} <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-64 bg-gray-900 border border-gray-700 rounded-xl hidden group-hover:block z-100 shadow-2xl overflow-hidden border-t-2 border-t-blue-500">
              {['Today', 'Yesterday', 'Last 7 Days', 'MTD'].map(p => (
                <button key={p} onClick={() => setDateRange(p)} className="w-full text-left px-5 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:bg-gray-800 border-b border-gray-800 last:border-none">{p}</button>
              ))}
            </div>
          </div>
          <button className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors" title="Download report">
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="flex border-b border-gray-800 overflow-x-auto no-scrollbar scroll-smooth">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id
              ? 'border-blue-500 text-blue-400 bg-blue-500/5'
              : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <Card noPadding className="border-gray-800 bg-gray-900/50">
        <div className="p-4 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3 border-r border-gray-800 pr-6">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center gap-2"><Layers size={14} /> Group By:</span>
            <div className="flex gap-2">
              {(['Offer', 'Affiliate', 'Advertiser', 'Country'] as Dimension[]).map(dim => (
                <button
                  key={dim}
                  onClick={() => toggleGroupBy(dim)}
                  className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest transition-all ${groupBy.includes(dim) ? 'bg-blue-600/10 border-blue-500 text-blue-400' : 'bg-gray-800 border-gray-700 text-gray-500 hover:border-gray-600'
                    }`}
                >
                  {dim}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Active Filters:</span>
            <span className="px-2 py-0.5 bg-gray-800 text-[9px] font-black uppercase text-gray-400 rounded-full border border-gray-700">None</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-500 hover:text-blue-400 transition-all" title="Report settings"><Settings2 size={16} /></button>
          </div>
        </div>
      </Card>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 min-h-[400px]">
        {renderActiveReport()}
      </div>
    </div>
  );
};

const PerformanceReport = ({ isComparing, groupBy }: { isComparing: boolean, groupBy: Dimension[] }) => {
  const data = [
    { name: '05/18', revenue: 2400, prevRevenue: 3800, clicks: 12000, conv: 240 },
    { name: '05/19', revenue: 1398, prevRevenue: 4200, clicks: 8000, conv: 180 },
    { name: '05/20', revenue: 9800, prevRevenue: 5100, clicks: 45000, conv: 1200 },
    { name: '05/21', revenue: 3908, prevRevenue: 7200, clicks: 15000, conv: 510 },
    { name: '05/22', revenue: 4800, prevRevenue: 6800, clicks: 19000, conv: 480 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Network Revenue', val: '$128,402', change: '+12%', icon: <DollarSign size={14} /> },
          { label: 'Total Clicks', val: '240,821', change: '+8%', icon: <MousePointer2 size={14} /> },
          { label: 'Conversions', val: '8,210', change: '+14%', icon: <Zap size={14} /> },
          { label: 'Overall EPC', val: '$1.84', change: '+2%', icon: <Target size={14} /> },
        ].map((s, i) => (
          <Card key={i} className="p-5 border-transparent bg-gray-900/40 border hover:border-blue-500/20 transition-all group shadow-none">
            <div className="flex justify-between items-center mb-1">
              <p className="text-[10px] uppercase font-black text-gray-600 tracking-widest">{s.label}</p>
              <span className="text-gray-700 group-hover:text-blue-500 transition-colors">{s.icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-black text-white font-mono">{s.val}</p>
              <span className="text-[9px] font-black text-green-500 uppercase">{s.change}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card title="Traffic Velocity Heatmap">
        <div className="h-[350px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
              <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
              <Area type="monotone" name="Revenue" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fill="url(#colorRevenue)" dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} activeDot={{ r: 6 }} isAnimationActive={false} />
              {isComparing && <Area type="monotone" name="Prev Period" dataKey="prevRevenue" stroke="#4b5563" strokeWidth={1} strokeDasharray="4 4" fill="transparent" isAnimationActive={false} />}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Operational Data Ledger" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800/30 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <th className="p-4">Dimension Context</th>
                <th className="p-4 text-center">Clicks</th>
                <th className="p-4 text-center">Conv.</th>
                <th className="p-4 text-center">CVR</th>
                <th className="p-4 text-center">Revenue</th>
                <th className="p-4 text-center">EPC</th>
                {isComparing && <th className="p-4 text-right">Delta</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-800/30 group transition-colors">
                  <td className="p-4">
                    <div className="font-black text-gray-200 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                      {groupBy.join(' > ')} Node {i}
                    </div>
                    <div className="text-[9px] text-gray-600 font-mono uppercase font-black">Segment-ID: 8092{i}</div>
                  </td>
                  <td className="p-4 text-xs font-black text-center text-gray-400 font-mono">{15000 * i}</td>
                  <td className="p-4 text-xs font-black text-center text-gray-400 font-mono">{400 * i}</td>
                  <td className="p-4 text-xs font-black text-center text-green-500 font-mono">{(2.5 + i / 10).toFixed(1)}%</td>
                  <td className="p-4 text-sm font-black text-center text-gray-100 font-mono">${(12400 * i).toLocaleString()}</td>
                  <td className="p-4 text-xs font-black text-center text-blue-400 font-mono">${(1.2 + i / 5).toFixed(2)}</td>
                  {isComparing && <td className="p-4 text-right text-green-500 font-black font-mono text-xs">+12.4%</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const EntityReport = ({ type }: { type: 'Advertiser' | 'Affiliate' }) => {
  return (
    <div className="space-y-6">
      <Card title={`Top ${type} Performance`}>
        <div className="h-[300px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[
              { name: `${type} A`, revenue: 42000, margin: 12000 },
              { name: `${type} B`, revenue: 38000, margin: 9000 },
              { name: `${type} C`, revenue: 24000, margin: 8000 },
              { name: `${type} D`, revenue: 15000, margin: 4000 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }} />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card title={`${type} Data Grid`} noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800/30 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <th className="p-4">{type} Identity</th>
                <th className="p-4 text-center">Active Offers</th>
                <th className="p-4 text-center">Conv. Rate</th>
                <th className="p-4 text-center">Net Revenue</th>
                <th className="p-4 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[1, 2, 3].map(i => (
                <tr key={i} className="hover:bg-gray-800/30 group">
                  <td className="p-4 font-black text-gray-100 uppercase tracking-tight">{type} Segment {i}</td>
                  <td className="p-4 text-center font-black text-gray-400">1{i}</td>
                  <td className="p-4 text-center font-black text-blue-400 font-mono">{(3.2 + i).toFixed(1)}%</td>
                  <td className="p-4 text-center font-black text-white font-mono">${(5200 * i).toLocaleString()}</td>
                  <td className="p-4 text-right text-green-500 font-black flex items-center justify-end gap-1"><TrendingUp size={12} /> +{i * 3}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const GeographicReport = () => {
  const data = [{ name: 'USA', val: 4500 }, { name: 'UK', val: 3200 }, { name: 'DE', val: 1800 }, { name: 'CA', val: 1200 }, { name: 'FR', val: 800 }];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Traffic Geography Density">
        <div className="h-[300px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
              <XAxis type="number" stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }} />
              <Bar dataKey="val" fill="#3b82f6" radius={[0, 4, 4, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card title="Regional Profitability">
        <div className="space-y-4">
          {data.map((d, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{d.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-[8px] font-black text-gray-600 uppercase">Avg EPC</p>
                  <p className="text-xs font-black text-blue-400 font-mono">${(1.5 + i / 2).toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black text-gray-600 uppercase">Yield</p>
                  <p className="text-xs font-black text-green-500">{(12 + i * 2)}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

const DeviceReport = () => {
  const data = [
    { name: 'iOS 17.x', value: 35, color: '#3b82f6' },
    { name: 'Android 14', value: 25, color: '#10b981' },
    { name: 'Windows 11', value: 20, color: '#8b5cf6' },
    { name: 'macOS 14', value: 15, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#ef4444' }
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card title="Traffic OS Segment" className="lg:col-span-1">
        <div className="h-[260px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                isAnimationActive={false}
              >
                {data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-1 mt-4">
          {data.map((d, i) => (
            <div key={i} className="flex items-center justify-between text-[9px] font-black uppercase text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color } as React.CSSProperties}></div>
                {d.name}
              </div>
              <span>{d.value}%</span>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Browser Compatibility Performance" className="lg:col-span-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800 text-[10px] font-black text-gray-600 uppercase tracking-widest bg-gray-900/30">
                <th className="p-4">Browser Node</th>
                <th className="p-4 text-center">Market Share</th>
                <th className="p-4 text-center">Conv. Rate</th>
                <th className="p-4 text-right">Bounce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {['Chrome 125', 'Safari Mobile', 'Edge Chromium', 'Firefox Pro'].map((b, i) => (
                <tr key={i} className="hover:bg-gray-800/20">
                  <td className="p-4 text-xs font-black text-gray-200 uppercase tracking-tight">{b}</td>
                  <td className="p-4 text-center font-mono text-[10px] text-gray-400">{(40 - i * 8)}%</td>
                  <td className="p-4 text-center font-mono text-[10px] text-green-500 font-black">{(4.2 - i / 2).toFixed(1)}%</td>
                  <td className="p-4 text-right font-mono text-[10px] text-red-500">{(12 + i * 2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const ScheduledReport = () => (
  <Card title="Automated Delivery Schedules" headerAction={<button className="px-3 py-1 bg-blue-600 text-white rounded text-[9px] font-black uppercase shadow-lg shadow-blue-600/20">New Schedule</button>}>
    <div className="space-y-4">
      {[
        { name: 'Daily Morning Snapshot', target: 'admin@affflow.io', frequency: 'Daily @ 08:00 UTC', status: 'Active' },
        { name: 'Weekly Partner Revenue', target: 'am-leads@affflow.io', frequency: 'Mondays @ 00:00 UTC', status: 'Active' },
      ].map((s, i) => (
        <div key={i} className="p-4 bg-gray-950 border border-gray-800 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-900 rounded-xl text-gray-600 border border-gray-800 shadow-inner group-hover:text-blue-400 transition-colors"><Clock size={20} /></div>
            <div>
              <h5 className="text-sm font-black text-gray-200 uppercase tracking-tight">{s.name}</h5>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Recipients: <span className="text-blue-400">{s.target}</span></p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">{s.frequency}</p>
            <span className="text-[9px] font-black uppercase text-green-500 bg-green-500/10 px-2 rounded-full border border-green-500/20">{s.status}</span>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default Reports;
