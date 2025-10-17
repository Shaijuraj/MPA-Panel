import React, { useState } from 'react';
import { NAV_ITEMS } from '../../constants';
import { type NavItem } from '../../types';
import { ChevronDownIcon, MealPlansIcon, LogoutIcon } from '../icons';

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isOpen: boolean;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem, isOpen, onLogout }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({ 'Dashboard': true });

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    // The sidebar now animates its width instead of transforming off-screen
    <aside className={`bg-dark-sidebar text-gray-300 flex flex-col fixed inset-y-0 left-0 z-30
                       transition-all duration-300 ease-in-out 
                       ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className={`flex items-center h-20 border-b border-gray-700 flex-shrink-0 transition-all duration-300 ${isOpen ? 'justify-start px-4' : 'justify-center'}`}>
        <MealPlansIcon className="h-8 w-8 text-primary flex-shrink-0" />
        <span className={`ml-3 text-2xl font-bold text-white whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          MealPro
        </span>
      </div>
      {/* Nav container now scrolls vertically if content overflows */}
      <nav className="flex-1 mt-4 px-2 overflow-y-auto overflow-x-hidden pb-4">
        {NAV_ITEMS.map((item) => (
          <div key={item.name}>
            <div
              className={`relative group flex items-center p-3 my-1 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-700 hover:text-white
              ${activeItem === item.name && !item.subMenu ? 'bg-primary text-white' : ''}
              ${isOpen ? 'justify-between' : 'justify-center'}`}
              onClick={() => {
                if (isOpen && item.subMenu) {
                  toggleMenu(item.name);
                } else if (!item.subMenu) {
                  setActiveItem(item.name);
                }
              }}
            >
              <div className="flex items-center">
                <item.icon className="h-5 w-5 flex-shrink-0" />
                 <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? 'w-40 ml-4' : 'w-0'}`}>
                  {item.name}
                 </span>
              </div>
              {item.subMenu && (
                <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${openMenus[item.name] ? 'rotate-180' : ''} ${!isOpen ? 'hidden' : ''}`} />
              )}
              {/* Tooltip for collapsed state */}
              {!isOpen && (
                <span className="absolute left-full ml-4 px-2 py-1 text-sm bg-gray-900 text-white rounded-md whitespace-nowrap
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.name}
                </span>
              )}
            </div>
            {/* Sub-menu only shows when sidebar is open */}
            {isOpen && item.subMenu && openMenus[item.name] && (
              <ul className="pl-8 py-1 transition-all duration-500 ease-in-out">
                {item.subMenu.map((subItem) => (
                  <li
                    key={subItem.name}
                    className={`p-2 my-1 text-sm rounded-md cursor-pointer transition-colors duration-200 whitespace-nowrap
                    ${activeItem === subItem.name ? 'bg-primary text-white' : 'hover:bg-gray-700 hover:text-white'}`}
                    onClick={() => setActiveItem(subItem.name)}
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
      {/* Logout button at the bottom */}
      <div className="mt-auto p-2 border-t border-gray-700">
          <div
              onClick={onLogout}
              className={`relative group flex items-center p-3 my-1 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-700 hover:text-white
              ${isOpen ? 'justify-start' : 'justify-center'}`}
            >
              <LogoutIcon className="h-5 w-5 flex-shrink-0" />
               <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? 'w-40 ml-4' : 'w-0'}`}>
                Logout
               </span>
              {/* Tooltip for collapsed state */}
              {!isOpen && (
                <span className="absolute left-full ml-4 px-2 py-1 text-sm bg-gray-900 text-white rounded-md whitespace-nowrap
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Logout
                </span>
              )}
            </div>
      </div>
    </aside>
  );
};

export default Sidebar;