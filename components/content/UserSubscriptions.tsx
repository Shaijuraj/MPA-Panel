import React from 'react';
import Card from '../ui/Card';
import { formatCurrency } from '../../utils/formatting';
import { t } from '../../utils/i18n';

const subscriptions = [
    { id: 1, userName: 'John Doe', plan: 'Pro Plan', status: 'Active', nextBilling: '2024-08-15', amount: 9.99 },
    { id: 2, userName: 'Sam Wilson', plan: 'Gym Plan', status: 'Active', nextBilling: '2024-08-10', amount: 19.99 },
    { id: 3, userName: 'Alice Johnson', plan: 'Gym Plan', status: 'Canceled', nextBilling: 'N/A', amount: 19.99 },
    { id: 4, userName: 'Michael Scott', plan: 'Nutritionist Plan', status: 'Active', nextBilling: '2024-08-01', amount: 29.99 },
    { id: 5, userName: 'Pam Beesly', plan: 'Pro Plan', status: 'Past Due', nextBilling: '2024-07-20', amount: 9.99 },
    { id: 6, userName: 'Dwight Schrute', plan: 'Pro Plan', status: 'Active', nextBilling: '2024-08-21', amount: 9.99 },
    { id: 7, userName: 'Angela Martin', plan: 'Free', status: 'Active', nextBilling: 'N/A', amount: 0 },
    { id: 8, userName: 'Kevin Malone', plan: 'Nutritionist Plan', status: 'Canceled', nextBilling: 'N/A', amount: 29.99 },
    { id: 9, userName: 'Jim Halpert', plan: 'Gym Plan', status: 'Active', nextBilling: '2024-08-22', amount: 19.99 },
    { id: 10, userName: 'Oscar Martinez', plan: 'Pro Plan', status: 'Active', nextBilling: '2024-08-23', amount: 9.99 },
    { id: 11, userName: 'Stanley Hudson', plan: 'Nutritionist Plan', status: 'Past Due', nextBilling: '2024-07-19', amount: 29.99 },
    { id: 12, userName: 'Phyllis Vance', plan: 'Gym Plan', status: 'Active', nextBilling: '2024-09-01', amount: 19.99 },
    { id: 13, userName: 'Toby Flenderson', plan: 'Free', status: 'Canceled', nextBilling: 'N/A', amount: 0 },
    { id: 14, userName: 'Creed Bratton', plan: 'Pro Plan', status: 'Active', nextBilling: '2024-08-18', amount: 9.99 },
    { id: 15, userName: 'Darryl Philbin', plan: 'Gym Plan', status: 'Active', nextBilling: '2024-08-25', amount: 19.99 },
    { id: 16, userName: 'Erin Hannon', plan: 'Pro Plan', status: 'Active', nextBilling: '2024-09-05', amount: 9.99 },
    { id: 17, userName: 'Andy Bernard', plan: 'Nutritionist Plan', status: 'Active', nextBilling: '2024-08-30', amount: 29.99 },
    { id: 18, userName: 'Ryan Howard', plan: 'Pro Plan', status: 'Canceled', nextBilling: 'N/A', amount: 9.99 },
    { id: 19, userName: 'Kelly Kapoor', plan: 'Gym Plan', status: 'Past Due', nextBilling: '2024-07-28', amount: 19.99 },
    { id: 20, userName: 'Holly Flax', plan: 'Nutritionist Plan', status: 'Active', nextBilling: '2024-08-12', amount: 29.99 },
];


interface UserSubscriptionsProps {
    language: string;
    currency: string;
}

const UserSubscriptions: React.FC<UserSubscriptionsProps> = ({ language, currency }) => {

    const getStatusChip = (status: string) => {
         switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Canceled':
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
            case 'Past Due':
                return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <Card title={t(language, 'user_subscriptions')}>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'user')}</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'plan')}</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'status')}</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'next_billing')}</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'amount')}</th>
                            <th className="relative px-6 py-3"><span className="sr-only">{t(language, 'actions')}</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                        {subscriptions.map(sub => (
                            <tr key={sub.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{sub.userName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{sub.plan}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusChip(sub.status)}`}>
                                        {t(language, sub.status.replace(' ', '_').toLowerCase())}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{sub.nextBilling}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{formatCurrency(sub.amount, currency, language)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-primary hover:text-indigo-900">{t(language, 'plan_manage')}</a>
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