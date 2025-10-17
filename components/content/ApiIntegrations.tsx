import React from 'react';
import Card from '../ui/Card';
import { KeyIcon, WebhookIcon } from '../icons';

const ApiIntegrations: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">API & Integrations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="Your API Keys">
                    <p className="text-gray-500 mb-4">Manage API keys for integrating with external services.</p>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                            <div>
                                <p className="font-mono text-sm">prod_sk_****...**vG4</p>
                                <p className="text-xs text-gray-400">Full access, created on 2023-05-10</p>
                            </div>
                            <button className="text-sm text-red-500 hover:text-red-700">Revoke</button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                            <div>
                                <p className="font-mono text-sm">test_pk_****...**hJ2</p>
                                <p className="text-xs text-gray-400">Read-only, created on 2023-02-01</p>
                            </div>
                            <button className="text-sm text-red-500 hover:text-red-700">Revoke</button>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
                        <KeyIcon className="w-5 h-5 mr-2" />
                        Create New Key
                    </button>
                </Card>

                <Card title="Webhooks">
                    <p className="text-gray-500 mb-4">Configure webhooks to receive real-time notifications.</p>
                     <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                            <div>
                                <p className="font-mono text-sm">https://api.example.com/webhooks/users</p>
                                <p className="text-xs text-gray-400">Events: user.created, user.updated</p>
                            </div>
                            <button className="text-sm text-red-500 hover:text-red-700">Delete</button>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
                        <WebhookIcon className="w-5 h-5 mr-2" />
                        Add Webhook Endpoint
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default ApiIntegrations;
