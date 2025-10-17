import React from 'react';
import { SearchIcon, BellIcon, MenuIcon } from '../icons';
import { t } from '../../utils/i18n';

interface HeaderProps {
  onSidebarToggle: () => void;
  language: string;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle, language }) => {
  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white dark:bg-dark-sidebar border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
      <div className="flex items-center">
        <button onClick={onSidebarToggle} className="text-gray-500 focus:outline-none focus:text-gray-700">
           <MenuIcon className="h-6 w-6" />
        </button>
        <div className="relative ml-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={`${t(language, 'search')}...`}
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full"></span>
        </button>
        <div className="ml-4 flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://picsum.photos/100/100"
            alt="User avatar"
          />
          <div className="ml-2 hidden sm:block">
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">admin@mealpro.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;