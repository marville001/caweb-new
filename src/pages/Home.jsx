import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getGalleryImages } from "../redux/actions/galleryAction";
import { fetchEventsAction } from "../redux/actions/events";


import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import VideoSection from "../components/home/VideoSection";
import ContactSection from "../components/home/ContactSection";
import NewsSection from "../components/home/NewsSection";
import ImagesSection from "../components/home/ImagesSection";
import EventsSection from "../components/home/EventsSection";

const Home = () => {    
    

    

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchEventsAction({page: 1, pageSize: 6}));
        dispatch(getGalleryImages({ page: 1, pageSize: 20 }));
    }, [dispatch]);

    return (
        <div className="home py-0">
            {/* Hero Section */}
            <HeroSection />
            

            {/* About Section */}
            <AboutSection />

            {/* Video Section */}
            <VideoSection />

            {/* Contact Section */}
            <ContactSection />

            {/* News Section */}
            <NewsSection />
            

            {/* Watch mass */}
            <div className="bg-white mt-4 text-center">
                <div className="container py-12 ">
                    <h2 className="text-2xl font-semibold text-dodge-blue">
                        Missed our Service? Catch up here <br /> or watch us
                        live.
                    </h2>
                    <p className="text-center my-4 font-medium">
                        Did you end up missing our service? No worries, you can
                        watch and or listen to our live service, along with many
                        of our other messages on our media page.
                    </p>
                    <p className="text-center font-medium">
                        We hope that you enjoy our latest message and many other
                        messages from us.
                    </p>
                    <a
                        href="https://www.youtube.com/channel/UCN8LML2jye7oj6w-bhcGLAg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase py-2 px-8 text-lg bg-sea-green inline-block my-6 text-white"
                    >
                        Watch now
                    </a>
                </div>
            </div>
            
            {/* Images Section */}
            <ImagesSection />

            {/* Events Section */}
            <EventsSection />

        </div>
    );
};

export default Home;
