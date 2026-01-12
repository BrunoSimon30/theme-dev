import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import ProductListing from "@/templates/ProductListing";

export default function Unstitched() {
  return (
    <>
      <Meta
        title={`Unstitched - ${AppConfig.title}`}
        description="Browse our unstitched fabric collection"
      />
      <Header />
      <section 
        className="h-[40vh] mt-26 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/img/banner/ban2.webp)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-white text-4xl font-bold relative z-10">Unstitched Collection</h1>
      </section>
      <ProductListing />
      <Footer />
    </>
  );
}

