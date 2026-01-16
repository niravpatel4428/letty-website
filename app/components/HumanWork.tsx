import Image from "next/image";
import React from "react";

const humanWorkList = [
  {
    title: "Chasing dead ends",
    description:
      "Your negotiators spend hours returning calls from the night before that don't go anywhere",
  },
  {
    title: "Constant data entry workload",
    description: "CRM busywork. App switching. 3 hours wasted daily",
  },
  {
    title: "Tenant issues on repeat",
    description: "Same emails. Same Calls. Your PMs always overwhelmed",
  },
];

const HumanWork = () => {
    return (
        <div className="block py-10 md:py-18 xl:py-28.5">
            <div className="container">
                <div className="block">
                {/* Section Heading */}
                <div className="block space-y-3 text-center mb-8 lg:mb-12">
                    <div className="section-title">
                        <h2>80% of human work is <strong>lost in admin</strong></h2>
                    </div>
                    <div className="block">
                        <p>Leads go cold. Tenants chase. It&apos;s killing your margins... and your best people</p>
                    </div>
                </div>

                <div className="block max-w-281 w-full mx-auto">
                    {/* Main Image */}
                    <div className="block mb-8 md:mb-0">
                        <Image src="/images/human-work-img.svg" alt="human-work-img" width={1920} height={200} className="w-full max-w-full" priority />
                    </div>

                    {/* Human Work List */}
                    <div className="flex flex-wrap -mx-4">
                        {humanWorkList.map((item, index) => (
                            <div key={index} className="flex-none w-full md:w-1/3 px-4 mb-8">
                                <div className="block space-y-2 md:pt-8.5 md:pl-8 lg:pl-16 relative before:hidden md:before:block before:absolute before:content-[''] before:w-9.5 before:h-40 before:bg-[url('/images/human-block-arrow.svg')] before:bg-no-repeat before:bg-[length:100%_100%] before:left-0 before:-top-4 xl:before:-top-10">
                                    <div className="block font-medium text-lg lg:text-xl leading-snug text-champ-blue tracking-[-0.5px] md:tracking-[-1px]">
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="block">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Human Work List */}
                </div>
                </div>
            </div>
        </div>
    );
};

export default HumanWork;
