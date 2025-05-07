import heroImage from "../../../_g-tech/assets/images/shop/shop-hero.png";
import HeroSection from "../sections/HeroSection";
import MainShop from "./components/MainShop";

const ShopWrapper = () => {
    return (
        <>
            <HeroSection
                image={heroImage}
                title="Gift for your skin"
                description="Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore excepteur voluptate"
                showButton={false}
            />
            <MainShop/>
        </>
    )
}

export default ShopWrapper;