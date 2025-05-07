import {Link} from "react-router-dom";

import tw from '../../assets/icons/twitter.png';
import fb from '../../assets/icons/facebook.png';
import lk from '../../assets/icons/linkedin.png';
import yt from '../../assets/icons/youtube.png';

const SocialLinks = () => {
    return (
        <div className="flex gap-2">
            <Link to={``}>
                <img className="h-[24px] w-[24ppx] object-center" src={tw} alt="twitter logo"/>
            </Link>
            <Link to={``}>
                <img className="h-[24px] w-[24ppx] object-center" src={fb} alt="twitter logo"/>
            </Link>
            <Link to={``}>
                <img className="h-[24px] w-[24ppx] object-center" src={lk} alt="twitter logo"/>
            </Link>
            <Link to={``}>
                <img className="h-[24px] w-[24ppx] object-center" src={yt} alt="twitter logo"/>
            </Link>
        </div>
    );
};

export default SocialLinks;
