
import React from 'react';
import { 
  LayoutDashboard, BarChart3, Users, Briefcase, UserCog, Tag, Zap, RotateCw, Link2, 
  CreditCard, ShieldAlert, PieChart, Webhook, Key, Settings, FileCheck, 
  Image as ImageIcon, Cpu, ChevronRight, MessageSquare, BookOpen, Activity, 
  Layers, Network, Share2, ShoppingBag, ListChecks, Tool, Wallet, Target,
  LifeBuoy, History, Eye, ShieldCheck, Fingerprint, MousePointer2, Gavel,
  FileDigit, Send, Monitor, Radio, List
} from 'lucide-react';
import { PageId, Stat, Affiliate, Offer, Advertiser, Tenant } from './types';

// GLOBAL: Every role needs Click Logs
const CLICK_LOGS_NAV = { id: 'conversions' as PageId, icon: <List size={20} />, label: 'CLICKS & EVENTS', subItems: [] };

export const SIDEBAR_NAV = [
  { id: 'dashboard' as PageId, icon: <LayoutDashboard size={20} />, label: 'DASHBOARD', subItems: [] },
  { id: 'tenants' as PageId, icon: <Network size={20} />, label: 'PLATFORM TENANTS', subItems: ['Instances', 'Packages', 'Domains'] },
  { id: 'reports' as PageId, icon: <BarChart3 size={20} />, label: 'REPORTS', subItems: ['Performance', 'Conversions', 'Advertiser', 'Affiliate', 'Real-time', 'Custom Builder', 'Scheduled', 'Geographic', 'Device'] },
  { id: 'affiliates' as PageId, icon: <Users size={20} />, label: 'AFFILIATES', subItems: ['Directory', 'Approvals', 'Referral Program', 'Tiers', 'Payouts'] },
  { id: 'advertisers' as PageId, icon: <Briefcase size={20} />, label: 'ADVERTISERS', subItems: ['Directory', 'Approvals', 'Billing', 'IO Manager'] },
  { id: 'offers' as PageId, icon: <Tag size={20} />, label: 'OFFERS', subItems: ['Marketplace', 'Approval Queue', 'Visibility Rules', 'Caps & Goals'] },
  { id: 'campaigns' as PageId, icon: <Zap size={20} />, label: 'CAMPAIGNS', subItems: ['Tracking Links', 'SmartLinks', 'Rotations'] },
  { id: 'communication' as PageId, icon: <MessageSquare size={20} />, label: 'COMMUNICATION', subItems: ['Announcements', 'Support Tickets', 'Email Center'] },
  { id: 'resources' as PageId, icon: <BookOpen size={20} />, label: 'RESOURCES', subItems: ['Library', 'Tutorials', 'API Docs'] },
  CLICK_LOGS_NAV,
  { id: 'postbacks' as PageId, icon: <Share2 size={20} />, label: 'POSTBACKS', subItems: ['Relay Flow', 'Parameter Mapping', 'Partner Config', 'Signal History'] },
  { id: 'creatives' as PageId, icon: <ImageIcon size={20} />, label: 'CREATIVES', subItems: ['Banners', 'Landers', 'Prelanders'] },
  { id: 'finance' as PageId, icon: <CreditCard size={20} />, label: 'FINANCE', subItems: ['Wallet', 'Payout History', 'Commission Rules'] },
  { id: 'automation' as PageId, icon: <Cpu size={20} />, label: 'AUTOMATION', subItems: ['Smart Rules', 'Webhooks', 'Alerts'] },
  { id: 'fraud' as PageId, icon: <ShieldAlert size={20} />, label: 'FRAUD DETECTION', subItems: ['Scoreboard', 'Click Validation'] },
  { id: 'compliance' as PageId, icon: <ShieldCheck size={20} />, label: 'COMPLIANCE', subItems: ['KYC/Docs', 'Tax Forms', 'GDPR'] },
  { id: 'employees' as PageId, icon: <UserCog size={20} />, label: 'INTERNAL STAFF', subItems: ['Directory', 'Audit Trail', 'Roles'] },
  { id: 'settings' as PageId, icon: <Settings size={20} />, label: 'SETTINGS', subItems: ['Account', 'Security', 'White Label'] },
];

