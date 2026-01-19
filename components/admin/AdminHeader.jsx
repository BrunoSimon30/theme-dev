"use client";
import { useAdminAuth } from '@/context/AdminAuthContext';

export default function AdminHeader() {
  const { admin } = useAdminAuth();

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-40">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">{admin?.name}</p>
          <p className="text-xs text-gray-500">{admin?.email}</p>
        </div>
        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold">
          {admin?.name?.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
}