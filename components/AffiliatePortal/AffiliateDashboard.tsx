
import React from 'react';
import { 
  TrendingUp, 
  MousePointer2, 
  Zap, 
  Target, 
  Trophy, 
  Rocket, 
  ChevronRight, 
  ExternalLink,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import Card from '../Shared/Card';
import { MOCK_AFFILIATE_STATS, MOCK_CHART_DATA, MOCK_OFFERS } from '../../constants';

const AffiliateDashboard: React.FC = () => {
  return (
    <div className="space-y-6 pb-10">
      {/* GREETING */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-100 tracking-tight flex items-center gap-3 uppercase">
            Good Morning, <span className="text-indigo-400">Elite Performance</span>
            <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-md uppercase tracking-widest font-black border border-indigo-500/20">Platinum Partner</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium italic">"Current revenue cycle ending in 4 days."</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-black shadow-lg shadow-indigo-600/20 transition-all active:scale-95 uppercase tracking-widest">
           Browse Offers
        </button>
      </div>

      {/* STATS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {MOCK_AFFILIATE_STATS.map((stat, i) => (
          <div key={i} className="bg-gray-800 border border-gray-700 p-4 rounded-xl hover:border-indigo-500/30 transition-all group relative overflow-hidden min-w-0">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</span>
              <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[9px] font-black">
                <TrendingUp size={10} /> {stat.change}%
              </div>
            </div>
            <p className="text-xl font-black text-gray-100 group-hover:text-indigo-400 transition-colors font-mono">{stat.value}</p>
            <div className="absolute bottom-0 left-0 h-0.5 bg-indigo-600/20 w-full group-hover:bg-indigo-600/50 transition-all"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* EARNINGS MOMENTUM */}
        <Card title="EARNINGS MOMENTUM" className="lg:col-span-2">
           <div className="h-[300px] w-full min-w-0">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={MOCK_CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#818cf8" stopOpacity={0.15}/>
                     <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                 <XAxis dataKey="name" stroke="#4b5563" fontSize={10} axisLine={false} tickLine={false} dy={10} />
                 <YAxis stroke="#4b5563" fontSize={10} axisLine={false} tickLine={false} dx={-5} />
                 <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }} />
                 <Area type="monotone" name="Earnings" dataKey="revenue" stroke="#818cf8" strokeWidth={3} fill="url(#colorEarnings)" isAnimationActive={false} />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </Card>

        {/* ACCOUNT SNAPSHOT */}
        <div className="space-y-6">
           <Card title="REVENUE CYCLE">
              <div className="flex flex-col items-center justify-center py-4">
                 <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-900" />
                       <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" 
                        strokeDasharray={364.42} strokeDashoffset={364.42 * (1 - 0.75)}
                        className="text-indigo-500 shadow-indigo-500/50" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                       <span className="text-xl font-black text-white">$12.4k</span>
                       <span className="text-[7px] font-black text-gray-500 uppercase tracking-widest">Target Met</span>
                    </div>
                 </div>
                 <div className="text-center">
                    <p className="text-xs font-black text-gray-200 uppercase tracking-tight">Next Payout: Friday</p>
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1">Automatic Net-7 Cycle</p>
                 </div>
              </div>
           </Card>
           
           <Card title="QUICK TOOLS">
              <div className="space-y-3">
                 <button className="w-full flex items-center justify-between p-4 bg-gray-950 border border-gray-800 rounded-2xl hover:border-indigo-500/40 transition-all group">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-all"><CreditCard size={16}/></div>
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Billing Details</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-700"/>
                 </button>
                 <button className="w-full flex items-center justify-between p-4 bg-gray-950 border border-gray-800 rounded-2xl hover:border-indigo-500/40 transition-all group">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-all"><Zap size={16}/></div>
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Global Postback</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-700"/>
                 </button>
              </div>
           </Card>
        </div>
      </div>

      {/* RECOMMENDED OFFERS */}
      <Card title="RECOMMENDED FOR YOU" headerAction={<Trophy size={16} className="text-yellow-500"/>}>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_OFFERS.map(offer => (
               <div key={offer.id} className="bg-gray-950 border border-gray-800 rounded-2xl p-5 hover:border-indigo-500/40 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-[8px] bg-gray-900 border border-gray-800 px-2 py-1 rounded font-black text-gray-500 uppercase tracking-widest">{offer.category}</span>
                     <span className="text-xs font-black text-indigo-400 font-mono">{offer.payout}</span>
                  </div>
                  <h4 className="font-black text-gray-100 uppercase tracking-tight mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1">{offer.title}</h4>
                  <div className="flex items-center gap-2 mb-6">
                     <ShieldCheck size={12} className="text-green-500"/>
                     <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Verified Merchant</span>
                  </div>
                  <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest rounded-xl text-[10px] shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
                     Generate Link
                  </button>
               </div>
            ))}
         </div>
      </Card>
    </div>
  );
};

export default AffiliateDashboard;
