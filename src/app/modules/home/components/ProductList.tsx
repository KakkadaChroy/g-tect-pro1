import Card from "../../ui/Card";
import {cardItems} from "../core/dummy/dummy";
import {useEffect, useState} from "react";

interface ProductProps {
    filter?: string;
    searchTerm?: string;
    sortOption?: string;
}

const ProductList = ({filter, searchTerm = "", sortOption = "default"}: ProductProps) => {
    const [filteredProducts, setFilteredProducts] = useState(cardItems);


    useEffect(() => {
        let result = [...cardItems];

        // category type filtering
        if (filter === 'bestSeller') {
            result = result.filter(item => item.bestSeller === true);
        } else if (filter === 'new') {
            result = result.filter(item => item.isNew === true);
        } else if (filter === 'face') {
            result = result.filter(item => item.category === 'face');
        } else if (filter === 'body') {
            result = result.filter(item => item.category === 'body');
        }

        // search filtering
        if (searchTerm.trim() !== "") {
            const term = searchTerm.toLowerCase();
            result = result.filter(item =>
                (item.title?.toLowerCase().includes(term) ||
                    item.description?.toLowerCase().includes(term))
            );
        }

        // sorting
        if (sortOption === "price-low-high") {
            result = [...result].sort((a, b) =>
                Number(a.discountedPrice) - Number(b.discountedPrice)
            );
        } else if (sortOption === "price-high-low") {
            result = [...result].sort((a, b) =>
                Number(b.discountedPrice) - Number(a.discountedPrice)
            );
        } else if (sortOption === "newest") {
            result = [...result].sort((a, b) =>
                (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1
            );
        }

        setFilteredProducts(result);
    }, [filter, searchTerm, sortOption]);

    return (
        <>
            <div className="w-full h-auto">
                {filteredProducts.length > 0 ? (
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mx-auto">
                        {filteredProducts.map((item, index) => (
                            <Card
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                bestSeller={item.bestSeller}
                                isNew={item.isNew}
                                id={item.id}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-10 text-center text-gray-500">
                        No products found matching your criteria. Try adjusting your filters.
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductList;