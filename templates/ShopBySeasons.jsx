"use client";

const seasons = [
  {
    id: 1,
    name: "SUMMER",
    image: "/img/home/ready/r1.jpg",
  },
  {
    id: 2,
    name: "WINTER",
    image: "/img/home/ready/r1.jpg",
  },
  {
    id: 3,
    name: "ALL SEASONS",
    image: "/img/home/ready/r1.jpg",
  },
];

export default function ShopBySeasons() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 uppercase tracking-wide">
            SHOP BY SEASONS
          </h2>
          <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
        </div>

        {/* Circular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {seasons.map((season) => (
            <div
              key={season.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Image */}
              <div className="relative w-full max-w-[300px] aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={season.image}
                  alt={season.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Season Name */}
              <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mt-2">
                {season.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

