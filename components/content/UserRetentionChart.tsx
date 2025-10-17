
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

const data = [
  { week: 'Week 1', cohort1: 100, cohort2: 100, cohort3: 100 },
  { week: 'Week 2', cohort1: 85, cohort2: 90, cohort3: 88 },
  { week: 'Week 3', cohort1: 72, cohort2: 81, cohort3: 79 },
  { week: 'Week 4', cohort1: 65, cohort2: 75, cohort3: 71 },
  { week: 'Week 5', cohort1: 58, cohort2: 68, cohort3: 65 },
  { week: 'Week 6', cohort1: 51, cohort2: 62, cohort3: 59 },
];

const UserRetentionChart: React.FC = () => {
  return (
    <Card title="User Retention by Weekly Cohort">
      <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis label={{ value: '% Retention', angle: -90, position: 'insideLeft' }} />
            <Tooltip wrapperClassName="dark:!bg-gray-800 !border-gray-600" />
            <Legend />
            <Line type="monotone" dataKey="cohort1" name="July Cohort 1" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="cohort2" name="July Cohort 2" stroke="#82ca9d" />
            <Line type="monotone" dataKey="cohort3" name="July Cohort 3" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default UserRetentionChart;
