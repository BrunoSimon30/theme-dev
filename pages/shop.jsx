import { Meta } from '@/components/layout/Meta'
import { AppConfig } from '@/config/AppConfig'
import Footer from '@/templates/Footer'
import Header from '@/templates/Header'
import ProductListing from '@/templates/ProductListing'
import React from 'react'

export default function shop() {
  return (
    <>
     <Meta title={AppConfig.title} description={AppConfig.description} />
     <Header />
     <section className="bg-slate-800 h-[40vh] mt-26 overflow-hidden"></section>
    <ProductListing/>
    <Footer />
    </>
  )
}
