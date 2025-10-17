import React, { useState } from 'react';
import Card from '../ui/Card';

const initialPermissions = {
    'Manage Users': ['Super Admin', 'Sub Admin'],
    'View Analytics': ['Super Admin', 'Sub Admin', 'Marketing Admin'],
    'Manage Meal Plans': ['Super Admin', 'Sub Admin'],
    'Manage Coupons': ['Super Admin', 'Marketing Admin'],
    'Manage Affiliates': ['Super Admin', 'Marketing Admin', 'Affiliate Manager'],
    'Manage Themes': ['Super Admin', 'Marketing Admin'],
    'Manage Influencers': ['Super Admin', 'Affiliate Manager'],
    'View Commissions': ['Super Admin', 'Affiliate Manager'],
    'Edit System Settings': ['Super Admin'],
};

const allRoles = ['Super Admin', 'Sub Admin', 'Marketing Admin', 'Affiliate Manager'];
const allPermissions = Object.keys(initialPermissions);

const RolePermissions: React.FC = () => {
    const [permissions, setPermissions] = useState(initialPermissions);

    const handlePermissionChange = (permission: string, role: string) => {
        const currentRoles = permissions[permission as keyof typeof permissions];
        let updatedRoles;
        if (currentRoles.includes(role)) {
            updatedRoles = currentRoles.filter(r => r !== role);
        } else {
            updatedRoles = [...currentRoles, role];
        }
        setPermissions(prev => ({ ...prev, [permission]: updatedRoles }));
    };

    return (
        <Card title="Role Permissions">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                Configure which roles have access to specific system features. Super Admin has all permissions by default.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Permission</th>
                            {allRoles.map(role => (
                                <th key={role} className="px-6 py-3 text-center text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">{role}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                        {allPermissions.map(permission => (
                            <tr key={permission}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{permission}</td>
                                {allRoles.map(role => (
                                    <td key={role} className="px-6 py-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded disabled:opacity-50"
                                            checked={permissions[permission as keyof typeof permissions].includes(role)}
                                            onChange={() => handlePermissionChange(permission, role)}
                                            disabled={role === 'Super Admin'}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Save Permissions
                </button>
            </div>
        </Card>
    );
};

export default RolePermissions;