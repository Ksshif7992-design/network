
import React, { useState, useEffect } from 'react';
import { FileCheck, Shield, Upload, Clock, CheckCircle, AlertTriangle, Search, ChevronRight, Gavel } from 'lucide-react';
import Card from './Shared/Card';

interface ComplianceProps {
  initialTab?: string;
}

const Compliance: React.FC<ComplianceProps> = ({ initialTab }) => {
  const normalizeTab = (tab?: string) => {
    if (!tab) return 'kyc';
    const n = tab.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (n === 'kycdocs') return 'kyc';
    if (n === 'taxforms') return 'tax';
    if (n === 'gdpr') return 'gdpr';
    return 'kyc';
  };

  const [activeTab, setActiveTab] = useState(normalizeTab(initialTab));

  useEffect(() => {
    if (initialTab) {
      setActiveTab(normalizeTab(initialTab));
    }
  }, [initialTab]);

  const kycRecords = [
    { name: 'Elite Performance', type: 'Affiliate', status: 'verified', doc: 'W-9 Form', date: '2024-05-12' },
    { name: 'Growth Media', type: 'Affiliate', status: 'pending', doc: 'ID Verification', date: '2024-05-24' },
    { name: 'CyberShield', type: 'Advertiser', status: 'expired', doc: 'Business License', date: '2023-01-10' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-100">Compliance & Legal</h1>
          <p className="text-sm text-gray-500 font-medium">Manage KYC documentation, tax forms, and platform terms.</p>
        </div>
        <button className="bg-blue-600 px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 active:scale-95 transition-all"><Upload size={16} className="inline mr-2"/> Upload Template</button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 overflow-x-auto no-scrollbar">
        {[
          { id: 'kyc', label: 'KYC & ID', icon: <Shield size={16}/> },
          { id: 'tax', label: 'Tax Forms', icon: <FileCheck size={16}/> },
          { id: 'gdpr', label: 'GDPR / Privacy', icon: <Gavel size={16}/> },
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
        {activeTab === 'kyc' && (
          <Card>
            <div className="flex gap-4 mb-8">
               <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                 <input type="text" placeholder="Filter partners or docs..." className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-500" />
               </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <th className="pb-4">Partner Entity</th>
                    <th className="pb-4">Document Node</th>
                    <th className="pb-4">Submission</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {kycRecords.map((rec, i) => (
                    <tr key={i} className="hover:bg-gray-800/30 transition-colors group">
                      <td className="py-5 font-bold text-gray-100 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{rec.name}</td>
                      <td className="py-5 text-xs text-gray-500 font-bold uppercase tracking-widest">{rec.doc}</td>
                      <td className="py-5 text-[10px] font-mono text-gray-600 font-black">{rec.date}</td>
                      <td className="py-5">
                         <div className="flex items-center gap-2">
                            {rec.status === 'verified' ? <CheckCircle size={14} className="text-green-500"/> : rec.status === 'pending' ? <Clock size={14} className="text-yellow-500"/> : <AlertTriangle size={14} className="text-red-500"/>}
                            <span className={`text-[10px] font-black uppercase tracking-widest ${rec.status === 'verified' ? 'text-green-500' : rec.status === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>{rec.status}</span>
                         </div>
                      </td>
                      <td className="py-5 text-right"><ChevronRight size={16} className="ml-auto text-gray-700 group-hover:text-blue-500 transition-all" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'tax' && (
          <Card title="Financial Tax Registry">
             <div className="p-16 text-center">
                <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-indigo-400"><FileCheck size={32}/></div>
                <h3 className="text-lg font-black text-gray-100 uppercase tracking-tight">Tax Documentation Hub</h3>
                <p className="text-xs text-gray-500 mt-2 font-medium">Automated W-8BEN and W-9 collection is enabled for all Tier 1 partners.</p>
             </div>
          </Card>
        )}

        {activeTab === 'gdpr' && (
          <Card title="Privacy & Data Governance">
             <div className="p-16 text-center">
                <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-green-500"><Gavel size={32}/></div>
                <h3 className="text-lg font-black text-gray-100 uppercase tracking-tight">Data Policy Manager</h3>
                <p className="text-xs text-gray-500 mt-2 font-medium">Compliance logic for EU/UK traffic is active. Cookie consent and data deletion logs are being recorded.</p>
             </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Compliance;
