import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import { Star, Heart, Share2 } from "lucide-react";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Pink");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Pink", "Blue", "Green", "Yellow"];

  return (
    <>
      <Meta
        title={`Product Detail - ${AppConfig.title}`}
        description="View product details and add to cart"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  src="/img/home/ready/r1.jpg"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:ring-2 ring-gray-400"
                  >
                    <img
                      src="/img/home/ready/r1.jpg"
                      alt={`Product ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Product Name {id}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600">(24 reviews)</span>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  Rs. 15,000.00
                </span>
                <span className="text-xl text-gray-500 line-through ml-3">
                  Rs. 20,000.00
                </span>
                <span className="text-red-600 font-semibold ml-3">25% OFF</span>
              </div>

              <p className="text-gray-700 mb-8">
                Beautiful traditional outfit with intricate embroidery. Perfect
                for special occasions and celebrations. Made with premium quality
                fabric for comfort and durability.
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Size
                </label>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 border-2 rounded transition-colors ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Color
                </label>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2 border-2 rounded transition-colors ${
                        selectedColor === color
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
                <button className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Heart className="w-6 h-6 text-gray-700" />
                </button>
                <button className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Share2 className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Product Code
                    </h3>
                    <p className="text-gray-600">NP-{id}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Material
                    </h3>
                    <p className="text-gray-600">Premium Cotton, Silk</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Care</h3>
                    <p className="text-gray-600">Dry Clean Only</p>
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

