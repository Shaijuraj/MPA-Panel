
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

const data = [
  { name: 'API Latency', value: 80, fill: '#8884d8' },
  { name: 'Uptime', value: 99.9, fill: '#82ca9d' },
  { name: 'Error Rate', value: 0.5, fill: '#ffc658' },
  { name: 'CPU Usage', value: 45, fill: '#ff8042' },
];

const HealthReport: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">App/Site Health Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
            <h4 className="text-sm font-medium text-gray-500">API Uptime</h4>
            <p className="text-3xl font-bold text-green-500">99.98%</p>
        </Card>
        <Card>
            <h4 className="text-sm font-medium text-gray-500">Avg. Response Time</h4>
            <p className="text-3xl font-bold text-blue-500">120ms</p>
        </Card>
        <Card>
            <h4 className="text-sm font-medium text-gray-500">Error Rate</h4>
            <p className="text-3xl font-bold text-yellow-500">0.12%</p>
        </Card>
        <Card>
            <h4 className="text-sm font-medium text-gray-500">Active Users</h4>
            <p className="text-3xl font-bold">1,245</p>
        </Card>
      </div>
      <Card title="System Metrics Overview">
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100}/>
                    <Tooltip wrapperClassName="dark:!bg-gray-800 !border-gray-600" />
                    <Legend />
                    <Bar dataKey="value" name="Value" />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default HealthReport;
