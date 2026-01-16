import Image from "next/image";
import React from "react";

const agentTeamData = [
  {
    image: "/images/agent-team-1.svg",
    title: "AI that works where you are",
    description:
      "Letty plugs in your CRM, WhatsApp, email and property systems in a few clicks.",
  },
  {
    image: "/images/agent-team-2.svg",
    title: "Never gets sick. Never goes to sleep.",
    description:
      "The dream employee you’ve always wished for, available 24/7.",
  },
  {
    image: "/images/agent-team-3.svg",
    title: "You’re in the driver’s seat.",
    description:
      "Your agents approve, edit or send with one click. Every action is logged back into your existing CRM",
  },
];

const AgentTeam = () => {
    return (
        <div className="block py-12 md:py-18 xl:py-25 bg-black100">
            <div className="container">
                <div className="block">
                    <div className="block space-y-3 text-center mb-8 lg:mb-12">
                        <div className="section-title !text-white">
                        <h2>
                            Turn every agent into a <strong>team of 10</strong>
                        </h2>
                        </div>

                        <div className="block text-white">
                        <p>Letty handles the grunt work. Your team handles the closing.</p>
                        </div>
                    </div>

                    {/* Agent Team Cards */}
                    <div className="flex flex-wrap -mx-2.5">
                        {agentTeamData.map((item, index) => (
                        <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2.5 mb-5">
                            <div className="block space-y-4 lg:space-y-6 bg-white border border-titan-white h-full rounded-xl sm:rounded-20 p-4">
                                {/* Image */}
                                <div className="block xl:h-60 xxl:h-75">
                                    <Image src={item.image} alt={item.title} width={386} height={300} className="w-full h-full max-w-full" />
                                </div>

                                {/* Content */}
                                <div className="block space-y-1 md:px-2 pb-2">
                                    <div className="block text-lg lg:text-xl leading-tight font-medium text-champ-blue">
                                        <span>{item.title}</span>
                                    </div>

                                    <div className="block small-paragraph lg:-tracking-[0.035em]">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {/* Agent Team Cards */}
                </div>
            </div>
        </div>
    );
};

export default AgentTeam;
