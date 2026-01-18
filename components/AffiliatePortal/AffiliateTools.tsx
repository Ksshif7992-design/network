
import React from 'react';
import { Key, Share2, Terminal, Code, Database, Zap, RefreshCw, Copy } from 'lucide-react';
import Card from '../Shared/Card';

const AffiliateTools: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Partner Tooling</h1>
            <p className="text-sm text-gray-500 font-medium">Configure your S2S signals and manage your developer credentials.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* POSTBACK CONFIG */}
         <Card title="GLOBAL S2S POSTBACK" headerAction={<Share2 size={16} className="text-indigo-400"/>}>
            <div className="space-y-6">
               <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest italic leading-relaxed">
                  "Enter your server-side postback URL. We will ping this endpoint for every conversion your node generates."
               </p>
               <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Postback Destination URL</label>
                     <div className="flex gap-2">
                        <input 
                           type="text" 
                           placeholder="https://yourserver.com/cb?click_id={click_id}&payout={payout}" 
                           className="flex-1 bg-gray-950 border border-gray-800 rounded-xl p-3 text-xs font-mono text-indigo-400 outline-none focus:ring-1 focus:ring-indigo-500" 
                        />
                        <button className="bg-indigo-600 px-6 py-2 rounded-xl text-[10px] font-black uppercase text-white shadow-lg active:scale-95 transition-all">Save</button>
                     </div>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                     <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-3 block">Available Tokens</label>
                     <div className="grid grid-cols-2 gap-2">
                        {['{click_id}', '{payout}', '{offer_id}', '{sub1}', '{sub2}', '{geo}'].map(macro => (
                           <div key={macro} className="p-3 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between group">
                              <code className="text-xs font-mono text-indigo-400">{macro}</code>
                              <button className="opacity-0 group-hover:opacity-100 transition-opacity"><Copy size={12} className="text-gray-600 hover:text-white"/></button>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </Card>

         {/* API ACCESS */}
         <Card title="DEVELOPER API ACCESS" headerAction={<Key size={16} className="text-indigo-400"/>}>
            <div className="space-y-6">
               <div className="p-10 bg-gray-950 border border-gray-800 rounded-3xl text-center shadow-inner">
                  <div className="w-16 h-16 bg-indigo-600/10 border border-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-500">
                     <Terminal size={32}/>
                  </div>
                  <h4 className="text-sm font-black text-gray-200 uppercase tracking-tight">Personal API Secret</h4>
                  <div className="mt-4 p-3 bg-gray-900 border border-gray-800 rounded-xl flex items-center gap-3 font-mono text-[10px] text-gray-500 select-all overflow-hidden truncate">
                     aff_node_live_88210_pk_4421...
                  </div>
                  <div className="mt-6 flex gap-3">
                     <button className="flex-1 py-3 bg-gray-800 border border-gray-700 rounded-xl text-[10px] font-black uppercase text-gray-400 hover:text-white transition-all">Regenerate Key</button>
                     <button className="flex-1 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg shadow-indigo-600/20 active:scale-95 transition-all">Read Docs</button>
                  </div>
               </div>
               
               <div className="p-4 bg-indigo-600/5 border border-indigo-500/20 rounded-2xl flex items-center gap-4">
                  <Database size={20} className="text-indigo-400 shrink-0" />
                  <p className="text-[10px] text-gray-500 italic leading-relaxed font-bold uppercase tracking-widest">
                     "API endpoints are rate-limited to 60 req/min for standard partner nodes."
                  </p>
               </div>
            </div>
         </Card>
      </div>
    </div>
  );
};

export default AffiliateTools;
