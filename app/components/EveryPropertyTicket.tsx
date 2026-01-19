import Image from "next/image";
import React from "react";

/* =========================
   Types
========================= */
type EveryPropertyTicketProps = {
  title?: string;
  points?: string[];

  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

/* =========================
   Component
========================= */
const EveryPropertyTicket = ({
  title = "",
  points = [],

  imageSrc = "",
  imageAlt = "",
  imageWidth,
  imageHeight,
}: EveryPropertyTicketProps) => {
    return (
        <div className="block py-12 md:py-18 xl:py-25">
            <div className="container">
                <div className="block">
                    <div className="flex flex-wrap items-center -mx-4">
                        {/* Content */}
                        <div className="flex-none xl:flex-1 w-full lg:w-1/2 px-4">
                            <div className="block space-y-6 mb-8 lg:mb-0">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                </div>

                                <div className="block custom-checkmark-list orange-checkmark">
                                    <ul>
                                        {points.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex-none w-full lg:w-1/2 px-4">
                            <div className="block">
                                <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} className="w-full max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EveryPropertyTicket;