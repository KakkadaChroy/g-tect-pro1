import {CardPromotionModel} from "../home/core/model";
import {Link} from "react-router-dom";

interface ProCardProps {
    items?: CardPromotionModel[];
}

const PromotionCard = ({items}: ProCardProps) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {
                items?.map((item, index) => (
                    <div className="h-[338px] w-[570px] overflow-hidden" key={index}>
                        <div className="relative">
                            <img
                                className="h-full w-full object-cover object-center"
                                src={item?.image}
                                alt="promotioncards"
                            />
                            <div
                                className="absolute top-0 left-0 z-20 h-[338px] flex flex-col gap-4  items-start justify-center px-8">
                                <h3 className="text-[24px] font-semibold">{item?.title}</h3>
                                <p className="text-[20px]">{item?.description}</p>
                                <Link to={`/shop/promotion`}>
                                    <button
                                        className="h-[36px] w-[131px] rounded-[4px] bg-primary hover:bg-primary/80 text-white">
                                        Explore
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PromotionCard;