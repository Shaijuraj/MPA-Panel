import React, { useState } from 'react';
import Card from '../ui/Card';

const payments = [
    { id: 'txn_123abc', user: 'John Doe', amount: '$9.99', date: '2023-07-15', status: 'Completed' },
    { id: 'txn_456def', user: 'Sam Wilson', amount: '$19.99', date: '2023-07-10', status: 'Completed' },
    { id: 'txn_789ghi', user: 'Pam Beesly', amount: '$9.99', date: '2023-07-20', status: 'Failed' },
    { id: 'txn_101jkl', user: 'Michael Scott', amount: '$29.99', date: '2023-07-01', status: 'Completed' },
];

const commissions = [
    { id: 1, affiliate: 'HealthyLife Influencer', referrals: 50, conversion: '10%', earned: '$250.00', status: 'Paid' },
    { id: 2, affiliate: 'FitFoodie Blog', referrals: 35, conversion: '8%', earned: '$175.50', status: 'Paid' },
    { id: 3, affiliate: 'KetoKitchen YouTube', referrals: 80, conversion: '12%', earned: '$480.00', status: 'Unpaid' },
    { id: 4, affiliate: 'GymBro TikTok', referrals: 120, conversion: '5%', earned: '$300.00', status: 'Unpaid' },
];

type Tab = 'payments' | 'commissions';

const PaymentsAndCommissions: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('payments');

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Payments & Commissions</h1>
            
            <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                        onClick={() => setActiveTab('payments')}
                        className={`${activeTab === 'payments' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    >
                        Transaction Log
                    </button>
                    <button
                         onClick={() => setActiveTab('commissions')}
                        className={`${activeTab === 'commissions' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    >
                        Affiliate Commissions
                    </button>
                </nav>
            </div>

            {activeTab === 'payments' && (
                <Card title="All Payments">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                                {payments.map(p => (
                                    <tr key={p.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">{p.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{p.user}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{p.amount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${p.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {p.status}
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
                 <Card title="Commission Payouts">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                             <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Affiliate</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Referrals</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Earned</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                                {commissions.map(c => (
                                    <tr key={c.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{c.affiliate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{c.referrals}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{c.earned}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${c.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {c.status}
                                            </span>
                                        </td>
                                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            {c.status === 'Unpaid' && <a href="#" className="text-primary hover:text-indigo-900">Mark as Paid</a>}
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