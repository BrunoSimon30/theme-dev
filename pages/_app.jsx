import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Montserrat, Poppins, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import Lenis from "lenis";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="" />
      </Head>

      <main
        className={`${plusJakarta.variable} font-plus-jakarta w-full min-h-screen`}
      >
        <ToastContainer />
        <Component {...pageProps} />
      </main>

     
    </>
  );
}
