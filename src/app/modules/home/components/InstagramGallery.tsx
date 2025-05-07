import {galleryIgItems} from "../core/dummy/dummy";

const InstagramGallery = () => {
    return (
        <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-4 grid-cols-2">
            {
                galleryIgItems?.map((item, i) => (
                    <div
                        key={i}
                        className="h-[190px] w-[186px] overflow-hidden rounded-[5px]">
                        <img
                            className="h-full w-full object-cover object-center"
                            src={item.image}
                            alt={"instagram-images"}
                        />
                    </div>
                ))
            }
        </div>
    )
}


export default InstagramGallery;