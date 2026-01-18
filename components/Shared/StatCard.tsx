
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 p-5 rounded-xl flex flex-col justify-between hover:border-blue-500/50 transition-colors group">
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</span>
        <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
          stat.trend === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
        }`}>
          {stat.trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
          {Math.abs(stat.change)}%
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">{stat.value}</h4>
      </div>
    </div>
  );
};

export default StatCard;
