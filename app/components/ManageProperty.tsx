import Image from 'next/image'
import React from 'react'

const ManageProperty = () => {
    return (
        <>
            <div className="block py-12 md:py-18 xl:py-25">
                <div className="container">
                    <div className="block">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="flex-none xl:flex-1 w-full lg:w-1/2 xl:w-full px-4">
                                <div className="block space-y-6 mb-8 lg:mb-0">
                                    <div className="section-title">
                                        <h2>Your PMs don&apos;t manage properties. They manage <strong className='!text-orange'>chaos</strong></h2>
                                    </div>

                                    <div className="block">
                                        <p>Think about what your property managers actually do all day. They&apos;re not building landlord relationships. They&apos;re not improving tenant retention. They&apos;re answering the same questions, chasing the same contractors, playing middleman between tenants who want answers and landlords who want updates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none w-full lg:w-1/2 xl:w-153 px-4">
                                <div className="block">
                                    <Image src='/images/manage-property-img.png' width={612} height={450} className='max-w-full w-full' alt='Property management illustration showing chaos management' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageProperty
