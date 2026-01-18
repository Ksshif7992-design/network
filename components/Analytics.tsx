
import React, { useState } from 'react';
import { Filter, PieChart, TrendingUp, Target } from 'lucide-react';
import Card from './Shared/Card';

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('funnel');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Advanced Analytics</h1>
      
      <div className="flex gap-4 border-b border-gray-800">
        {[
          { id: 'funnel', label: 'Funnel Analysis', icon: <Filter size={16}/> },
          { id: 'ltv', label: 'LTV Reports', icon: <TrendingUp size={16}/> },
          { id: 'attribution', label: 'Attribution', icon: <Target size={16}/> },
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

      <Card title={activeTab.toUpperCase() + " Dashboard"}>
        <div className="p-12 text-center text-gray-500">
          Advanced cohort and attribution data processing. Results will appear here after network synchronization.
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
