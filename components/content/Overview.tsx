import React from 'react';
import Card from '../ui/Card';
import { DownloadIcon, UsersGroupIcon, CrownIcon, DumbbellIcon, LeafIcon } from '../icons';
import DownloadsChart from './DownloadsChart';

const StatCard: React.FC<{
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  iconBgColor: string;
}> = ({ icon: Icon, title, value, iconBgColor }) => {
  return (
    <Card className="flex items-center p-4">
      <div className={`p-3 rounded-full ${iconBgColor} mr-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h4>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
      </div>
    </Card>
  );
};

const Overview: React.FC = () => {
  const stats = [
    {
      title: 'App Downloads',
      value: '1.2M',
      icon: DownloadIcon,
      iconBgColor: 'bg-blue-500',
    },
    {
      title: 'Total Users',
      value: '450,897',
      icon: UsersGroupIcon,
      iconBgColor: 'bg-green-500',
    },
    {
      title: 'Active Pro Plan',
      value: '78,452',
      icon: CrownIcon,
      iconBgColor: 'bg-purple-500',
    },
    {
      title: 'Active Gym Plan',
      value: '56,123',
      icon: DumbbellIcon,
      iconBgColor: 'bg-orange-500',
    },
    {
      title: 'Active Nutritionist Plan',
      value: '23,876',
      icon: LeafIcon,
      iconBgColor: 'bg-teal-500',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
      <div className="mt-8">
        <Card title="Welcome, Admin!">
            <p className="text-gray-600 dark:text-gray-300">
                Here's a snapshot of your application's performance. You can dive deeper into specific areas using the navigation on the left.
                The 'App/Site Health Report' and 'User Retention Chart' provide more detailed analytics.
            </p>
        </Card>
      </div>
      <div className="mt-8">
        <DownloadsChart />
      </div>
    </div>
  );
};

export default Overview;