import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

// Generate dummy data for multiple years
const generateYearlyData = (year: number) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Use the year to seed the random data for some variation
    const seed = year % 10;
    return months.map(month => ({
        month,
        downloads: Math.floor(Math.random() * (15000 + seed * 500) + (5000 + seed * 200)),
    }));
};

const downloadsData: { [year: number]: { month: string; downloads: number }[] } = {};
const currentYear = new Date().getFullYear();
const startYear = 1999;

for (let year = startYear; year <= currentYear; year++) {
    downloadsData[year] = generateYearlyData(year);
}

const DownloadsChart: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);

    const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);

    return (
        <Card>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Monthly App Downloads</h3>
                <div className="relative">
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        aria-label="Select year"
                    >
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={downloadsData[selectedYear]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorDownloads" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.4}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(128, 128, 128, 0.2)" />
                        <XAxis dataKey="month" />
                        <YAxis tickFormatter={(value) => `${(value as number / 1000)}k`} />
                        <Tooltip
                            wrapperClassName="dark:!bg-gray-800 !border-gray-600"
                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(5px)' }}
                            formatter={(value: number) => [value.toLocaleString(), 'Downloads']}
                        />
                        <Legend />
                        <Bar dataKey="downloads" fill="url(#colorDownloads)" name={`Downloads in ${selectedYear}`} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default DownloadsChart;