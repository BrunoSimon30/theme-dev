"use client";
import AdminLayout from '@/components/admin/AdminLayout';
import StatsCard from '@/components/admin/StatsCard';
import { Package, ShoppingCart, Users, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    users: 0,
    revenue: 0,
    todayOrders: 0,
    pendingOrders: 0
  });

  useEffect(() => {
    // Load stats from localStorage
    const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
    const orders = JSON.parse(localStorage.getItem('adminOrders') || '[]');
    const users = JSON.parse(localStorage.getItem('adminUsers') || '[]');

    const totalRevenue = orders
      .filter(o => o.status === 'Completed')
      .reduce((sum, o) => sum + (o.amount || 0), 0);

    const todayOrders = orders.filter(o => {
      const orderDate = new Date(o.date).toDateString();
      const today = new Date().toDateString();
      return orderDate === today;
    }).length;

    const pendingOrders = orders.filter(o => o.status === 'Pending').length;

    setStats({
      products: products.length,
      orders: orders.length,
      users: users.length,
      revenue: totalRevenue,
      todayOrders,
      pendingOrders
    });
  }, []);

  const dashboardStats = [
    { 
      title: 'Total Products', 
      value: stats.products.toString(), 
      icon: Package, 
      color: 'blue',
      change: '+5 this week'
    },
    { 
      title: 'Total Orders', 
      value: stats.orders.toString(), 
      icon: ShoppingCart, 
      color: 'green',
      change: `+${stats.todayOrders} today`
    },
    { 
      title: 'Total Users', 
      value: stats.users.toString(), 
      icon: Users, 
      color: 'purple',
      change: '+23 this week'
    },
    { 
      title: 'Total Revenue', 
      value: `Rs. ${(stats.revenue / 1000000).toFixed(1)}M`, 
      icon: DollarSign, 
      color: 'orange',
      change: 'Rs. 125K today'
    },
  ];

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={<Icon className="w-8 h-8" />}
                color={stat.color}
                change={stat.change}
              />
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
              <Link href="/admin/orders" className="text-gray-600 hover:text-gray-900 text-sm">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium">Order #1234</p>
                  <p className="text-sm text-gray-600">SOPHIA - Rs. 68,000</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                  Completed
                </span>
              </div>
              <div className="text-center py-4 text-gray-500 text-sm">
                No recent orders
              </div>
            </div>
          </div>

          {/* Pending Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Actions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Pending Orders</p>
                  <p className="text-sm text-gray-600">{stats.pendingOrders} orders need attention</p>
                </div>
                <span className="text-2xl font-bold text-orange-600">{stats.pendingOrders}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}