export const AFFILIATE_NAV = [
  { id: 'dashboard' as PageId, icon: <LayoutDashboard size={20} />, label: 'DASHBOARD', subItems: [] },
  { id: 'marketplace' as PageId, icon: <ShoppingBag size={20} />, label: 'OFFER MARKETPLACE', subItems: [] },
  { id: 'my-offers' as PageId, icon: <ListChecks size={20} />, label: 'MY OFFERS', subItems: [] },
  CLICK_LOGS_NAV,
  { id: 'reports' as PageId, icon: <BarChart3 size={20} />, label: 'REPORTS', subItems: ['Daily', 'Conversion Log'] },
  { id: 'finance' as PageId, icon: <CreditCard size={20} />, label: 'PAYOUTS', subItems: ['Balance', 'Invoices'] },
  { id: 'tools' as PageId, icon: <Key size={20} />, label: 'TOOLS', subItems: ['API Keys', 'Global Postback'] },
];

export const ADVERTISER_NAV = [
  { id: 'dashboard' as PageId, icon: <LayoutDashboard size={20} />, label: 'DASHBOARD', subItems: [] },
  { id: 'offers' as PageId, icon: <Tag size={20} />, label: 'OFFER MANAGEMENT', subItems: ['Active', 'Paused', 'Create New'] },
  CLICK_LOGS_NAV,
  { id: 'reports' as PageId, icon: <BarChart3 size={20} />, label: 'ROI ANALYSIS', subItems: ['Spend Report', 'Conversions'] },
  { id: 'budget' as PageId, icon: <Wallet size={20} />, label: 'BUDGET & BILLING', subItems: ['Wallet Balance', 'Add Funds'] },
  { id: 'pixels' as PageId, icon: <Target size={20} />, label: 'PIXEL CENTER', subItems: ['Inbound Postbacks', 'Fire Test'] },
];

export const FINANCE_NAV = [
  { id: 'dashboard' as PageId, icon: <LayoutDashboard size={20} />, label: 'LEDGER SUMMARY', subItems: [] },
  { id: 'finance' as PageId, icon: <CreditCard size={20} />, label: 'PAYOUT ENGINE', subItems: ['Pending Cycles', 'Mass Settlement'] },
  { id: 'reports' as PageId, icon: <BarChart3 size={20} />, label: 'TAX & AUDIT', subItems: ['Tax Forms', 'Global Ledger'] },
  CLICK_LOGS_NAV,
  { id: 'advertisers' as PageId, icon: <Briefcase size={20} />, label: 'ADV ACCOUNTS', subItems: ['Account Receivables', 'Invoices'] },
];

export const AM_NAV = [
  { id: 'dashboard' as PageId, icon: <LayoutDashboard size={20} />, label: 'MY PORTFOLIO', subItems: [] },
  { id: 'affiliates' as PageId, icon: <Users size={20} />, label: 'MY AFFILIATES', subItems: ['Directory', 'Approvals Queue'] },
  { id: 'offers' as PageId, icon: <Tag size={20} />, label: 'OFFER CATALOG', subItems: ['Recommended', 'Marketplace'] },
  CLICK_LOGS_NAV,
  { id: 'reports' as PageId, icon: <BarChart3 size={20} />, label: 'GROWTH REPORTS', subItems: ['Performance', 'Retention'] },
  { id: 'communication' as PageId, icon: <MessageSquare size={20} />, label: 'CHAT & TICKETS', subItems: [] },
];

export const SUPPORT_NAV = [
  { id: 'dashboard' as PageId, icon: <LayoutDashboard size={20} />, label: 'SUPPORT HUD', subItems: [] },
  { id: 'tickets' as PageId, icon: <MessageSquare size={20} />, label: 'OPEN TICKETS', subItems: ['Unassigned', 'Priority'] },
  { id: 'guide' as PageId, icon: <LifeBuoy size={20} />, label: 'PLATFORM GUIDE', subItems: [] },
  CLICK_LOGS_NAV,
  { id: 'tenants' as PageId, icon: <Network size={20} />, label: 'TENANT HEALTH', subItems: ['Status Map', 'Error Logs'] },
];

export const MOCK_TENANTS: Tenant[] = [
  { id: 'TEN-001', adminName: 'Global Ad Group', domain: 'track.logicpulse.io', package: 'Enterprise', status: 'active', created: '2023-01-10', revenue: '$1.4M' },
  { id: 'TEN-002', adminName: 'Growth Alpha', domain: 'g.logicpulse-media.com', package: 'Scale', status: 'active', created: '2023-05-15', revenue: '$450k' },
  { id: 'TEN-003', adminName: 'Pure Performance', domain: 'tracking.pure.net', package: 'Core', status: 'pending', created: '2024-02-01', revenue: '$0' },
];

