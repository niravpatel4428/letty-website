import React from 'react'
import Image from 'next/image';
import CommonSubTitle from './CommonSubTitle';
import Link from 'next/link';
// import bannerImage from '../public/images/home-banner-image.png';

const HomeBanner = () => {
    return (
        <>
            {/* Banner */}
            <div className="relative block pt-30 md:pt-37 xl:pt-43 bg-[url('/images/home-banner-bg.png')] bg-no-repeat bg-center bg-cover">
                {/* banner-overlay */}
                <div className="block absolute left-0 right-0 bottom-0 bg-gradient-to-b from-[#F9FBFC]/0 to-[#F9FBFC] w-full h-16 sm:h-30 md:h-50 xl:h-80 bg-cover"></div>
                {/* banner-overlay */}

                <div className="block">
                    <div className="container">
                        <div className="block max-w-292 w-full mx-auto">
                            <div className="flex flex-col items-center justify-center text-center gap-4 xl:gap-6">
                                <CommonSubTitle text="Backed By Entrepreneurs First" iconSrc="/images/main-sub-icon.svg" />

                                <div className="main-title">
                                    <h1>AI Digital Workers for Real Estate</h1>
                                </div>
                                
                                <div className="block small-paragraph">
                                    <p>AI employees that book viewings, sell your portfolio, triage issues, and chase contractors 24/7</p>
                                </div>

                                <div className="block">
                                    <Link href="#" className="btn btn-with-arrow btn-orange">Get Started Free</Link>
                                </div>
                            </div>

                            <div className="block mt-10 md:mt-14 xl:mt-17.5">
                                <Image src="/images/home-banner-image.png" alt="banner-image" width={1920} height={22} className='max-w-full w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner */}
        </>
    )
}

export default HomeBanner
