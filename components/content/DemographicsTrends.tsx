import React from 'react';
import Card from '../ui/Card';
import WorldMapChart from './WorldMapChart';
import { LeafIcon } from '../icons';

const demographicsData = [
  { name: 'United States', users: 125800, coordinates: [250, 200] },
  { name: 'Germany', users: 45200, coordinates: [520, 180] },
  { name: 'Brazil', users: 65100, coordinates: [350, 350] },
  { name: 'India', users: 89500, coordinates: [750, 260] },
  { name: 'Australia', users: 32300, coordinates: [880, 380] },
  { name: 'Japan', users: 51200, coordinates: [890, 210] },
  { name: 'Nigeria', users: 21000, coordinates: [525, 290] },
];

const TrendCard = ({ title, value }: { title: string; value: string }) => (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h4>
        <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
    </div>
);

const DemographicsTrends: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Demographics & Trends</h1>
            <Card>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-2">Global User Distribution</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Hover over the circles to see user counts by country.</p>
                        <WorldMapChart data={demographicsData} />
                    </div>
                    <div className="lg:col-span-1 space-y-4">
                         <h3 className="text-xl font-semibold mb-2">Key Trends</h3>
                         <TrendCard title="Top Country" value="United States" />
                         <TrendCard title="Fastest Growing Region" value="India (+22%)" />
                         <TrendCard title="Most Popular Cuisine" value="Italian" />
                         <TrendCard title="Avg. User Age" value="28 yrs" />
                         <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg flex items-start">
                            <LeafIcon className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-teal-800 dark:text-teal-300">Insight</h4>
                                <p className="text-sm text-teal-700 dark:text-teal-400">Users in Brazil show the highest engagement with vegetarian recipes.</p>
                            </div>
                         </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DemographicsTrends;