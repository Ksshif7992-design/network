
import React, { useState } from 'react';
import { Search, Filter, Globe, ChevronRight, Zap, Target, MousePointer2, ShieldCheck, Tag, ShoppingBag, ListChecks } from 'lucide-react';
import Card from '../Shared/Card';
import { MOCK_OFFERS } from '../../constants';

interface AffiliateMarketplaceProps {
  type: 'all' | 'approved';
}

const AffiliateMarketplace: React.FC<AffiliateMarketplaceProps> = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const offers = type === 'approved' 
    ? MOCK_OFFERS.slice(0, 2) // Mocking approved offers
    : MOCK_OFFERS;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">
               {type === 'approved' ? 'My Performance Nodes' : 'Inventory Marketplace'}
            </h1>
            <p className="text-sm text-gray-500 font-medium italic">"Browsing global conversion demand."</p>
         </div>
      </div>

      <Card>
         <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
               <input 
                  type="text" 
                  placeholder="Filter by vertical, payout, or geo..." 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
            <button className="px-6 py-2 bg-gray-800 border border-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all flex items-center gap-2">
               <Filter size={16}/> Filter Inventory
            </button>
         </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {offers.map(offer => (
            <Card key={offer.id} className="hover:border-indigo-500/40 transition-all group cursor-pointer border-transparent shadow-none hover:shadow-xl hover:shadow-indigo-500/5">
               <div className="flex justify-between mb-4">
                  <span className="text-[10px] bg-gray-900 px-2 py-1 rounded font-mono text-gray-500 group-hover:text-indigo-400 transition-colors uppercase tracking-widest font-black">#{offer.id}</span>
                  <span className={`text-[10px] px-2 py-1 rounded font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20`}>{offer.status}</span>
               </div>
               <h3 className="font-black text-gray-100 mb-1 group-hover:text-indigo-400 transition-colors uppercase tracking-tight line-clamp-1">{offer.title}</h3>
               <p className="text-[10px] text-gray-500 mb-6 font-bold uppercase tracking-widest">{offer.category} • {offer.geo.join(', ')}</p>
               
               <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-gray-950 rounded-xl border border-gray-800 flex flex-col items-center justify-center">
                     <p className="text-[8px] font-black text-gray-600 uppercase mb-1">Affiliate Payout</p>
                     <p className="text-sm font-black text-indigo-400 font-mono">{offer.payout}</p>
                  </div>
                  <div className="p-3 bg-gray-950 rounded-xl border border-gray-800 flex flex-col items-center justify-center">
                     <p className="text-[8px] font-black text-gray-600 uppercase mb-1">Network CVR</p>
                     <p className="text-sm font-black text-green-500 font-mono">{offer.conversionRate}</p>
                  </div>
               </div>

               <div className="pt-4 border-t border-gray-800 flex gap-2">
                  <button className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
                     {type === 'approved' ? 'Get Tracking Link' : 'Apply For Access'}
                  </button>
                  <button className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-500 hover:text-white transition-colors">
                     <Target size={16}/>
                  </button>
               </div>
            </Card>
         ))}
      </div>
    </div>
  );
};

export default AffiliateMarketplace;
