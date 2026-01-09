import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/config/AppConfig";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header";

export default function PrivacyPolicy() {
  return (
    <>
      <Meta
        title={`Privacy Policy - ${AppConfig.title}`}
        description="Our privacy policy"
      />
      <Header />
      <section className="py-16 mt-26">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including
                when you create an account, make a purchase, or contact us for
                support.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to process your orders, improve
                our services, and communicate with you about products and
                promotions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access and disclosure.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us
                at {AppConfig.email}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

