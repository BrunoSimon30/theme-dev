import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";

export default function About() {
  return (
    <>
      <Meta
        title={`About Us - ${AppConfig.title}`}
        description="Learn more about our company"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
            <p className="text-lg">
              Welcome to our clothing store! We are passionate about providing
              high-quality traditional and modern clothing for all occasions.
            </p>
            <p>
              Our mission is to bring you the finest collection of ready-to-wear
              outfits, unstitched fabrics, and accessories that combine
              traditional elegance with contemporary style.
            </p>
            <p>
              With years of experience in the fashion industry, we carefully
              curate our collections to ensure the highest standards of quality
              and craftsmanship.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">Products</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

