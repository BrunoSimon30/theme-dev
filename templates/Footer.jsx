import { AppConfig } from "@/config/AppConfig";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCallSharp,IoMail  } from "react-icons/io5";
import { FaFacebookF,FaInstagram  } from "react-icons/fa";

const footerMenus = [
  {
    title: "Advisory & Design",
    links: [
       { title: "Advisory", link: "/development/app-development" },
      { title: "Design", link: "" },]
  },
  {
    title: "Development",
    links: [
      { title: "App Development", link: "/development/app-development" },
      { title: "Web Development", link: "" },
      { title: "Game Development", link: "" },
      { title: "Custom Software Development", link: "" },
      { title: "Artificial Intelligence", link: "" },
    ],
  },
  {
    title: "Ecommerce",
    links: [
      { title: "Shopify", link: "/development/app-development" },
      { title: "Bigcommerce", link: "" },
      { title: "Magento", link: "" },
      { title: "WooCommerce", link: "" },
      { title: "Custom Ecommerce", link: "" },
    ],
  },
  {
    title: "Data & Cloud",
    links: [
      { title: "Cloud Consulting", link: "" },
      { title: "Data", link: "" },
    ],
  },
  {
    title: "Solutions",
   links: [
      { title: "Staff Augmentation", isChip : true , link: "" },
      { title: "Microsoft Dynamics",isChip : true, link: "" },
      { title: "Hubspot", isChip : true,link: "" },
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
                11658 S. Copper Sky Dr, South Jordan, UT, 84009, USA
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
            © {new Date().getFullYear()}   Billion Logics, LLC. All Rights Reserved.
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
