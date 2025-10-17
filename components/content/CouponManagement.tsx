import React, { useState } from 'react';
import Card from '../ui/Card';

const initialCoupons = [
    { id: 1, code: 'SUMMER25', discount: 25, type: 'percentage', status: 'Active', used: 150, total: 1000, expiry: '2024-08-31' },
    { id: 2, code: 'WELCOME10', discount: 10, type: 'fixed', status: 'Active', used: 820, total: 5000, expiry: '2024-12-31' },
    { id: 3, code: 'SPRINGSALE', discount: 20, type: 'percentage', status: 'Expired', used: 500, total: 500, expiry: '2024-05-31' },
    { id: 4, code: 'NEWUSER', discount: 5, type: 'fixed', status: 'Active', used: 2215, total: 10000, expiry: 'N/A' },
];

const CouponManagement: React.FC = () => {
    const [coupons, setCoupons] = useState(initialCoupons);
    const [showCreateForm, setShowCreateForm] = useState(false);

    // Form state
    const [code, setCode] = useState('');
    const [discount, setDiscount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');

    const handleCreateCoupon = (e: React.FormEvent) => {
        e.preventDefault();
        const newCoupon = {
            id: coupons.length + 1,
            code: code.toUpperCase(),
            discount: Number(discount),
            type: 'percentage', // Simplified for this example
            status: 'Active',
            used: 0,
            total: Number(quantity),
            expiry: expiry || 'N/A'
        };
        setCoupons([newCoupon, ...coupons]);
        // Reset form
        setCode(''); setDiscount(''); setQuantity(''); setExpiry('');
        setShowCreateForm(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Coupon Management</h1>
                <button 
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-indigo-700"
                >
                    {showCreateForm ? 'Cancel' : 'Create New Coupon'}
                </button>
            </div>
            
            {showCreateForm && (
                <Card className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Create a New Coupon</h2>
                    <form onSubmit={handleCreateCoupon} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input type="text" placeholder="Coupon Code (e.g., FALL15)" value={code} onChange={e => setCode(e.target.value)} required className="md:col-span-1 dark:bg-gray-800 rounded-md" />
                        <input type="number" placeholder="Discount (%)" value={discount} onChange={e => setDiscount(e.target.value)} required className="dark:bg-gray-800 rounded-md" />
                        <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required className="dark:bg-gray-800 rounded-md" />
                        <input type="date" value={expiry} onChange={e => setExpiry(e.target.value)} className="dark:bg-gray-800 rounded-md" />
                        <button type="submit" className="md:col-start-4 bg-secondary text-white font-semibold rounded-md hover:bg-emerald-600">Save Coupon</button>
                    </form>
                </Card>
            )}

            <Card>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Code</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Discount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Usage</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Expires</th>
                                <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                            {coupons.map(c => (
                                <tr key={c.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary">{c.code}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{c.discount}{c.type === 'percentage' ? '%' : '$'} OFF</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${c.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>{c.status}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{c.used} / {c.total}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{c.expiry}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-red-600 hover:text-red-900">Deactivate</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default CouponManagement;