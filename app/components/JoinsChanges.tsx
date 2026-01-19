import Image from "next/image";

type Block = {
  title: string;
  highlight?: string;
  highlightClass?: string; // custom class for <strong>
  image: string;
  alt: string;
  imageWidth?: number;   // optional width
  imageHeight?: number;  // optional height
};

type JoinsChangesProps = {
  heading: string;
  description?: string[]; // multiple paragraphs
  blocks: Block[];
};

const JoinsChanges = ({ heading, description = [], blocks }: JoinsChangesProps) => {
    return (
        <div className="block relative py-12 md:py-18 xl:py-25 bg-titan-white200">
            <div className="container">
                <div className="block space-y-8 lg:space-y-12">
                    {/* Section Heading */}
                    <div className="block text-center space-y-3">
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

                    {/* Blocks */}
                    <div className="block">
                        <div className="flex flex-wrap -mx-3 lg:-mx-8">
                        {blocks.map((item, index) => (
                            <div key={index} className="flex-none w-full md:w-1/2 px-3 lg:px-8 mb-6">
                                <div className="flex flex-col h-full space-y-4 lg:space-y-8">
                                    
                                    {/* Block Title */}
                                    <div className="block text-center">
                                        <div className="block-title">
                                            <h3>
                                            {item.title}{" "}
                                            {item.highlight && (
                                                <strong className={item.highlightClass}>
                                                {item.highlight}
                                                </strong>
                                            )}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Block Image */}
                                    <div className="block">
                                        <Image src={item.image} alt={item.alt} width={item.imageWidth} height={item.imageHeight} className="w-full max-w-full" />
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

export default JoinsChanges;
