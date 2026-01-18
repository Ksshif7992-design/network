
import React from 'react';
import { PageId } from '../../types';
import AffiliateDashboard from './AffiliateDashboard';
import AffiliateMarketplace from './AffiliateMarketplace';
import AffiliateTools from './AffiliateTools';
import Reports from '../Reports';
import Resources from '../Resources';
import Finance from '../Finance';

interface AffiliatePortalProps {
  activePage: PageId;
  activeSubPage?: string;
}

const AffiliatePortal: React.FC<AffiliatePortalProps> = ({ activePage, activeSubPage }) => {
  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <AffiliateDashboard />;
      case 'marketplace':
        return <AffiliateMarketplace type="all" />;
      case 'my-offers':
        return <AffiliateMarketplace type="approved" />;
      case 'reports':
        return <Reports initialTab={activeSubPage as any} />;
      case 'finance':
        return <Finance initialTab={activeSubPage} />;
      case 'tools':
        return <AffiliateTools />;
      case 'resources':
        return <Resources initialTab={activeSubPage} />;
      default:
        return <AffiliateDashboard />;
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      {renderContent()}
    </div>
  );
};

export default AffiliatePortal;
