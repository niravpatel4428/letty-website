import Image from "next/image";
import React from "react";

/* ================================
   Types
================================ */
type ExistingToolsProps = {
  title?: string;
  description?: string;

  /** Dynamic title tag */
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /** Custom max-width for title block */
  contentMaxWidth?: string; // e.g. "max-w-160", "max-w-xl", "max-w-[700px]"
};

/* ================================
   Component
================================ */
const ExistingTools = ({
  title = "Integrates with your existing tools",
  description = "Seamlessly connect to your CRM, communication channels, and property management systems.",
  titleTag = "h2",
  contentMaxWidth = "max-w-292",
}: ExistingToolsProps) => {
  const TitleTag = titleTag as React.ElementType;

  return (
    <>
      <div className="block py-12 md:py-18 xl:py-25">
        <div className="block">
          <div className="container">
            {/* Main Title Part */}
            <div
              className={`block w-full mx-auto text-center space-y-3 mb-6 lg:mb-8 xl:mb-12 ${contentMaxWidth}`}
            >
              {/* Title */}
              {title && (
                <div className="section-title">
                  <TitleTag>{title}</TitleTag>
                </div>
              )}

              {/* Description */}
              {description && (
                <div className="block">
                  <p>{description}</p>
                </div>
              )}
            </div>
            {/* Main Title Part */}
          </div>
        </div>

        {/* Image */}
        <div className="block text-center overflow-hidden">
          <div className="block sm:-mx-12 md:-mx-20 lg:-mx-25 xxl:-mx-31">
            <Image src="/images/existing-tools-img.png" alt="existing-tools-img" width={1500} height={466} className="w-full max-w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExistingTools;
