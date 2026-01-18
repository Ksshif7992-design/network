
import React, { useState } from 'react';
import { Webhook, Key, Code } from 'lucide-react';
import Card from './Shared/Card';

const APIIntegration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('webhooks');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">API & Developer Hub</h1>
      
      <div className="flex gap-4 border-b border-gray-800">
        {[
          { id: 'webhooks', label: 'Webhooks', icon: <Webhook size={16}/> },
          { id: 'keys', label: 'API Keys', icon: <Key size={16}/> },
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

      <Card title={activeTab === 'webhooks' ? 'Configured Webhooks' : 'Personal API Access Keys'}>
         <div className="p-12 text-center">
            <div className="inline-block p-4 bg-blue-600/10 rounded-full text-blue-500 mb-4"><Code size={32}/></div>
            <p className="text-gray-400 max-w-sm mx-auto">Generate secure credentials to programmatically interact with the AffiliFlow platform.</p>
            <button className="mt-6 bg-blue-600 px-6 py-2 rounded-lg text-sm font-bold">Generate New Key</button>
         </div>
      </Card>
    </div>
  );
};

export default APIIntegration;
