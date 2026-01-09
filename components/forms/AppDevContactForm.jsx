import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const AppContactForm = ({ url }) => {
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
    <div className="flex justify-center-safe w-full ">
      <div className="px-5 py-6 rounded-[28px] border-[3px] border-white bg-white shadow-xl min-w-full lg:min-w-md xl:min-w-lg  ">
        <h2 className="text-secondary text-2xl xl:text-4xl lg:text-[30px] font-semibold leading-10 mb-8">
          Book a Free <br />
          Consultation
        </h2>
        <form className="space-y-6 mt-4 ">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-0 py-2 text-md text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Business Email"
              className="w-full px-0 py-2 text-md text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-0 py-2 text-md text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full h-[100px] px-0 py-2 text-md text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none bg-transparent resize-none"
            ></textarea>
          </div>
          <div className="text-right">
            <Button title="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppContactForm;
