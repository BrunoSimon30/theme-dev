import CenterBannner from "@/components/Centerbanner";
import { Meta } from "@/components/layout/Meta";
import Products from "@/components/Products";
import Readywear from "@/components/Readywear";

import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";
import Hero from "@/templates/Hero";
import ProductListing from "@/templates/ProductListing";
import PromotionalBanners from "@/templates/PromotionalBanners";
import ShopBySeasons from "@/templates/ShopBySeasons";

export default function Home() {



  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <Hero />
      <Readywear />
   <Products/>
   <CenterBannner/>
   <Products/>
   <CenterBannner/>
      <PromotionalBanners />
      <CenterBannner/>
      <ShopBySeasons />

      


      <Footer />
    </>
  );
}
