import shortByIcon from '../../../../_g-tech/assets/icons/Icon.png';
import {Search} from "lucide-react";

const SearchAllProduct = () => {
    return (
        <div className="flex items-center gap-5">
            <div className="relative">
                <input
                    type="text"
                    className="h-[52px] w-[235px] rounded-[5px] px-14 text-[#BCC1CA] border-[1px] border-secondary-50"
                    placeholder="Search Product..."
                />
                <Search className="absolute top-3.5 left-4 h-[24px] w-[24px] text-[#565E6C]"/>
            </div>
            <div>
                <button className="text-[18px] text-[#565E6C] flex items-center justify-center gap-2">
                    Short By
                    <img className="h-[24px] w-[24px]" src={shortByIcon} alt="short by"/>
                </button>
            </div>
        </div>
    )
}

export default SearchAllProduct;