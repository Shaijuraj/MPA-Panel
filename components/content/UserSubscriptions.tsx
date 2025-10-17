import React from 'react';
import Card from '../ui/Card';

const subscriptions = [
    { id: 1, userName: 'John Doe', plan: 'Pro Plan', status: 'Active', startDate: '2023-01-15', nextBilling: '2024-08-15', amount: '$9.99' },
    { id: 2, userName: 'Sam Wilson', plan: 'Gym Plan', status: 'Active', startDate: '2023-03-10', nextBilling: '2024-08-10', amount: '$19.99' },
    { id: 3, userName: 'Alice Johnson', plan: 'Gym Plan', status: 'Canceled', startDate: '2023-04-05', nextBilling: 'N/A', amount: '$19.99' },
    { id: 4, userName: 'Michael Scott', plan: 'Nutritionist Plan', status: 'Active', startDate: '2023-05-01', nextBilling: '2024-08-01', amount: '$29.99' },
    { id: 5, userName: 'Pam Beesly', plan: 'Pro Plan', status: 'Past Due', startDate: '2023-06-20', nextBilling: '2024-07-20', amount: '$9.99' },
];

const UserSubscriptions: React.FC = () => {
    return (
        <Card title="User Subscriptions">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Plan</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Next Billing</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Amount</th>
                            <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                        {subscriptions.map(sub => (
                            <tr key={sub.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{sub.userName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{sub.plan}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        sub.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                                        sub.status === 'Canceled' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                                        'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                                    }`}>
                                        {sub.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{sub.nextBilling}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{sub.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-primary hover:text-indigo-900">Manage</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default UserSubscriptions;