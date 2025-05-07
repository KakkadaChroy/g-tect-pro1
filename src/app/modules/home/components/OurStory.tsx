import ourStoryImage from '../../../../_g-tech/assets/images/home/ourStory.png';
import {Play} from "lucide-react";
import {Link} from "react-router-dom";
import Container from "../../ui/Container";
import ReadNewFeed from "./ReadNewFeed";

const OurStory = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <h2 className="text-[40px] font-semibold py-10 text-center">Our Story</h2>
                    </div>
                    <div className="w-[100px]">
                        <Link to={`/see-all`} className="text-primary text-[16px]">See all</Link>
                    </div>
                </div>
            </Container>
            <div className="w-full h-[600px] mx-auto overflow-hidden">
                <div className="relative">
                    <img
                        className="h-full w-full object-cover object-center"
                        src={ourStoryImage}
                        alt="ourStoryImage"
                    />
                    <div className="absolute bottom-24 right-36">
                        <button
                            className="flex items-center justify-center gap-2 h-[52px] w-[183px] rounded-[4px] bg-[#171A1F] text-white text-[18px]">
                            Watch Video
                            <Play className="h-[24px] w-[24px]"/>
                        </button>
                    </div>
                </div>
            </div>
            <ReadNewFeed/>
        </div>
    )
}


export default OurStory;