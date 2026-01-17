import React from "react";
import Image from "next/image";
import Link from "next/link";

/* ================================
   Types
================================ */
type BannerProps = {
  subTitleText?: string;
  subTitleIconSrc?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  bannerImage?: string;

  /** Custom max-width class */
  contentMaxWidth?: string; // e.g. "max-w-292", "max-w-5xl", "max-w-[900px]"

  /** Custom description max-width */
  descriptionMaxWidth?: string; // e.g. "max-w-160", "max-w-xl", "max-w-[700px]"

  /** Custom main title max-width */
  titleMaxWidth?: string; // e.g. "max-w-200", "max-w-4xl", "max-w-[800px]"

  /** Dynamic title tag */
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

/* ================================
   Component
================================ */
const Banner = ({
  subTitleText,
  subTitleIconSrc,
  mainTitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  bannerImage,
  contentMaxWidth,
  descriptionMaxWidth,
  titleMaxWidth,
  titleTag = "h1", // default tag
}: BannerProps) => {
  const hasTextContent =
    subTitleText || mainTitle || description || buttonText;

  const TitleTag = titleTag as unknown as React.ElementType;

  return (
    <>
      <div
        className="relative block pt-30 md:pt-37 xl:pt-43 bg-no-repeat bg-center bg-cover"
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage})` }
            : undefined
        }
      >
        {/* Overlay */}
        {backgroundImage && (
          <div className="absolute left-0 right-0 bottom-0 bg-linear-to-b from-[#F9FBFC]/0 to-[#F9FBFC] w-full h-16 sm:h-30 md:h-50 xl:h-80 z-9" />
        )}

        <div className="block">
          <div className="container relative">
            {/* Text Content */}
            {hasTextContent && (
              <div
                className={`block w-full mx-auto text-center ${
                  contentMaxWidth ?? ""
                }`}
              >
                {/* Main Title Part */}
                {/* <div className="flex flex-col items-center justify-center gap-4 xl:gap-6"> */}
                <div className={`flex flex-col items-center justify-center w-full mx-auto gap-4 xl:gap-6 ${titleMaxWidth}`}>
                  {/* Subtitle */}
                  {subTitleText && (
                    <span className="common-sub-title inline-flex items-center gap-2 capitalize font-inter text-champ-blue text-14 sm:text-base md:tracking-[-0.5px] bg-white border border-titan-white rounded-4xl py-2 px-5">
                      {subTitleIconSrc && (
                        <Image
                          src={subTitleIconSrc}
                          alt="subtitle-icon"
                          width={22}
                          height={22}
                          className="max-w-5.5 max-h-5.5"
                        />
                      )}
                      {subTitleText}
                    </span>
                  )}

                  {/* Main Title */}
                  {mainTitle && (
                    <div className="main-title">
                      <TitleTag>{mainTitle}</TitleTag>
                    </div>
                  )}

                  {/* Description */}
                  {description && (
                    <div className={`block small-paragraph !leading-normal mx-auto ${descriptionMaxWidth}`} >
                      <p>{description}</p>
                    </div>
                  )}

                  {/* CTA */}
                  {buttonText && buttonLink && (
                    <div className="mt-6">
                      <Link
                        href={buttonLink}
                        className="btn btn-with-arrow btn-orange"
                      >
                        {buttonText}
                      </Link>
                    </div>
                  )}
                </div>
                {/* Main Title Part */}

                {/* Banner Image */}
                {bannerImage && (
                  <div className="mt-10 md:mt-14 xl:mt-17.5">
                    <Image src={bannerImage} alt="banner-image" width={1920} height={900} className="w-full max-w-full" priority />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
