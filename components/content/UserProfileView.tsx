import React from 'react';
import Card from '../ui/Card';
import { CrownIcon, DumbbellIcon, LeafIcon } from '../icons';

const user = {
    id: 4,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    role: 'Premium',
    status: 'Active',
    joined: '2023-04-05',
    avatar: 'https://picsum.photos/100/100?random=4',
    subscription: {
        plan: 'Active Gym Plan',
        status: 'Active',
        nextBilling: '2024-08-01',
        amount: '$19.99'
    },
    stats: {
        recipesCreated: 25,
        loginsThisMonth: 15,
        avgSessionDuration: '22 min'
    },
    recentActivity: [
        { id: 1, action: 'Logged in', timestamp: '2 hours ago' },
        { id: 2, action: 'Created recipe "Keto Salad"', timestamp: '1 day ago' },
        { id: 3, action: 'Updated profile picture', timestamp: '3 days ago' },
        { id: 4, action: 'Viewed "Chicken Teriyaki"', timestamp: '3 days ago' },
        { id: 5, action: 'Logged out', timestamp: '4 days ago' },
    ]
};

const PlanIcon = ({ plan }: { plan: string }) => {
    if (plan.includes('Pro')) return <CrownIcon className="h-6 w-6 text-purple-500" />;
    if (plan.includes('Gym')) return <DumbbellIcon className="h-6 w-6 text-orange-500" />;
    if (plan.includes('Nutritionist')) return <LeafIcon className="h-6 w-6 text-teal-500" />;
    return null;
};

const UserProfileView: React.FC = () => {
    return (
        <div>
            <div className="flex items-center space-x-4 mb-6">
                <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full object-cover" />
                <div>
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                    <Card title="Profile Details">
                        <div className="space-y-2 text-sm">
                            <p><strong>Status:</strong> <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{user.status}</span></p>
                            <p><strong>Role:</strong> {user.role}</p>
                            <p><strong>Joined:</strong> {user.joined}</p>
                        </div>
                    </Card>
                    <Card title="Subscription">
                        <div className="flex items-center space-x-4">
                            <PlanIcon plan={user.subscription.plan} />
                            <div>
                                <p className="font-semibold">{user.subscription.plan}</p>
                                <p className="text-sm text-gray-500">{user.subscription.status} - Renews on {user.subscription.nextBilling}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 space-y-6">
                    <Card title="Recent Activity">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {user.recentActivity.map(activity => (
                                <li key={activity.id} className="py-3 flex justify-between items-center">
                                    <p className="text-sm">{activity.action}</p>
                                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UserProfileView;