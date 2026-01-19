"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ================================
   Types
================================ */
type StatItem = {
  suffix: string;
  text: string;
};

type ResultsSpeakProps = {
  title?: string;
  subtitle?: string;

  stats?: StatItem[];

  buttonText?: string;
  buttonLink?: string;
  buttonClassName?: string;

  quote?: string;
  directorName?: string;
  directorImageSrc?: string;
  directorImageAlt?: string;

  quoteMaxWidthClass?: string;

  statsItemClass?: string;
};

/* ================================
   Component
================================ */
const ResultsSpeak = ({
  title = "",
  subtitle = "",

  stats = [],

  buttonText = "",
  buttonLink = "",
  buttonClassName = "",

  quote = "",
  directorName = "",
  directorImageSrc = "",
  directorImageAlt = "",

  quoteMaxWidthClass = "",

  statsItemClass = "",
}: ResultsSpeakProps) => {
    return (
        <div className="block py-12 md:py-18 xl:py-25 bg-black100">
            <div className="container">
                <div className="block">
                    {/* Heading */}
                    <div className="block space-y-3 text-center mb-8 lg:mb-15">
                        <div className="section-title text-white!">
                            <h2>{title}</h2>
                        </div>
                        
                        {subtitle && ( // 👈 conditional render
                            <div className="block text-white">
                                <p>{subtitle}</p>
                            </div>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="block">
                        <div className="flex flex-wrap -mx-4">
                        {stats.map((item, index) => (
                            <div key={index} className={`flex-none w-full px-4 mb-8 ${statsItemClass}`} >
                                <div className="flex flex-col justify-between gap-5 md:gap-8 xl:gap-12.5 h-full border-l-2 border-white pl-4 lg:pl-6">
                                    <div className="main-title font-normal! text-white!">
                                        <h3>{item.suffix}</h3>
                                    </div>

                                    <div className="block text-gray200">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Button */}
                    <div className="block text-center py-4 lg:py-6">
                        <Link href={buttonLink} className={buttonClassName}>
                        {buttonText}
                        </Link>
                    </div>

                    {/* Quote */}
                    <div className={`block text-white pt-6 lg:pt-8 w-full mx-auto ${quoteMaxWidthClass}`}>
                        <div className="block text-center font-light text-2xl md:text-3xl xl:text-40 leading-snug pb-6 lg:pb-8">
                            <p>{quote}</p>
                        </div>

                        <div className="flex flex-wrap items-center justify-end gap-4 pt-6 lg:pt-8 border-t border-white text-end font-geist font-light text-lg xl:text-2xl leading-snug">
                            <Image src={directorImageSrc} alt={directorImageAlt} width={100} height={100} className="w-10 h-10 max-w-full" />
                            <p>{directorName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsSpeak;
