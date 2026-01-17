"use client";

import Image from "next/image";
import React, { useState } from "react";

const EnquiryRevenue = () => {
    const [activeTab, setActiveTab] = useState<"sales" | "property">("sales");

    const salesSteps = [
    {
        icon: "/images/sales-team-tab-icon1.svg",
        text: "Lead arrives from any portal, email, or your website",
    },
    {
        icon: "/images/sales-team-tab-icon2.svg",
        text: "Nancy responds in seconds and qualifies",
    },
    {
        icon: "/images/sales-team-tab-icon3.svg",
        text: "Viewing booked straight into your CRM",
    },
    {
        icon: "/images/sales-team-tab-icon4.svg",
        text: "Automatically upsells and cross-sells your portfolio",
    },
    ];

    const propertySteps = [
    {
        icon: "/images/property-manager-tab-icon1.svg",
        text: "Tenant reports issue via WhatsApp, email, SMS or Voice",
    },
    {
        icon: "/images/property-manager-tab-icon2.svg",
        text: "Pete triages and attempts self-service resolution",
    },
    {
        icon: "/images/property-manager-tab-icon3.svg",
        text: "Contractor booked within landlord spend limits",
    },
    {
        icon: "/images/property-manager-tab-icon4.svg",
        text: "PM only sees issues that need human judgment",
    },
    ];

    return (
        <>
            <div className="block pt-12 md:pt-18 xl:pt-25 pb-20 md:pb-25 lg:pb-30 xl:pb-40 relative">
                <div className="absolute left-0 right-0 bottom-10 lg:bottom-16 text-center -z-1">
                    <Image src="/images/enquiry-revenue-bottom-icons-bg.png" alt="enquiry-revenue-bg" width={1008} height={72} className="max-w-full sm:max-w-120 md:max-w-150 xl:max-w-252 w-full mx-auto" />
                </div>
                <div className="container">
                    <div className="block relative z-9">
                        {/* Section Heading */}
                        <div className="block space-y-3 text-center mb-8">
                            <div className="section-title !m-0">
                                <h2>Turn every enquiry into revenue. <strong>Automatically</strong>.</h2>
                            </div>
                        </div>

                        {/* Revenue Tabbing */}
                        <div className="block space-y-8 md:space-y-10 xl:space-y-15">
                            {/* Tabs List Item */}
                            <div className="block text-center">
                                <ul className="inline-flex flex-wrap items-center justify-center p-1 border border-titan-white rounded-4xl">
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("sales")}
                                            className={`cursor-pointer inline-flex items-center justify-center text-base py-2 md:py-4 px-5 md:px-7 rounded-full transition-all duration-300
                                            ${
                                                activeTab === "sales"
                                                ? "text-white bg-purple"
                                                : "hover:text-white hover:bg-purple"
                                            }`}
                                        >
                                            For sales teams
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            onClick={() => setActiveTab("property")}
                                            className={`cursor-pointer inline-flex items-center justify-center text-base py-2 md:py-4 px-5 md:px-7 rounded-full transition-all duration-300
                                            ${
                                                activeTab === "property"
                                                ? "text-white bg-orange"
                                                : "hover:text-white hover:bg-orange"
                                            }`}
                                        >
                                            For property managers
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* Tabs List Item */}

                            {/* Tab Content */}
                            <div className="block">
                                {/* Sales Teams */}
                                {activeTab === "sales" && (
                                    <div className="block">
                                        <div className="flex flex-wrap md:items-center -mx-4 xl:-mx-8">
                                            <div className="flex-none w-full lg:w-1/2 px-4 xl:px-8">
                                                <div className="block space-y-4 md:space-y-8">
                                                    <div className="block space-y-3">
                                                        <div className="section-title">
                                                            <h2>One AI. <strong className="!text-purple">The entire sales workflow</strong></h2>
                                                        </div>
                                                        <div className="block">
                                                            <p>Nancy handles everything. From first enquiry to booked viewing to mortgage referrals. No manual follow-up. No leads slipping through</p>
                                                        </div>
                                                    </div>

                                                    <div className="block custom-checkmark-list purple-checkmark text-black500">
                                                        <ul>
                                                            <li>80% of enquiries converted without human touch</li>
                                                            <li>20+ mortgage referrals captured monthly</li>
                                                            <li>3+ hours saved per negotiator per day</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-none w-full lg:w-1/2 px-4 xl:px-8">
                                                {/* Sales Right List Items */}
                                                <div className="block space-y-4 mt-8 lg:mt-0">
                                                    {salesSteps.map((item, index) => (
                                                    <div key={index} className="flex gap-4 p-3 lg:p-5 items-center bg-white shadow-[0px_1px_14.8px_rgba(0,0,0,0.08)] rounded-xl" >
                                                        <div className="flex-none">
                                                            <div className="block w-8 h-8">
                                                                <Image src={item.icon} alt="tab-icon" width={32} height={32} className="max-w-full max-h-full" />
                                                            </div>
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="block font-medium text-black500">
                                                                <p>{item.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))}
                                                </div>
                                                {/* Sales Right List Items */}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Property Managers */}
                                {activeTab === "property" && (
                                    <div className="block">
                                        <div className="flex flex-wrap md:items-center -mx-4 lg:-mx-8">
                                            <div className="flex-none w-full lg:w-1/2 px-4 lg:px-8">
                                                <div className="block space-y-4 md:space-y-8">
                                                    <div className="block space-y-3">
                                                        <div className="section-title">
                                                            <h2>One AI. <strong className="!text-orange">The entire maintenance workflow</strong></h2>
                                                        </div>
                                                        <div className="block">
                                                            <p>Pete handles everything. From tenant issue to resolved ticket. Triages, coordinates contractors, updates landlords. Your PMs only step in when it matters.</p>
                                                        </div>
                                                    </div>

                                                    <div className="block custom-checkmark-list orange-checkmark text-black500">
                                                        <ul>
                                                            <li>40-50% of tickets resolved without human touch</li>
                                                            <li>3+ Hours back per PM per day</li>
                                                            <li>Cut time to resolution by 30%</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-none w-full lg:w-1/2 px-4 lg:px-8">
                                                {/* Property Right List Items */}
                                                <div className="block space-y-4 mt-8 lg:mt-0">
                                                    {propertySteps.map((item, index) => (
                                                    <div key={index} className="flex gap-4 p-3 lg:p-5 items-center bg-white shadow-[0px_1px_14.8px_rgba(0,0,0,0.08)] rounded-xl" >
                                                        <div className="flex-none">
                                                            <div className="block w-8 h-8">
                                                                <Image src={item.icon} alt="tab-icon" width={32} height={32} className="max-w-full max-h-full" />
                                                            </div>
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="block font-medium text-black500">
                                                                <p>{item.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))}
                                                </div>
                                                {/* Property Right List Items */}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        {/* Revenue Tabbing */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnquiryRevenue;
