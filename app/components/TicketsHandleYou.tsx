import Image from "next/image";
import Link from "next/link";
import React from "react";

/* =========================
   Types
========================= */
type TicketsHandleYouProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonClassName?: string;

  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;

  textMaxWidthClass?: string;
  imageMaxWidthClass?: string;

  backgroundImage?: string;
};

/* =========================
   Component
========================= */
const TicketsHandleYou = ({
  title = "",
  description = "",
  buttonText = "",
  buttonLink = "",
  buttonClassName = "",

  imageSrc = "",
  imageAlt = "",
  imageWidth = 0,
  imageHeight = 0,

  textMaxWidthClass = "",
  imageMaxWidthClass = "",

  backgroundImage = "",
}: TicketsHandleYouProps) => {
    return (
        <div className="block">
            <div className="container">
                <div className="block border border-purple/10 bg-titan-white300 rounded-2xl lg:rounded-3xl xl:rounded-4xl overflow-hidden">
                    <div className="block pt-4.5 px-4 md:px-8 xl:pl-22 xxl:pl-27.5 xl:pr-5 border-5 lg:border-9 border-titan-white100 rounded-2xl lg:rounded-3xl xl:rounded-4xl bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} >
                        <div className="flex flex-wrap items-center">
                            {/* Text Column */}
                            <div className={`flex-none w-full ${textMaxWidthClass}`}>
                                <div className="block relative z-9 text-center lg:text-left">
                                    <div className="block space-y-3 mb-6 lg:mb-8 xl:mb-12">
                                        <div className="section-title">
                                            <h2>{title}</h2>
                                        </div>

                                        <div className="block">
                                            <p dangerouslySetInnerHTML={{ __html: description }} />
                                        </div>
                                    </div>

                                    <div className="block">
                                        <Link href={buttonLink} className={buttonClassName}>
                                            {buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className={`flex-none w-full ${imageMaxWidthClass}`} >
                                <div className="block mt-8 xl:mt-0">
                                    <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} className="w-full max-w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketsHandleYou;
