"use client";

import { useState, useRef, useEffect } from "react";
import { Star, ArrowUpDown, Eye, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const productsData = [
  {
    id: 1,
    name: "SOPHIA",
    price: 68000,
    priceDisplay: "Rs. 68,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-15"),
    bestSelling: false,
    inStock: true,
    sizes: ["S", "M", "L"],
    fabric: "Chiffon",
  },
  {
    id: 2,
    name: "HELEN",
    price: 72000,
    priceDisplay: "Rs. 72,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-20"),
    bestSelling: true,
    inStock: true,
    sizes: ["M", "L", "XL"],
    fabric: "Chiffon",
  },
  {
    id: 3,
    name: "FRIDA",
    price: 72000,
    priceDisplay: "Rs. 72,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-10"),
    bestSelling: false,
  },
  {
    id: 4,
    name: "DIANA",
    price: 74000,
    priceDisplay: "Rs. 74,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-05"),
    bestSelling: true,
  },
  {
    id: 5,
    name: "AUDREY",
    price: 72000,
    priceDisplay: "Rs. 72,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-01"),
    bestSelling: false,
  },
  {
    id: 6,
    name: "ELEANOR",
    price: 75000,
    priceDisplay: "Rs. 75,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-15"),
    bestSelling: true,
  },
  {
    id: 7,
    name: "GRACE",
    price: 69000,
    priceDisplay: "Rs. 69,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-25"),
    bestSelling: false,
  },
  {
    id: 8,
    name: "ISABELLA",
    price: 78000,
    priceDisplay: "Rs. 78,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-10"),
    bestSelling: true,
  },
  {
    id: 9,
    name: "JULIA",
    price: 71000,
    priceDisplay: "Rs. 71,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-20"),
    bestSelling: false,
  },
  {
    id: 10,
    name: "KATHERINE",
    price: 73000,
    priceDisplay: "Rs. 73,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-05"),
    bestSelling: false,
  },
  {
    id: 11,
    name: "LUCIA",
    price: 76000,
    priceDisplay: "Rs. 76,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-25"),
    bestSelling: true,
  },
  {
    id: 12,
    name: "MADELINE",
    price: 70000,
    priceDisplay: "Rs. 70,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-10"),
    bestSelling: false,
  },
  {
    id: 13,
    name: "NATALIE",
    price: 74000,
    priceDisplay: "Rs. 74,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-20"),
    bestSelling: false,
  },
  {
    id: 14,
    name: "OLIVIA",
    price: 77000,
    priceDisplay: "Rs. 77,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-15"),
    bestSelling: true,
  },
  {
    id: 15,
    name: "PENELOPE",
    price: 72000,
    priceDisplay: "Rs. 72,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-25"),
    bestSelling: false,
  },
  {
    id: 16,
    name: "QUINN",
    price: 75000,
    priceDisplay: "Rs. 75,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-30"),
    bestSelling: false,
  },
  {
    id: 17,
    name: "ROSALIE",
    price: 79000,
    priceDisplay: "Rs. 79,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-05"),
    bestSelling: true,
  },
  {
    id: 18,
    name: "SERAPHINA",
    price: 73000,
    priceDisplay: "Rs. 73,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-12"),
    bestSelling: false,
  },
  {
    id: 19,
    name: "THEODORA",
    price: 76000,
    priceDisplay: "Rs. 76,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-18"),
    bestSelling: false,
  },
  {
    id: 20,
    name: "VIVIAN",
    price: 74000,
    priceDisplay: "Rs. 74,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-28"),
    bestSelling: true,
  },
  {
    id: 21,
    name: "WILLOW",
    price: 71000,
    priceDisplay: "Rs. 71,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-08"),
    bestSelling: false,
  },
  {
    id: 22,
    name: "XARA",
    price: 78000,
    priceDisplay: "Rs. 78,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-12"),
    bestSelling: false,
  },
  {
    id: 23,
    name: "YASMIN",
    price: 75000,
    priceDisplay: "Rs. 75,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-22"),
    bestSelling: true,
  },
  {
    id: 24,
    name: "ZARA",
    price: 72000,
    priceDisplay: "Rs. 72,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-18"),
    bestSelling: false,
  },
  {
    id: 25,
    name: "AMELIA",
    price: 76000,
    priceDisplay: "Rs. 76,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-28"),
    bestSelling: false,
  },
  {
    id: 26,
    name: "BEATRICE",
    price: 74000,
    priceDisplay: "Rs. 74,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-08"),
    bestSelling: true,
  },
  {
    id: 27,
    name: "CELESTE",
    price: 77000,
    priceDisplay: "Rs. 77,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-22"),
    bestSelling: false,
  },
  {
    id: 28,
    name: "DAPHNE",
    price: 73000,
    priceDisplay: "Rs. 73,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-08"),
    bestSelling: false,
  },
  {
    id: 29,
    name: "ELENA",
    price: 75000,
    priceDisplay: "Rs. 75,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-18"),
    bestSelling: true,
  },
  {
    id: 30,
    name: "FIONA",
    price: 72000,
    priceDisplay: "Rs. 72,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-14"),
    bestSelling: false,
  },
  {
    id: 31,
    name: "GABRIELLA",
    price: 78000,
    priceDisplay: "Rs. 78,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-22"),
    bestSelling: false,
  },
  {
    id: 32,
    name: "HARPER",
    price: 74000,
    priceDisplay: "Rs. 74,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-12"),
    bestSelling: true,
  },
  {
    id: 33,
    name: "IMOGEN",
    price: 76000,
    priceDisplay: "Rs. 76,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-28"),
    bestSelling: false,
  },
  {
    id: 34,
    name: "JOSEPHINE",
    price: 71000,
    priceDisplay: "Rs. 71,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-01-14"),
    bestSelling: false,
  },
  {
    id: 35,
    name: "KIRA",
    price: 79000,
    priceDisplay: "Rs. 79,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-02-26"),
    bestSelling: true,
  },
  {
    id: 36,
    name: "LILIANA",
    price: 73000,
    priceDisplay: "Rs. 73,000.00",
    image: "/img/home/ready/r1.jpg",
    hasOptions: true,
    dateAdded: new Date("2024-03-06"),
    bestSelling: false,
  },
];

