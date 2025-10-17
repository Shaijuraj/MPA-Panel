import React, { useState } from 'react';
import Card from '../ui/Card';
import { CheckCircleIcon } from '../icons';

const themes = [
    { id: 1, name: 'Default Dark', primary: '#4f46e5', secondary: '#10b981', background: '#111827' },
    { id: 2, name: 'Ocean Blue', primary: '#0ea5e9', secondary: '#6366f1', background: '#f0f9ff' },
    { id: 3, name: 'Forest Green', primary: '#22c55e', secondary: '#84cc16', background: '#f0fdf4' },
    { id: 4, name: 'Sunset Orange', primary: '#f97316', secondary: '#ef4444', background: '#fff7ed' },
];

const ThemeControl: React.FC = () => {
    const [activeThemeId, setActiveThemeId] = useState(1);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Theme Control</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {themes.map(theme => {
                    const isActive = theme.id === activeThemeId;
                    return (
                        <Card key={theme.id} className={`relative overflow-hidden border-2 ${isActive ? 'border-primary' : 'border-transparent'}`}>
                            {isActive && (
                                <div className="absolute top-2 right-2 flex items-center bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    <CheckCircleIcon className="w-4 h-4 mr-1"/>
                                    Active
                                </div>
                            )}
                            <div className="p-4" style={{ backgroundColor: theme.background }}>
                                <h3 className="font-semibold" style={{ color: theme.primary }}>{theme.name}</h3>
                                <div className="flex space-x-2 mt-4">
                                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: theme.secondary }}></div>
                                    <div className="w-8 h-8 rounded-full border" style={{ backgroundColor: theme.background }}></div>
                                </div>
                            </div>
                             <div className="p-4 bg-white dark:bg-dark-sidebar">
                                <button
                                    onClick={() => setActiveThemeId(theme.id)}
                                    disabled={isActive}
                                    className="w-full py-2 px-4 rounded-md font-semibold text-sm disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-600 bg-primary text-white hover:bg-indigo-700"
                                >
                                    {isActive ? 'Current Theme' : 'Activate'}
                                </button>
                             </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ThemeControl;