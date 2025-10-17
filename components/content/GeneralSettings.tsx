import React, { useState } from 'react';
import Card from '../ui/Card';
import { ChevronDownIcon } from '../icons';
import { t } from '../../utils/i18n';

interface GeneralSettingsProps {
    currency: string;
    setCurrency: (currency: string) => void;
    language: string;
    setLanguage: (language: string) => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ currency, setCurrency, language, setLanguage }) => {
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: false
    });

    const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotifications({ ...notifications, [e.target.name]: e.target.checked });
    }

    const languageOptions = [
        { value: 'en-US', label: 'English (United States)' },
        { value: 'es-ES', label: 'Español (España)' },
        { value: 'fr-FR', label: 'Français (France)' },
        { value: 'de-DE', label: 'Deutsch (Deutschland)' },
        { value: 'ja-JP', label: '日本語 (Japan)' },
        { value: 'hi-IN', label: 'हिन्दी (India)' },
        { value: 'pt-BR', label: 'Português (Brasil)' },
        { value: 'zh-CN', label: '中文 (Simplified, China)' },
    ];
    
    const currencyOptions = [
        { value: 'USD', label: 'USD - United States Dollar' },
        { value: 'EUR', label: 'EUR - Euro' },
        { value: 'GBP', label: 'GBP - British Pound' },
        { value: 'JPY', label: 'JPY - Japanese Yen' },
        { value: 'CAD', label: 'CAD - Canadian Dollar' },
        { value: 'AUD', label: 'AUD - Australian Dollar' },
        { value: 'INR', label: 'INR - Indian Rupee' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t(language, 'general_settings')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title={t(language, 'language_region')}>
                    <div className="relative">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {t(language, 'language')}
                        </label>
                        <select
                            id="language"
                            name="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="appearance-none mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                        >
                            {languageOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-gray-700 dark:text-gray-300">
                            <ChevronDownIcon className="h-5 w-5" />
                        </div>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                            {t(language, 'current_language_is')} <span className="font-semibold text-gray-800 dark:text-gray-200">{languageOptions.find(l => l.value === language)?.label}</span>
                        </p>
                    </div>
                </Card>

                <Card title={t(language, 'currency')}>
                    <div className="relative">
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {t(language, 'default_currency')}
                        </label>
                        <select
                            id="currency"
                            name="currency"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="appearance-none mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                        >
                            {currencyOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-gray-700 dark:text-gray-300">
                            <ChevronDownIcon className="h-5 w-5" />
                        </div>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                            {t(language, 'currency_description')}
                        </p>
                    </div>
                </Card>

                <Card title={t(language, 'notification_settings')} className="md:col-span-2">
                    <fieldset className="space-y-4">
                        <legend className="text-base font-medium text-gray-900 dark:text-gray-100">{t(language, 'notify_me_by')}</legend>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="email" name="email" type="checkbox" checked={notifications.email} onChange={handleNotificationChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="email" className="font-medium text-gray-700 dark:text-gray-300">{t(language, 'email')}</label>
                                <p className="text-gray-700 dark:text-gray-400">{t(language, 'email_description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="push" name="push" type="checkbox" checked={notifications.push} onChange={handleNotificationChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="push" className="font-medium text-gray-700 dark:text-gray-300">{t(language, 'push_notifications')}</label>
                                <p className="text-gray-700 dark:text-gray-400">{t(language, 'push_description')}</p>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="sms" name="sms" type="checkbox" checked={notifications.sms} onChange={handleNotificationChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="sms" className="font-medium text-gray-700 dark:text-gray-300">{t(language, 'sms_notifications')}</label>
                                <p className="text-gray-700 dark:text-gray-400">{t(language, 'sms_description')}</p>
                            </div>
                        </div>
                    </fieldset>
                </Card>
                 <div className="md:col-span-2 flex justify-end">
                    <button className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        {t(language, 'save_changes')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GeneralSettings;