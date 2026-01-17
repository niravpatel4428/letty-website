import Image from "next/image";
import Banner from "./components/Banner";
import HumanWork from "./components/HumanWork";
import AgentTeam from "./components/AgentTeam";
import FutureEmployees from "./components/FutureEmployees";
import EnquiryRevenue from "./components/EnquiryRevenue";
import DoublingHeadcount from "./components/DoublingHeadcount";
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
      />
      <HumanWork />
      <AgentTeam />
      <FutureEmployees />
      <EnquiryRevenue />
      <DoublingHeadcount />
      <ClientsLive />
      <ExistingTools/>
      <QuestionAnswered/>
      <TicketsHandle/>
    </main>
  );
}
