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
      <section 
        className="h-[40vh] mt-26 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/img/banner/mban1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-white text-4xl font-bold relative z-10">About Us</h1>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/img/about.webp"
                  alt="About Us"
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Welcome to our clothing store! We are passionate about providing
                    high-quality traditional and modern clothing for all occasions.
                  </p>
                  <p className="leading-relaxed">
                    Our mission is to bring you the finest collection of ready-to-wear
                    outfits, unstitched fabrics, and accessories that combine
                    traditional elegance with contemporary style.
                  </p>
                  <p className="leading-relaxed">
                    With years of experience in the fashion industry, we carefully
                    curate our collections to ensure the highest standards of quality
                    and craftsmanship.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">1000+</h3>
                  <p className="text-gray-600 text-sm">Happy Customers</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">500+</h3>
                  <p className="text-gray-600 text-sm">Products</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">10+</h3>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

