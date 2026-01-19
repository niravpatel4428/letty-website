import Image from 'next/image'
import React from 'react'

const TicketResolution = () => {
    return (
        <div className="block relative py-12 md:py-18 xl:py-25 overflow-hidden">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-[url('/images/ticket-resolution-bg.png')] bg-no-repeat bg-size-[100%_100%] -z-1"></div>
            <div className="container">
                <div className="block text-center space-y-8 xl:space-y-12">
                    <div className="section-title">
                        <h2>From ticket to resolution. Handled</h2>
                    </div>

                    <div className="block text-center relative">
                        <div className="absolute left-1/2 top-1/2 -translate-1/2 w-58 h-58 rounded-full bg-orange blur-[350px] -z-1"></div>
                        <Image src='/images/ticket-resolution-diagram3.png' alt='ticket-resolution-diagram' width={828} height={460} className='max-w-full inline-block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketResolution
