import React, { useState } from 'react';
import Card from '../ui/Card';
import { t } from '../../utils/i18n';
import { formatCurrency } from '../../utils/formatting';

const payments = [
    { id: 'txn_123abc', user: 'John Doe', plan: 'Pro Plan', amount: 9.99, date: '2024-07-15', status: 'Completed' },
    { id: 'txn_456def', user: 'Sam Wilson', plan: 'Gym Plan', amount: 19.99, date: '2024-07-10', status: 'Completed' },
    { id: 'txn_789ghi', user: 'Pam Beesly', plan: 'Pro Plan', amount: 9.99, date: '2024-07-20', status: 'Failed' },
    { id: 'txn_101jkl', user: 'Michael Scott', plan: 'Nutritionist Plan', amount: 29.99, date: '2024-07-01', status: 'Completed' },
    { id: 'txn_mno234', user: 'Dwight Schrute', plan: 'Gym Plan', amount: 19.99, date: '2024-07-21', status: 'Pending' },
    { id: 'txn_pqr567', user: 'Angela Martin', plan: 'Pro Plan', amount: 9.99, date: '2024-06-25', status: 'Completed' },
    { id: 'txn_stu890', user: 'Kevin Malone', plan: 'Nutritionist Plan', amount: 29.99, date: '2024-06-18', status: 'Refunded' },
    { id: 'txn_vwx112', user: 'Jim Halpert', plan: 'Gym Plan', amount: 19.99, date: '2024-07-22', status: 'Completed' },
    { id: 'txn_yza334', user: 'Oscar Martinez', plan: 'Pro Plan', amount: 9.99, date: '2024-07-23', status: 'Completed' },
    { id: 'txn_bcd556', user: 'Stanley Hudson', plan: 'Nutritionist Plan', amount: 29.99, date: '2024-07-19', status: 'Failed' },
    { id: 'txn_efg778', user: 'Phyllis Vance', plan: 'Gym Plan', amount: 19.99, date: '2024-07-01', status: 'Completed' },
    { id: 'txn_hij990', user: 'Toby Flenderson', plan: 'Free', amount: 0.00, date: '2024-05-30', status: 'Completed' },
    { id: 'txn_klm112', user: 'Creed Bratton', plan: 'Pro Plan', amount: 9.99, date: '2024-07-18', status: 'Pending' },
    { id: 'txn_nop334', user: 'Darryl Philbin', plan: 'Gym Plan', amount: 19.99, date: '2024-07-25', status: 'Completed' },
    { id: 'txn_qrs556', user: 'Erin Hannon', plan: 'Pro Plan', amount: 9.99, date: '2024-06-05', status: 'Refunded' },
    { id: 'txn_tuv778', user: 'Andy Bernard', plan: 'Nutritionist Plan', amount: 29.99, date: '2024-07-30', status: 'Completed' },
    { id: 'txn_wxy990', user: 'Ryan Howard', plan: 'Pro Plan', amount: 9.99, date: '2024-05-15', status: 'Completed' },
    { id: 'txn_zab112', user: 'Kelly Kapoor', plan: 'Gym Plan', amount: 19.99, date: '2024-07-28', status: 'Failed' },
];

