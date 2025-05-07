interface IncProps {
    image?: string;
    title?: string;
    description?: string;
}

const IngredientCard = ({image, title, description}: IncProps) => {
    return (
        <div className="h-[350px] w-[360px] rounded-[8px] overflow-hidden custom-shadow">
            <div>
                <img src={image} alt="incCardImages"/>
                <div className="py-3 px-3 flex flex-col gap-3">
                    <h2 className="text-[20px] text-dark">{title}</h2>
                    <p className="text-[16px] text-secondary">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default IngredientCard;