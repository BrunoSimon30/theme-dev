import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import ProductListing from "@/templates/ProductListing";

export default function Sale() {
  return (
    <>
      <Meta
        title={`Sale - ${AppConfig.title}`}
        description="Shop our sale collection with amazing discounts"
      />
      <Header />
      <section className="bg-red-600 h-[40vh] mt-26 overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold mb-4">SALE</h1>
          <p className="text-white text-xl">Up to 50% OFF</p>
        </div>
      </section>
      <ProductListing />
      <Footer />
    </>
  );
}

