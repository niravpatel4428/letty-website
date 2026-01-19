import Image from "next/image";
import Banner from "./components/Banner";
import HumanWork from "./components/HumanWork";
import AgentTeam from "./components/AgentTeam";
import FutureEmployees from "./components/FutureEmployees";
import EnquiryRevenue from "./components/EnquiryRevenue";
import ResultsSpeak from "./components/ResultsSpeak";
import ClientsLive from "./components/ClientsLive";
import ExistingTools from "./components/ExistingTools";
import QuestionAnswered from "./components/QuestionAnswered";
import TicketsHandle from "./components/TicketsHandle";

export default function Home() {
  return (
    <main>
      <Banner
        subTitleText="Backed By Entrepreneurs First"
        subTitleIconSrc="/images/main-sub-icon.svg"
        mainTitle="AI Digital Workers for Real Estate"
        description="AI employees that book viewings, sell your portfolio, triage issues, and chase contractors 24/7"
        buttonText="Get Started Free"
        buttonLink="#"
        backgroundImage="/images/home-banner-bg.png"
        bannerImage="/images/home-banner-image.png"
        contentMaxWidth="max-w-292"
        descriptionMaxWidth="max-w-160"
        titleMaxWidth="max-w-251"
      />
      <HumanWork />
      <AgentTeam />
      <FutureEmployees />
      <EnquiryRevenue />
      <ResultsSpeak
          title="It’s like doubling your headcount"
          subtitle="Without doubling your cost."
          stats={[
              { suffix: "90%+", text: "enquiries converted to viewings in under an hour" },
              { suffix: "25+", text: "new landlord and vendor instructions captured automatically every month" },
              { suffix: "3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
          ]}

          buttonText = "Unlock your potential"
          buttonLink = "#"
          buttonClassName = "btn btn-large btn-white btn-rounded-xl"

          quote = '"We manage 300 more units than last year with the same team. Pete handles everything tenants used to call us about."'
          directorName = "Operations Director, Winkworth"
          directorImageSrc = "/images/director-icon.png"
          directorImageAlt = "director-icon"

          quoteMaxWidthClass = "max-w-200"

          statsItemClass = "xs:w-1/2 md:w-1/3"
      />
      <ClientsLive />
      <ExistingTools
        title="Integrates with your existing tools"
        titleTag="h2"
        description="Seamlessly connect to your CRM, communication channels, and property management systems."
        contentMaxWidth="max-w-full"
      />
      <QuestionAnswered/>
      <TicketsHandle/>
    </main>
  );
}