const sortOptions = [
  "Featured",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];

const availabilityOptions = [
  { label: "In Stock", count: 253 },
  { label: "Out Of Stock", count: 216 },
];

const sizeOptions = [
  { label: "XS", count: 252 },
  { label: "S", count: 251 },
  { label: "M", count: 251 },
  { label: "L", count: 252 },
  { label: "XL", count: 251 },
  { label: "XXL", count: 251 },
  { label: "CUSTOM STITCH", count: 2 },
  { label: "UNSTITCHED", count: 129 },
];

const fabricOptions = [
  { label: "CAMBRIC JACQUARD", count: 2 },
  { label: "Chiffon", count: 50 },
  { label: "Cotail", count: 1 },
  { label: "COTTON JACQUARD", count: 2 },
];

// Calculate max price from products
const maxPrice = Math.max(...productsData.map(p => p.price));
const minPrice = Math.min(...productsData.map(p => p.price));

export default function ProductListing() {
  const [activeGrid, setActiveGrid] = useState(5);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const sortDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add default properties to products that don't have them
  // Use a deterministic approach instead of Math.random() to avoid hydration issues
  const productsWithDefaults = productsData.map((product, index) => ({
    ...product,
    inStock: product.inStock !== undefined ? product.inStock : index % 3 !== 0, // 2/3 products in stock
    sizes: product.sizes || ["S", "M", "L", "XL"],
    fabric: product.fabric || "Chiffon",
  }));

  // Filter products based on selected filters
  const getFilteredProducts = () => {
    let filtered = [...productsWithDefaults];

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Availability filter
    if (selectedAvailability.length > 0) {
      if (selectedAvailability.includes("In Stock")) {
        filtered = filtered.filter((p) => p.inStock);
      }
      if (selectedAvailability.includes("Out Of Stock")) {
        filtered = filtered.filter((p) => !p.inStock);
      }
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((p) =>
        selectedSizes.some((size) => p.sizes?.includes(size))
      );
    }

    // Fabric filter
    if (selectedFabrics.length > 0) {
      filtered = filtered.filter((p) =>
        selectedFabrics.includes(p.fabric)
      );
    }

    return filtered;
  };

  // Sort products based on selected option
  const getSortedProducts = () => {
    let sorted = getFilteredProducts();

    switch (selectedSort) {
      case "Featured":
        // Keep original order for featured
        break;
      case "Best selling":
        sorted = sorted.sort((a, b) => {
          if (a.bestSelling && !b.bestSelling) return -1;
          if (!a.bestSelling && b.bestSelling) return 1;
          return 0;
        });
        break;
      case "Alphabetically, A-Z":
        sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Alphabetically, Z-A":
        sorted = sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price, low to high":
        sorted = sorted.sort((a, b) => a.price - b.price);
        break;
      case "Price, high to low":
        sorted = sorted.sort((a, b) => b.price - a.price);
        break;
      case "Date, old to new":
        sorted = sorted.sort(
          (a, b) => a.dateAdded.getTime() - b.dateAdded.getTime()
        );
        break;
      case "Date, new to old":
        sorted = sorted.sort(
          (a, b) => b.dateAdded.getTime() - a.dateAdded.getTime()
        );
        break;
      default:
        break;
    }

    return sorted;
  };

  const sortedProducts = getSortedProducts();

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const products = sortedProducts.slice(startIndex, endIndex);

  // Reset to page 1 when sort or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSort, selectedAvailability, selectedSizes, selectedFabrics, priceRange]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Keyboard navigation for pagination
  useEffect(() => {
    const totalPagesCount = Math.ceil(sortedProducts.length / productsPerPage);
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      }
      if (e.key === 'ArrowRight' && currentPage < totalPagesCount) {
        setCurrentPage(prev => prev + 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, sortedProducts.length, productsPerPage]);

  // Clear all filters function
  const clearAllFilters = () => {
    setSelectedAvailability([]);
    setSelectedSizes([]);
    setSelectedFabrics([]);
    setPriceRange([minPrice, maxPrice]);
    setCurrentPage(1);
  };

  // Get active filter count
  const activeFilterCount = selectedAvailability.length + selectedSizes.length + selectedFabrics.length;

  // Apply filters and close on mobile
  const applyFilters = () => {
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };

  // Toggle checkbox handlers
  const toggleAvailability = (label) => {
    setSelectedAvailability((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const toggleSize = (label) => {
    setSelectedSizes((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const toggleFabric = (label) => {
    setSelectedFabrics((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {/* Filter Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[400px] max-w-[90vw] bg-white z-100 shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold uppercase">FILTER</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Clear All Button */}
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded-full font-semibold uppercase hover:bg-gray-300 transition-colors mb-4"
                  >
                    Clear All Filters
                  </button>
                )}

                {/* Availability Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
                    Availability
                  </h3>
                  <div className="space-y-3">
                    {availabilityOptions.map((option) => (
                      <label
                        key={option.label}
                        className="flex items-center gap-3 cursor-pointer hover:text-gray-600"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(option.label)}
                          onChange={() => toggleAvailability(option.label)}
                          className="w-4 h-4 text-gray-600 rounded border-gray-300 focus:ring-2 focus:ring-gray-500"
                        />
                        <span className="text-sm">
                          {option.label} ({option.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
                    Price
                  </h3>
                  <div className="space-y-4">
                    {/* Price Range Display */}
                    <div className="text-sm text-gray-700">
                      Rs.{priceRange[0].toLocaleString("en-PK")} PKR — Rs.
                      {priceRange[1].toLocaleString("en-PK")} PKR
                    </div>

                    {/* Range Slider */}
                    <div className="relative h-2">
                      <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[0]}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setPriceRange([
                            Math.min(value, priceRange[1]),
                            priceRange[1],
                          ]);
                        }}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider"
                        style={{
                          zIndex: priceRange[0] > priceRange[1] - 100 ? 2 : 1,
                        }}
                      />
                      <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setPriceRange([
                            priceRange[0],
                            Math.max(value, priceRange[0]),
                          ]);
                        }}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider"
                      />
                      {/* Track Background */}
                      <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-lg -translate-y-1/2"></div>
                    </div>

                    {/* Filter Button */}
                    <button 
                      onClick={applyFilters}
                      className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-semibold uppercase hover:bg-gray-800 transition-colors"
                    >
                      FILTER
                    </button>
                  </div>
                </div>

                {/* Size Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
                    Size
                  </h3>
                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {sizeOptions.map((option) => (
                      <label
                        key={option.label}
                        className="flex items-center gap-3 cursor-pointer hover:text-gray-600"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(option.label)}
                          onChange={() => toggleSize(option.label)}
                          className="w-4 h-4 text-gray-600 rounded border-gray-300 focus:ring-2 focus:ring-gray-500"
                        />
                        <span className="text-sm">
                          {option.label} ({option.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fabric Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
                    Fabric
                  </h3>
                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {fabricOptions.map((option) => (
                      <label
                        key={option.label}
                        className="flex items-center gap-3 cursor-pointer hover:text-gray-600"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFabrics.includes(option.label)}
                          onChange={() => toggleFabric(option.label)}
                          className="w-4 h-4 text-gray-600 rounded border-gray-300 focus:ring-2 focus:ring-gray-500"
                        />
                        <span className="text-sm">
                          {option.label} ({option.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Product Count */}
          <div className="text-sm text-gray-600 mb-4">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
          </div>

          {/* Active Filter Chips */}
          {(selectedAvailability.length > 0 || selectedSizes.length > 0 || selectedFabrics.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedAvailability.map((filter) => (
                <span
                  key={`availability-${filter}`}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  {filter}
                  <button
                    onClick={() => toggleAvailability(filter)}
                    className="hover:text-red-600 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
              {selectedSizes.map((filter) => (
                <span
                  key={`size-${filter}`}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  Size: {filter}
                  <button
                    onClick={() => toggleSize(filter)}
                    className="hover:text-red-600 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
              {selectedFabrics.map((filter) => (
                <span
                  key={`fabric-${filter}`}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  Fabric: {filter}
                  <button
                    onClick={() => toggleFabric(filter)}
                    className="hover:text-red-600 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
              <button
                onClick={clearAllFilters}
                className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Top Section: Filters and Grid View */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            {/* Left Side: Filter and Featured Dropdowns */}
            <div className="flex gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="relative flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Filter
                  {activeFilterCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {activeFilterCount}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative" ref={sortDropdownRef}>
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors min-w-[150px] justify-between"
                >
                  <span>{selectedSort}</span>
                  {isSortOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isSortOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-50">
                    <ul className="py-1">
                      {sortOptions.map((option) => (
                        <li key={option}>
                          <button
                            onClick={() => {
                              setSelectedSort(option);
                              setIsSortOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${selectedSort === option
                                ? "bg-gray-100 font-medium"
                                : ""
                              }`}
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Grid View Buttons */}
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((cols) => (
                <button
                  key={cols}
                  onClick={() => setActiveGrid(cols)}
                  className={`w-10 h-8 border rounded flex items-center justify-center transition-colors ${activeGrid === cols
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                    }`}
                  aria-label={`${cols} column grid view`}
                >
                  <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, width: "16px", height: "12px" }}>
                    {Array.from({ length: cols * 2 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${activeGrid === cols ? "bg-white" : "bg-gray-400"
                          }`}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No products found</p>
              <button
                onClick={clearAllFilters}
                className="text-blue-600 hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${activeGrid === 1
                  ? "grid-cols-1"
                  : activeGrid === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : activeGrid === 3
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : activeGrid === 4
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
                }`}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image Container */}
                  <Link href={`/products/${product.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 cursor-pointer">
                      {/* Product Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                        {product.bestSelling && (
                          <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                            Best Seller
                          </span>
                        )}
                        {!product.bestSelling && new Date().getTime() - product.dateAdded.getTime() < 30 * 24 * 60 * 60 * 1000 && (
                          <span className="bg-green-500 text-white px-2 py-1 text-xs font-bold uppercase">
                            New
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="bg-gray-500 text-white px-2 py-1 text-xs font-bold uppercase">
                            Out of Stock
                          </span>
                        )}
                      </div>

                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                    {/* Action Icons (shown on hover) */}
                    {hoveredProduct === product.id && (
                      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            // Add to wishlist logic
                          }}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Star className="w-4 h-4 text-gray-700" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            // Compare logic
                          }}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <ArrowUpDown className="w-4 h-4 text-gray-700" />
                        </button>
                        <Link 
                          href={`/products/${product.id}`}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="w-4 h-4 text-gray-700" />
                        </Link>
                      </div>
                    )}

                    {/* Select Options Button (shown on hover for products with options) */}
                    {hoveredProduct === product.id && product.hasOptions && (
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <Link
                          href={`/products/${product.id}`}
                          className="block w-full bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium hover:bg-gray-50 transition-colors shadow-md text-center"
                        >
                          Select options
                        </Link>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Product Info */}
                <div className="text-center">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-700 font-medium">{product.priceDisplay}</p>
                </div>
              </motion.div>
            ))}
          </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center gap-4">
              {/* Products per page selector */}
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>Show:</span>
                <select
                  value={productsPerPage}
                  onChange={(e) => {
                    setProductsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={36}>36</option>
                  <option value={48}>48</option>
                </select>
                <span>per page</span>
              </div>

              {/* Page numbers */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded flex items-center gap-1 transition-colors ${
                    currentPage === 1
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 border rounded flex items-center justify-center transition-colors ${
                            currentPage === page
                              ? "bg-black text-white border-black"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <span key={page} className="px-2 text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 border rounded flex items-center gap-1 transition-colors ${
                    currentPage === totalPages
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Page Info */}
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1} to {Math.min(endIndex, sortedProducts.length)} of{" "}
                {sortedProducts.length} products
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

