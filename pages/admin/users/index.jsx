"use client";
import AdminLayout from '@/components/admin/AdminLayout';
import { useState, useEffect } from 'react';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load users from localStorage
    const storedUsers = localStorage.getItem('adminUsers');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers([]);
    }
  }, []);

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4 font-medium">{user.name || 'N/A'}</td>
                    <td className="px-6 py-4">{user.email || 'N/A'}</td>
                    <td className="px-6 py-4">{user.phone || 'N/A'}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.joined || 'N/A'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}