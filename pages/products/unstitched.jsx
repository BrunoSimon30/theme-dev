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
      <section className="bg-slate-800 h-[40vh] mt-26 overflow-hidden flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Unstitched Collection</h1>
      </section>
      <ProductListing />
      <Footer />
    </>
  );
}

