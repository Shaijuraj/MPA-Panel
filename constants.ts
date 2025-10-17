import { type NavItem } from './types';
import { DashboardIcon, MealPlansIcon, AnalyticsIcon, CouponsIcon, ThemesIcon, AdminRolesIcon, SettingsIcon, UsersIcon, SubscriptionsIcon } from './components/icons';

export const NAV_ITEMS: NavItem[] = [
  {
    name: 'Dashboard',
    translationKey: 'dashboard',
    icon: DashboardIcon,
    subMenu: [
      { name: 'Overview', translationKey: 'overview' },
      { name: 'App/Site Health Report', translationKey: 'health_report' },
      { name: 'User Retention Chart', translationKey: 'user_retention_chart' },
    ],
  },
  {
    name: 'Meal Plans',
    translationKey: 'meal_plans',
    icon: MealPlansIcon,
    subMenu: [
      { name: 'Recipe Library', translationKey: 'recipe_library' },
      { name: 'Bulk Upload', translationKey: 'bulk_upload' },
      { name: 'AI Recipe Assistant', translationKey: 'ai_recipe_assistant' },
    ],
  },
  {
    name: 'Analytics',
    translationKey: 'analytics',
    icon: AnalyticsIcon,
    subMenu: [
      { name: 'User Analytics', translationKey: 'user_analytics' },
      { name: 'Demographics & Trends', translationKey: 'demographics_trends' },
    ],
  },
  {
    name: 'Coupons & Affiliates',
    translationKey: 'coupons_affiliates',
    icon: CouponsIcon,
    subMenu: [
      { name: 'Coupon Management', translationKey: 'coupon_management' },
      { name: 'Affiliate Tracking', translationKey: 'affiliate_tracking' },
      { name: 'Influencer Management', translationKey: 'influencer_management' },
    ],
  },
  {
    name: 'Themes',
    translationKey: 'themes',
    icon: ThemesIcon,
    subMenu: [
      { name: 'Create / Upload Theme', translationKey: 'create_upload_theme' },
      { name: 'Theme Control', translationKey: 'theme_control' },
    ],
  },
  {
    name: 'Admin Roles',
    translationKey: 'admin_roles',
    icon: AdminRolesIcon,
    subMenu: [
      { name: 'Admin List', translationKey: 'admin_list' },
      { name: 'Create Admin', translationKey: 'create_admin' },
      { name: 'Role Permissions', translationKey: 'role_permissions' },
    ],
  },
  {
    name: 'Settings',
    translationKey: 'settings',
    icon: SettingsIcon,
    subMenu: [
      { name: 'General Settings', translationKey: 'general_settings' },
      { name: 'Email & Notifications', translationKey: 'email_notifications' },
      { name: 'API & Integrations', translationKey: 'api_integrations' },
      { name: 'Security Settings', translationKey: 'security_settings' },
      { name: 'System Logs', translationKey: 'system_logs' },
    ],
  },
  {
    name: 'Users',
    translationKey: 'users',
    icon: UsersIcon,
    subMenu: [
      { name: 'User List', translationKey: 'user_list' },
      { name: 'Profile View', translationKey: 'profile_view' },
      { name: 'Account Control', translationKey: 'account_control' },
    ],
  },
  {
    name: 'Subscriptions',
    translationKey: 'subscriptions',
    icon: SubscriptionsIcon,
    subMenu: [
      { name: 'Subscription Plans', translationKey: 'subscription_plans' },
      { name: 'User Subscriptions', translationKey: 'user_subscriptions' },
      { name: 'payments_commissions', translationKey: 'payments_commissions' },
    ],
  },
];