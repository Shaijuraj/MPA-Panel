import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import AuthPage from './components/auth/AuthPage';

export type Theme = 'light' | 'dark' | 'system';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Overview');
  
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      const isDark =
        theme === 'dark' || (theme === 'system' && mediaQuery.matches);

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    };

    updateTheme();

    mediaQuery.addEventListener('change', updateTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, [theme]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  if (!isAuthenticated) {
    return <AuthPage onLoginSuccess={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark-bg text-gray-800 dark:text-gray-200">
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeItem={activeItem} 
        setActiveItem={setActiveItem}
        onLogout={handleLogout}
      />
      <div className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header onSidebarToggle={toggleSidebar} />
        <MainContent 
          activeItem={activeItem} 
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </div>
  );
}

export default App;