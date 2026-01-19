"use client";
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function AdminBanners() {
  const [banners, setBanners] = useState([
    { id: 1, name: 'Home Banner', image: '/img/banner/ban.webp', page: 'Home', active: true },
    { id: 2, name: 'Products Banner', image: '/img/banner/ban1.webp', page: 'Products', active: true },
    { id: 3, name: 'Shop Banner', image: '/img/banner/mban.jpg', page: 'Shop', active: true },
  ]);

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Banners</h1>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            Add Banner
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div key={banner.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={banner.image}
                alt={banner.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{banner.name}</h3>
                <p className="text-sm text-gray-600 mb-3">Page: {banner.page}</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-4 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}