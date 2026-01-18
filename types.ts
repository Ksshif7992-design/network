
export type PageId = 
  | 'dashboard' 
  | 'reports' 
  | 'affiliates' 
  | 'advertisers'
  | 'employees'
  | 'offers' 
  | 'campaigns' 
  | 'conversions' 
  | 'tracking' 
  | 'finance' 
  | 'fraud' 
  | 'analytics' 
  | 'postbacks' 
  | 'automation'
  | 'api' 
  | 'communication'
  | 'resources'
  | 'compliance'
  | 'creatives'
  | 'tenants'
  | 'settings'
  | 'marketplace'
  | 'my-offers'
  | 'payouts'
  | 'tools'
  // Advertiser specific
  | 'budget'
  | 'pixels'
  // Support specific
  | 'tickets'
  | 'guide';

export type UserRole = 'ADMIN' | 'AFFILIATE' | 'ADVERTISER' | 'FINANCE' | 'AM' | 'SUPPORT';

export type ReportView = 'performance' | 'conversions' | 'geographic' | 'device' | 'advertiser' | 'affiliate' | 'realtime' | 'custom' | 'scheduled';

export type Dimension = 'Offer' | 'Affiliate' | 'Advertiser' | 'Country' | 'Source' | 'Manager' | 'Device';

export interface Tenant {
  id: string;
  adminName: string;
  domain: string;
  package: 'Core' | 'Scale' | 'Enterprise';
  status: 'active' | 'pending' | 'suspended';
  created: string;
  revenue: string;
}

export interface Stat {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  isProfit?: boolean;
  prevValue?: string;
}

export interface Affiliate {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'suspended';
  manager: string;
  conversions: number;
  payout: string;
  revenue: string;
  tier: 'Gold' | 'Silver' | 'Platinum';
  billingSchedule: 'Weekly' | 'Bi-Weekly' | 'Monthly';
}

export interface Advertiser {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'onboarding';
  offers: number;
  spend: string;
  balance: string;
  manager: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface Offer {
  id: string;
  title: string;
  category: string;
  payout: string;
  status: 'active' | 'paused' | 'archived';
  geo: string[];
  conversionRate: string;
  visibility: 'Public' | 'Private' | 'Permission Required';
  targeting?: {
    devices: string[];
    os: string[];
    connection: 'all' | 'wifi' | 'cellular';
  };
  caps: {
    daily: number;
    hourly?: number;
    resetAt: string;
  };
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: string;
  action: string;
  active: boolean;
}
