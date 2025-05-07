
import heroImage from '../../../../_g-tech/assets/images/shop/hero-howto.png';
import {Play} from "lucide-react";

const HowToUse = () => {
    return (
        <div>
            <div className="overflow-hidden w-full h-[662px]">
                <div className="relative">
                    <img
                        className="h-full w-full object-center object-cover"
                        src={heroImage}
                        alt="heroImages"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 z-1 h-full flex justify-center items-center">
                        <button className="w-[178px] h-[52px] flex items-center justify-center gap-2 rounded-[4px] bg-dark text-white">
                            Watch Video
                            <Play />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToUse;