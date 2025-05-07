import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingCart, User, X } from "lucide-react";
import { useAppSelector } from "../../../app/redux/hooks";
import {Link, useNavigate} from "react-router-dom";
import {CardModel} from "../../../app/modules/home/core/model";
import {cardItems} from "../../../app/modules/home/core/dummy/dummy";
import {ID} from "../ts/model";

const NavbarSearchMenu = () => {
    const totalItems = useAppSelector((state) => state.shop.totalItems);
    const cartItems = useAppSelector((state) => state.shop.cartItems);
    const navigate = useNavigate();

    // Search states
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<CardModel[]>([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Handle search
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === "") {
            setShowResults(false);
            return;
        }

        // Filter products
        const results = cardItems.filter(item =>
            (item.title?.toLowerCase().includes(value.toLowerCase()) ||
                item.description?.toLowerCase().includes(value.toLowerCase()) ||
                item.category?.toLowerCase().includes(value.toLowerCase()))
        );

        setSearchResults(results);
        setShowResults(true);
    };

    // Clear search
    const clearSearch = () => {
        setSearchTerm("");
        setShowResults(false);
    };

    // Navigate to product detail
    const handleProductClick = (productId: ID) => {
        if (productId) {
            navigate(`/shop/detail/${productId}`);
            clearSearch();
        }
    };

    // Navigate to shopping bag
    const handleCartClick = () => {
        if (cartItems.length > 0 && cartItems[0].product.id) {
            navigate(`/shop/shopping/${cartItems[0].product.id}`);
        } else {
            navigate('/shop');
        }
    };

    // Handle click outside search
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="w-[310px] h-[44px] flex items-center gap-[10px]">
                <div className="relative" ref={searchRef}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-[146px] h-[34px] border border-secondary-50 rounded-md ps-8 text-[13px]"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <span className="absolute top-1.5 left-1">
                            <Search className="text-secondary-50 h-[22.67px] w-[20px]"/>
                        </span>
                        {searchTerm && (
                            <button
                                className="absolute top-1.5 right-1 text-gray-400 hover:text-gray-600"
                                onClick={clearSearch}
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* Search Results */}
                    {showResults && searchResults.length > 0 && (
                        <div className="absolute z-50 left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                            {searchResults.map((product) => (
                                <div
                                    key={product.id}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden mr-2">
                                        {product.image && (
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                                        <p className="text-xs text-gray-500 truncate">{product.category}</p>
                                    </div>
                                    <div className="text-primary font-medium text-sm">${product.price}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* No Results */}
                    {showResults && searchTerm && searchResults.length === 0 && (
                        <div className="absolute z-50 left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-4 px-3 border border-gray-200 text-center text-gray-500">
                            No products found
                        </div>
                    )}
                </div>

                <div
                    className="flex items-center gap-[10px] text-dark transition-colors"
                >
                    <div className="relative cursor-pointer" onClick={handleCartClick}>
                        <ShoppingCart className="w-[20px] h-[20px]" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                {totalItems > 9 ? '9+' : totalItems}
                            </span>
                        )}
                    </div>
                    <p className="text-[20px] cursor-pointer" onClick={handleCartClick}>Cart ({totalItems})</p>
                    <Link to={`/shop/shopping/history`}>
                        <User className="w-[20px] h-[20px]"/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavbarSearchMenu;