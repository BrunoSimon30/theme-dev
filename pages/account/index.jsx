import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import Link from "next/link";
import { User, Package, Heart, MapPin } from "lucide-react";

export default function Account() {
  return (
    <>
      <Meta
        title={`My Account - ${AppConfig.title}`}
        description="Manage your account"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">My Account</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
                <Link
                  href="/account"
                  className="flex items-center gap-3 p-3 bg-gray-900 text-white rounded-lg"
                >
                  <User className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Package className="w-5 h-5" />
                  <span>Orders</span>
                </Link>
                <Link
                  href="/account/wishlist"
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </Link>
                <Link
                  href="/account/addresses"
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Addresses</span>
                </Link>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Account Dashboard</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Account Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="font-semibold">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold">john@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-semibold">Order #12345</p>
                          <p className="text-sm text-gray-600">Placed on Jan 15, 2024</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">Rs. 15,000</p>
                          <p className="text-sm text-green-600">Delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

