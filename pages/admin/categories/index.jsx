"use client";
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function AdminCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Ready To Wear', slug: 'ready-to-wear', count: 25 },
    { id: 2, name: 'Unstitched', slug: 'unstitched', count: 18 },
    { id: 3, name: 'Accessories', slug: 'accessories', count: 12 },
    { id: 4, name: 'Sale', slug: 'sale', count: 8 },
  ]);

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            Add Category
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Slug</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Products</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{category.name}</td>
                  <td className="px-6 py-4 text-gray-600">{category.slug}</td>
                  <td className="px-6 py-4">{category.count} products</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}