import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import Link from "next/link";
import { Package } from "lucide-react";

export default function Orders() {
  const orders = [
    {
      id: "12345",
      date: "Jan 15, 2024",
      total: 15000,
      status: "Delivered",
      items: 2,
    },
    {
      id: "12346",
      date: "Jan 10, 2024",
      total: 22000,
      status: "Processing",
      items: 1,
    },
  ];

  return (
    <>
      <Meta
        title={`My Orders - ${AppConfig.title}`}
        description="View your order history"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">My Orders</h1>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold text-lg">Order #{order.id}</p>
                    <p className="text-sm text-gray-600">Placed on {order.date}</p>
                    <p className="text-sm text-gray-600">{order.items} item(s)</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">
                      Rs. {order.total.toLocaleString()}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                  {order.status === "Delivered" && (
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

