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
      <section 
        className="h-[40vh] mt-26 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/img/banner/ban4.webp)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-white text-5xl font-bold mb-4">SALE</h1>
          <p className="text-white text-xl">Up to 50% OFF</p>
        </div>
      </section>
      <ProductListing />
      <Footer />
    </>
  );
}

