import React from 'react'
import Banner from '../components/Banner';
import WhereYouWork from '../components/WhereYouWork';
import ManageProperty from '../components/ManageProperty';
import TicketProperties from '../components/TicketProperties';
import TicketResolution from '../components/TicketResolution';
import EveryPropertyTicket from '../components/EveryPropertyTicket';
import ResultsSpeak from '../components/ResultsSpeak';
import YourTeamTickets from '../components/YourTeamTickets';
import JoinsChanges from '../components/JoinsChanges';
import ExistingTools from '../components/ExistingTools';
import TicketsHandleYou from '../components/TicketsHandleYou';


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
            <ManageProperty
                title = "Your PMs don’t manage properties. They manage"
                highlightedText = "chaos"
                highlightClassName = "text-orange!"

                description={[
                  "Think about what your property managers actually do all day. They’re not building landlord relationships. They’re not improving tenant retention. They’re answering the same questions, chasing the same contractors, playing middleman between tenants who want answers and landlords who want updates.",
                ]}

                imageSrc = "/images/manage-property-img.png"
                imageAlt = "Property management illustration showing chaos management"
                imageWidth = {612}
                imageHeight = {450}

                textColumnClass = "xl:flex-1 lg:w-1/2 xl:w-full"
                imageColumnClass = "lg:w-1/2 xl:w-161"
            />
            <TicketProperties
              bgClass="bg-titan-white200"
              title="Pete handles the tickets. Your PMs handle the properties"
              description = "Pete sits between tenants, contractors, and landlords. Triages every issue. Resolves what he can. Coordinates what he can't. Your PM only steps in when there's a decision to make."

              mainImageSrc = "/images/ticket-property-img.png"
              mainImageAlt = "Property management illustration showing chaos management"
              mainImageWidth = {612}
              mainImageHeight = {450}

              stepsImageSrc = "/images/ticket-property-steps-img.png"
              stepsImageAlt = "Ticket handling steps illustration"
              stepsImageWidth = {640}
              stepsImageHeight = {84}

              textColumnClass = "xl:flex-1 lg:w-1/2 xl:w-full"
              imageColumnClass = "lg:w-1/2 xl:w-161"
            />
            <TicketResolution
              title = "From ticket to resolution. Handled"

              diagramImageSrc = "/images/ticket-resolution-diagram3.png"
              diagramImageAlt = "ticket-resolution-diagram"
              diagramImageWidth = {828}
              diagramImageHeight = {460}

              backgroundImage = "/images/ticket-resolution-bg.png"

              glowColorClass = "bg-orange"
              glowSizeClass = "w-58 h-58"
              glowBlur = {350}
            />
            <EveryPropertyTicket
              titleParts={[
                { text: "See every property. Without checking every ticket" },
              ]}
              points={[
                "Every issue logged and categorised",
                "Every response time tracked",
                "Every contractor coordinated",
                "Every cost visible",
                "PMs only flagged when needed",
              ]}
              checklistClass="orange-checkmark"
              imageSrc = "/images/every-property-ticket-img.png"
              imageAlt = "Property management illustration showing chaos management"
              imageWidth = {612}
              imageHeight = {450}
            />
            <ResultsSpeak
                title="The results speak for themselves"
                stats={[
                    { suffix: "40–50%", text: "of tickets resolved without human touch" },
                    { suffix: "3+ hours", text: "saved per PM per day" },
                    { suffix: "Minutes", text: "average response time" },
                    { suffix: "£0", text: "additional headcount to scale" },
                ]}

                buttonText = "Unlock your potential"
                buttonLink = "#"
                buttonClassName = "btn btn-large btn-white btn-rounded-xl"

                quote = '"We manage 300 more units than last year with the same team. Pete handles everything tenants used to call us about."'
                directorName = "Operations Director, Winkworth"
                directorImageSrc = "/images/director-icon.png"
                directorImageAlt = "director-icon"

                quoteMaxWidthClass = "max-w-164"

                statsItemClass = "xs:w-1/2 md:w-1/3 xl:w-1/4"
            />
            <YourTeamTickets
              heading="The tickets your team shouldn't be handling"
              description={[
                "Pete doesn't just log issues. He resolves them."
              ]}
              cards={[
                {
                  title: "TriageAI",
                  description: [
                    "Every issue gets categorised instantly. No heat in winter? Emergency. Squeaky door? Scheduled. Pete knows the difference and acts on it."
                  ],
                  image: "/images/your-team-img1.png",
                  alt: "Your Team Image",
                },
                {
                  title: "ResolutionAI",
                  description: [
                    "40% of issues don't need a contractor. Boiler pressure low? Pete sends the fix. Smoke alarm beeping? Pete walks them through it. Resolved in minutes, not days."
                  ],
                  image: "/images/your-team-img2.png",
                  alt: "Your Team Image",
                },
                {
                  title: "ContractorAI",
                  description: [
                    "For issues that need a professional, Pete collects the details, checks landlord spend limits, contacts approved contractors, books the appointment, and confirms with the tenant."
                  ],
                  image: "/images/your-team-img3.png",
                  alt: "Your Team Image",
                },
                {
                  title: "CommsAI",
                  description: [
                    "Tenants want updates. Landlords want to know what's happening. Pete keeps everyone informed. No one chases your PM because they already know."
                  ],
                  image: "/images/your-team-img4.png",
                  alt: "Your Team Image",
                }
              ]}
            />
            <JoinsChanges
              heading="What changes when Pete joins"
              description={[
                "See how Pete transforms scattered, manual work into a clear and controlled workflow."
              ]}
              blocks={[
                {
                  title: "Before",
                  highlight: "Pete",
                  highlightClass: "text-orange!",
                  image: "/images/joins-changes-pete-img1.png",
                  alt: "joins-changes-pete-img",
                  imageWidth: 627,
                  imageHeight: 375,
                },
                {
                  title: "After",
                  highlight: "Pete",
                  highlightClass: "text-orange!",
                  image: "/images/joins-changes-pete-img2.png",
                  alt: "joins-changes-pete-img",
                  imageWidth: 627,
                  imageHeight: 375,
                }
              ]}
            />
            <ExistingTools
                title="Live in days. Not months"
                titleTag="h2"
                description="Pete plugs into the property management systems and channels you already use. No IT project. Up and running in a week."
                contentMaxWidth="max-w-full"
            />
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
                imageMaxWidthClass="lg:max-w-125 xxl:max-w-151 lg:-ml-27 xl:-ml-15 xxl:-ml-21.5"
                backgroundImage="/images/tickets-handle-orange-bg.png"
            />
        </main>
    )
}

export default page
