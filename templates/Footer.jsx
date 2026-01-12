import { AppConfig } from "@/config/AppConfig";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCallSharp,IoMail  } from "react-icons/io5";
import { FaFacebookF,FaInstagram  } from "react-icons/fa";

const footerMenus = [
  {
    title: "Shop",
    links: [
      { title: "All Products", link: "/products" },
      { title: "Ready To Wear", link: "/products/ready-to-wear" },
      { title: "Unstitched", link: "/products/unstitched" },
      { title: "Accessories", link: "/products/accessories" },
      { title: "Sale", link: "/products/sale" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { title: "Contact Us", link: "/contact" },
      { title: "FAQ", link: "/faq" },
      { title: "Shipping & Returns", link: "/contact" },
      { title: "Size Guide", link: "/contact" },
      { title: "Track Order", link: "/account/orders" },
    ],
  },
  {
    title: "Account",
    links: [
      { title: "My Account", link: "/account" },
      { title: "My Orders", link: "/account/orders" },
      { title: "Wishlist", link: "/account/wishlist" },
      { title: "Login", link: "/login" },
      { title: "Register", link: "/register" },
    ],
  },
  {
    title: "Information",
    links: [
      { title: "About Us", link: "/about" },
      { title: "Privacy Policy", link: "/privacy-policy" },
      { title: "Terms & Conditions", link: "/terms-conditions" },
    ],
  },
  {
    title: "Quick Links",
   links: [
      { title: "Home", link: "/" },
      { title: "Shop", link: "/shop" },
      { title: "Cart", link: "/cart" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background text-white pt-20 lg:pt-32 pb-8 lg:pb-16">
      <div className="container mx-auto    px-4">
        {/* Main Footer Menu */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {footerMenus.map((menu, idx) => (
            <div key={idx} className="space-y-2 lg:space-y-12">
              <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                <h3 className="text-white default-secondary-text font-semibold">
                  {menu.title}
                </h3>
              </div>
              <div className="space-y-3 lg:space-y-6">
             {menu.links.map((link, i) => {
                    return (

                      !link?.isChip ?
                        <Link
                        key={i}
                        href={link.link}
                        className={`text-[#C9C3E0] hover:text-white transition-colors lg:text-sm  xl:text-md flex items-center gap-2 overflow-hidden group `}
                      >
                        <span className="-ml-6 group-hover:ml-0 transition-all duration-500 ease-in-out text-xl">
                          <GoArrowUpRight />
                        </span>
                        <p>{link.title}</p>
                      </Link>
                      : 
                        <Link
                        key={i}
                        href={link.link}
                        className={`text-[#C9C3E0] hover:text-white transition-colors lg:text-sm  xl:text-md flex items-center gap-2 overflow-hidden group px-4 py-1 rounded-full bg-gray-800 w-fit`}
                      >
                        
                        <p>{link.title}</p>
                      </Link>
                      
                      
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Content */}
        <div className="md:flex gap-10 items-center   border-t border-gray-800">
          {/* Locations */}
          <div className="space-y-4 py-8  ">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
              <h3 className="text-white font-semibold">Locations</h3>
            </div>
            <div className="flex items-start space-x-2 text-[#C9C3E0]">
              <p className="max-w-[250px] xl:max-w-2xl">
                123 Fashion Street, Karachi, Pakistan
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="xl:w-[50%] flex lg:justify-center space-y-4 md:border-l border-gray-800 md:border-r py-8 md:px-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                <h3 className="text-white font-semibold">Contact Us</h3>
              </div>
              <div className="lg:flex gap-6 lg:items-center items-start space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-3">
                   
                  <Link
                    href={`tel:${AppConfig.tel}`}
                    className="text-[#C9C3E0] flex gap-2 items-center"
                  >
                    <span className="text-xl border-secondary-green border w-12 h-12 flex items-center justify-center rounded-full"><IoCallSharp /></span>
                    {AppConfig.tel}
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                   
                  <Link
                    href={`mailto:${AppConfig.email}`}
                      className="text-[#C9C3E0] flex gap-2 items-center"
                  >
                     <span className="text-xl border-secondary-green border w-12 h-12 flex items-center justify-center rounded-full"><IoMail  /></span>
                    {AppConfig.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 py-8">
            <div className="flex items-center lg:justify-center space-x-3">
              <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
              <h3 className="text-white font-semibold">Follow Us</h3>
            </div>
            <div className="flex items-center gap-3 lg:justify-center ">
               <Link href={''} className="text-xl border-secondary-green border w-12 h-12 flex items-center justify-center rounded-full"><FaFacebookF /></Link>
               <Link href={''} className="text-xl border-secondary-green border w-12 h-12 flex items-center justify-center rounded-full"><FaInstagram /></Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-800">
          <p className="text-[#C9C3E0] text-md mb-4 md:mb-0 text-center xl:text-left w-full">
            © {new Date().getFullYear()} {AppConfig.site_name}. All Rights Reserved.
          </p>
          <div className="hidden  lg:flex items-center space-x-4 w-full justify-end">
            <span className="text-[#C9C3E0] text-md">
              Acceptable Payment Methods:
            </span>
            <div className="flex space-x-2">
              <img src="/img/footer/visa.webp" width={40} height={40} alt="" />
              <img src="/img/footer/pay.webp" width={40} height={40} alt="" />
              <img src="/img/footer/amex.webp" width={40} height={40} alt="" />
              <img
                src="/img/footer/amster.webp"
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
