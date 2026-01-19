"use client";
import AdminLayout from '@/components/admin/AdminLayout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const orders = JSON.parse(localStorage.getItem('adminOrders') || '[]');
      const foundOrder = orders.find(o => o.id === parseInt(id));
      setOrder(foundOrder || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">Loading...</div>
      </AdminLayout>
    );
  }

  if (!order) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Order not found</p>
          <Link href="/admin/orders" className="text-blue-600 hover:underline">
            Back to Orders
          </Link>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <Link
            href="/admin/orders"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Orders
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Order Details</h1>
          <p className="text-gray-600">Order ID: #{order.id}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer Information</h3>
              <p className="text-gray-600">{order.customer || 'N/A'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Status</h3>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                {order.status || 'Pending'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Date</h3>
              <p className="text-gray-600">{order.date || 'N/A'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Total Amount</h3>
              <p className="text-lg font-bold text-gray-900">Rs. {(order.amount || 0).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}