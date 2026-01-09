"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ items }) {
  const [openFAQ, setOpenFAQ] = useState(1);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? 0 : id);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto  ">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-secondary font-medium">FAQ's</span>
          </div>

          <h2 className="default-header-text text-secondary">
            Frequently
            <br />
            Asked <span className="text-primary">Question</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        {Array.isArray(items) && (
          <div className="space-y-4">
            {items?.map((faq) => (
              <div
                key={faq.id}
                className="drop-shadow-sm bg-[#F9F9F9] rounded-2xl px-8 py-4"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="default-secondary-text font-semibold text-secondary p-2 rounded-2xl">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center drop-shadow-sm ${
                      openFAQ === faq.id
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    <IoChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animate Answer */}
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="default-secondary-text  text-gray-600 font-medium p-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
