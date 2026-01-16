"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <div className="block pt-4 md:pt-8 xl:pt-12.5">
                <div className="block">
                    <div className="container">
                        <div className="block pt-8 md:pt-12 pb-3 md:pb-6">
                            <div className="flex flex-wrap flex-col md:flex-row gap-4">
                                <div className="flex-none w-full md:max-w-55 lg:max-w-93">
                                    <div className="block text-center md:text-left space-y-4">
                                        <div className="block">
                                            <Link href="/" className='inline-block'>
                                                <Image src="/images/logo.svg" alt="logo" width={150} height={22} className='max-w-full w-18 md:w-25' />
                                            </Link>
                                        </div>
                                        <div className="block small-paragraph">
                                            <p>AI digital workers for real estate</p>
                                        </div>

                                        <div className="block mt-4 md:mt-6 lg:mt-8">
                                            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                                                <li>
                                                    <Link href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray100 text-black200 hover:text-purple hover:bg-gray100 transition"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                                </li>

                                                <li>
                                                    <Link href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray100 text-black200 hover:text-purple hover:bg-gray100 transition"><FontAwesomeIcon icon={faTwitter} /></Link>
                                                </li>

                                                <li>
                                                    <Link href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray100 text-black200 hover:text-purple hover:bg-gray100 transition"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-none sm:flex-1">
                                    <div className="flex flex-wrap flex-row -mx-4">
                                        <div className="flex-none w-1/2 xs:w-1/3 px-4 mb-6">
                                            <div className="block">
                                                <h6 className='font-medium text-lg sm:text-xl leading-tight text-champ-blue mb-4'>Product</h6>
                                                <div className="block small-paragraph">
                                                    <ul className='block list-none space-y-3'>
                                                        <li><Link href="#" className='hover:text-champ-blue'>Features</Link></li>
                                                        <li><Link href="#" className='hover:text-champ-blue'>Pricing</Link></li>
                                                        <li><Link href="#" className='hover:text-champ-blue'>Integrations</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-none w-1/2 xs:w-1/3 px-4 mb-6">
                                            <div className="block">
                                                <h6 className='font-medium text-lg sm:text-xl leading-tight text-champ-blue mb-4'>Company</h6>
                                                <div className="block small-paragraph">
                                                    <ul className='block list-none space-y-3'>
                                                        <li><Link href="#" className='hover:text-champ-blue'>About Us</Link></li>
                                                        <li><Link href="#" className='hover:text-champ-blue'>Blog</Link></li>
                                                        <li><Link href="#" className='hover:text-champ-blue'>Contact</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-none w-1/2 xs:w-1/3 px-4 mb-6">
                                            <div className="block">
                                                <h6 className='font-medium text-lg sm:text-xl leading-tight text-champ-blue mb-4'>Resources</h6>
                                                <div className="block small-paragraph">
                                                    <ul className='block list-none space-y-3'>
                                                        <li><Link href="#" className='hover:text-champ-blue'>Privacy Policy</Link></li>
                                                        <li><Link href="#" className='hover:text-champ-blue'>Terms of Service</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="container">
                        <div className="block py-5 lg:py-8 border-t border-titan-white">
                            <ul className='block text-center list-none small-paragraph'>
                                <li>© 2025 Letty. All rights reserved.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
