
import React from 'react';
import Card from '../ui/Card';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Premium', status: 'Active', joined: '2023-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Free', status: 'Active', joined: '2023-02-20' },
  { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Premium', status: 'Inactive', joined: '2023-03-10' },
  { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Premium', status: 'Active', joined: '2023-04-05' },
  { id: 5, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Admin', status: 'Active', joined: '2023-01-01' },
  { id: 6, name: 'Charlie Davis', email: 'charlie.d@example.com', role: 'Free', status: 'Banned', joined: '2023-05-22' },
];

const UserList: React.FC = () => {
  return (
    <Card title="User Management">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined Date</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/100/100?random=${user.id}`} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' :
                    user.status === 'Inactive' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joined}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-primary hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default UserList;
