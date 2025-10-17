import React from 'react';
import Card from '../ui/Card';

const roles = [
    { id: 1, name: 'Super Admin', description: 'Full access to all system features and settings.', users: 2, permissions: ['All Access'] },
    { id: 2, name: 'Sub Admin', description: 'Can manage users, meal plans, and view basic analytics.', users: 5, permissions: ['Manage Users', 'Manage Meal Plans', 'View Analytics'] },
    { id: 3, name: 'Marketing Admin', description: 'Manages coupons, affiliates, themes, and marketing campaigns.', users: 3, permissions: ['Manage Coupons', 'Manage Affiliates', 'Manage Themes'] },
    { id: 4, name: 'Affiliate Manager', description: 'Manages affiliate and influencer programs and tracks their performance.', users: 10, permissions: ['Manage Affiliates', 'Manage Influencers', 'View Commissions'] },
];

const permissionColors: { [key: string]: string } = {
    'All Access': 'bg-red-200 text-red-800 dark:bg-red-500/20 dark:text-red-300',
    'Manage Users': 'bg-blue-200 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300',
    'Manage Meal Plans': 'bg-green-200 text-green-800 dark:bg-green-500/20 dark:text-green-300',
    'View Analytics': 'bg-indigo-200 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300',
    'Manage Coupons': 'bg-yellow-200 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300',
    'Manage Affiliates': 'bg-purple-200 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300',
    'Manage Themes': 'bg-pink-200 text-pink-800 dark:bg-pink-500/20 dark:text-pink-300',
    'Manage Influencers': 'bg-teal-200 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300',
    'View Commissions': 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200',
};

const AdminRoleList: React.FC = () => {
    return (
        <Card title="Admin Role Management">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Role Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Description</th>
                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Permissions</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Assigned Users</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                        {roles.map(role => (
                            <tr key={role.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{role.name}</div>
                                </td>
                                 <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300 max-w-xs">{role.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex flex-wrap gap-1">
                                    {role.permissions.map(permission => (
                                        <span key={permission} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${permissionColors[permission] || 'bg-gray-200 text-gray-800'}`}>
                                            {permission}
                                        </span>
                                    ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{role.users}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-primary hover:text-indigo-700 dark:hover:text-indigo-400 mr-4">Edit</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 dark:hover:text-red-400">Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default AdminRoleList;