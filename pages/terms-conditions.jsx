import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";

export default function TermsConditions() {
  return (
    <>
      <Meta
        title={`Terms & Conditions - ${AppConfig.title}`}
        description="Terms and conditions"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on our website for personal, non-commercial transitory
                viewing only.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and images.
                However, we do not warrant that product descriptions or other
                content on this site is accurate, complete, or error-free.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
              <p>
                All prices are subject to change without notice. We reserve the
                right to modify prices at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

