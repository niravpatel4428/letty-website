import Image from "next/image";
import React from "react";

/* =========================
   Types
========================= */
type TicketPropertiesProps = {
  title?: string;
  description?: string;

  mainImageSrc?: string;
  mainImageAlt?: string;
  mainImageWidth?: number;
  mainImageHeight?: number;

  stepsImageSrc?: string;
  stepsImageAlt?: string;
  stepsImageWidth?: number;
  stepsImageHeight?: number;

  textColumnClass?: string;
  imageColumnClass?: string;
};

/* =========================
   Component
========================= */
const TicketProperties = ({
  title = "",
  description = "",

  mainImageSrc = "",
  mainImageAlt = "",
  mainImageWidth,
  mainImageHeight,

  stepsImageSrc = "",
  stepsImageAlt = "",
  stepsImageWidth,
  stepsImageHeight,

  textColumnClass = "",
  imageColumnClass = "",
}: TicketPropertiesProps) => {
    return (
        <div className="block py-12 md:py-18 xl:py-25 bg-titan-white200">
            <div className="container">
                <div className="block">
                    <div className="flex flex-wrap items-center -mx-4">
                        {/* Image Column */}
                        {/* <div className="flex-none w-full lg:w-1/2 xl:w-153 px-4"> */}
                        <div className={`flex-none w-full px-4 ${imageColumnClass}`}>
                            <div className="block">
                                <Image src={mainImageSrc} width={mainImageWidth} height={mainImageHeight} alt={mainImageAlt} className="w-full max-w-full" />
                            </div>
                        </div>

                        {/* Content Column */}
                        {/* <div className="flex-none xl:flex-1 w-full lg:w-1/2 xl:w-full px-4"> */}
                        <div className={`flex-none w-full px-4 ${textColumnClass}`}>
                            <div className="block space-y-6 xl:space-y-8 mt-8 lg:mt-0">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                </div>

                                <div className="block">
                                    <Image src={stepsImageSrc} width={stepsImageWidth} height={stepsImageHeight} alt={stepsImageAlt} className="w-full max-w-full" />
                                </div>

                                <div className="block">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketProperties;
