import React from 'react';
import Card from '../ui/Card';

const logs = [
    { id: 1, level: 'INFO', message: 'User admin@mealpro.com logged in successfully.', timestamp: '2023-07-28 10:00:15' },
    { id: 2, level: 'WARN', message: 'API key `test_pk_...` is nearing its rate limit.', timestamp: '2023-07-28 10:05:22' },
    { id: 3, level: 'INFO', message: 'Generated new recipe "Spicy Chicken Stir-Fry" via AI Assistant.', timestamp: '2023-07-28 10:12:45' },
    { id: 4, level: 'ERROR', message: 'Failed to process payment for subscription ID 12345.', timestamp: '2023-07-28 10:15:03' },
    { id: 5, level: 'INFO', message: 'User profile for jane.doe@example.com was updated.', timestamp: '2023-07-28 10:20:11' },
    { id: 6, level: 'DEBUG', message: 'Database query executed in 150ms.', timestamp: '2023-07-28 10:21:00' },
];

const levelColors: { [key: string]: string } = {
    INFO: 'bg-blue-100 text-blue-800',
    WARN: 'bg-yellow-100 text-yellow-800',
    ERROR: 'bg-red-100 text-red-800',
    DEBUG: 'bg-gray-100 text-gray-800',
};

const SystemLogs: React.FC = () => {
    return (
        <Card title="System Logs">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                        {logs.map(log => (
                            <tr key={log.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${levelColors[log.level]}`}>
                                        {log.level}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-sm font-mono">{log.message}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default SystemLogs;
