"use client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  FolderTree,
  Image as ImageIcon,
  Settings,
  LogOut
} from 'lucide-react';
import { useAdminAuth } from '@/context/AdminAuthContext';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Package, label: 'Products', href: '/admin/products' },
  { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: FolderTree, label: 'Categories', href: '/admin/categories' },
  { icon: ImageIcon, label: 'Banners', href: '/admin/banners' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminSidebar() {
  const router = useRouter();
  const { logout } = useAdminAuth();

  return (
    <aside className="fixed left-0 top-0 w-64 bg-gray-900 text-white min-h-screen z-50">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <p className="text-sm text-gray-400 mt-1">Super Admin</p>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = router.pathname === item.href || 
                          (item.href !== '/admin' && router.pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors ${
                isActive ? 'bg-gray-800 border-l-4 border-white' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="absolute bottom-0 w-full p-6 border-t border-gray-800">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-6 py-3 hover:bg-gray-800 rounded transition-colors text-red-400"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}