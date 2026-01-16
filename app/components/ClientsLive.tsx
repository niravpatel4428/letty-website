import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ClientsLive = () => {
    return (
        <>
            <div className="block py-12 md:py-18 xl:py-25 bg-titan-white200">
                <div className="container">
                    <div className="block text-center">
                        <div className="block space-y-3 mb-6 lg:mb-8">
                            <div className="inline-block">
                                <Image src="/images/clients-live-logo.png" alt="Clients Live Icon" width={75} height={71} className='max-w-full'/>
                            </div>

                            <div className="section-title">
                                <h2>The only AI that <br></br>works every where your clients live</h2>
                            </div>

                            <div className="block">
                                <p>One platform that handles enquiries across every channel so nothing gets lost between inboxes.</p>
                            </div>
                        </div>

                        <div className="relative block max-w-137.5 w-full mx-auto z-9">
                            <div className="relative z-9 flex items-center gap-3 text-14 leading-snug bg-white border border-titan-white rounded-xl lg:rounded-2xl p-3.5 shadow-[0px_12.5px_11.8421px_rgba(34,25,69,0.03)]">
                                <Image src="/images/whatsapp-icon.svg" alt="Icon" width={28} height={28} className='max-w-full w-6 md:w-auto'/>
                                <p>chats with your prospects on WhatsApp…</p>
                            </div>
                            <div className="relative flex flex-wrap items-center h-11 w-[calc(100%-50px)] mx-auto mt- gap-3 text-14 bg-white border border-titan-white rounded-xl lg:rounded-2xl -mt-7 shadow-[0px_12.5px_11.8421px_rgba(34,25,69,0.03)] z-0">
                            </div>
                            <div className="relative flex flex-wrap items-center h-11 w-[calc(100%-84px)] mx-auto mt- gap-3 text-14 bg-white border border-titan-white rounded-xl lg:rounded-2xl -mt-7 shadow-[0px_12.5px_11.8421px_rgba(34,25,69,0.03)] -z-1">
                            </div>
                            <div className="relative flex flex-wrap items-center h-11 w-[calc(100%-104px)] mx-auto mt- gap-3 text-14 bg-white border border-titan-white rounded-xl lg:rounded-2xl -mt-7 shadow-[0px_12.5px_11.8421px_rgba(34,25,69,0.03)] -z-2">
                            </div>
                        </div>

                        <div className="block mt-6 md:mt-8 xl:mt-13">
                            <Link href="#" className="btn btn-with-arrow btn-orange">Get Started Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientsLive
