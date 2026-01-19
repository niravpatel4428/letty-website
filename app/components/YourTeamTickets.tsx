import Image from "next/image";

type Card = {
  title: string;
  description: string[];
  image: string;
  alt: string;
};

type YourTeamTicketsProps = {
  heading: string;
  description?: string[];
  cards: Card[];
};

const YourTeamTickets = ({
  heading,
  description = [],
  cards,
}: YourTeamTicketsProps) => {
    return (
        <div className="block relative py-12 md:py-18 xl:py-25">
            <div className="container">
                <div className="block space-y-8 xl:space-y-12">

                {/* Section Heading */}
                <div className="text-center space-y-3">
                    <div className="section-title">
                        <h2>{heading}</h2>
                    </div>

                    {description.length > 0 && (
                    <div className="block space-y-2">
                        {description.map((para, index) => (
                        <p key={index}>{para}</p>
                        ))}
                    </div>
                    )}
                </div>

                {/* Cards */}
                <div className="block">
                    <div className="flex flex-wrap -mx-3">
                    {cards.map((item, index) => (
                        <div key={index} className="flex-none w-full md:w-1/2 px-3 mb-6">
                            <div className="flex flex-col justify-between h-full rounded-xl bg-titan-white500 space-y-6 p-4 md:py-5 md:px-6">
                                {/* Card Content */}
                                <div className="block space-y-2">
                                    <div className="block font-medium text-xl leading-snug text-black500">
                                        <span>{item.title}</span>
                                    </div>

                                    <div className="block small-paragraph leading-normal!">
                                        {item.description.map((para, idx) => (
                                        <p key={idx}>{para}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Image */}
                                <div className="block">
                                    <Image src={item.image} alt={item.alt} width={590} height={350} className="w-full max-w-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default YourTeamTickets;
