import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import { FilterIcon } from '../icons';

const weeklyData = [
  { name: 'API Latency (ms)', value: 80, fill: '#8884d8' },
  { name: 'Uptime (%)', value: 99.9, fill: '#82ca9d' },
  { name: 'Error Rate (%)', value: 0.5, fill: '#ffc658' },
  { name: 'CPU Usage (%)', value: 45, fill: '#ff8042' },
];

const monthlyData = [
  { name: 'API Latency (ms)', value: 95, fill: '#8884d8' },
  { name: 'Uptime (%)', value: 99.8, fill: '#82ca9d' },
  { name: 'Error Rate (%)', value: 0.8, fill: '#ffc658' },
  { name: 'CPU Usage (%)', value: 55, fill: '#ff8042' },
];

const yearlyData = [
    { name: 'API Latency (ms)', value: 110, fill: '#8884d8' },
    { name: 'Uptime (%)', value: 99.95, fill: '#82ca9d' },
    { name: 'Error Rate (%)', value: 0.4, fill: '#ffc658' },
    { name: 'CPU Usage (%)', value: 40, fill: '#ff8042' },
];

const dataMap = {
    Weekly: weeklyData,
    Monthly: monthlyData,
    Yearly: yearlyData,
};

type Period = 'Weekly' | 'Monthly' | 'Yearly';

const HealthReport: React.FC = () => {
    const [period, setPeriod] = useState<Period>('Weekly');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handlePeriodChange = (newPeriod: Period) => {
        setPeriod(newPeriod);
        setIsFilterOpen(false);
    }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">App/Site Health Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">API Uptime</h4>
            <p className="text-3xl font-bold text-green-500">99.98%</p>
        </Card>
        <Card>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Avg. Response Time</h4>
            <p className="text-3xl font-bold text-blue-500">120ms</p>
        </Card>
        <Card>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Error Rate</h4>
            <p className="text-3xl font-bold text-yellow-500">0.12%</p>
        </Card>
        <Card>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Users</h4>
            <p className="text-3xl font-bold">1,245</p>
        </Card>
      </div>
       <Card>
         <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">System Metrics Overview</h3>
            <div className="relative">
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Filter period"
                >
                    <FilterIcon className="w-5 h-5 text-gray-500" />
                </button>
                {isFilterOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-dark-sidebar rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                        {(['Weekly', 'Monthly', 'Yearly'] as Period[]).map((p) => (
                             <a
                                key={p}
                                href="#"
                                onClick={(e) => { e.preventDefault(); handlePeriodChange(p); }}
                                className={`block px-4 py-2 text-sm ${period === p ? 'text-primary font-semibold' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`}
                            >
                                {p}
                            </a>
                        ))}
                    </div>
                )}
            </div>
         </div>
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={dataMap[period]} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={120}/>
                    <Tooltip wrapperClassName="dark:!bg-gray-800 !border-gray-600" />
                    <Legend />
                    <Bar dataKey="value" name={period + ' Average'} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default HealthReport;