import {Mail} from "lucide-react";
import SocialLinks from "./SocialLinks";

const FooterRightContent = () => {
    return (
        <div className="w-full lg:w-auto flex flex-col gap-5">
            <h3 className="font-semibold text-[20px]">Receive new promotions</h3>
            <p className="text-sm">Duis ea tempor commodo amet reprehende</p>
            <div className="flex justify-between relative w-full lg:w-auto">
                <input
                    className="w-full lg:w-[303px] h-[51px] px-12 rounded-tl-[8px] rounded-bl-[8px] bg-transparent border border-white"
                    type="text"
                    placeholder="Input your email"
                />
                <span className="absolute top-4 left-3">
                    <Mail />
                </span>
                <button className="h-[52px] w-[125px] bg-primary rounded-tr-[8px] rounded-br-[8px]">
                    Subscribe
                </button>
            </div>
            <div>
                <SocialLinks />
            </div>
        </div>
    );
};
export default FooterRightContent;