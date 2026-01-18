
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  headerAction?: React.ReactNode;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, headerAction, noPadding = false }) => {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg ${className}`}>
      {(title || headerAction) && (
        <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/50">
          {title && <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">{title}</h3>}
          {headerAction}
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};

export default Card;
