import InstagramGallery from "./InstagramGallery";
import Container from "../../ui/Container";

const Instagram = () => {
    return (
        <div>
            <Container>
                <div className="flex flex-col items-center ">
                    <h2 className="text-[40px] font-semibold">Instagram</h2>
                    <p className="text-secondary-50 text-[20px] custom-font">@yourinstagram_offical</p>
                </div>
                <div className="py-10">
                    <InstagramGallery/>
                </div>
            </Container>
        </div>
    )
}

export default Instagram;