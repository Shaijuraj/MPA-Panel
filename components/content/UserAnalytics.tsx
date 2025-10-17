import React from 'react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import { UsersGroupIcon, UsersIcon } from '../icons';

// Dummy data for charts
const dauData = Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    users: 1200 + Math.floor(Math.random() * 500) - i * 10,
}));

const signupsData = [
    { week: '4 Wks Ago', signups: 450 },
    { week: '3 Wks Ago', signups: 520 },
    { week: '2 Wks Ago', signups: 610 },
    { week: 'Last Wk', signups: 550 },
    { week: 'This Wk', signups: 720 },
];

const deviceData = [
    { name: 'Mobile', value: 68 },
    { name: 'Desktop', value: 25 },
    { name: 'Tablet', value: 7 },
];
const COLORS = ['#4f46e5', '#10b981', '#ffc658'];

const StatCard: React.FC<{ title: string; value: string; change: string; isPositive: boolean }> = ({ title, value, change, isPositive }) => (
    <Card>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h4>
        <p className="text-3xl font-bold">{value}</p>
        <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '▲' : '▼'} {change} vs last month
        </p>
    </Card>
);

const UserAnalytics: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">User Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard title="Total Users" value="450,897" change="5.2%" isPositive={true} />
                <StatCard title="Monthly Active" value="120,430" change="2.1%" isPositive={true} />
                <StatCard title="New Users" value="8,120" change="10.5%" isPositive={true} />
                <StatCard title="Churn Rate" value="1.8%" change="0.3%" isPositive={false} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <Card title="Daily Active Users (Last 30 Days)">
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <AreaChart data={dauData}>
                                    <defs>
                                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                    <XAxis dataKey="date" fontSize={12} />
                                    <YAxis />
                                    <Tooltip wrapperClassName="dark:!bg-gray-800 !border-gray-600"/>
                                    <Area type="monotone" dataKey="users" stroke="#4f46e5" fill="url(#colorUsers)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
                 <div className="lg:col-span-2">
                    <Card title="New Sign-ups (Weekly)">
                        <div style={{ width: '100%', height: 300 }}>
                           <ResponsiveContainer>
                                <BarChart data={signupsData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                    <XAxis dataKey="week" fontSize={12} />
                                    <YAxis />
                                    <Tooltip wrapperClassName="dark:!bg-gray-800 !border-gray-600"/>
                                    <Bar dataKey="signups" fill="#10b981" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
                <div className="lg:col-span-5">
                    <Card title="User Distribution by Device">
                         <div style={{ width: '100%', height: 300 }}>
                             <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={deviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={(entry) => `${entry.name} ${entry.value}%`}>
                                        {deviceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip wrapperClassName="dark:!bg-gray-800 !border-gray-600"/>
                                    <Legend />
                                </PieChart>
                             </ResponsiveContainer>
                         </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UserAnalytics;