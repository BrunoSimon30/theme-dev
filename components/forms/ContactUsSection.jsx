import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { AppConfig } from "@/config/AppConfig";
import Link from "next/link";

export default function ContactFormSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto p-8 lg:p-16 bg-[url(/img/home/form-bg.png)] bg-cover bg-no-repeat rounded-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div className="space-y-8 ">
            {/* Section Header */}
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-[#C9C3E0] text-md">Contact Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="default-header-text text-white">
              Let's Make
              <br />
              Something <span className="text-primary">Amazing Together!</span>
            </h2>

            {/* Description */}
            <div>
              <h3 className="text-xl text-white font-semibold">
                Got Questions? We Have Answers.
              </h3>
              <p className="text-[#C9C3E0] default-secondary-text ">
                Whether you're looking to build a groundbreaking app, a
                cutting-edge website, or something completely custom—our team is
                here to help you turn your ideas into reality. Don't just
                contact us—start a conversation that could change your business
                forever.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="lg:flex items-center space-x-5">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="  2xl:text-2xl text-primary" />
                  <Link
                    href={`tel:${AppConfig.tel}`}
                    className="text-white 2xl:text-xl"
                  >
                    {AppConfig.tel}
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <IoMailSharp className="  2xl:text-2xl text-primary" />
                  <Link
                    href={`mailto:${AppConfig.email}`}
                    className="text-white 2xl:text-xl"
                  >
                    {AppConfig.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
