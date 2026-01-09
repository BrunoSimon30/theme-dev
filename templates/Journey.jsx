import Button from "@/components/ui/Button";
import { useEffect } from "react";
export default function JourneySection({ header, description, cta }) {
  return (
    <section className="relative bg-white px-4 py-8 xl:py-16 overflow-hidden">
      <div className="container mx-auto  ">
        <div className="grid lg:grid-cols-2 gap-12 p-10 items-center bg-background-light bg-[url(/img/about/about-banner.svg)] bg-fixed bg-contain bg-right-bottom bg-no-repeat rounded-2xl ">
          <div className="space-y-8">
            {/* About Label */}
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-default text-lg font-bold">About</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-secondary leading-tight">
              {header}
            </h2>

            {/* Description */}
            <p className="2xl:text-lg text-default font-leading-8 font-medium max-w-3xl">
              {description}
            </p>

            {/* CTA Button */}
            {Array.isArray(cta) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {cta.map((item, index) => (
                  <Button
                    key={index}
                    title={item.title}
                    variant={item.variant}
                  />
                ))}
                {/* <Button title="Book Your Free Strategy Call" />
              <Button title={`Call Us: ${AppConfig.tel}`} variant="outline" /> */}
              </div>
            )}

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8"></div>
          </div>

          {/* Decorative Grid Pattern */}
          {/* <div className="">
              <img src="/img/about/about-bnnr.svg" className="w-full" alt="" />
            </div> */}
        </div>
      </div>
    </section>
  );
}
