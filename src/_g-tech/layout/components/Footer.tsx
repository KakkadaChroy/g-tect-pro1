import Container from "../../../app/modules/ui/Container";
import {Link} from "react-router-dom";
import FooterRightContent from "../../helpers/components/FooterRightContent";
import CopyRightFooter from "../../helpers/components/CopyRightFooter";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#1D2128] text-white">
                <Container>
                    <div className="py-10 lg:h-[434px] w-full flex flex-col justify-center">
                        <div>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center h-full w-full">
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 w-full lg:w-auto mb-8 lg:mb-0">
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-sm font-semibold">About</h5>
                                        <Link to={`/home`} className="text-sm text-[#DEE1E6]">Home</Link>
                                        <Link to={`/shop`} className="text-sm text-[#DEE1E6]">Shop</Link>
                                        <Link to={`/story`} className="text-sm text-[#DEE1E6]">Our Story</Link>
                                        <Link to={`/blog`} className="text-sm text-[#DEE1E6]">Blogs</Link>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-sm font-semibold">Help</h5>
                                        <Link to={`/home`} className="text-sm text-[#DEE1E6]">Shipping & Returns</Link>
                                        <Link to={`/shop`} className="text-sm text-[#DEE1E6]">Track Order</Link>
                                        <Link to={`/story`} className="text-sm text-[#DEE1E6]">FAQs</Link>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-sm font-semibold">Contact</h5>
                                        <p className="text-sm text-[#DEE1E6]">Phone: </p>
                                        <span className="text-sm">(+1) 123 456 7893</span>
                                        <p className="text-sm text-[#DEE1E6]">Email: </p>
                                        <span className="text-sm">name@email.com</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-auto">
                                    <FooterRightContent />
                                </div>
                            </div>
                            <CopyRightFooter />
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};
export default Footer;