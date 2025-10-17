import React, { useState } from 'react';
import Card from '../ui/Card';
import { ShieldCheckIcon } from '../icons';

const SecuritySettings: React.FC = () => {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Security Settings</h1>
            <div className="grid grid-cols-1 gap-8">
                <Card title="Two-Factor Authentication (2FA)">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-semibold">Enable 2FA</h4>
                            <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                        </div>
                        <label htmlFor="two-factor-toggle" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    id="two-factor-toggle"
                                    className="sr-only"
                                    checked={twoFactorEnabled}
                                    onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                                />
                                <div className="block bg-gray-200 dark:bg-gray-600 w-14 h-8 rounded-full"></div>
                                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${twoFactorEnabled ? 'transform translate-x-6 bg-primary' : ''}`}></div>
                            </div>
                        </label>
                    </div>
                     {twoFactorEnabled && (
                        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 text-green-700 dark:text-green-300">
                            <p className="font-bold">2FA is enabled.</p>
                            <p className="text-sm">Your account is protected with an additional security layer.</p>
                        </div>
                    )}
                </Card>

                 <Card title="Password Management">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Current Password</label>
                            <input type="password" className="mt-1 block w-full rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-sm" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium">New Password</label>
                            <input type="password" className="mt-1 block w-full rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-sm" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium">Confirm New Password</label>
                            <input type="password" className="mt-1 block w-full rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-sm" />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-indigo-700">
                                Change Password
                            </button>
                        </div>
                    </form>
                 </Card>

                 <Card title="Active Sessions">
                    <p className="text-gray-500 mb-4">This is a list of devices that have logged into your account.</p>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                            <div>
                                <p className="font-semibold">Chrome on macOS</p>
                                <p className="text-xs text-gray-400">Current session - San Francisco, US</p>
                            </div>
                            <button className="text-sm text-primary">Details</button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                            <div>
                                <p className="font-semibold">MealPro App on iOS</p>
                                <p className="text-xs text-gray-400">2 days ago - New York, US</p>
                            </div>
                            <button className="text-sm text-red-500 hover:text-red-700">Log out</button>
                        </div>
                    </div>
                 </Card>
            </div>
        </div>
    );
};

export default SecuritySettings;
