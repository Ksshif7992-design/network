
import React, { useState } from 'react';
import { ChevronDown, Zap, Search, Shield, ArrowLeftRight, User, Briefcase, CreditCard, LifeBuoy, Users, MousePointer2 } from 'lucide-react';
import { SIDEBAR_NAV, AFFILIATE_NAV, ADVERTISER_NAV, FINANCE_NAV, AM_NAV, SUPPORT_NAV } from '../constants';
import { PageId, UserRole } from '../types';

interface SidebarProps {
  activePage: PageId;
  activeSubPage?: string;
  onPageChange: (id: PageId, subItem?: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  userRole: UserRole;
  onRoleSwitch: (role: UserRole) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activePage, 
  activeSubPage, 
  onPageChange, 
  collapsed, 
  setCollapsed, 
  userRole,
  onRoleSwitch
}) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    [activePage]: true,
  });
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const toggleSubMenu = (id: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getRoleConfig = (role: UserRole) => {
    switch (role) {
      case 'ADMIN': return { nav: SIDEBAR_NAV, accent: 'blue', label: 'MASTER ADMIN' };
      case 'AFFILIATE': return { nav: AFFILIATE_NAV, accent: 'indigo', label: 'AFFILIATE PORTAL' };
      case 'ADVERTISER': return { nav: ADVERTISER_NAV, accent: 'emerald', label: 'ADVERTISER HUB' };
      case 'FINANCE': return { nav: FINANCE_NAV, accent: 'amber', label: 'FINANCE DESK' };
      case 'AM': return { nav: AM_NAV, accent: 'cyan', label: 'MANAGER HUB' };
      case 'SUPPORT': return { nav: SUPPORT_NAV, accent: 'rose', label: 'SUPPORT COMMAND' };
      default: return { nav: SIDEBAR_NAV, accent: 'blue', label: 'MASTER ADMIN' };
    }
  };

  const { nav: currentNav, accent: accentColor, label: roleName } = getRoleConfig(userRole);

  const roles: {id: UserRole, label: string, icon: React.ReactNode}[] = [
    { id: 'ADMIN', label: 'Master Admin', icon: <Shield size={14}/> },
    { id: 'AFFILIATE', label: 'Affiliate Partner', icon: <Users size={14}/> },
    { id: 'ADVERTISER', label: 'Advertiser Brand', icon: <Briefcase size={14}/> },
    { id: 'FINANCE', label: 'Finance Staff', icon: <CreditCard size={14}/> },
    { id: 'AM', label: 'Account Manager', icon: <User size={14}/> },
    { id: 'SUPPORT', label: 'Support Specialist', icon: <LifeBuoy size={14}/> },
  ];

  return (
    <aside className={`bg-[#0a0f18] border-r border-gray-800/50 transition-all duration-300 flex flex-col h-screen z-[200] ${collapsed ? 'w-20' : 'w-[280px]'}`}>
      {/* BRANDING - Updated to L o G i c P u l s e™ */}
      <div className="p-6 flex items-center gap-4 shrink-0">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-${accentColor}-500 to-${accentColor}-700 shadow-lg shadow-${accentColor}-500/20 overflow-hidden`}>
          <Zap size={24} className="text-white fill-white" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-[0.2em] text-white uppercase leading-none whitespace-nowrap">L o G i c P u l s e™</span>
            <span className={`text-[10px] font-black uppercase tracking-[0.15em] mt-2 text-${accentColor}-500`}>{roleName}</span>
          </div>
        )}
      </div>

      {/* QUICK SEARCH */}
      {!collapsed && (
        <div className="px-5 mb-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Quick Jump..." 
              className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-11 pr-4 py-2.5 text-xs font-bold text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="flex-1 overflow-y-auto no-scrollbar px-4 py-2 space-y-1">
        {currentNav.map((item) => {
          const isActive = activePage === item.id;
          const hasSub = item.subItems.length > 0;
          const isExpanded = expandedMenus[item.id];

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => {
                  if (hasSub && !collapsed) {
                    toggleSubMenu(item.id);
                  }
                  onPageChange(item.id);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all group relative ${
                  isActive 
                    ? `bg-blue-600 text-white shadow-xl shadow-blue-600/20`
                    : 'text-gray-400 hover:bg-[#111827] hover:text-white'
                }`}
              >
                <span className={`${isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-400 transition-colors'}`}>
                  {item.icon}
                </span>
                
                {!collapsed && (
                  <div className="ml-4 flex-1 flex justify-between items-center">
                    <span className="font-black text-[13px] uppercase tracking-wider">{item.label}</span>
                    {hasSub && (
                      <span className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown size={16} className={isActive ? 'text-white/50' : 'text-gray-600'} />
                      </span>
                    )}
                  </div>
                )}
              </button>

              {!collapsed && hasSub && isExpanded && (
                <div className="ml-6 pl-4 border-l border-gray-800/50 space-y-1 animate-in slide-in-from-top-1 duration-200">
                  {item.subItems.map(sub => (
                    <button
                      key={sub}
                      onClick={() => onPageChange(item.id, sub)}
                      className="w-full text-left px-4 py-2 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-blue-400 rounded-lg transition-all"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* FOOTER SWITCHER */}
      <div className="p-4 bg-[#0a0f18] shrink-0 border-t border-gray-800/50">
        <div className="relative">
          {showRoleMenu && (
             <div className="absolute bottom-full left-0 right-0 mb-4 bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-2 z-[300]">
               <p className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-800">Switch Persona</p>
               <div className="max-h-64 overflow-y-auto no-scrollbar">
                  {roles.map(r => (
                    <button
                      key={r.id}
                      onClick={() => {
                        onRoleSwitch(r.id);
                        setShowRoleMenu(false);
                      }}
                      className={`w-full flex items-center gap-4 px-5 py-3 text-[11px] font-black uppercase tracking-tight hover:bg-blue-600/10 hover:text-blue-400 transition-all ${
                        userRole === r.id ? 'text-blue-500 bg-blue-500/5' : 'text-gray-400'
                      }`}
                    >
                      {r.icon} {r.label}
                    </button>
                  ))}
               </div>
             </div>
          )}
          
          <button 
            onClick={() => setShowRoleMenu(!showRoleMenu)}
            className="w-full bg-[#111827] hover:bg-[#1a2333] border border-gray-800 rounded-2xl p-4 flex items-center justify-between transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-600/20">
                {roleName[0]}
              </div>
              {!collapsed && (
                <div className="text-left">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1.5">Active Portal</p>
                  <p className="text-[12px] font-black text-white uppercase tracking-tight leading-none">{roleName}</p>
                </div>
              )}
            </div>
            {!collapsed && <ArrowLeftRight size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors" />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;