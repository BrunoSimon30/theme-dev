import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import { Heart, Trash2 } from "lucide-react";
import Link from "next/link";

export default function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: "SOPHIA",
      price: 68000,
      image: "/img/home/ready/r1.jpg",
    },
    {
      id: 2,
      name: "HELEN",
      price: 72000,
      image: "/img/home/ready/r1.jpg",
    },
  ];

  return (
    <>
      <Meta
        title={`Wishlist - ${AppConfig.title}`}
        description="Your wishlist items"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-4">Your wishlist is empty</p>
              <Link
                href="/products"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                      <Trash2 className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="p-4">
                    <Link href={`/products/${item.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-gray-600">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-gray-700 font-medium mb-4">
                      Rs. {item.price.toLocaleString()}
                    </p>
                    <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

