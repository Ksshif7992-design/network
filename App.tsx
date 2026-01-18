
import React, { useState, useEffect } from 'react';
import { PageId, UserRole } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Affiliates from './components/Affiliates';
import Advertisers from './components/Advertisers';
import Employees from './components/Employees';
import Offers from './components/Offers';
import FraudDetection from './components/FraudDetection';
import Campaigns from './components/Campaigns';
import Reports from './components/Reports';
import Conversions from './components/Conversions';
import Finance from './components/Finance';
import Postbacks from './components/Postbacks';
import Settings from './components/Settings';
import Tenants from './components/Tenants';
import Automation from './components/Automation';
import Communication from './components/Communication';
import Resources from './components/Resources';
import Compliance from './components/Compliance';
import CreativeAssets from './components/CreativeAssets';
import AffiliatePortal from './components/AffiliatePortal/AffiliatePortal';
import AdvertiserPortal from './components/AdvertiserPortal/AdvertiserPortal';
import FinancePortal from './components/FinancePortal/FinancePortal';
import ManagerPortal from './components/ManagerPortal/ManagerPortal';
import SupportPortal from './components/SupportPortal/SupportPortal';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('dashboard');
  const [activeSubPage, setActiveSubPage] = useState<string | undefined>(undefined);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('ADMIN');
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitializing(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (id: PageId, subItem?: string) => {
    setActivePage(id);
    setActiveSubPage(subItem);
  };

  const handleRoleSwitch = (role: UserRole) => {
    setIsInitializing(true);
    setUserRole(role);
    setActivePage('dashboard');
    setActiveSubPage(undefined);
    setTimeout(() => setIsInitializing(false), 600);
  };

  if (isInitializing) {
    return (
      <div className="h-screen w-full bg-gray-950 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 animate-pulse">Switching Environment...</p>
      </div>
    );
  }

  const renderContentByRole = () => {
    // CLICK LOGS ARE GLOBAL: Everyone can see them if they have access to the page
    if (activePage === 'conversions') return <Conversions />;
    
    // ROLE SPECIFIC ROUTING
    switch (userRole) {
      case 'ADMIN': return renderAdminView();
      case 'AFFILIATE': return <AffiliatePortal activePage={activePage} activeSubPage={activeSubPage} />;
      case 'ADVERTISER': return <AdvertiserPortal activePage={activePage} activeSubPage={activeSubPage} />;
      case 'FINANCE': return <FinancePortal activePage={activePage} activeSubPage={activeSubPage} />;
      case 'AM': return <ManagerPortal activePage={activePage} activeSubPage={activeSubPage} />;
      case 'SUPPORT': return <SupportPortal activePage={activePage} activeSubPage={activeSubPage} />;
      default: return renderAdminView();
    }
  };

  const renderAdminView = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'tenants': return <Tenants />;
      case 'affiliates': return <Affiliates initialTab={activeSubPage} />;
      case 'advertisers': return <Advertisers initialTab={activeSubPage} />;
      case 'employees': return <Employees initialTab={activeSubPage} />;
      case 'offers': return <Offers initialTab={activeSubPage} />;
      case 'fraud': return <FraudDetection initialTab={activeSubPage} />;
      case 'campaigns': return <Campaigns initialTab={activeSubPage} />;
      case 'reports': return <Reports initialTab={activeSubPage as any} />;
      case 'finance': return <Finance initialTab={activeSubPage} />;
      case 'postbacks': return <Postbacks />;
      case 'automation': return <Automation initialTab={activeSubPage} />;
      case 'communication': return <Communication initialTab={activeSubPage} />;
      case 'resources': return <Resources initialTab={activeSubPage} />;
      case 'compliance': return <Compliance initialTab={activeSubPage} />;
      case 'creatives': return <CreativeAssets initialTab={activeSubPage} />;
      case 'settings': return <Settings initialTab={activeSubPage} />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden font-sans antialiased text-gray-100">
      <Sidebar 
        activePage={activePage} 
        activeSubPage={activeSubPage}
        onPageChange={handlePageChange} 
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        userRole={userRole}
        onRoleSwitch={handleRoleSwitch}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} currentPage={activePage} userRole={userRole} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 no-scrollbar">
          <div className="max-w-7xl mx-auto">
            {renderContentByRole()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
