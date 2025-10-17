import React from 'react';
import Overview from '../content/Overview';
import HealthReport from '../content/HealthReport';
import UserRetentionChart from '../content/UserRetentionChart';
import RecipeLibrary from '../content/RecipeLibrary';
import AiRecipeAssistant from '../content/AiRecipeAssistant';
import UserList from '../content/UserList';
import UserProfileView from '../content/UserProfileView';
import UserAccountControl from '../content/UserAccountControl';
import AdminRoleList from '../content/AdminRoleList';
import GeneralSettings from '../content/GeneralSettings';
import EmailNotifications from '../content/EmailNotifications';
import ApiIntegrations from '../content/ApiIntegrations';
import SecuritySettings from '../content/SecuritySettings';
import SystemLogs from '../content/SystemLogs';
import SubscriptionPlans from '../content/SubscriptionPlans';
import UserSubscriptions from '../content/UserSubscriptions';
import PaymentsAndCommissions from '../content/PaymentsAndCommissions';
import PlaceholderContent from '../content/PlaceholderContent';
import { type Theme } from '../../App';

interface MainContentProps {
  activeItem: string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem, theme, setTheme }) => {
  const renderContent = () => {
    switch (activeItem) {
      // Dashboard
      case 'Overview':
        return <Overview />;
      case 'App/Site Health Report':
        return <HealthReport />;
      case 'User Retention Chart':
          return <UserRetentionChart />;
      // Meal Plans
      case 'Recipe Library':
          return <RecipeLibrary />;
      case 'AI Recipe Assistant':
          return <AiRecipeAssistant />;
      // Users
      case 'User List':
          return <UserList />;
      case 'Profile View':
          return <UserProfileView />;
      case 'Account Control':
          return <UserAccountControl />;
      // Admin Roles
      case 'Admin List':
          return <AdminRoleList />;
      // Settings
      case 'General Settings':
        return <GeneralSettings theme={theme} setTheme={setTheme} />;
      case 'Email & Notifications':
        return <EmailNotifications />;
      case 'API & Integrations':
        return <ApiIntegrations />;
      case 'Security Settings':
        return <SecuritySettings />;
      case 'System Logs':
        return <SystemLogs />;
      // Subscriptions
      case 'Subscription Plans':
          return <SubscriptionPlans />;
      case 'User Subscriptions':
          return <UserSubscriptions />;
      case 'Payments & Commissions':
          return <PaymentsAndCommissions />;
      default:
        return <PlaceholderContent title={activeItem} />;
    }
  };

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      {renderContent()}
    </main>
  );
};

export default MainContent;