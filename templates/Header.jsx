"use client";

import { useState, useEffect } from "react";
import { IoChevronDown, IoClose, IoMailSharp, IoMenu } from "react-icons/io5";
import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AppConfig } from "@/config/AppConfig";
import { TiUser } from "react-icons/ti";
import { IoIosSearch, IoMdHeart } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { X } from "lucide-react";

export default function Header() {
  const [showTop, setShowTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Simple menu items with dropdown support
  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Products",
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        { title: "Ready To Wear", href: "/products/ready-to-wear" },
        { title: "Unstitched", href: "/products/unstitched" },
        { title: "Accessories", href: "/products/accessories" },
        { title: "Sale", href: "/products/sale" },
      ],
    },
    { title: "Shop", href: "/shop" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  // Sample search data
  const quickSearchTerms = [
    "Jahan",
    "Mahiroo",
    "Shadmani",
    "Lovestruck",
    "NP-532",
    "NP-517",
    "NP-468",
  ];

  const suggestions = ["nel", "nw 109", "np 600", "nsg"];

  const searchResults = [
    {
      id: 1,
      code: "NP-670",
      image: "/img/home/ready/r1.jpg",
      originalPrice: "Rs.15,000.00",
      salePrice: "Rs.9,000.00",
      onSale: true,
    },
    {
      id: 2,
      code: "NP-659",
      image: "/img/home/ready/r1.jpg",
      originalPrice: "Rs.12,500.00",
      salePrice: null,
      onSale: false,
    },
    {
      id: 3,
      code: "NP-600",
      image: "/img/home/ready/r1.jpg",
      originalPrice: "Rs.14,500.00",
      salePrice: null,
      onSale: false,
    },
  ];

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 👈 md breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll hide/show
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - lastScroll) < 10) return;
      setShowTop(current < lastScroll);
      lastScroll = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close search
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isSearchOpen]);

  // Lock body scroll when search or mobile menu is open
  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen, isMobileMenuOpen]);

  return (
    <header className="w-full fixed top-0 z-60">
      {/* Top Header with animation */}
      <motion.div
        initial={{ marginBottom: 0 }}
        animate={{
          marginBottom: showTop ? 0 : isMobile ? -47 : -58,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="top-head bg-mainclr border-b border-gray-100 px-4 py-2  "
      >
        <div className="container mx-auto flex justify-between items-center ">
          <div className="flex items-center w-full justify-center xl:justify-start divide-x divide-gray-600  ">
            {/* Phone */}
            <div className="flex items-center space-x-2 pr-6">
              <FaPhoneAlt className="text-sm 2xl:text-lg text-txtclr" />
              <Link
                href={`tel:${AppConfig.tel}`}
                className="text-xs   text-txtclr font-bold"
              >
                {AppConfig.tel}
              </Link>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2 pl-6">
              <IoMailSharp className="text-sm 2xl:text-lg text-txtclr" />
              <Link
                href={`mailto:${AppConfig.email}`}
                className="text-xs  font-bold"
              >
                {AppConfig.email}
              </Link>
            </div>
          </div>
          <div className=" flex items-center gap-3  ">
            <Link href="" className="border border-txtclr rounded-full p-2">
              <FaInstagram className="text-xs text-txtclr" />
            </Link>
            <Link href="" className="border border-txtclr rounded-full p-2">
              <FaFacebookF className="text-xs text-txtclr" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Bottom nav always visible */}
      <nav className="bottom-head bg-white border-b border-gray-100 px-4 py-5 xl:py-4 drop-shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img src="/img/logo1.png" className="w-32" alt="" />
            </Link>
          </div>
        
          {/* Simple Menu items */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-8">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && setOpenDropdown(i)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`font-medium text-sm 2xl:text-md transition-colors flex items-center gap-1.5 py-2 relative ${
                    openDropdown === i
                      ? "text-gray-900"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <IoChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        openDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && openDropdown === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ 
                        duration: 0.25, 
                        ease: [0.4, 0, 0.2, 1],
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 min-w-[240px] z-50 overflow-hidden backdrop-blur-sm"
                      onMouseEnter={() => setOpenDropdown(i)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {/* Arrow indicator */}
                      <div className="absolute -top-2.5 left-8 w-5 h-5 bg-white border-l border-t border-gray-100 transform rotate-45 shadow-sm"></div>
                      
                      <div className="py-1.5 relative bg-white">
                        {item.dropdownItems.map((dropdownItem, j) => (
                          <Link
                            key={j}
                            href={dropdownItem.href}
                            className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:text-gray-900 transition-all duration-200 relative group/item"
                          >
                            <span className="relative z-10 flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover/item:bg-gray-900 transition-colors duration-200"></span>
                              {dropdownItem.title}
                            </span>
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-900 to-gray-700 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center rounded-r"></span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3  ">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="border border-txtclr rounded-full p-2"
              >
                <IoIosSearch className="text-md text-txtclr" />
              </button>
              <Link href="/account" className="border border-txtclr rounded-full p-2 hover:bg-gray-50 transition-colors">
                <TiUser className="text-md text-txtclr" />
              </Link>
              <Link href="/account/wishlist" className="border border-txtclr rounded-full p-2 hover:bg-gray-50 transition-colors relative">
                <IoMdHeart className="text-md text-txtclr" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Link>
              <Link href="/cart" className="border border-txtclr rounded-full p-2 hover:bg-gray-50 transition-colors relative">
                <IoCartSharp className="text-md text-txtclr" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Link>
            </div>
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2"
              >
                <IoMenu className="text-3xl text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Simple Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[100] xl:hidden"
            />

            {/* Mobile Menu Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 h-full w-[300px] max-w-[80vw] bg-white z-[101] shadow-2xl overflow-y-auto xl:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src="/img/logo.svg" className="w-36" alt="Logo" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <IoClose className="text-3xl text-black" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-6">
                <nav className="space-y-2">
                  {menuItems.map((item, i) => (
                    <div key={i} className="border-b border-gray-100">
                      {item.hasDropdown ? (
                        <>
                          <button
                            onClick={() =>
                              setOpenMobileDropdown(
                                openMobileDropdown === i ? null : i
                              )
                            }
                            className="w-full flex items-center justify-between text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                          >
                            <span>{item.title}</span>
                            <IoChevronDown
                              className={`text-sm transition-transform ${
                                openMobileDropdown === i
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openMobileDropdown === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pb-2 space-y-1">
                                  {item.dropdownItems.map(
                                    (dropdownItem, j) => (
                                      <Link
                                        key={j}
                                        href={dropdownItem.href}
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setOpenMobileDropdown(null);
                                        }}
                                        className="block text-base text-gray-700 hover:text-gray-900 transition-colors py-2"
                                      >
                                        {dropdownItem.title}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Menu Account Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="space-y-3">
                    <Link
                      href="/account"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                    >
                      <TiUser className="text-xl" />
                      <span>My Account</span>
                    </Link>
                    <Link
                      href="/account/wishlist"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                    >
                      <IoMdHeart className="text-xl" />
                      <span>Wishlist</span>
                    </Link>
                    <Link
                      href="/cart"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                    >
                      <IoCartSharp className="text-xl" />
                      <span>Cart</span>
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-4"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence mode="wait">
        {isSearchOpen && (
          <div key="search-overlay">
            {/* Overlay Background */}
            <motion.div
              key="search-overlay-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-black/50 z-[100]"
            />

            {/* Search Sidebar */}
            <motion.div
              key="search-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300,
                duration: 0.3
              }}
              className="fixed right-0 top-0 h-full w-[500px] max-w-[90vw] bg-white z-[101] shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-gray-700 uppercase">
                  SEARCH OUR SITE
                </h2>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    autoFocus
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <IoIosSearch className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Quick Search */}
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Quick search:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickSearchTerms.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(term)}
                        className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
                      >
                        {term}
                        {index < quickSearchTerms.length - 1 && ","}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                {searchQuery && (
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      Suggestions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions
                        .filter((suggestion) =>
                          suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchQuery(suggestion)}
                            className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
                          >
                            {suggestion}
                            {index < suggestions.length - 1 && ","}
                          </button>
                        ))}
                    </div>
                  </div>
                )}

                {/* Search Results */}
                {searchQuery && (
                  <>
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Search results
                      </h3>
                      <div className="space-y-4">
                        {searchResults.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                          >
                            {/* Product Image */}
                            <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                              <img
                                src={product.image}
                                alt={product.code}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">
                                {product.code}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                {product.onSale ? (
                                  <>
                                    <span className="text-sm text-gray-500 line-through">
                                      {product.originalPrice}
                                    </span>
                                    <span className="text-sm font-semibold text-red-600">
                                      {product.salePrice}
                                    </span>
                                  </>
                                ) : (
                                  <span className="text-sm font-semibold text-gray-900">
                                    {product.originalPrice}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
