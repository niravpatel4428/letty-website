"use client";

import Image from "next/image";
import Link from "next/link";

/* ================================
   Data
================================ */
const stats = [
  {
    value: 90,
    suffix: "%+",
    text: "enquiries converted to viewings in under an hour",
  },
  {
    value: 25,
    suffix: "+",
    text: "new landlord and vendor instructions captured automatically every month",
  },
  {
    value: 3,
    suffix: "",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

/* ================================
   Component
================================ */
const DoublingHeadcount = () => {
  return (
    <div className="block py-12 md:py-18 xl:py-25 bg-black100">
      <div className="container">
        <div className="block">
          {/* Heading */}
          <div className="block space-y-3 text-center mb-8 lg:mb-15">
              <div className="section-title !text-white">
                  <h2>It’s like doubling your <strong>headcount</strong></h2>
              </div>

              <div className="block text-white">
                  <p>Without doubling your cost.</p>
              </div>
          </div>

          {/* ================================
              DoublingHeadcount List
          ================================ */}
          <div className="block max-w-277 w-full mx-auto">
              <div className="flex flex-wrap -mx-4">
                  {stats.map((item, index) => {

                  return (
                      <div key={index} className="flex-none w-full xs:w-1/2 md:w-1/3 px-4 mb-8">
                          <div className="flex flex-col justify-between gap-5 md:gap-8 xl:gap-12.5 h-full border-l-2 border-white pl-5 lg:pl-7">
                              <div className="main-title !font-normal !text-white">
                                  <h3><span>{item.value}</span> {item.suffix}</h3>
                              </div>

                              <div className="block text-gray200">
                                  <p>{item.text}</p>
                              </div>
                          </div>
                      </div>
                  );
                  })}
              </div>
          </div>
          {/* ================================ */}

          {/* Unlock Button */}
          <div className="block text-center py-4 lg:py-6">
              <Link href="#" className="btn btn-large btn-white btn-rounded-xl">Unlock your potential</Link>
          </div>

          {/* Director Quote */}
          <div className="block text-white pt-6 lg:pt-8 max-w-200 w-full mx-auto">
              <div className="block text-center font-light text-2xl md:text-3xl xl:text-40 leading-snug pb-6 lg:pb-8">
                  <p>&ldquo;We manage 300 more units than last year with the same team. Pete handles everything tenants used to call us about.&rdquo;</p>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-4 pt-6 lg:pt-8 border-t border-white text-end font-geist font-light text-lg xl:text-2xl leading-snug">
                  <Image src="/images/director-icon.png" alt="director-icon" width={100} height={100} className="w-10 h-10 max-w-full" />
                  <p>Operations Director, Winkworth</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoublingHeadcount;
