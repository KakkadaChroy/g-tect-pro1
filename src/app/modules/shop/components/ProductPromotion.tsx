import React from 'react';

// Sample promotion images
import promo1 from '../../../../_g-tech/assets/images/shop/pro1.png';
import promo2 from '../../../../_g-tech/assets/images/shop/pro2.png';
import promo3 from '../../../../_g-tech/assets/images/shop/pro3.png';
import Container from "../../ui/Container";
import {useNavigate} from "react-router-dom";


// Define
interface Promotion {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    image: string;
    isReversed?: boolean;
    link: string;
}


const PromotionsSection: React.FC = () => {
    const navigate = useNavigate();

    const promotions: Promotion[] = [
        {
            id: 1,
            title: "Promotion title",
            description: "Et ipsum irure amet cupidatat mollit exercitation consequat duis aliquip. Reprehenderit Lorem veniam pariatur esse pariatur in aute tempor au",
            buttonText: "Shop now",
            image: promo1,
            isReversed: false,
            link: "/shop"
        },
        {
            id: 2,
            title: "Promotion title",
            description: "Et ipsum irure amet cupidatat mollit exercitation consequat duis aliquip. Reprehenderit Lorem veniam pariatur esse pariatur in aute tempor au",
            buttonText: "Shop now",
            image: promo2,
            isReversed: true,
            link: "/shop"
        },
        {
            id: 3,
            title: "Gift for your skin",
            description: "Enim officia magna ut esse aliquip irure consectetur dolor dolor commodo et. Cupid",
            buttonText: "Shop Now",
            image: promo3,
            isReversed: false,
            link: "/shop"
        }
    ];

    // Handle navigation
    const handleNavigate = (link: string) => {
        navigate(`/${link}`);
    };

    return (
        <Container>
            <div className="w-full mx-auto py-8">
                <div className="space-y-8">
                    {promotions.map((promotion) => (
                        <div
                            key={promotion.id}
                            className={`flex flex-col ${promotion.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg overflow-hidden shadow-sm`}
                        >
                            <div className="w-full md:w-1/2">
                                <img
                                    src={promotion.image}
                                    alt={promotion.title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                <h2 className="text-2xl font-medium text-gray-900 mb-3">{promotion.title}</h2>
                                <p className="text-gray-700 mb-6">{promotion.description}</p>
                                <div>
                                    <button
                                        onClick={() => handleNavigate(promotion.link)}
                                        className="w-[200px] h-[52px] px-6 bg-primary text-[18px] text-white rounded hover:bg-primary/85 transition-colors"
                                    >
                                        {promotion.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default PromotionsSection;