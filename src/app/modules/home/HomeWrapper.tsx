import HeroSection from "../sections/HeroSection";

import heroImage from '../../../_g-tech/assets/images/home/hero.png';
import OurProduct from "./components/OurProduct";
import EventPromotion from "./components/EventPromotion";
import OurStory from "./components/OurStory";
import Instagram from "./components/Instagram";

const HomeWrapper = () => {
    return (
        <>
            <HeroSection
                image={heroImage}
                title="Gift for your skin"
                description="Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore excepteur voluptate"
                showButton={true}
                customClass={"h-[601.5px]"}
            />
            <OurProduct/>
            <EventPromotion/>
            <OurStory/>
            <Instagram/>
        </>
    )
}

export default HomeWrapper;