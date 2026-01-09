import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import ProductListing from "@/templates/ProductListing";

export default function ReadyToWear() {
  return (
    <>
      <Meta
        title={`Ready To Wear - ${AppConfig.title}`}
        description="Browse our ready to wear collection"
      />
      <Header />
      <section className="bg-slate-800 h-[40vh] mt-26 overflow-hidden flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Ready To Wear</h1>
      </section>
      <ProductListing />
      <Footer />
    </>
  );
}

