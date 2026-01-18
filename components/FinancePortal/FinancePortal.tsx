
import React from 'react';
import { PageId } from '../../types';
import Card from '../Shared/Card';
// Fix: Added missing TrendingUp import
import { CreditCard, DollarSign, History, ShieldCheck, FileText, CheckCircle2, TrendingUp } from 'lucide-react';
import { MOCK_AFFILIATES } from '../../constants';

const FinancePortal: React.FC<{ activePage: PageId, activeSubPage?: string }> = ({ activePage }) => {
  if (activePage === 'dashboard') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
           <div>
              <h1 className="text-2xl font-black uppercase tracking-tight">Financial Treasury</h1>
              <p className="text-sm text-gray-500 font-medium">"Managing cash flow and partner settlements."</p>
           </div>
           <button className="bg-amber-600 px-6 py-2 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-amber-600/20 active:scale-95 transition-all">Run Mass Payout Cycle</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="bg-amber-600/5 border-amber-600/20">
              <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4">Unpaid Commissions</p>
              <h2 className="text-3xl font-black text-white">$92,104.20</h2>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-gray-500">
                 <History size={12}/> Next cycle: Friday
              </div>
           </Card>
           <Card className="bg-emerald-600/5 border-emerald-600/20">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">Receivables (Adv Balance)</p>
              <h2 className="text-3xl font-black text-white">$124,400.00</h2>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-gray-500">
                 <CheckCircle2 size={12}/> 92% Collection Rate
              </div>
           </Card>
           <Card>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Operational Margin</p>
              <h2 className="text-3xl font-black text-white">28.3%</h2>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-gray-500">
                 <TrendingUp size={12}/> +2.1% MTD
              </div>
           </Card>
        </div>

        <Card title="PENDING SETTLEMENTS" noPadding>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-gray-800 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                       <th className="p-4">Affiliate</th>
                       <th className="p-4">Gateway</th>
                       <th className="p-4">Amount</th>
                       <th className="p-4 text-right">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-900">
                    {MOCK_AFFILIATES.map(a => (
                       <tr key={a.id} className="hover:bg-gray-800/30">
                          <td className="p-4 font-black text-gray-100 uppercase tracking-tight">{a.name}</td>
                          <td className="p-4 text-[10px] font-black text-gray-500 uppercase">PAYONEER</td>
                          <td className="p-4 text-sm font-black text-amber-400 font-mono">{a.payout}</td>
                          <td className="p-4 text-right">
                             <span className="text-[8px] px-2 py-0.5 bg-amber-500/10 text-amber-500 rounded border border-amber-500/20">READY</span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </Card>
      </div>
    );
  }
  return <div className="p-12 text-center text-gray-600 font-black uppercase tracking-widest italic">{activePage} Content Loading...</div>;
};

export default FinancePortal;
