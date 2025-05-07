import Container from "../ui/Container";
import {useNavigate} from "react-router-dom";


interface HeroProps {
    image: string;
    title?: string;
    description?: string;
    showButton?: boolean;
    customClass?: string;
}


const HeroSection = ({image, title, description, showButton = false, customClass}: HeroProps) => {
    const navigate = useNavigate();

    return (
        <div className={`${customClass} w-full overflow-hidden`}>
            <div className="relative">
                <img
                    className="h-full w-full object-cover object-center"
                    src={image}
                    alt="heroimage"
                />
                <Container>
                    <div className="absolute z-20 top-0 flex flex-col items-start justify-center gap-5 h-full w-[445px]">
                        <h1 className="text-[40px]">{title}</h1>
                        <p className="text-[20px]">{description}</p>

                        {
                            showButton ? (
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="w-[118px] h-[50px] bg-primary hover:bg-primary/80 rounded-[6px] text-[20px] text-white">
                                    Shop Now
                                </button>
                            ) : null
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HeroSection;