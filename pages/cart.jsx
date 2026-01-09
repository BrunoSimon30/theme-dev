import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "SOPHIA",
      price: 68000,
      image: "/img/home/ready/r1.jpg",
      size: "M",
      color: "Pink",
      quantity: 2,
    },
    {
      id: 2,
      name: "HELEN",
      price: 72000,
      image: "/img/home/ready/r1.jpg",
      size: "L",
      color: "Blue",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <>
      <Meta
        title={`Shopping Cart - ${AppConfig.title}`}
        description="Review your cart items"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
              <Link
                href="/products"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-semibold">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-5 h-5 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        Rs. {subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        Rs. {shipping.toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t border-gray-300 pt-4 flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">
                        Rs. {total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    href="/products"
                    className="block w-full border-2 border-gray-300 text-gray-900 text-center py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

