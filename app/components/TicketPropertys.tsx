import Image from 'next/image'
import React from 'react'

const TicketPropertys = () => {
    return (
        <>
            <div className="block py-12 md:py-18 xl:py-25 bg-titan-white200">
                <div className="container">
                    <div className="block">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="flex-none w-full lg:w-1/2 xl:w-153 px-4">
                                <div className="block">
                                    <Image src='/images/ticket-property-img.png' width={612} height={450} className='max-w-full w-full' alt='Property management illustration showing chaos management' />
                                </div>
                            </div>

                            <div className="flex-none xl:flex-1 w-full lg:w-1/2 xl:w-full px-4">
                                <div className="block space-y-6 xl:space-y-8 mt-8 lg:mt-0">
                                    <div className="section-title">
                                        <h2>Pete handles the tickets. Your PMs handle the properties</h2>
                                    </div>

                                    <div className="block">
                                        <Image src='/images/ticket-property-steps-img.png' width={640} height={84} className='max-w-full w-full' alt='Property management illustration showing chaos management' />
                                    </div>

                                    <div className="block">
                                        <p>Pete sits between tenants, contractors, and landlords. Triages every issue. Resolves what he can. Coordinates what he can&apos;t. Your PM only steps in when there&apos;s a decision to make.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketPropertys
