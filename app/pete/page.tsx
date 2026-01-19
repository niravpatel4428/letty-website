import React from 'react'
import Banner from '../components/Banner';
import WhereYouWork from '../components/WhereYouWork';
import ManageProperty from '../components/ManageProperty';
import TicketPropertys from '../components/TicketPropertys';
import TicketResolution from '../components/TicketResolution';
import EveryPropertyTicket from '../components/EveryPropertyTicket';
import ResultsSpeak from '../components/ResultsSpeak';
import YourTeamTickets from '../components/YourTeamTickets';
import JoinsChanges from '../components/JoinsChanges';
import ExistingTools from '../components/ExistingTools';
import TicketsHandleYou from '../components/TicketsHandleYou';

export const yourTeamTicketsSection = {
  id: "your-team-tickets",

  heading: "The tickets your team shouldn't be handling",

  description: "Pete doesn't just log issues. He resolves them.",

  cards: [
    {
      title: "TriageAI",
      description:
        "Every issue gets categorised instantly. No heat in winter? Emergency. Squeaky door? Scheduled. Pete knows the difference and acts on it.",
      image: "/images/your-team-img1.png",
      alt: "TriageAI ticket handling",
    },
    {
      title: "ResolutionAI",
      description:
        "40% of issues don't need a contractor. Boiler pressure low? Pete sends the fix. Smoke alarm beeping? Pete walks them through it. Resolved in minutes, not days.",
      image: "/images/your-team-img2.png",
      alt: "ResolutionAI ticket handling",
    },
    {
      title: "ContractorAI",
      description:
        "For issues that need a professional, Pete collects the details, checks landlord spend limits, contacts approved contractors, books the appointment, and confirms with the tenant.",
      image: "/images/your-team-img3.png",
      alt: "ContractorAI ticket handling",
    },
    {
      title: "CommsAI",
      description:
        "Tenants want updates. Landlords want to know what's happening. Pete keeps everyone informed. No one chases your PM because they already know.",
      image: "/images/your-team-img4.png",
      alt: "CommsAI communication flow",
    },
  ],
};


export const joinsChangesSection = {
  id: "joins-changes",

  heading: "What changes when Pete joins",

  description:
    "See how Pete transforms scattered, manual work into a clear and controlled workflow.",

  blocks: [
    {
      title: "Before",
      highlight: "Pete",
      image: "/images/joins-changes-pete-img1.png",
      alt: "Before Pete workflow",
    },
    {
      title: "After",
      highlight: "Pete",
      image: "/images/joins-changes-pete-img2.png",
      alt: "After Pete workflow",
    },
  ],
};


const page = () => {
    return (
        <main>
            <Banner
                subTitleText="Backed By Entrepreneurs First"
                subTitleIconSrc="/images/main-sub-icon.svg"
                mainTitle="More doors. Same team. Meet Property Manager Pete"
                description="Pete handles tenant issues, coordinates contractors, and keeps landlords updated. Your PMs only step in when it matters."
                backgroundImage="/images/pete-banner-bg.png"
                bannerImage="/images/pete-banner-image.png"
                contentMaxWidth="max-w-319"
                descriptionMaxWidth="max-w-160"
                titleMaxWidth="max-w-251"
            />
            <WhereYouWork
                title="Works where you work"
                titleTag="h2"
                logos={[
                    { src: "/images/pete-work-logo1.svg", width: 113, height: 25 },
                    { src: "/images/pete-work-logo2.svg", width: 101, height: 25 },
                    { src: "/images/pete-work-logo3.svg", width: 94, height: 25 },
                    { src: "/images/pete-work-logo4.svg", width: 163, height: 25 },
                    { src: "/images/pete-work-logo5.svg", width: 87, height: 25 },
                    { src: "/images/pete-work-logo6.svg", width: 108, height: 25 },
                    { src: "/images/pete-work-logo7.svg", width: 99, height: 25 },
                ]}
            />
            <ManageProperty/>
            <TicketPropertys/>
            <TicketResolution/>
            <EveryPropertyTicket/>
            <ResultsSpeak/>
            {/* <YourTeamTickets/> */}
            <YourTeamTickets
                heading={yourTeamTicketsSection.heading}
                description={yourTeamTicketsSection.description}
                cards={yourTeamTicketsSection.cards}
            />
            <JoinsChanges
                heading={joinsChangesSection.heading}
                description={joinsChangesSection.description}
                blocks={joinsChangesSection.blocks}
            />
            <ExistingTools
                title="Live in days. Not months"
                titleTag="h2"
                description="Pete plugs into the property management systems and channels you already use. No IT project. Up and running in a week."
                contentMaxWidth="max-w-full"
            />
            {/* <TicketsHandleYou/> */}
            <TicketsHandleYou
                title="See how many tickets Pete could handle for you"
                description="Book 15 minutes. We'll show you the revenue you're missing."
                buttonText="Book a Demo"
                buttonLink="#"
                buttonClassName="btn btn-orange btn-with-arrow"

                imageSrc = "/images/tickets-handle-pete-img.png"
                imageAlt = "tickets-handle-pete-img"
                imageWidth = {603}
                imageHeight = {513}

                textMaxWidthClass="lg:max-w-125 xl:max-w-150 xxl:max-w-157"
                imageMaxWidthClass="lg:max-w-125 xxl:max-w-151 lg:-ml-23 xl:-ml-15 xxl:-ml-21.5"
                backgroundImage="/images/tickets-handle-orange-bg.png"
            />
        </main>
    )
}

export default page
