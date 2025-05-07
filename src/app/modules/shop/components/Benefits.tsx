import React, {useState, useRef, useEffect} from 'react';
import benefitsImage from '../../../../_g-tech/assets/images/shop/benefits-hero.png';
import MainIngredients from "./MainIngredients";
import HowToUse from "./HowToUse";
import Review from "./ReviewsSection";
import FaqSection from "./FaqSection";
import {Pencil} from "lucide-react";

// Define types for tabs
interface TabData {
    id: string;
    label: string;
    ref: React.RefObject<HTMLElement | null>;
}

const Benefits: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('benefits');

    // Refs for each section
    const benefitsRef = useRef<HTMLElement>(null);
    const ingredientsRef = useRef<HTMLElement>(null);
    const howToUseRef = useRef<HTMLElement>(null);
    const reviewsRef = useRef<HTMLElement>(null);
    const faqsRef = useRef<HTMLElement>(null);

    // Tab items
    const tabs: TabData[] = [
        {id: 'benefits', label: 'Benefits', ref: benefitsRef},
        {id: 'ingredients', label: 'Ingredients', ref: ingredientsRef},
        {id: 'howToUse', label: 'How to use', ref: howToUseRef},
        {id: 'reviews', label: 'Reviews', ref: reviewsRef},
        {id: 'faqs', label: 'FAQs', ref: faqsRef}
    ];

    // Handle click
    const handleTabClick = (tabId: string): void => {
        setActiveTab(tabId);
        const tab = tabs.find(tab => tab.id === tabId);
        if (tab && tab.ref.current) {
            const yOffset = -100;
            const y = tab.ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    // Update active
    useEffect(() => {
        const handleScroll = (): void => {
            const scrollPosition = window.scrollY + 150;

            // Find section
            for (const tab of tabs) {
                if (tab.ref.current) {
                    const element = tab.ref.current;
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveTab(tab.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="w-full bg-white">
            {/* Sticky Navigation */}
            <div className="flex justify-center w-full h-[52px] sticky top-0 z-10 bg-white my-10 rounded-[4.5px]">
                <div className="flex overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`w-[215.2px] h-[52px] px-8 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                                activeTab === tab.id
                                    ? 'bg-green-100 text-gray-800'
                                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                            }`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Sections */}
            <section ref={benefitsRef} id="benefits" className="h-[768px] w-full mt-16">
                <div className="h-full w-full flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Text content */}
                    <div className="mb-10 w-[495px]">
                        <h2 className="text-[40px] font-semibold mb-3">Benefits</h2>
                        <div className="space-y-8">
                            <div>
                                <p className="text-[#323842] text-[16px] mb-4">
                                    Consectetur excepteur elit ullamco incididunt voluptate tempor
                                    exercitation. Lorem commodo ullamco quis velit officia aute
                                    laboris elit sit exercitation ut esse pariatur occaecat quis
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[20px] font-semibold text-[#323842] mb-3">Laboris consequat ad</h3>
                                <p className="text-[#323842] text-[16px] mb-4">
                                    Consectetur excepteur elit ullamco incididunt voluptate tempor
                                    exercitation. Lorem commodo ullamco quis velit officia aute
                                    laboris elit sit exercitation ut esse pariatur
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[20px] font-semibold text-[#323842] mb-3">Duis duis do labore
                                    pariatur</h3>
                                <p className="text-[#323842] text-[16px] mb-4">
                                    Ad qui aliqua nulla nostrud consectetur laboris nostrud commodo
                                    voluptate. Lorem id qui laborum aute voluptate
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[20px] font-semibold text-[#323842] mb-3">Deserunt ex</h3>
                                <p className="text-[#323842] text-[16px]">
                                    Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis
                                    Lorem adipisicing et minim velit quis
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="overflow-hidden h-[835px] w-[557px]">
                        <img
                            src={benefitsImage}
                            alt="Product benefits"
                            className="w-full h-full rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Ingredients Section */}
            <section ref={ingredientsRef} id="ingredients" className="pt-16">
                <h2 className="text-[40px] text-dark font-semibold mb-8">Ingredients</h2>
                <div>
                    <MainIngredients/>
                </div>
            </section>

            {/* How to Use Section */}
            <section ref={howToUseRef} id="howToUse"
                     className="pb-16">
                <h2 className="text-[40px] text-dark font-semibold mb-8">How to use</h2>
                <div>
                    <HowToUse/>
                </div>
            </section>

            {/* Reviews Section */}
            <section ref={reviewsRef} id="reviews">
                <div className="flex justify-between items-center">
                    <h2 className="text-[40px] text-dark font-semibold mb-8">Reviews</h2>
                    <button
                        className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-50 transition-colors">
                        <Pencil className="w-4 h-4"/>
                        <span>Write a review</span>
                    </button>
                </div>
                <div>
                    <Review/>
                </div>
            </section>

            {/* FAQs Section */}
            <section ref={faqsRef} id="faqs" className="py-16">
                <h2 className="text-[40px] text-dark font-semibold mb-8">FAQs</h2>
                <div>
                    <FaqSection/>
                </div>
            </section>
        </div>
    );
};

export default Benefits;