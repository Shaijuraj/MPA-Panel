import React from 'react';
import Card from '../ui/Card';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Premium', status: 'Active', lastLogin: '2023-07-28 10:00:15' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Free', status: 'Active', lastLogin: '2023-07-27 15:30:00' },
  { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Premium', status: 'Suspended', lastLogin: '2023-07-20 11:12:45' },
  { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Premium', status: 'Active', lastLogin: '2023-07-28 09:05:10' },
  { id: 5, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-07-28 12:00:00' },
  { id: 6, name: 'Charlie Davis', email: 'charlie.d@example.com', role: 'Free', status: 'Banned', lastLogin: '2023-06-01 18:45:33' },
];

const UserAccountControl: React.FC = () => {
  return (
    <Card title="Account Control">
        <p className="text-gray-700 dark:text-gray-300 mb-4">Perform administrative actions on user accounts.</p>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Last Login</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                {users.map(user => (
                <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                        user.status === 'Suspended' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                    }`}>
                        {user.status}
                    </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{user.lastLogin}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-yellow-600 hover:text-yellow-900">Suspend</button>
                        <button className="text-red-600 hover:text-red-900">Ban</button>
                        <button className="text-primary hover:text-indigo-900">Change Role</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </Card>
  );
};

export default UserAccountControl;