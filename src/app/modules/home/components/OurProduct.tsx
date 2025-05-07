import {useState} from "react";
import {TabContentModel} from "../core/model";
import Container from "../../ui/Container";
import ProductList from "./ProductList";

const OurProduct = () => {

    const [isTab, setIsTab] = useState(0);

    const tabs: TabContentModel[] = [
        {
            label: 'Best-sellers',
            filter: "bestSeller"
        },
        {
            label: 'New products',
            filter: 'new'
        }
    ];


    return (
        <>
            <div>
                <div className="w-full flex flex-col justify-center items-center text-center py-10 gap-5">
                    <h2 className="text-dark text-[40px] font-semibold">Our Products</h2>

                    <div className="w-[303px] h-[36px]">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setIsTab(index)}
                                className={`w-[151px] h-[36px] rounded ${isTab === index ? 'bg-primary text-white' : 'text-primary'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <Container>
                    <div className="py-5">
                        <ProductList filter={tabs[isTab].filter ?? ""}/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default OurProduct;