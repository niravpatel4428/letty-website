"use client";

import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from "react";
import Slider from "react-slick";

/* =========================
   Custom Slick Arrows
========================= */
const FutureEmployeesNextArrow = (props: any) => {
    const { className, onClick } = props;

    return (
        <div className='absolute bottom-0 left:0 right-0 w-full'>
            <div className="container">
                {/* <button onClick={onClick} aria-label="Next slide" className="relative group cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple text-purple hover:bg-purple hover:text-white transition"> */}
                <button onClick={onClick} aria-label="Next slide" className={`${className} relative group cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple text-purple hover:bg-purple hover:text-white transition ml-auto`}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="stroke-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.790039 6.31835H11.8467M11.8467 6.31835L6.31835 0.790039M11.8467 6.31835L6.31835 11.8467" strokeWidth="1.57952" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};


const FutureEmployeesPrevArrow = (props: any) => {
    const { className, onClick } = props;

    return (
        <div className='absolute bottom-0 left:0 right-0 w-full'>
            <div className="container">
                <button onClick={onClick} aria-label="Previous slide" className={`${className} relative group cursor-pointer z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple text-purple hover:bg-purple hover:text-white transition`}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="stroke-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8467 6.31835H0.790039M0.790039 6.31835L6.31835 11.8467M0.790039 6.31835L6.31835 0.790039" strokeWidth="1.57952" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const FutureEmployees = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
        audioRef.current.pause();
            setIsPlaying(false);
        } else {
        audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "61px",
        nextArrow: <FutureEmployeesNextArrow />,
        prevArrow: <FutureEmployeesPrevArrow />,
        responsive: [
            {
            breakpoint: 1025,
                settings: {
                    centerPadding: "45px",
                }
            },
            {
            breakpoint: 768,
                settings: {
                    centerPadding: "30px",
                }
            },
            {
            breakpoint: 640,
                settings: {
                    centerPadding: "20px",
                }
            },
            {
            breakpoint: 480,
                settings: {
                    centerPadding: "0",
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    
    return (
        <>
            <div className="block py-10 md:py-18 xl:py-25">
                <div className="block">
                    <div className="container">
                        <div className="block space-y-3 text-center mb-8 lg:mb-12">
                            <div className="section-title">
                                <h2>Meet your future <strong>employees</strong></h2>
                            </div>

                            <div className="block">
                                <p>Nancy sells. Pete manages. Your team grows the business</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block relative">
                    <div className="block future-employees-slider overflow-hidden px-4 xs:pr-0 sm:pl-[calc(50vw-305px)] md:pl-[calc(50vw-350px)] lg:pl-[calc(50vw-495px)] xl:pl-[calc(50vw-590px)] xxl:pl-[calc(50vw-656px)]">
                        {/* Future Employees Carousel */}
                        <Slider {...sliderSettings} className="future-employees-carousel slick-slider">
                            {/* future-employees-block */}
                            <div className="future-employees-block h-full relative bg-white bg-[url('/images/future-employees-slide-purple-bg.png')] bg-no-repeat bg-cover lg:bg-[length:100%_100%] rounded-2xl lg:rounded-3xl border-2 border-titan-white overflow-hidden py-6 lg:py-12 xl:py-19 px-4 xl:px-9">
                                <div className="block relative z-9">
                                    <div className="flex flex-wrap items-center -mx-4">
                                        <div className="flex-none w-full lg:w-1/2 px-4">
                                            <div className="block text-center lg:text-left lg:max-w-75 xl:max-w-96 w-full">
                                                <div className="block space-y-3">
                                                    <div className="section-title">
                                                        <h2>Negotiator Nancy</h2>
                                                    </div>

                                                    <div className="block small-paragraph leading-normal!">
                                                        <p>Every enquiry answered. Every viewing booked. Even before your team starts their day.</p>
                                                    </div>
                                                </div>

                                                {/* How I Work */}
                                                <div className="block space-y-4.5 bg-white shadow-[0px_12.5px_11.8421px_rgba(34,25,69,0.03)] mt-6 md:mt-10 xl:mt-19 mx-auto lg:mx-0 max-w-75 w-full rounded-xl p-3.5">
                                                    <div className="block text-center text-13 leading-snug text-black600">
                                                        <p>Want to hear how I work? </p>
                                                    </div>
                                                    <div className="block">
                                                        {/* ===== AUDIO PLAYER (DIVS PRESERVED) ===== */}
                                                        <div className="block" onContextMenu={(e) => e.preventDefault()} >
                                                            <div className="audio-player flex gap-2.5 items-center overflow-hidden">
                                                                <div className="block">
                                                                    <button onClick={togglePlay} className="flex-none cursor-pointer inline-flex items-center justify-center text-13 w-8 h-8 text-black border-4 border-titan-white700 rounded-full">
                                                                        {isPlaying ? (
                                                                            <FontAwesomeIcon icon={faPause} />
                                                                        ) : (
                                                                            <FontAwesomeIcon icon={faPlay} />
                                                                        )}
                                                                    </button>
                                                                </div>

                                                                <div className="block flex-1">
                                                                    <div className="waveform flex items-center gap-1">
                                                                    {[...Array(50)].map((_, i) => (
                                                                        <span key={i} className={`${ i % 2 === 0 ? "bg-purple" : "bg-titan-white700" }`} style={{ animationPlayState: isPlaying ? "running" : "paused", }} />
                                                                    ))}
                                                                    </div>
                                                                </div>

                                                                <div className="block">
                                                                    <audio ref={audioRef} loop preload="none" >
                                                                        <source src="/images/audio.mp3" type="audio/mpeg" />
                                                                    </audio>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* How I Work */}
                                            </div>
                                        </div>

                                        <div className="flex-none w-full lg:w-1/2 px-4">
                                            <div className="block max-w-103 w-full bg-titan-white100 border border-purple py-6 px-4 xl:py-8 xl:px-6 rounded-2xl mt-8 xl:mt-0 mr-auto lg:mr-0 ml-auto">
                                                <div className="block space-y-8">
                                                    <div className="block custom-checkmark-list simple-blue-checkmark text-champ-blue font-normal!">
                                                        <ul>
                                                            <li>Catches mortgage & instruction opportunities</li>
                                                            <li>Responds in under 60 seconds. 24/7</li>
                                                            <li>Qualifies leads and books viewings into your CRM</li>
                                                            <li>Surfaces cross-sell from your existing database</li>
                                                        </ul>
                                                    </div>

                                                    <div className="block ">
                                                        <Link href="#" className="btn btn-purple sm:btn-with-arrow w-full justify-center text-center">See Nancy in action</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:block lg:absolute left-0 right-0 bottom-0 text-center h-auto lg:h-100 xl:h-120">
                                    <Image src="/images/property-manager-slide-img1.png" alt="property-manager-slide-img" width={502} height={753} className="max-w-full lg:max-w-100 xl:max-w-125 mx-auto" />
                                </div>
                            </div>
                            {/* future-employees-block */}

                            {/* future-employees-block */}
                            <div className="future-employees-block h-full relative bg-white bg-[url('/images/future-employees-slide-orange-bg.png')] bg-no-repeat bg-cover lg:bg-[length:100%_100%] rounded-2xl lg:rounded-3xl border-2 border-titan-white overflow-hidden py-6 lg:py-12 xl:py-19 px-4 xl:px-9">
                                <div className="block relative z-9">
                                    <div className="flex flex-wrap items-center -mx-4">
                                        <div className="flex-none w-full lg:w-1/2 px-4">
                                            <div className="block text-center lg:text-left lg:max-w-75 xl:max-w-96 w-full">
                                                <div className="block space-y-3">
                                                    <div className="section-title">
                                                        <h2>Property Manager</h2>
                                                    </div>

                                                    <div className="block small-paragraph leading-normal!">
                                                        <p>Every ticket triaged. Every repair coordinated. Before your PM even opens their inbox</p>
                                                    </div>
                                                </div>

                                                {/* How I Work */}
                                                <div className="block space-y-4.5 bg-white shadow-[0px_12.5px_11.8421px_rgba(34,25,69,0.03)] mt-6 md:mt-10 xl:mt-19 mx-auto lg:mx-0 max-w-75 w-full rounded-xl p-3.5">
                                                    <div className="block text-center text-13 leading-snug text-black600">
                                                        <p>Want to hear how I work? </p>
                                                    </div>
                                                    {/* ===== AUDIO PLAYER (DIVS PRESERVED) ===== */}
                                                    <div className="block" onContextMenu={(e) => e.preventDefault()} >
                                                        <div className="audio-player flex gap-2.5 items-center overflow-hidden">
                                                            <div className="block">
                                                                <button onClick={togglePlay} className="flex-none cursor-pointer inline-flex items-center justify-center text-13 w-8 h-8 text-black border-4 border-titan-white700 rounded-full">
                                                                    {isPlaying ? (
                                                                        <FontAwesomeIcon icon={faPause} />
                                                                    ) : (
                                                                        <FontAwesomeIcon icon={faPlay} />
                                                                    )}
                                                                </button>
                                                            </div>

                                                            <div className="block flex-1">
                                                                <div className="waveform flex items-center gap-1">
                                                                {[...Array(50)].map((_, i) => (
                                                                    <span key={i} className={`${ i % 2 === 0 ? "bg-orange" : "bg-titan-white700" }`} style={{ animationPlayState: isPlaying ? "running" : "paused", }} />
                                                                ))}
                                                                </div>
                                                            </div>

                                                            <div className="block">
                                                                <audio ref={audioRef} loop preload="none" >
                                                                    <source src="/images/audio.mp3" type="audio/mpeg" />
                                                                </audio>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* How I Work */}
                                            </div>
                                        </div>

                                        <div className="flex-none w-full lg:w-1/2 px-4">
                                            <div className="block max-w-103 w-full bg-titan-white100 border border-purple py-6 px-4 xl:py-8 xl:px-6 rounded-2xl mt-8 xl:mt-0 mr-auto lg:mr-0 ml-auto">
                                                <div className="block space-y-8">
                                                    <div className="block custom-checkmark-list simple-blue-checkmark text-champ-blue font-normal!">
                                                        <ul>
                                                            <li>Streamline operations with Property Manager Pete</li>
                                                            <li>Handles tenant queries and maintenance requests instantly</li>
                                                            <li>Chases contractors and coordinates repairs</li>
                                                            <li>Keeps landlords updated without lifting a finger</li>
                                                        </ul>
                                                    </div>

                                                    <div className="block ">
                                                        <Link href="#" className="btn btn-orange sm:btn-with-arrow w-full justify-center text-center">See How Pete Works in Action</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:block lg:absolute left-0 right-0 bottom-0 text-center lg:h-100 xl:h-120">
                                    <Image src="/images/property-manager-slide-img2.png" alt="property-manager-slide-img" width={685} height={825} className="max-w-full lg:max-w-100 xl:max-w-175 mx-auto" />
                                </div>
                            </div>
                            {/* future-employees-block */}
                        </Slider>
                        {/* Future Employees Carousel */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FutureEmployees
