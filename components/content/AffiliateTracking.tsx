import React from 'react';
import Card from '../ui/Card';
import { t } from '../../utils/i18n';
import { formatCurrency } from '../../utils/formatting';

const affiliates = [
    { id: 1, name: 'HealthyLife Influencer', referrals: 523, conversionRate: 12.5, commission: 1307.50, status: 'Active' },
    { id: 2, name: 'FitFoodie Blog', referrals: 389, conversionRate: 8.2, commission: 797.45, status: 'Active' },
    { id: 3, name: 'KetoKitchen YouTube', referrals: 812, conversionRate: 15.1, commission: 3063.30, status: 'Active' },
    { id: 4, name: 'GymBro TikTok', referrals: 1056, conversionRate: 5.5, commission: 1452.00, status: 'Paused' },
    { id: 5, name: 'VeganVibes.net', referrals: 150, conversionRate: 18.0, commission: 675.00, status: 'Active' },
];

const StatCard = ({ title, value }: { title: string; value: string; }) => (
    <Card>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h4>
        <p className="text-3xl font-bold">{value}</p>
    </Card>
);

interface AffiliateTrackingProps {
    language: string;
    currency: string;
}

const AffiliateTracking: React.FC<AffiliateTrackingProps> = ({ language, currency }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t(language, 'affiliate_tracking')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard title={t(language, 'total_affiliates')} value="125" />
                <StatCard title={t(language, 'total_referrals_30d')} value="2,935" />
                <StatCard title={t(language, 'avg_conversion_rate')} value="11.8%" />
                <StatCard title={t(language, 'commissions_paid_30d')} value={formatCurrency(7295.75, currency, language)} />
            </div>

            <Card title={t(language, 'affiliate_performance')}>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'affiliate')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'referrals')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'conv_rate')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'commissions_all_time')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, 'status')}</th>
                                <th className="relative px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                            {affiliates.map(a => (
                                <tr key={a.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{a.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{a.referrals.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{a.conversionRate}%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{formatCurrency(a.commission, currency, language)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${a.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'}`}>{t(language, a.status.toLowerCase())}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-primary hover:text-indigo-900">{t(language, 'view_details')}</a>
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

export default AffiliateTracking;