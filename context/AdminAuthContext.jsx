"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const adminToken = localStorage.getItem('adminToken');
      const adminData = localStorage.getItem('adminData');
      
      if (adminToken && adminData) {
        try {
          setAdmin(JSON.parse(adminData));
        } catch (e) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminData');
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      // API call - temporarily using hardcoded check
      // In production, replace with actual API call
      if (email === 'admin@example.com' && password === 'admin123') {
        const adminData = {
          id: 1,
          name: 'Super Admin',
          email: 'admin@example.com',
          role: 'super_admin'
        };
        const token = 'admin_token_' + Date.now();
        
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminData', JSON.stringify(adminData));
        setAdmin(adminData);
        
        return { success: true, admin: adminData };
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    setAdmin(null);
    if (router.pathname.startsWith('/admin')) {
      router.push('/admin/login');
    }
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};