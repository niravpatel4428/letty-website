"use client";

import Image from "next/image";
import Link from "next/link";

/* ================================
   Data
================================ */
const stats = [
  {
    // value: 40-50,
    suffix: "40-50%",
    text: "of tickets resolved without human touch",
  },
  {
    // value: 3,
    suffix: "3+ hours",
    text: "saved per PM per day",
  },
  {
    // value: 3,
    suffix: "Minutes",
    text: "average response time",
  },
  {
    // value: 3,
    suffix: "£0",
    text: "additional headcount to scale",
  },
];

/* ================================
   Component
================================ */
const ResultsSpeak = () => {
    return (
        <div className="block py-12 md:py-18 xl:py-25 bg-black100">
            <div className="container">
                <div className="block">
                    {/* Heading */}
                    <div className="block space-y-3 text-center mb-8 lg:mb-15">
                        <div className="section-title text-white!">
                            <h2>The results speak for themselves</h2>
                        </div>
                    </div>

                    {/* ================================
                        DoublingHeadcount List
                    ================================ */}
                    <div className="block">
                        <div className="flex flex-wrap -mx-4">
                            {stats.map((item, index) => {

                            return (
                                <div key={index} className="flex-none w-full xs:w-1/2 md:w-1/3 xl:w-1/4 px-4 mb-8">
                                    <div className="flex flex-col justify-between gap-5 md:gap-8 xl:gap-12.5 h-full border-l-2 border-white pl-4 lg:pl-6">
                                        <div className="main-title font-normal! text-white!">
                                            <h3>{item.suffix}</h3>
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
                    <div className="block text-white pt-6 lg:pt-8 max-w-160 w-full mx-auto">
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

export default ResultsSpeak;
