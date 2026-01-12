"use client";

const banners = [
  {
    id: 1,
    image: "/img/home/coll/c1.webp",
    category: "UNSTITCHED",
    subCategory: null,
    discount: "UPTO 40% OFF",
    showShopNow: true,
    bgColor: "bg-green-900",
    hasBorder: true,
  },
  {
    id: 2,
    image: "/img/home/coll/c2.webp",
    category: "UNSTITCHED",
    subCategory: "2 PIECE",
    discount: "UPTO 30% OFF",
    showShopNow: false,
    bgColor: "bg-teal-600",
    hasBorder: true,
  },
  {
    id: 3,
    image: "/img/home/coll/c3.webp",
    category: "UNSTITCHED",
    subCategory: "3 PIECE",
    discount: "UPTO 40% OFF",
    showShopNow: false,
    bgColor: "bg-green-900",
    hasBorder: true,
  },
  {
    id: 4,
    image: "/img/home/coll/c4.webp",
    category: "READY TO WEAR",
    subCategory: "EMBROIDERED",
    discount: "UPTO 50% OFF",
    showShopNow: false,
    bgColor: "bg-gray-200",
    hasBorder: false,
  },
  {
    id: 5,
    image: "/img/home/coll/c5.webp",
    category: "READY TO WEAR",
    subCategory: "PRINTED",
    discount: "UPTO 50% OFF",
    showShopNow: false,
    bgColor: "bg-gray-200",
    hasBorder: false,
  },
  {
    id: 6,
    image: "/img/home/coll/c6.webp",
    category: "READY TO WEAR",
    subCategory: null,
    discount: "UPTO 50% OFF",
    showShopNow: true,
    bgColor: "bg-gray-200",
    hasBorder: false,
  },
];

export default function PromotionalBanners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`relative overflow-hidden group cursor-pointer ${
                banner.hasBorder ? "border-2 border-white shadow-lg" : ""
              }`}
            >
              {/* Background Color Container */}
              <div className={`absolute inset-0 ${banner.bgColor} z-0`} />

              {/* Image Container */}
              <div className={`relative ${banner.hasBorder ? "aspect-[3/4]" : "aspect-[4/5]"} overflow-hidden`}>
                <img
                  src={banner.image}
                  alt={banner.category}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay Gradient - only for dark backgrounds */}
                {banner.hasBorder && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                )}

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="space-y-1">
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                      {banner.category}
                    </h3>
                    {banner.subCategory && (
                      <h4 className="text-white text-lg md:text-xl font-semibold uppercase tracking-wide">
                        {banner.subCategory}
                      </h4>
                    )}
                    <p className="text-white text-base md:text-lg font-semibold mt-2">
                      {banner.discount}
                    </p>
                    {banner.showShopNow && (
                      <button className="mt-4 bg-white text-gray-900 px-6 py-2.5 rounded font-bold text-sm uppercase hover:bg-gray-100 transition-colors shadow-md">
                        SHOP NOW
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

