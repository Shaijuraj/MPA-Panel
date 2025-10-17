import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import AuthPage from './components/auth/AuthPage';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>('App/Site Health Report');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AuthPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="h-screen bg-gray-100 dark:bg-dark-bg text-gray-800 dark:text-gray-200">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} isOpen={isSidebarOpen} onLogout={handleLogout} />
      {/* Main content area resizes with a smooth margin transition to make space for the collapsed or expanded sidebar */}
      <div className={`flex flex-col h-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header onSidebarToggle={handleSidebarToggle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-dark-bg p-4 sm:p-6 md:p-8">
          <MainContent activeItem={activeItem} />
        </main>
      </div>
    </div>
  );
};

export default App;