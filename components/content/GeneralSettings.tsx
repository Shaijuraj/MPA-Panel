import React, { useState } from 'react';
import Card from '../ui/Card';
import { SunIcon, MoonIcon, SystemIcon } from '../icons';
import { type Theme } from '../../App';

interface GeneralSettingsProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ theme, setTheme }) => {
    // Local state for settings on this page only
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: false
    });
    const [language, setLanguage] = useState('en-US');

    const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotifications({ ...notifications, [e.target.name]: e.target.checked });
    }

    const themeOptions = [
        { name: 'light' as Theme, icon: SunIcon, label: 'Light' },
        { name: 'dark' as Theme, icon: MoonIcon, label: 'Dark' },
        { name: 'system' as Theme, icon: SystemIcon, label: 'System' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">General Settings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="Appearance">
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Theme</label>
                        <div className="flex space-x-2 rounded-lg bg-gray-100 dark:bg-gray-700 p-1">
                            {themeOptions.map(option => {
                                const Icon = option.icon;
                                return (
                                    <button
                                        key={option.name}
                                        onClick={() => setTheme(option.name)}
                                        className={`flex-1 flex items-center justify-center p-2 rounded-md text-sm font-medium transition-colors ${theme === option.name ? 'bg-white dark:bg-gray-800 text-primary shadow' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                                    >
                                        <Icon className="w-5 h-5 mr-2" />
                                        {option.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </Card>

                <Card title="Language & Region">
                    <div>
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Language
                        </label>
                        <select
                            id="language"
                            name="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                        >
                            <option value="en-US">English (United States)</option>
                            <option value="es-ES">Español (España)</option>
                            <option value="fr-FR">Français (France)</option>
                            <option value="de-DE">Deutsch (Deutschland)</option>
                        </select>
                    </div>
                </Card>

                <Card title="Notification Settings" className="md:col-span-2">
                    <fieldset className="space-y-4">
                        <legend className="text-base font-medium text-gray-900 dark:text-gray-100">Notify me by</legend>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="email" name="email" type="checkbox" checked={notifications.email} onChange={handleNotificationChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="email" className="font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <p className="text-gray-500">Get notified about new features and updates.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="push" name="push" type="checkbox" checked={notifications.push} onChange={handleNotificationChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="push" className="font-medium text-gray-700 dark:text-gray-300">Push Notifications</label>
                                <p className="text-gray-500">Get real-time alerts on your devices.</p>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="sms" name="sms" type="checkbox" checked={notifications.sms} onChange={handleNotificationChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="sms" className="font-medium text-gray-700 dark:text-gray-300">SMS Notifications</label>
                                <p className="text-gray-500">Get important account alerts via text.</p>
                            </div>
                        </div>
                    </fieldset>
                </Card>
                 <div className="md:col-span-2 flex justify-end">
                    <button className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GeneralSettings;