"use client";

import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

/* =========================
   Custom Slick Arrows
========================= */
const ClientReviewNextArrow = (props: any) => {
    const { onClick } = props;

    return (
        <button onClick={onClick} aria-label="Next slide" className="group cursor-pointer absolute right-0 max-[375px]:bottom-1 bottom-4 z-10 flex items-center justify-center w-7 h-7 rounded-full border-2 border-white/79 text-white hover:bg-white hover:text-purple transition">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="stroke-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.790039 6.31835H11.8467M11.8467 6.31835L6.31835 0.790039M11.8467 6.31835L6.31835 11.8467" strokeWidth="1.57952" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};


const ClientReviewPrevArrow = (props: any) => {
    const { onClick } = props;

    return (
        <button onClick={onClick} aria-label="Previous slide" className="group cursor-pointer absolute right-9 max-[375px]:bottom-1 bottom-4 z-10 flex items-center justify-center w-7 h-7 rounded-full border-2 border-white/79 text-white hover:bg-white hover:text-black transition">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="stroke-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8467 6.31835H0.790039M0.790039 6.31835L6.31835 11.8467M0.790039 6.31835L6.31835 0.790039" strokeWidth="1.57952" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};


const QuestionAnswered = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const tags = [
        { label: "I want to sell my house too", href: "#" },
        { label: "My shower is broken", href: "#" },
        { label: "I need a mortgage broker", href: "#" },
        { label: "My heating won't turn on", href: "#" },
        { label: "How much is my house worth?", href: "#" },
        { label: "Where's my gas meter?", href: "#" },
        { label: "Is this property still available?", href: "#" },
        { label: "My boiler isn't working", href: "#" },
        { label: "Can I book a viewing for Saturday?", href: "#" },
        { label: "When's my tenancy up for renewal?", href: "#" },
        { label: "What's the service charge?", href: "#" },
        { label: "Can I get a copy of my contract?", href: "#" },
        { label: "Is the seller chain-free?", href: "#" },
        { label: "The leak is getting worse", href: "#" },
        { label: "How quickly can I move in?", href: "#" },
        { label: "Has my deposit been protected?", href: "#" },
        { label: "Are offers being accepted?", href: "#" },
        { label: "Can I have a pet?", href: "#" },
        { label: "What surveys do I need?", href: "#" },
        { label: "I'm locked out", href: "#" },
        { label: "Can you recommend a solicitor?", href: "#" },
    ];

    const tagSliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: "linear",
        slidesToShow: 1,
        // slidesToScroll: 1,
        variableWidth: true,
        // swipeToSlide: true,
        pauseOnHover: false,
        // responsive: [
        //     {
        //         breakpoint: 640,
        //         settings: {
        //             slidesToShow: 1.3,
        //         },
        //     },
        // ],
    };

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ClientReviewNextArrow />,
        prevArrow: <ClientReviewPrevArrow />,
    };

    return (
        <>
            <div className="block py-8 lg:py-10 xl:py-14">
                <div className="container">
                    <div className="block space-y-8 lg:space-y-10 xxl:space-y-15.5 bg-titan-white200 rounded-3xl md:rounded-4xl lg:rounded-50 xl:rounded-80 px-4 py-6 md:py-10 lg:py-15 lg:px-10 xxl:p-20">
                        <div className="block md:px-4 lg:px-8 xxl:px-15.5">
                            <div className="flex flex-wrap items-center -mx-4">
                                <div className="flex-none w-full lg:flex-1 px-4">
                                    <div className="block space-y-4 max-w-112.5 w-full mx-auto">
                                        <div className="section-title">
                                            <h2>Every question, answered instantly</h2>
                                        </div>

                                        <div className="block">
                                            <p>Whether it’s a leak or a lead, Nancy and Pete will be on-hand.</p>
                                        </div>

                                        <div className="flex flex-wrap -mx-3">
                                            <div className="flex-none w-full xs:w-1/2 px-3 mb-6">
                                                <div className="block space-y-3">
                                                    <div className="section-title">
                                                        <span>+3</span>
                                                    </div>
                                                    <div className="block">
                                                        <p>hours saved every day</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-none w-full xs:w-1/2 px-3 mb-6">
                                                <div className="block space-y-3">
                                                    <div className="section-title">
                                                        <span>$500</span>
                                                    </div>
                                                    <div className="block">
                                                        <p>increase in Revenue</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-none w-100 mx-auto xl:w-119 max-w-full px-4">
                                    <div className="relative block client-reviews-slider mt-8 lg:mt-0 bg-[url('/images/client-reviews-slider-bg.png')] bg-no-repeat bg-center bg-[length:100%_100%] sm:pt-19 sm:pb-23 p-10 xs:px-15 before:relative before:content-[''] before:block before:mb-4 sm:before:mb-5 before:w-10 before:h-7 sm:before:w-14 sm:before:h-10 before:bg-[url('/images/quote-white-icon.png')] before:bg-no-repeat before:bg-[length:100%_100%]">
                                        {/* Client Reviews Carousel */}
                                        <Slider {...sliderSettings} className="client-reviews-carousel slick-slider">
                                            {/* client-reviews-block */}
                                            <div className="client-reviews-block text-white">
                                                <div className="block font-geist font-medium text-lg md:text-xl xl:text-2xl leading-snug pb-5">
                                                    <p>&ldquo;We manage 300 more units than last year with the same team. Pete handles everything tenants used to call us about.&rdquo;</p>
                                                </div>

                                                <div className="block pt-5 max-[375px]:pr-0 pr-18 max-[375px]:pb-10 border-t border-white">
                                                    <div className="flex flex-wrap flex-row items-center gap-3">
                                                        <div className="flex-none w-11 h-11 rounded-full overflow-hidden">
                                                            <div className="block w-full h-full bg-salomie"></div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="block text-14 leading-tight">
                                                                <p>James Rhye <span className='block text-11'>JDM Estates</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* client-reviews-block */}

                                            {/* client-reviews-block */}
                                            <div className="client-reviews-block text-white">
                                                <div className="block font-geist font-medium text-lg md:text-xl xl:text-2xl leading-snug pb-5">
                                                    <p>&ldquo;We manage 300 more units than last year with the same team. Pete handles everything tenants used to call us about.&rdquo;</p>
                                                </div>

                                                <div className="block pt-5 max-[375px]:pr-0 pr-18 max-[375px]:pb-10 border-t border-white">
                                                    <div className="flex flex-wrap flex-row items-center gap-3">
                                                        <div className="flex-none w-11 h-11 rounded-full overflow-hidden">
                                                            <div className="block w-full h-full bg-salomie"></div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="block text-14 leading-tight">
                                                                <p>James Rhye <span className='block text-11'>JDM Estates</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* client-reviews-block */}

                                            {/* client-reviews-block */}
                                            <div className="client-reviews-block text-white">
                                                <div className="block font-geist font-medium text-lg md:text-xl xl:text-2xl leading-snug pb-5">
                                                    <p>&ldquo;We manage 300 more units than last year with the same team. Pete handles everything tenants used to call us about.&rdquo;</p>
                                                </div>

                                                <div className="block pt-5 max-[375px]:pr-0 pr-18 max-[375px]:pb-10 border-t border-white">
                                                    <div className="flex flex-wrap flex-row items-center gap-3">
                                                        <div className="flex-none w-11 h-11 rounded-full overflow-hidden">
                                                            <div className="block w-full h-full bg-salomie"></div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="block text-14 leading-tight">
                                                                <p>James Rhye <span className='block text-11'>JDM Estates</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* client-reviews-block */}
                                        </Slider>
                                        {/* Client Reviews Carousel */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            {/* Tags List */}
                            {isMobile ? (
                                <Slider {...tagSliderSettings} className="tags-slider">
                                    {tags.map((tag, index) => (
                                        <div key={index} className="px-1">
                                            <Link href={tag.href} className="block text-center py-1 px-3 text-white bg-black300 rounded-md hover:bg-orange transition">
                                                {tag.label}
                                            </Link>
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <ul className="flex flex-wrap justify-center gap-2 list-none font-geist font-medium lg:text-lg xxl:text-xl">
                                    {tags.map((tag, index) => (
                                        <li key={index}>
                                            <Link href={tag.href} className="inline-block py-1 px-3 text-white bg-black300 rounded-md hover:bg-orange transition">
                                                {tag.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {/* Tags List */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionAnswered
