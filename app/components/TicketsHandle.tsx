import Link from 'next/link'
import React from 'react'

const TicketsHandle = () => {
    return (
        <>
            <div className="block">
                <div className="container">
                    <div className="block border border-purple/10 bg-titan-white300 rounded-2xl lg:rounded-3xl xl:rounded-4xl overflow-hidden">
                        <div className="block py-10 md:py-15 lg:py-22 xl:py-30.5 px-4 md:px-8 border-5 lg:border-9 border-titan-white100 rounded-2xl lg:rounded-3xl xl:rounded-4xl bg-[url('/images/tickets-handle-bg.png')] bg-no-repeat bg-cover bg-center">
                            <div className="block max-w-157.5 w-full mx-auto">
                                <div className="block text-center space-y-3 mb-6 lg:mb-8 xl:mb-12">
                                    <div className="section-title">
                                        <h2>See how many tickets Pete could handle for you</h2>
                                    </div>

                                    <div className="block">
                                        <p>Book 15 minutes. We&apos;ll show you the hours you&apos;re losing to ticket chaos.</p>
                                    </div>
                                </div>

                                <div className="block text-center">
                                    <Link href="#" className="btn btn-orange btn-with-arrow">Book a Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketsHandle
