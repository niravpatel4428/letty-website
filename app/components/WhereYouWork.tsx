import Image from "next/image";
import React from "react";

/* ================================
   Types
================================ */
type LogoItem = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type WhereYouWorkProps = {
  /** Section title text */
  title?: string;

  /** Dynamic title tag */
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /** Custom logos list */
  logos?: LogoItem[];
};

/* ================================
   Component
================================ */
const WhereYouWork = ({
  title = "Works where you work",
  titleTag = "h2",
  logos,
}: WhereYouWorkProps) => {
  const TitleTag = titleTag as React.ElementType;

  const defaultLogos: LogoItem[] = [];

  const logoList = logos?.length ? logos : defaultLogos;

  return (
    <>
      <div className="block py-12 md:py-20 xl:py-30">
        <div className="container">
          <div className="block text-center space-y-6 md:space-y-8 xl:space-y-12">
            {/* Section Title */}
            {title && (
              <div className="section-title">
                <TitleTag>{title}</TitleTag>
              </div>
            )}

            {/* Logos */}
            <div className="block overflow-hidden">
              <div className="flex flex-wrap items-center justify-center -mx-4 lg:-mx-6 xl:mx-8">
                {logoList.map((logo, index) => (
                  <div key={index} className="flex-none px-4 lg:px-6 xl:px-8" >
                    <div className="flex items-center justify-center h-20">
                      <Image src={logo.src} alt={logo.alt ?? "tool-logo"} width={logo.width} height={logo.height} className="max-w-full max-h-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Logos */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereYouWork;
