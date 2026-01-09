import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const ContactForm = ({ url }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, url: url }));
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        "https://gb92tt6t-3085.uks1.devtunnels.ms/api/contact",
        formData,
      );
      toast.success("Sent successfully!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
      });

      setFormData({
        firstName: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end-safe w-full  ">
      <div className="bg-white rounded-2xl p-8 shadow-xl min-w-full lg:min-w-md xl:min-w-lg  ">
        <form className="space-y-6 ">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-purple-600 focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Business Email"
              className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-purple-600 focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-purple-600 focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-purple-600 focus:outline-none bg-transparent resize-none"
            ></textarea>
          </div>
          <Button title="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
