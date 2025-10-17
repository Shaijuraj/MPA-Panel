import React from 'react';
import HealthReport from '../content/HealthReport';
import UserRetentionChart from '../content/UserRetentionChart';
import RecipeLibrary from '../content/RecipeLibrary';
import AiRecipeAssistant from '../content/AiRecipeAssistant';
import UserList from '../content/UserList';
import PlaceholderContent from '../content/PlaceholderContent';
import AdminRoleList from '../content/AdminRoleList';

interface MainContentProps {
  activeItem: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
      case 'App/Site Health Report':
        return <HealthReport />;
      case 'User Retention Chart':
        return <UserRetentionChart />;
      case 'Recipe Library':
        return <RecipeLibrary />;
      case 'AI Recipe Assistant':
        return <AiRecipeAssistant />;
       case 'User List':
        return <UserList />;
       case 'Admin List':
        return <AdminRoleList />;
      default:
        return <PlaceholderContent title={activeItem} />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default MainContent;
