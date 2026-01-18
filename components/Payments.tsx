
import React, { useState } from 'react';
import { FileText, History, DollarSign } from 'lucide-react';
import Card from './Shared/Card';

const Payments: React.FC = () => {
  const [activeTab, setActiveTab] = useState('invoices');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Finance & Billing</h1>
      
      <div className="flex gap-4 border-b border-gray-800">
        {[
          { id: 'invoices', label: 'Invoices', icon: <FileText size={16}/> },
          { id: 'history', label: 'Transaction History', icon: <History size={16}/> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === tab.id ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'invoices' && (
        <Card title="Affiliate Invoices">
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
                <thead>
                   <tr className="text-gray-500 border-b border-gray-800"><th className="pb-3">Invoice #</th><th className="pb-3">Affiliate</th><th className="pb-3">Amount</th><th className="pb-3">Status</th></tr>
                </thead>
                <tbody>
                   <tr className="hover:bg-gray-800/30">
                      <td className="py-4">INV-2024-05</td><td className="py-4 font-medium">Elite Performance</td><td className="py-4 font-bold text-blue-400">$12,400.00</td><td className="py-4"><span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 rounded text-[10px] font-bold uppercase">Processing</span></td>
                   </tr>
                </tbody>
             </table>
           </div>
        </Card>
      )}

      {activeTab === 'history' && (
        <Card title="Global Transaction Logs">
           <div className="p-12 text-center text-gray-500">Detailed transaction history across all networks and partners.</div>
        </Card>
      )}
    </div>
  );
};

export default Payments;
