
import { type NavItem } from './types';
import { DashboardIcon, MealPlansIcon, AnalyticsIcon, CouponsIcon, ThemesIcon, AdminRolesIcon, SettingsIcon, UsersIcon, SubscriptionsIcon } from './components/icons';

export const NAV_ITEMS: NavItem[] = [
  {
    name: 'Dashboard',
    icon: DashboardIcon,
    subMenu: [
      { name: 'App/Site Health Report' },
      { name: 'User Retention Chart' },
    ],
  },
  {
    name: 'Meal Plans',
    icon: MealPlansIcon,
    subMenu: [
      { name: 'Recipe Library' },
      { name: 'Bulk Upload' },
      { name: 'AI Recipe Assistant' },
    ],
  },
  {
    name: 'Analytics',
    icon: AnalyticsIcon,
    subMenu: [
      { name: 'User Analytics' },
      { name: 'Demographics & Trends' },
    ],
  },
  {
    name: 'Coupons & Affiliates',
    icon: CouponsIcon,
    subMenu: [
      { name: 'Coupon Management' },
      { name: 'Affiliate Tracking' },
      { name: 'Influencer Management' },
    ],
  },
  {
    name: 'Themes',
    icon: ThemesIcon,
    subMenu: [
      { name: 'Create / Upload Theme' },
      { name: 'Theme Control' },
    ],
  },
  {
    name: 'Admin Roles',
    icon: AdminRolesIcon,
    subMenu: [
      { name: 'Admin List' },
      { name: 'Create Admin' },
      { name: 'Role Permissions' },
    ],
  },
  {
    name: 'Settings',
    icon: SettingsIcon,
    subMenu: [
      { name: 'General Settings' },
      { name: 'Email & Notifications' },
      { name: 'API & Integrations' },
      { name: 'Security Settings' },
      { name: 'System Logs' },
    ],
  },
  {
    name: 'Users',
    icon: UsersIcon,
    subMenu: [
      { name: 'User List' },
      { name: 'Profile View' },
      { name: 'Account Control' },
    ],
  },
  {
    name: 'Subscriptions',
    icon: SubscriptionsIcon,
    subMenu: [
      { name: 'Subscription Plans' },
      { name: 'User Subscriptions' },
      { name: 'Payments & Commissions' },
    ],
  },
];
