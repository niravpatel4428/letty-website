import Image from "next/image";
import React from "react";

/* =========================
   Types
========================= */
type TicketResolutionProps = {
  title?: string;

  diagramImageSrc?: string;
  diagramImageAlt?: string;
  diagramImageWidth?: number;
  diagramImageHeight?: number;

  backgroundImage?: string;

  glowColorClass?: string;
  glowSizeClass?: string;
  glowBlur?: number;
};

/* =========================
   Component
========================= */
const TicketResolution = ({
  title = "",

  diagramImageSrc = "",
  diagramImageAlt = "",
  diagramImageWidth,
  diagramImageHeight,

  backgroundImage = "",

  glowColorClass = "",
  glowSizeClass = "",
  glowBlur,
}: TicketResolutionProps) => {
    return (
        <div className="block relative py-12 md:py-18 xl:py-25 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-no-repeat bg-size-[100%_100%] -z-1" style={{ backgroundImage: `url(${backgroundImage})` }} />

            <div className="container">
                <div className="block text-center space-y-8 xl:space-y-12">
                    <div className="section-title">
                        <h2>{title}</h2>
                    </div>

                    <div className="block text-center relative">
                        {/* Glow */}
                        <div className={`absolute left-1/2 top-1/2 -translate-1/2 rounded-full -z-1 ${glowColorClass} ${glowSizeClass}`} style={{ filter: `blur(${glowBlur}px)` }} />

                        <Image src={diagramImageSrc} alt={diagramImageAlt} width={diagramImageWidth} height={diagramImageHeight} className="inline-block max-w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketResolution;
