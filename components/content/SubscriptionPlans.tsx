import React from 'react';
import Card from '../ui/Card';
import { CheckCircleIcon } from '../icons';
import { formatCurrency } from '../../utils/formatting';
import { t } from '../../utils/i18n';

const plans = [
    { nameKey: 'plan_free', price: '0', periodKey: 'plan_monthly', featuresKeys: ['plan_feature_5_ai', 'plan_feature_basic_plans', 'plan_feature_community'], subscribers: '150,000+', popular: false, buttonTextKey: 'plan_manage' },
    { nameKey: 'plan_pro', price: '9.99', periodKey: 'plan_monthly', featuresKeys: ['plan_feature_unlimited_ai', 'plan_feature_custom_plans', 'plan_feature_shopping_list', 'plan_feature_priority_support'], subscribers: '78,452', popular: true, buttonTextKey: 'plan_manage' },
    { nameKey: 'plan_gym', price: '19.99', periodKey: 'plan_monthly', featuresKeys: ['plan_feature_all_pro', 'plan_feature_workout', 'plan_feature_macro', 'plan_feature_trainer'], subscribers: '56,123', popular: false, buttonTextKey: 'plan_manage' },
    { nameKey: 'plan_nutritionist', price: '29.99', periodKey: 'plan_monthly', featuresKeys: ['plan_feature_all_gym', 'plan_feature_client', 'plan_feature_branding', 'plan_feature_advanced_analytics'], subscribers: '23,876', popular: false, buttonTextKey: 'plan_manage' },
];

interface SubscriptionPlansProps {
    currency: string;
    language: string;
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ currency, language }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t(language, 'subscription_plans')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <Card key={index} className={`flex flex-col ${plan.popular ? 'border-2 border-primary' : ''}`}>
                        {plan.popular && <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{t(language, 'plan_most_popular')}</span>}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{t(language, plan.nameKey)}</h3>
                            <p className="mt-2">
                                <span className="text-4xl font-bold">{formatCurrency(Number(plan.price), currency, language)}</span>
                                <span className="text-gray-700 dark:text-gray-300">{t(language, plan.periodKey)}</span>
                            </p>
                             <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{plan.subscribers} {t(language, 'plan_subscribers')}</p>
                        </div>
                        <ul className="mt-6 space-y-3 flex-grow">
                            {plan.featuresKeys.map((featureKey, fIndex) => (
                                <li key={fIndex} className="flex items-start">
                                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{t(language, featureKey)}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`mt-6 w-full py-2 px-4 rounded-md font-semibold ${plan.popular ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                            {t(language, plan.buttonTextKey)}
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPlans;