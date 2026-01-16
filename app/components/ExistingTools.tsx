import Image from 'next/image'
import React from 'react'

const ExistingTools = () => {
    return (
        <>
            <div className="block py-12 md:py-18 xl:py-25">
                <div className="block">
                    <div className="container">
                        <div className="block text-center space-y-3 mb-6 lg:mb-8 xl:mb-12">
                            <div className="section-title">
                                <h2>Integrates with your existing tools</h2>
                            </div>

                            <div className="block">
                                <p>Seamlessly connect to your CRM, communication channels, and property management systems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block text-center overflow-hidden">
                    <div className="block sm:-mx-12 md:-mx-20 lg:-mx-25 xxl:-mx-31">
                        <Image src="/images/existing-tools-img.png" alt="existing-tools-img" width={1500} height={466} className='w-full max-w-full'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExistingTools
