import React from 'react';
import Card from '../ui/Card';
import { CheckCircleIcon } from '../icons';

const plans = [
    { name: 'Free', price: '$0', period: '/month', features: ['5 AI Recipes/month', 'Basic Meal Plans', 'Community Support'], subscribers: '150,000+', popular: false, buttonText: 'Manage Plan' },
    { name: 'Pro Plan', price: '$9.99', period: '/month', features: ['Unlimited AI Recipes', 'Custom Meal Plans', 'Shopping List Export', 'Priority Support'], subscribers: '78,452', popular: true, buttonText: 'Manage Plan' },
    { name: 'Gym Plan', price: '$19.99', period: '/month', features: ['All Pro features', 'Workout Integration', 'Macro Tracking', 'Trainer Collaboration'], subscribers: '56,123', popular: false, buttonText: 'Manage Plan' },
    { name: 'Nutritionist Plan', price: '$29.99', period: '/month', features: ['All Gym features', 'Client Management', 'Custom Branding', 'Advanced Analytics'], subscribers: '23,876', popular: false, buttonText: 'Manage Plan' },
];

const SubscriptionPlans: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Subscription Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <Card key={index} className={`flex flex-col ${plan.popular ? 'border-2 border-primary' : ''}`}>
                        {plan.popular && <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                            <p className="mt-2">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-gray-500">{plan.period}</span>
                            </p>
                             <p className="mt-1 text-sm text-gray-500">{plan.subscribers} subscribers</p>
                        </div>
                        <ul className="mt-6 space-y-3 flex-grow">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start">
                                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`mt-6 w-full py-2 px-4 rounded-md font-semibold ${plan.popular ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                            {plan.buttonText}
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPlans;
