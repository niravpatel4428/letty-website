import React from 'react'
import Banner from '../components/Banner';
import WhereYouWork from '../components/WhereYouWork';
import ExistingTools from '../components/ExistingTools';
import ManageProperty from '../components/ManageProperty';

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
            <ExistingTools
                title="Live in days. Not months"
                titleTag="h2"
                description="Pete plugs into the property management systems and channels you already use. No IT project. Up and running in a week."
                contentMaxWidth="max-w-full"
            />
        </main>
    )
}

export default page
