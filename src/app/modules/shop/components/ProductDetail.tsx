import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Container from "../../ui/Container";
import {Star, ShoppingBag, ChevronDown, Minus, Plus, CircleCheck} from "lucide-react";

import mainImage from '../../../../_g-tech/assets/images/card-detials/card-detail.png';
import related1 from '../../../../_g-tech/assets/images/card-detials/card-related1.png';
import related2 from '../../../../_g-tech/assets/images/card-detials/card-related2.png';
import related3 from '../../../../_g-tech/assets/images/card-detials/card-related3.png';
import related4 from '../../../../_g-tech/assets/images/card-detials/card-related4.png';
import {CardModel} from "../../home/core/model";
import {cardItems} from "../../home/core/dummy/dummy";
import Card from "../../ui/Card";
import Benefits from "./Benefits";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {ErrorAlert, SuccessAlert} from "../../ui/Alert";
import {addToCart} from "../core/reducer";
import ProductDetailSkeleton from "../../ui/SkeletonLoader";

const ProductDetail = () => {
    const {cartItems} = useAppSelector(state => state.shop);

    const [productObj, setProductObj] = useState<CardModel | null>(null);
    const [quantity, setQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState("50.00 ML");
    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [relatedProducts, setRelatedProducts] = useState<CardModel[]>([]);
    const [loadingObj, setLoadingObj] = useState(false);

    // handler loading
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const id = useParams().id as string;
    const parsId = parseInt(id);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleThumbnailClick = (index: number) => {
        setActiveImageIndex(index);
    };

    // handle navigate
    const handleAddToBag = () => {
        setIsLoading(true);
        if (productObj && quantity > 0) {
            dispatch(addToCart({
                product: productObj,
                quantity: quantity,
                size: selectedSize,
            }));
            SuccessAlert({text: 'Added to Bag successfully.'});
            setQuantity(0);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000)
        } else {
            ErrorAlert({text: "Please select product quantity."});
            setIsLoading(false);
        }
    };

    const handleCheckout = () => {
        const isProductInCart = cartItems.some(
            (item) => item.product.id === productObj?.id && item.size === selectedSize
        );

        if (productObj && isProductInCart) {
            navigate(`/shop/shopping/${productObj.id}`);
        } else {
            ErrorAlert({text: "Please add the product to your bag before checkout!"});
        }
    };

    // Handle size change
    const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSize(e.target.value);
    };

    useEffect(() => {
        const foundProduct = cardItems.find((item) => item.id === parsId);
        setLoadingObj(true);
        setProductObj(foundProduct || null);
        setTimeout(() => {
            setLoadingObj(false);
        }, 500)

        if (foundProduct && foundProduct.image) {
            // Set product image
            const images = [
                foundProduct.image,
                related1,
                related2,
                related3,
                related4
            ];
            setGalleryImages(images);
            // Reset main image
            setActiveImageIndex(0);
        }

        // related products
        let related: CardModel[] = [];

        if (foundProduct?.category) {
            related = cardItems.filter(item =>
                item.id !== parsId &&
                item.category === foundProduct?.category
            );
        }

        if (related.length < 4) {
            const additionalProducts = cardItems.filter(item =>
                item.id !== parsId &&
                !related.some(r => r.id === item.id) &&
                (item.bestSeller || item.isNew)
            ).slice(0, 4 - related.length);

            related = [...related, ...additionalProducts];
        }

        setRelatedProducts(related.slice(0, 4));

        // eslint-disable-next-line
    }, [parsId]);

    if (!productObj) return <div>Product not found</div>;
    if (loadingObj) {
        return <ProductDetailSkeleton/>
    }

    return (
        <div className="min-h-[823px] w-full py-10">
            <Container>
                {/* Breadcrumb Navigation */}
                <div className="flex gap-3 text-sm mb-8">
                    <Link to="/" className="text-primary">Home</Link>
                    <span className="text-gray-500">&gt;</span>
                    <Link to={"/shop"} className="text-primary">Shop</Link>
                    <span className="text-gray-500">&gt;</span>
                    <Link to={"/shop/category"} className="text-primary">Product Type</Link>
                    <span className="text-gray-500">&gt;</span>
                    <span className="text-gray-700">Detail</span>
                </div>

                {/* Product Detail Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-20 py-5">
                    {/* Product Images Section */}
                    <div className="flex gap-5 w-full lg:w-1/2">
                        <div className="flex flex-col gap-3">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`w-[80px] h-[80px] rounded-md overflow-hidden cursor-pointer ${
                                        activeImageIndex === index ? 'ring-2 ring-primary' : ''
                                    }`}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`Product thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1">
                            <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                                <img
                                    src={galleryImages[activeImageIndex] || mainImage}
                                    alt="Product main view"
                                    className="w-full h-full object-contain"
                                />
                                {productObj.bestSeller && (
                                    <span
                                        className="absolute top-3 right-3 inline-block px-3 py-1 bg-warning text-[#774900] text-sm rounded-md">
                                        Best Seller
                                    </span>
                                )}
                                {productObj.isNew && !productObj.bestSeller && (
                                    <span
                                        className="absolute top-3 right-3 flex items-center justify-center h-[32px] w-[49px] bg-warning rounded-[10px] text-center text-sm text-[#774900]">
                                        New
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="w-full lg:w-1/2">
                        {/* Product Title and Badge */}
                        <div className="relative mb-2">
                            <h1 className="text-[24px] font-semibold text-gray-900 mb-1">{productObj?.title || "Product Name"}</h1>
                            <p className="text-[#323842] mb-4 text-[16px]">{"Aliquip fugiat ipsum nostrud ex et eu incididunt"}</p>
                        </div>

                        {/* Product Price */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[40px] font-bold text-primary">${productObj?.price}</span>
                            <span
                                className="text-[20px] line-through text-gray-400">${productObj?.discountedPrice}</span>
                        </div>

                        {/* Product Description */}
                        <p className="text-[#323842] mb-6">
                            {productObj?.description}
                        </p>

                        {/* Product Ratings */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex gap-3 text-[16px]">
                                <span className="text-[#9095A0]"><strong
                                    className="text-dark">368</strong> reviews</span>
                                <span className="text-[#9095A0]"><strong className="text-dark">823</strong> sold</span>
                            </div>
                            <div className="flex items-center">
                                <Star className="w-[20px] h-[20px] fill-warning stroke-warning"/>
                                <Star className="w-[20px] h-[20px] fill-warning stroke-warning"/>
                                <Star className="w-[20px] h-[20px] fill-warning stroke-warning"/>
                                <Star className="w-[20px] h-[20px] fill-warning stroke-warning"/>
                                <Star className="w-[20px] h-[20px] fill-warning/30 stroke-warning"/>
                                <strong className="ml-2 text-dark">4.5</strong>
                            </div>
                        </div>

                        {/* Shipping Info */}
                        <div className="flex flex-col gap-2 mb-6">
                            <div className="flex items-center gap-2 text-gray-700">
                                <div>
                                    <CircleCheck className="w-[26px] h-[26px] text-primary"/>
                                </div>
                                <span className="text-[#323842]">Free shipping on orders over $49 USD</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <CircleCheck className="w-[26px] h-[26px] text-primary"/>
                                <span className="text-[#323842]">Free + easy returns</span>
                            </div>
                        </div>

                        {/* Product Size Selection */}
                        <div className="mb-6">
                            <label className="text-[16px] block text-[#424955] font-medium mb-2">Choose size</label>
                            <div className="relative">
                                <select
                                    value={selectedSize}
                                    onChange={handleSizeChange}
                                    className="w-full lg:w-[556px] h-[53px] bg-[#F3F4F6] px-4 rounded-[4px] appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                >
                                    <option value="50.00 ML">50.00 ML</option>
                                    <option value="100.00 ML">100.00 ML</option>
                                    <option value="200.00 ML">200.00 ML</option>
                                </select>
                                <ChevronDown
                                    className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-8">
                            <label className="text-[16px] block text-[#424955] font-medium mb-2">Quantity</label>
                            <div className="flex items-center gap-3">
                                <button
                                    className="w-[39px] h-[44px] bg-[#F3F4F6] flex items-center justify-center rounded-l-md"
                                    onClick={decreaseQuantity}
                                >
                                    <Minus className="w-4 h-4 text-[#424955]"/>
                                </button>
                                <input
                                    type="text"
                                    className="w-[38px] h-[43px] bg-[#F3F4F6] text-dark text-center"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    className="w-[43px] h-[44px] flex items-center justify-center rounded-r-md bg-[#F3F4F6]"
                                    onClick={increaseQuantity}
                                >
                                    <Plus className="w-4 h-4 text-[#424955]"/>
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-12">
                            <button
                                disabled={isLoading}
                                onClick={handleAddToBag}
                                className="h-[52px] w-[256px] px-6 flex items-center justify-center gap-2 border border-primary rounded-[4px] text-primary font-medium hover:bg-primary/5 transition-colors">
                                <ShoppingBag className="w-5 h-5"/>
                                Add to bag
                            </button>
                            <button
                                onClick={handleCheckout}
                                className="h-[52px] w-[256px] px-8 bg-primary text-white font-medium rounded-[4px] hover:bg-primary/90 transition-colors">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>

                {/*Related Products*/}
                <div>
                    <h3 className="text-[40px] py-10">Related Products</h3>
                    {relatedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    discountedPrice={product.discountedPrice}
                                    bestSeller={product.bestSeller}
                                    isNew={product.isNew}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-gray-500">
                            No related products found.
                        </div>
                    )}
                </div>

                {/*Other*/}
                <div>
                    <Benefits/>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetail;