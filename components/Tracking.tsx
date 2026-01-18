
import React, { useState } from 'react';
import { Code, Globe, Terminal } from 'lucide-react';
import Card from './Shared/Card';

const Tracking: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pixels');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tracking Tools</h1>
      
      <div className="flex gap-4 border-b border-gray-800">
        {[
          { id: 'pixels', label: 'Pixels', icon: <Code size={16}/> },
          { id: 'postbacks', label: 'Postbacks', icon: <Globe size={16}/> },
          { id: 's2s', label: 'S2S Tracking', icon: <Terminal size={16}/> },
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

      <Card title={activeTab === 'pixels' ? 'Tracking Pixels' : activeTab === 'postbacks' ? 'Server Postbacks' : 'S2S Integration'}>
        <div className="p-12 text-center text-gray-500">
          {activeTab === 'pixels' && "Configure client-side JS pixels and image beacons."}
          {activeTab === 'postbacks' && "Manage Global and Offer-specific postback URLs."}
          {activeTab === 's2s' && "Server-to-Server click and conversion logging tools."}
        </div>
      </Card>
    </div>
  );
};

export default Tracking;
