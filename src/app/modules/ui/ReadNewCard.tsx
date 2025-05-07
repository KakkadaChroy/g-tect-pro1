interface ReadNewProps {
    image?: string;
    title?: string;
    date?: string;
}

const ReadNewCard = ({image, title, date}: ReadNewProps) => {
    return (
        <div>
            <div className="h-[382px] w-[376px] overflow-hidden custom-shadow">
                <div>
                    <img className="h-full w-full object-center object-cover" src={image} alt="read-new-card"/>
                    <div className="flex flex-col justify-center gap-5 w-[324px] px-5 py-5">
                        <h4 className="text-[20px] font-semibold text-[#323842]">
                            {title}
                        </h4>
                        <p className="text-secondary-50 text-[16px]">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadNewCard;