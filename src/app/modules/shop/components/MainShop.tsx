import {useState} from "react";
import {TabContentModel} from "../../home/core/model";
import ProductList from "../../home/components/ProductList";
import Container from "../../ui/Container";
import Pagination from "../../ui/Pagination";
import {Search} from "lucide-react";
import shortByIcon from "../../../../_g-tech/assets/icons/Icon.png";

const MainShop = () => {
    const [isTab, setIsTab] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("default");
    const [showSortOptions, setShowSortOptions] = useState(false);

    const tabs: TabContentModel[] = [
        {
            label: 'All Products',
            filter: "all"
        },
        {
            label: 'Face',
            filter: "face"
        },
        {
            label: 'Body',
            filter: 'body'
        }
    ];

    // Handle sort
    const handleSortChange = (option: string) => {
        setSortOption(option);
        setShowSortOptions(false);
    };


    return (
        <Container>
            <div className="flex justify-between items-center">
                <div className="w-[541px] h-[52px] pt-3 mb-10">
                    {
                        tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setIsTab(index)}
                                className={`w-[180px] h-[52px] rounded-[4px] text-[18px] ${isTab === index ? 'bg-primary hover:bg-primary/80 text-white' : 'text-primary'}`}
                            >
                                {tab.label}
                            </button>
                        ))
                    }
                </div>
                <div>
                    <div className="flex items-center gap-5">
                        <div className="relative">
                            <input
                                type="text"
                                className="h-[52px] w-[235px] rounded-[5px] px-14 text-[#BCC1CA] border-[1px] border-secondary-50"
                                placeholder="Search Product..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute top-3.5 left-4 h-[24px] w-[24px] text-[#565E6C]"/>
                        </div>
                        <div>
                            <button
                                className="text-[18px] text-[#565E6C] flex items-center justify-center gap-2"
                                onClick={() => setShowSortOptions(!showSortOptions)}
                            >
                                Short By
                                <img className="h-[24px] w-[24px]" src={shortByIcon} alt="short by"/>
                            </button>
                        </div>

                        <div className="relative z-20">
                            {/* Improved Sort Options Dropdown */}
                            {showSortOptions && (
                                <div
                                    className="absolute right-0 mt-2 w-[220px] bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
                                    <div className="py-2">
                                        <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">SORT
                                            OPTIONS</h3>
                                        <ul className="py-1">
                                            <li
                                                className={`group flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${sortOption === "default" ? "bg-primary/5" : ""}`}
                                                onClick={() => handleSortChange("default")}
                                            >
                                                <div
                                                    className={`w-4 h-4 mr-3 rounded-full border-2 flex items-center justify-center ${sortOption === "default" ? "border-primary" : "border-gray-300 group-hover:border-gray-400"}`}>
                                                    {sortOption === "default" &&
                                                        <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                                </div>
                                                <span
                                                    className={`${sortOption === "default" ? "text-primary font-medium" : "text-gray-700"}`}>Default</span>
                                            </li>
                                            <li
                                                className={`group flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${sortOption === "price-low-high" ? "bg-primary/5" : ""}`}
                                                onClick={() => handleSortChange("price-low-high")}
                                            >
                                                <div
                                                    className={`w-4 h-4 mr-3 rounded-full border-2 flex items-center justify-center ${sortOption === "price-low-high" ? "border-primary" : "border-gray-300 group-hover:border-gray-400"}`}>
                                                    {sortOption === "price-low-high" &&
                                                        <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                                </div>
                                                <span
                                                    className={`${sortOption === "price-low-high" ? "text-primary font-medium" : "text-gray-700"}`}>Price: Low to High</span>
                                            </li>
                                            <li
                                                className={`group flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${sortOption === "price-high-low" ? "bg-primary/5" : ""}`}
                                                onClick={() => handleSortChange("price-high-low")}
                                            >
                                                <div
                                                    className={`w-4 h-4 mr-3 rounded-full border-2 flex items-center justify-center ${sortOption === "price-high-low" ? "border-primary" : "border-gray-300 group-hover:border-gray-400"}`}>
                                                    {sortOption === "price-high-low" &&
                                                        <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                                </div>
                                                <span
                                                    className={`${sortOption === "price-high-low" ? "text-primary font-medium" : "text-gray-700"}`}>Price: High to Low</span>
                                            </li>
                                            <li
                                                className={`group flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${sortOption === "newest" ? "bg-primary/5" : ""}`}
                                                onClick={() => handleSortChange("newest")}
                                            >
                                                <div
                                                    className={`w-4 h-4 mr-3 rounded-full border-2 flex items-center justify-center ${sortOption === "newest" ? "border-primary" : "border-gray-300 group-hover:border-gray-400"}`}>
                                                    {sortOption === "newest" &&
                                                        <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                                </div>
                                                <span
                                                    className={`${sortOption === "newest" ? "text-primary font-medium" : "text-gray-700"}`}>Newest First</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5">
                <ProductList
                    filter={tabs[isTab].filter ?? ""}
                    searchTerm={searchTerm}
                    sortOption={sortOption}
                />
                <div className="pt-20">
                    <Pagination/>
                </div>
            </div>
        </Container>
    )
}

export default MainShop;