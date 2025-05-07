import PromotionCard from "../../ui/PromotionCard";
import {eventCardItems} from "../core/dummy/dummy";
import Container from "../../ui/Container";
import {Link} from "react-router-dom";

const EventPromotion = () => {
    return (
        <div className="w-full mx-auto">
            <Container>
                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <h2 className="text-[40px] font-semibold py-10 text-center">Event Promotions</h2>
                    </div>
                    <div className="w-[100px]">
                        <Link to={`/see-all`} className="text-primary text-[16px]">See all</Link>
                    </div>
                </div>
                <div>
                    <PromotionCard
                        items={eventCardItems}
                    />
                </div>
            </Container>
        </div>
    )
}

export default EventPromotion;