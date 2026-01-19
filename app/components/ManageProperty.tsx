import Image from "next/image";
import React from "react";

/* =========================
   Types
========================= */
type ManagePropertyProps = {
  title?: string;
  highlightedText?: string;
  highlightClassName?: string;

  description?: string[];

  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;

  textColumnClass?: string;
  imageColumnClass?: string;
};

/* =========================
   Component
========================= */
const ManageProperty = ({
  title = "",
  highlightedText = "",
  highlightClassName = "",

  description = [],

  imageSrc = "",
  imageAlt = "",
  imageWidth,
  imageHeight,

  textColumnClass = "",
  imageColumnClass = "",
}: ManagePropertyProps) => {
    return (
        <div className="block py-12 md:py-18 xl:py-25">
            <div className="container">
                <div className="block">
                    <div className="flex flex-wrap items-center -mx-4">
                        {/* Text Column */}
                        <div className={`flex-none w-full px-4 ${textColumnClass}`}>
                            <div className="block space-y-6 mb-8 lg:mb-0">
                                <div className="section-title">
                                    <h2>{title}{" "} <strong className={highlightClassName}>{highlightedText}</strong></h2>
                                </div>

                                <div className="block space-y-3">
                                    {description.map((para, index) => (
                                        <p key={index}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className={`flex-none w-full px-4 ${imageColumnClass}`}>
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

export default ManageProperty;
