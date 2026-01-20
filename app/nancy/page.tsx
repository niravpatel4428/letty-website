import React from 'react'
import Banner from '../components/Banner';
import WhereYouWork from '../components/WhereYouWork';
import ClosedDealSteps from '../components/ClosedDealSteps';
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
                mainTitle="Turn every conversation into revenue with Negotiator Nancy"
                description="Your team has hundreds of conversations a week. Most of that data disappears. Nancy captures it, remembers it, and turns it into deals you'd otherwise lose."
                backgroundImage="/images/home-banner-bg.png"
                bannerImage="/images/nancy-banner-image.png"
                contentMaxWidth="max-w-307"
                descriptionMaxWidth="max-w-165"
                titleMaxWidth="max-w-251"
            />
            <WhereYouWork
                title="Works where you work"
                titleTag="h2"
                logos={[
                    { src: "/images/nancy-work-logo1.svg", width: 137, height: 25 },
                    { src: "/images/nancy-work-logo2.svg", width: 111, height: 20 },
                    { src: "/images/nancy-work-logo3.svg", width: 123, height: 25 },
                    { src: "/images/nancy-work-logo4.svg", width: 120, height: 25 },
                    { src: "/images/nancy-work-logo5.svg", width: 165, height: 25 },
                    { src: "/images/nancy-work-logo6.svg", width: 113, height: 25 },
                    { src: "/images/nancy-work-logo7.svg", width: 94, height: 25 },
                    { src: "/images/nancy-work-logo8.svg", width: 101, height: 25 },
                    { src: "/images/nancy-work-logo9.svg", width: 163, height: 20 },
                    { src: "/images/nancy-work-logo10.svg", width: 108, height: 25 },
                    { src: "/images/nancy-work-logo11.svg", width: 99, height: 25 },
                ]}
            />
            <ClosedDealSteps/>
            <ManageProperty
                title = "Your best deals are hiding in conversations you've already had"

                description={[
                  "just make this simple: Enquiries, calls, viewings. Your team has hundreds of conversations a week. But the data disappears into inboxes, voicemails, and heads. When someone leaves, it walks out the door.",
                  "Everything is scattered. That's the problem.",
                ]}

                imageSrc = "/images/manage-property-img2.png"
                imageAlt = "Property management illustration showing chaos management"
                imageWidth = {612}
                imageHeight = {450}

                textColumnClass = "xl:flex-1 lg:w-1/2 xl:w-full"
                imageColumnClass = "lg:w-1/2 xl:w-161"
            />
            <TicketProperties
                title="Nancy never forgets. Nancy always asks the right question"
                description = "She builds a living profile on every single lead. Updated in real time. Synced to your CRM. Searchable forever. Your database stops being a graveyard of half-arsed data entry collecting dust. It becomes a goldmine. Your revenue weapon."

                mainImageSrc = "/images/ticket-property-img2.png"
                mainImageAlt = "Property management illustration showing chaos management"
                mainImageWidth = {612}
                mainImageHeight = {450}

                stepsImageSrc = "/images/ticket-property-steps-img2.png"
                stepsImageAlt = "Ticket handling steps illustration"
                stepsImageWidth = {640}
                stepsImageHeight = {84}

                textColumnClass = "xl:flex-1 lg:w-1/2 xl:w-full"
                imageColumnClass = "lg:w-1/2 xl:w-161"
            />
            <TicketResolution
                title = "Every conversation. Captured"

                diagramImageSrc = "/images/ticket-resolution-diagram5.png"
                diagramImageAlt = "ticket-resolution-diagram"
                diagramImageWidth = {822}
                diagramImageHeight = {440}

                backgroundImage = "/images/ticket-resolution-bg2.png"

                glowColorClass = "bg-purple"
                glowSizeClass = "w-58 h-58"
                glowBlur = {350}
            />
            <YourTeamTickets
              heading="The deals your team would never find"
              description={[
                "Nancy doesn't just store data. She uses it to sell your portfolio."
              ]}
              cards={[
                {
                  title: "MatchAI",
                  description: [
                    "A prospect enquires about a two-bed in Clapham. But based on what they told Nancy on the phone, they'd love that three-bed in Balham too.",
                    "Nancy connects the dots across your entire portfolio. One lead becomes three viewings."
                  ],
                  image: "/images/your-team-img5.png",
                  alt: "Your Team Image",
                },
                {
                  title: "OutboundAI",
                  description: [
                    "New listing hits the market. Nancy already knows 14 prospects who'd want it. She reaches out before your team finishes their morning coffee.",
                    "Price drops on a property someone viewed last month? Nancy sends the message. Nancy books the viewing. Your team closes."
                  ],
                  image: "/images/your-team-img6.png",
                  alt: "Your Team Image",
                },
                {
                  title: "RevenueAI",
                  description: [
                    "Your negotiator is focused on the viewing. Nancy is listening for the mortgage opportunity. The landlord looking to sell. The instruction waiting to happen.",
                    "She flags it. Your team closes it."
                  ],
                  image: "/images/your-team-img7.png",
                  alt: "Your Team Image",
                },
                {
                  title: "Re-EngageAI",
                  description: [
                    "That lead from six months ago who went quiet? They're not dead. They were waiting. Nancy re-engages them when something relevant hits. Old enquiries become new viewings. Cold leads become closed deals.",
                  ],
                  image: "/images/your-team-img8.png",
                  alt: "Your Team Image",
                },
              ]}
            />
            <EveryPropertyTicket
              titleParts={[
                { text: "See everything." },
                { text: "Without", className: "text-purple!" },
                { text: "sitting in every viewing" },
              ]}
              points={[
                "Every viewing logged",
                "Every call transcribed",
                "Every follow-up tracked",
                "Issues flagged automatically",
              ]}
              checklistClass="purple-checkmark"
              imageSrc="/images/every-property-ticket-img2.png"
              imageAlt="Property overview"
              imageWidth={612}
              imageHeight={450}
            />
            <JoinsChanges
              heading="What changes when Nancy joins"
              description={[
                "See how Nancy transforms scattered, manual work into a clear and controlled workflow."
              ]}
              blocks={[
                {
                  title: "Before",
                  highlight: "Nancy",
                  highlightClass: "text-purple!",
                  image: "/images/joins-changes-nancy-img1.png",
                  alt: "joins-changes-nancy-img",
                  imageWidth: 627,
                  imageHeight: 375,
                },
                {
                  title: "After",
                  highlight: "Nancy",
                  highlightClass: "text-purple!",
                  image: "/images/joins-changes-nancy-img2.png",
                  alt: "joins-changes-nancy-img",
                  imageWidth: 627,
                  imageHeight: 375,
                }
              ]}
            />
            <ResultsSpeak
                title="Winkworth Deployed Nancy. Here's what happened"
                subtitle="Without doubling your cost."
                stats={[
                    { suffix: "80%", text: "enquiries converted to viewings in under an hour" },
                    { suffix: "20 - 25", text: "new landlord and vendor instructions captured automatically every month" },
                    { suffix: "3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
                    { suffix: "20 - 25", text: "new landlord and vendor instructions captured automatically every month" },
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
            <ExistingTools
                title="Live in days. Not months"
                titleTag="h2"
                description="Nancy plugs into the portals, CRMs, and channels you already use. No IT project. No six-month implementation. Up and running in a week."
                contentMaxWidth="max-w-150"
            />
            <TicketsHandleYou
                title="See What's Hiding In Your Database"
                description="Book 15 minutes. We'll show you the revenue you're missing."
                buttonText="Book a Demo"
                buttonLink="#"
                buttonClassName="btn btn-purple btn-with-arrow"

                imageSrc = "/images/tickets-handle-nancy-img.png"
                imageAlt = "tickets-handle-nancy-img"
                imageWidth = {583}
                imageHeight = {513}

                textMaxWidthClass="lg:max-w-125 xl:max-w-150 xxl:max-w-157"
                imageMaxWidthClass="lg:max-w-125 xxl:max-w-151 lg:-ml-27 xl:-ml-15 xxl:-ml-21.5"
                backgroundImage="/images/tickets-handle-purple-bg.png"
            />
        </main>
    )
}

export default page
