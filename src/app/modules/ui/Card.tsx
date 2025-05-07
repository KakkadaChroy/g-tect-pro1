import {ShoppingCart} from "lucide-react";
import {ID} from "../../../_g-tech/helpers/ts/model";
import {useNavigate} from "react-router-dom";

interface CardProps {
    id?: ID;
    image?: string;
    title?: string;
    description?: string;
    price?: string;
    discountedPrice?: string;
    bestSeller?: boolean;
    isNew?: boolean;
}

const Card = ({id, image, title, description, price, discountedPrice, bestSeller, isNew}: CardProps) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/shop/detail/${id}`);
    };

    const renderBadge = () => {
        if (isNew) {
            return (
                <span className="absolute top-3 right-3 flex items-center justify-center h-[32px] w-[49px] bg-warning rounded-[10px] text-center text-sm text-[#774900]">
                    New
                </span>
            );
        } else if (bestSeller) {
            return (
                <span className="absolute top-3 right-3 flex items-center justify-center h-[32px] w-[90px] bg-warning rounded-[10px] text-center text-sm text-[#774900]">
                    Best-seller
                </span>
            );
        }
        return null;
    };


    return (
        <>
            <div
                className="w-[276px] h-[464px] rounded-[8px] bg-white custom-shadow overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-lg"
                onClick={handleCardClick}
            >
                <div className="relative">
                    <div className="overflow-hidden">
                        <img
                            src={image}
                            alt={title || "Product image"}
                            className="w-full transition-transform duration-500 hover:scale-110"
                        />
                        {renderBadge()}
                    </div>
                    <div className="px-3 py-3 flex flex-col gap-2">
                        <h4 className="font-semibold text-sm">{title}</h4>
                        <p className="text-[16px] text-[#323842]">{description}</p>
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <strong className="text-[24px]">${discountedPrice}</strong>
                                <span className="line-through text-[#6E7787] text-[16px]">${price}</span>
                            </div>
                            <div
                                className="w-[44px] h-[44px] flex justify-center items-center rounded-full border border-primary transition-all duration-300 hover:bg-primary hover:text-white group"
                            >
                                <ShoppingCart
                                    className="text-primary w-[20px] h-[20px] group-hover:text-white transition-colors duration-300"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;