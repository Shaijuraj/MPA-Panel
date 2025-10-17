import React from 'react';
import Overview from '../content/Overview';
import HealthReport from '../content/HealthReport';
import UserRetentionChart from '../content/UserRetentionChart';
import RecipeLibrary from '../content/RecipeLibrary';
import AiRecipeAssistant from '../content/AiRecipeAssistant';
import UserList from '../content/UserList';
import AdminRoleList from '../content/AdminRoleList';
import GeneralSettings from '../content/GeneralSettings';
import EmailNotifications from '../content/EmailNotifications';
import ApiIntegrations from '../content/ApiIntegrations';
import SecuritySettings from '../content/SecuritySettings';
import SystemLogs from '../content/SystemLogs';
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
