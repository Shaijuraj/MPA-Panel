import React from 'react';
import Card from '../ui/Card';

const influencers = [
    { id: 1, name: 'Alex Health', platform: 'Instagram', followers: '1.2M', campaign: 'Summer Shred 2024', engagement: '3.5%', conversions: 215 },
    { id: 2, name: 'Foodie Fiona', platform: 'YouTube', followers: '750K', campaign: 'Easy Family Meals', engagement: '5.2%', conversions: 302 },
    { id: 3, name: 'Keto Kevin', platform: 'TikTok', followers: '2.5M', campaign: '30-Day Keto Challenge', engagement: '8.1%', conversions: 512 },
    { id: 4, name: 'Gym Guru Gina', platform: 'Instagram', followers: '850K', campaign: 'Get Fit with MealPro', engagement: '2.8%', conversions: 189 },
    { id: 5, name: 'Vegan Valerie', platform: 'Blog', followers: '300K UV', campaign: 'Plant-Based Power', engagement: 'N/A', conversions: 156 },
];

const InfluencerManagement: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Influencer Management</h1>
                <button className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-indigo-700">
                    Add Influencer
                </button>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Influencer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Platform</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Followers</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Active Campaign</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Engagement</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Conversions</th>
                                <th className="relative px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                            {influencers.map(i => (
                                <tr key={i.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{i.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{i.platform}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{i.followers}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{i.campaign}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{i.engagement}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{i.conversions}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-primary hover:text-indigo-900">Manage</a>
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

export default InfluencerManagement;