const commissions = [
    { id: 1, affiliate: 'HealthyLife Influencer', clicks: 4120, referrals: 50, conversionRate: '10%', earned: 250.00, status: 'Paid', payoutDate: '2024-07-05' },
    { id: 2, affiliate: 'FitFoodie Blog', clicks: 3500, referrals: 35, conversionRate: '8%', earned: 175.50, status: 'Paid', payoutDate: '2024-07-05' },
    { id: 3, affiliate: 'KetoKitchen YouTube', clicks: 7800, referrals: 80, conversionRate: '12%', earned: 480.00, status: 'Unpaid', payoutDate: null },
    { id: 4, affiliate: 'GymBro TikTok', clicks: 25000, referrals: 120, conversionRate: '5%', earned: 300.00, status: 'Unpaid', payoutDate: null },
    { id: 5, affiliate: 'VeganVibes.net', clicks: 5500, referrals: 65, conversionRate: '15%', earned: 325.00, status: 'Paid', payoutDate: '2024-08-05' },
    { id: 6, affiliate: 'PaleoPlanet', clicks: 4200, referrals: 45, conversionRate: '9%', earned: 225.00, status: 'Unpaid', payoutDate: null },
    { id: 7, affiliate: 'RunnersWorld Daily', clicks: 9100, referrals: 95, conversionRate: '11%', earned: 475.00, status: 'Paid', payoutDate: '2024-08-05' },
    { id: 8, affiliate: 'MacrosMaster', clicks: 15500, referrals: 210, conversionRate: '7%', earned: 1050.00, status: 'Unpaid', payoutDate: null },
    { id: 9, affiliate: 'WellnessWeekly', clicks: 6200, referrals: 72, conversionRate: '11.6%', earned: 360.00, status: 'Pending', payoutDate: null },
    { id: 10, affiliate: 'Coach Greg YT', clicks: 18000, referrals: 150, conversionRate: '8.3%', earned: 750.00, status: 'Unpaid', payoutDate: null },
    { id: 11, affiliate: 'MealPrepMonday', clicks: 11000, referrals: 115, conversionRate: '10.5%', earned: 575.00, status: 'Paid', payoutDate: '2024-08-05' },
    { id: 12, affiliate: 'The Nutritionist Guide', clicks: 3100, referrals: 40, conversionRate: '12.9%', earned: 200.00, status: 'Unpaid', payoutDate: null },
];

type Tab = 'payments' | 'commissions';

interface PaymentsAndCommissionsProps {
    language: string;
    currency: string;
}

const PaymentsAndCommissions: React.FC<PaymentsAndCommissionsProps> = ({ language, currency }) => {
    const [activeTab, setActiveTab] = useState<Tab>('payments');

    const getStatusChip = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed':
            case 'paid':
                return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'failed':
                return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
            case 'pending':
            case 'unpaid':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
            case 'refunded':
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t(language, 'payments_commissions')}</h1>
            
            <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                        onClick={() => setActiveTab('payments')}
                        className={`${activeTab === 'payments' ? 'border-primary text-primary' : 'border-transparent text-gray-700 dark:text-gray-400 hover:text-gray-800 hover:border-gray-300 dark:hover:text-gray-200 dark:hover:border-gray-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    >
                        {t(language, 'transaction_log')}
                    </button>
                    <button
                         onClick={() => setActiveTab('commissions')}
                        className={`${activeTab === 'commissions' ? 'border-primary text-primary' : 'border-transparent text-gray-700 dark:text-gray-400 hover:text-gray-800 hover:border-gray-300 dark:hover:text-gray-200 dark:hover:border-gray-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    >
                        {t(language, 'affiliate_commissions')}
                    </button>
                </nav>
            </div>

            {activeTab === 'payments' && (
                <Card title={t(language, 'all_payments')}>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'transaction_id')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'user')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'plan')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'amount')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'date')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'status')}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                                {payments.map(p => (
                                    <tr key={p.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">{p.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{p.user}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{p.plan}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{formatCurrency(p.amount, currency, language)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{p.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusChip(p.status)}`}>
                                                {t(language, p.status.toLowerCase())}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            )}

            {activeTab === 'commissions' && (
                 <Card title={t(language, 'commission_payouts')}>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                             <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'affiliate')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'clicks')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'referrals')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'conv_rate')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'earned')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'status')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'payout_date')}</th>
                                    <th className="relative px-6 py-3"><span className="sr-only">{t(language, 'actions')}</span></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                                {commissions.map(c => (
                                    <tr key={c.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{c.affiliate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{c.clicks.toLocaleString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{c.referrals}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{c.conversionRate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{formatCurrency(c.earned, currency, language)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusChip(c.status)}`}>
                                                {t(language, c.status.toLowerCase())}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{c.payoutDate || 'N/A'}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            {c.status === 'Unpaid' && <a href="#" className="text-primary hover:text-indigo-900">{t(language, 'mark_as_paid')}</a>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            )}

        </div>
    );
};

export default PaymentsAndCommissions;