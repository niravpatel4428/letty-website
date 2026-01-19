import Image from 'next/image'
import React from 'react'

const EveryPropertyTicket = () => {
    return (
        <>
            <div className="block py-12 md:py-18 xl:py-25">
                <div className="container">
                    <div className="block">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="flex-none xl:flex-1 w-full lg:w-1/2 px-4">
                                <div className="block space-y-6 mb-8 lg:mb-0">
                                    <div className="section-title">
                                        <h2>See every property. Without checking every ticket</h2>
                                    </div>

                                    <div className="block custom-checkmark-list orange-checkmark">
                                        <ul>
                                            <li>Every issue logged and categorised</li>
                                            <li>Every response time tracked</li>
                                            <li>Every contractor coordinated</li>
                                            <li>Every cost visible</li>
                                            <li>PMs only flagged when needed</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none w-full lg:w-1/2 px-4">
                                <div className="block">
                                    <Image src='/images/every-property-ticket-img.png' width={612} height={450} className='max-w-full w-full' alt='Property management illustration showing chaos management' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EveryPropertyTicket
