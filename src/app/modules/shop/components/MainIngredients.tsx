import {IngredientItems} from "../core/dummy/dummy";
import IngredientCard from "../../ui/IngredientCard";
import {Link} from "react-router-dom";

const MainIngredients = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-col-1 gap-20">
                {
                    IngredientItems.map((item, index) => (
                        <IngredientCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))
                }
            </div>
            <div className="py-10 flex justify-center">
                <button className="w-[200px] h-[36px] rounded-[4px] text-primary border-[1px] border-primary hover:bg-primary transition-all duration-300 hover:text-white">
                    <Link to={`/list`}>See full list</Link>
                </button>
            </div>
        </div>
    )
}

export default MainIngredients;