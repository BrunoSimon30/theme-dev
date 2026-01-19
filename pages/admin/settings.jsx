"use client";
import AdminLayout from '@/components/admin/AdminLayout';
import { useState } from 'react';
import { AppConfig } from '@/config/AppConfig';

export default function AdminSettings() {
  const [formData, setFormData] = useState({
    siteName: AppConfig.site_name,
    email: AppConfig.email,
    phone: AppConfig.tel,
    address: '123 Fashion Street, Karachi, Pakistan',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Site Name
            </label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Contact Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}