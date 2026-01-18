
import React from 'react';
import { Bell, Search, Menu, ChevronDown, User, LogOut, HelpCircle, Shield, Command } from 'lucide-react';
import { UserRole } from '../types';

interface HeaderProps {
  toggleSidebar: () => void;
  currentPage: string;
  userRole?: UserRole;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, currentPage, userRole = 'ADMIN' }) => {
  const accentColor = userRole === 'ADMIN' ? 'blue' : 'indigo';

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6 sticky top-0 z-[100] shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white lg:hidden">
          <Menu size={24} />
        </button>
        <div className="hidden sm:flex items-center text-[10px] font-black uppercase tracking-widest text-gray-500 gap-2">
           <span>{userRole === 'ADMIN' ? 'Network' : 'Partner Portal'}</span>
           <span className="text-gray-700">/</span>
           <span className={`text-${accentColor}-400`}>{currentPage}</span>
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8 hidden lg:block">
        <div className="relative group">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-${accentColor}-500`} size={16} />
          <input
            type="text"
            placeholder={userRole === 'ADMIN' ? "Search partners, offers, or global ledger..." : "Search available offers..."}
            className={`w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-11 pr-16 py-2.5 text-xs focus:outline-none focus:ring-1 focus:bg-gray-800 transition-all placeholder:text-gray-600 focus:ring-${accentColor}-500`}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 bg-gray-900 border border-gray-700 rounded-lg text-[9px] font-black text-gray-500 pointer-events-none group-focus-within:opacity-0 transition-opacity">
             <Command size={10} /> <span>K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
          userRole === 'ADMIN' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px] ${
            userRole === 'ADMIN' ? 'bg-green-500 shadow-green-500/60' : 'bg-indigo-400 shadow-indigo-400/60'
          }`}></div>
          {userRole === 'ADMIN' ? 'Uptime: 99.9%' : 'Portal Status: ACTIVE'}
        </div>

        <div className="relative">
          <button className="p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 transition-all relative">
            <Bell size={18} />
            <span className={`absolute top-2 right-2 w-2 h-2 rounded-full border-2 border-gray-800 ${
              userRole === 'ADMIN' ? 'bg-red-500' : 'bg-indigo-500'
            }`}></span>
          </button>
        </div>

        <div className="h-6 w-[1px] bg-gray-800 mx-2"></div>

        <button className="flex items-center gap-3 pl-2 group">
           <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-gray-100 uppercase tracking-tight leading-none mb-1">
                {userRole === 'ADMIN' ? 'John Doe' : 'Elite Performance'}
              </p>
              <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest leading-none">
                {userRole === 'ADMIN' ? 'Master Admin' : 'ID: AFF-001'}
              </p>
           </div>
           <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white shadow-lg transition-all group-hover:scale-105 ${
             userRole === 'ADMIN' ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-600/20' : 'bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-indigo-600/20'
           }`}>
             {userRole === 'ADMIN' ? 'JD' : 'EP'}
           </div>
           <ChevronDown size={14} className="text-gray-600 group-hover:text-gray-300 transition-colors" />
        </button>
      </div>
    </header>
  );
};

export default Header;