export const MOCK_STATS: Stat[] = [
  { label: 'Network Revenue', value: '$128,430', change: 12.5, trend: 'up' },
  { label: 'Payout to Affs', value: '$92,104', change: 8.2, trend: 'up' },
  { label: 'Net Profit', value: '$36,326', change: 14.2, trend: 'up', isProfit: true },
  { label: 'Avg Margin', value: '28.3%', change: 2.1, trend: 'up' },
  { label: 'Network EPC', value: '$1.84', change: 4.3, trend: 'up' },
  { label: 'Postback Success', value: '99.9%', change: 0.1, trend: 'up' },
];

export const MOCK_AFFILIATE_STATS: Stat[] = [
  { label: 'Unpaid Balance', value: '$12,400', change: 15.2, trend: 'up' },
  { label: 'Pending Earnings', value: '$4,105', change: 5.4, trend: 'up' },
  { label: 'Today Revenue', value: '$1,204', change: 12.1, trend: 'up' },
  { label: 'Conversion Rate', value: '4.2%', change: 0.5, trend: 'up' },
  { label: 'EPC', value: '$1.45', change: 2.4, trend: 'up' },
  { label: 'Total Clicks', value: '85,420', change: 8.2, trend: 'up' },
];

export const MOCK_CHART_DATA = [
  { name: '08:00', revenue: 4000, profit: 1200, conversions: 240, prevRevenue: 3800 },
  { name: '10:00', revenue: 3000, profit: 900, conversions: 180, prevRevenue: 4200 },
  { name: '12:00', revenue: 6500, profit: 2100, conversions: 420, prevRevenue: 5100 },
  { name: '14:00', revenue: 8000, profit: 2400, conversions: 510, prevRevenue: 7200 },
  { name: '16:00', revenue: 7200, profit: 1900, conversions: 480, prevRevenue: 6800 },
  { name: '18:00', revenue: 9500, profit: 3100, conversions: 610, prevRevenue: 8900 },
  { name: '20:00', revenue: 11000, profit: 3800, conversions: 720, prevRevenue: 10500 },
];

export const MOCK_CHANNEL_DATA = [
  { name: 'Search', value: 40, color: '#3b82f6' },
  { name: 'Social', value: 30, color: '#10b981' },
  { name: 'Native', value: 20, color: '#8b5cf6' },
  { name: 'Email', value: 10, color: '#f59e0b' },
];

export const MOCK_ADVERTISERS: Advertiser[] = [
  { id: 'ADV-001', name: 'CyberShield Global', status: 'active', offers: 12, spend: '$85,200', balance: '$4,200', manager: 'John Doe', contact: { name: 'Mark Spencer', email: 'mark@cybershield.com', phone: '+1 555-0123' } },
  { id: 'ADV-002', name: 'Fintech Flow', status: 'active', offers: 4, spend: '$42,000', balance: '$12,500', manager: 'Alex Kim', contact: { name: 'Sarah Miller', email: 'sarah@fintechflow.io', phone: '+1 555-0199' } },
];

export const MOCK_OFFERS: Offer[] = [
  { id: 'OFF-101', title: 'VPN Master Pro - WW', category: 'Software', payout: '$15.00 CPA', status: 'active', geo: ['US', 'UK'], conversionRate: '4.2%', visibility: 'Public', caps: { daily: 500, resetAt: '00:00 UTC' } },
];

export const MOCK_AFFILIATES: Affiliate[] = [
  { id: 'AFF-001', name: 'Elite Performance', status: 'active', manager: 'John Doe', conversions: 1240, payout: '$15,400', revenue: '$18,200', tier: 'Platinum', billingSchedule: 'Weekly' },
];

export const MOCK_MANAGERS = [
  { name: 'John Doe', portfolio: '$450k', growth: '+12%', type: 'AM' },
];

export const MOCK_FRAUD_ALERTS = [
  { id: 'FR-001', reason: 'Bot Traffic Pattern', source: 'AFF-002', timestamp: '10m ago', score: 94 },
];

export const MOCK_CREATIVES = [
  { id: 'CRT-001', title: 'VPN Summer Promo 728x90', type: 'banner', previewUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=100&fit=crop', size: '728x90' },
];
