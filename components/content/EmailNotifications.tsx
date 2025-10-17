import React, { useState } from 'react';
import Card from '../ui/Card';

const EmailNotifications: React.FC = () => {
    const [templates, setTemplates] = useState([
        { id: 1, name: 'Welcome Email', status: 'Active' },
        { id: 2, name: 'Password Reset', status: 'Active' },
        { id: 3, name: 'Subscription Renewal Reminder', status: 'Inactive' },
        { id: 4, name: 'New Recipe Alert', status: 'Active' },
    ]);

    const toggleStatus = (id: number) => {
        setTemplates(templates.map(t => t.id === id ? { ...t, status: t.status === 'Active' ? 'Inactive' : 'Active' } : t));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Email & Notifications</h1>
            <Card title="Email Templates">
                <p className="text-gray-700 dark:text-gray-300 mb-4">Enable or disable automated email notifications sent to users.</p>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Template Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Status</th>
                                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                            {templates.map(template => (
                                <tr key={template.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{template.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${template.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                                            {template.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-primary hover:text-indigo-700 dark:hover:text-indigo-400 mr-4">Edit</a>
                                        <button onClick={() => toggleStatus(template.id)} className={`font-semibold ${template.status === 'Active' ? 'text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300' : 'text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300'}`}>
                                            {template.status === 'Active' ? 'Disable' : 'Enable'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default EmailNotifications;