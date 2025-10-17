import React from 'react';
import Overview from '../content/Overview';
import HealthReport from '../content/HealthReport';
import UserRetentionChart from '../content/UserRetentionChart';
import RecipeLibrary from '../content/RecipeLibrary';
import BulkUpload from '../content/BulkUpload';
import AiRecipeAssistant from '../content/AiRecipeAssistant';
import UserList from '../content/UserList';
import UserProfileView from '../content/UserProfileView';
import UserAccountControl from '../content/UserAccountControl';
import AdminRoleList from '../content/AdminRoleList';
import CreateAdmin from '../content/CreateAdmin';
import RolePermissions from '../content/RolePermissions';
import GeneralSettings from '../content/GeneralSettings';
import EmailNotifications from '../content/EmailNotifications';
import ApiIntegrations from '../content/ApiIntegrations';
import SecuritySettings from '../content/SecuritySettings';
import SystemLogs from '../content/SystemLogs';
import SubscriptionPlans from '../content/SubscriptionPlans';
import UserSubscriptions from '../content/UserSubscriptions';
import PaymentsAndCommissions from '../content/PaymentsAndCommissions';
import UserAnalytics from '../content/UserAnalytics';
import DemographicsTrends from '../content/DemographicsTrends';
import CreateTheme from '../content/CreateTheme';
import ThemeControl from '../content/ThemeControl';
import CouponManagement from '../content/CouponManagement';
import AffiliateTracking from '../content/AffiliateTracking';
import InfluencerManagement from '../content/InfluencerManagement';
import PlaceholderContent from '../content/PlaceholderContent';

interface MainContentProps {
  activeItem: string;
  currency: string;
  setCurrency: (currency: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem, currency, setCurrency, language, setLanguage }) => {
  const renderContent = () => {
    switch (activeItem) {
      // Dashboard
      case 'Overview':
        return <Overview language={language} />;
      case 'App/Site Health Report':
        return <HealthReport language={language} />;
      case 'User Retention Chart':
          return <UserRetentionChart language={language} />;
      // Meal Plans
      case 'Recipe Library':
          return <RecipeLibrary language={language} />;
      case 'Bulk Upload':
          return <BulkUpload language={language} />;
      case 'AI Recipe Assistant':
          return <AiRecipeAssistant language={language} />;
      // Analytics
      case 'User Analytics':
          return <UserAnalytics language={language} />;
      case 'Demographics & Trends':
          return <DemographicsTrends language={language} />;
       // Coupons & Affiliates
      case 'Coupon Management':
          return <CouponManagement language={language} currency={currency} />;
      case 'Affiliate Tracking':
          return <AffiliateTracking language={language} currency={currency} />;
      case 'Influencer Management':
          return <InfluencerManagement language={language} />;
      // Themes
      case 'Create / Upload Theme':
          return <CreateTheme language={language} />;
      case 'Theme Control':
          return <ThemeControl language={language} />;
      // Admin Roles
      case 'Admin List':
          return <AdminRoleList language={language} />;
      case 'Create Admin':
          return <CreateAdmin language={language} />;
      case 'Role Permissions':
          return <RolePermissions language={language} />;
      // Settings
      case 'General Settings':
        return <GeneralSettings currency={currency} setCurrency={setCurrency} language={language} setLanguage={setLanguage} />;
      case 'Email & Notifications':
        return <EmailNotifications language={language} />;
      case 'API & Integrations':
        return <ApiIntegrations language={language} />;
      case 'Security Settings':
        return <SecuritySettings language={language} />;
      case 'System Logs':
        return <SystemLogs language={language} />;
      // Users
      case 'User List':
          return <UserList language={language} />;
      case 'Profile View':
          return <UserProfileView language={language} />;
      case 'Account Control':
          return <UserAccountControl language={language} />;
      // Subscriptions
      case 'Subscription Plans':
          return <SubscriptionPlans currency={currency} language={language} />;
      case 'User Subscriptions':
          return <UserSubscriptions language={language} currency={currency} />;
      case 'Payments & Commissions':
          return <PaymentsAndCommissions language={language} currency={currency} />;
      default:
        return <PlaceholderContent title={activeItem} language={language} />;
    }
  };

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      {renderContent()}
    </main>
  );
};

export default MainContent;