import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {
    Trash2,
    ShoppingCart,
    Truck,
    User,
    Info,
    CreditCard,
    Minus,
    Plus,
    Pencil,
    CircleCheck, ClipboardMinus
} from 'lucide-react';
import Container from '../../ui/Container';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {SuccessAlert} from '../../ui/Alert';
import {addToCart, removeFromCart, setTotalPrice, updateCartItemQuantity} from "../core/reducer";
import {ID} from "../../../../_g-tech/helpers/ts/model";

import visaImage from '../../../../_g-tech/assets/icons/visa-icon.png';
import {CardModel} from "../../home/core/model";
import {cardItems} from "../../home/core/dummy/dummy";
import Card from "../../ui/Card";

const ShoppingBag = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const id = useParams().id as string;
    const parsId = parseInt(id);

    const cartItems = useAppSelector((state) => state.shop.cartItems);
    const totalItems = useAppSelector((state) => state.shop.totalItems);

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [hasAppliedPromo, setHasAppliedPromo] = useState(false);
    const [isUpdateQty, setIsUpdateQty] = useState(false);

    // related product
    const [relatedProducts, setRelatedProducts] = useState<CardModel[]>([]);

    const [shipping, setShipping] = useState({
        method: 'UPS',
        cost: 22,
        isExpress: true
    });

    // scroll to top
    useEffect(() => {
        window.scroll(0, 0);
    }, [location.pathname]);

    // fetch related product
    useEffect(() => {
        const foundedProduct = cardItems.find((item) => item.id);

        // related products
        let related: CardModel[] = [];

        if (foundedProduct?.category) {
            related = cardItems.filter(item =>
                item.id !== parsId &&
                item.category === foundedProduct?.category
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
    }, []);

    // Calculate totals
    const subtotal = cartItems.reduce(
        (total, item) => total + (parseFloat(item.product.price || '0') * item.quantity),
        0
    );
    const total = subtotal - discount + shipping.cost;

    // Handler for removing item
    const handleRemoveItem = (productId: ID | undefined, size: string) => {
        if (productId) {
            dispatch(removeFromCart({productId, size}));
            SuccessAlert({text: 'Item removed from bag'});
        }
    };

    // Handler for updating qty
    const handleUpdateQuantity = (productId: ID | undefined, size: string, quantity: number) => {
        if (productId) {
            dispatch(updateCartItemQuantity({productId, size, quantity}));
        }
    };

    // Handler for applying promo code
    const handleApplyPromo = () => {
        if (promoCode === '$15 OFF') {
            setDiscount(15);
            setHasAppliedPromo(true);
            SuccessAlert({text: 'Promo code applied successfully!'});
        }
    };

    // Handler for selecting shipping method
    const handleShippingMethod = (method: string, cost: number, isExpress: boolean) => {
        setShipping({method, cost, isExpress});
    };

    // Handler for proceeding to payment
    const handleProceedToPayment = () => {
        SuccessAlert({text: 'Proceeding to payment...'});
        dispatch(setTotalPrice(total));
        setTimeout(() => {
            navigate(`/shop/shopping/payment/1`);
        }, 500);
    };

    // If cart is empty
    if (cartItems.length === 0) {
        return (
            <Container>
                <div className="py-12 text-center">
                    <h1 className="text-2xl font-semibold mb-4">My Shopping Bag (0 Items)</h1>
                    <p className="text-gray-600 mb-6">Your shopping bag is empty.</p>
                    <Link to={`/shop`}
                          className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                        Continue Shopping
                    </Link>
                </div>
            </Container>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-[40px] font-semibold text-center mb-8 text-dark">My Shopping Bag
                ({totalItems} Items)</h1>

            <div className="h-full flex justify-between gap-10 items-start">
                {/* Left side - Order details */}
                <div className="w-[807px]">
                    {/* Order Summary */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <ShoppingCart className="w-[30px] h-[30px]"/>
                            <h2 className="text-[24px] font-medium">Order Summary</h2>
                        </div>

                        <div className="border rounded-md overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="text-left px-4 py-3 text-sm font-medium text-[#565E6C]">Name</th>
                                    <th className="text-left px-4 py-3 text-sm font-medium text-[#565E6C]">Text</th>
                                    <th className="text-left px-4 py-3 text-sm font-medium text-[#565E6C]">Quantity</th>
                                    <th className="text-left px-4 py-3 text-sm font-medium text-[#565E6C]">Total</th>
                                    <th className="px-4 py-3"></th>
                                </tr>
                                </thead>
                                <tbody className="divide-y">
                                {cartItems.map((item, index) => {
                                    const itemTotal = parseFloat(item.product.price || '0') * item.quantity;

                                    return (
                                        <tr key={index} className="bg-white">
                                            <td className="px-4 py-4">
                                                <img
                                                    src={item.product.image}
                                                    alt={item.product.title}
                                                    className="w-12 h-16 object-cover"
                                                />
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-sm font-medium">{item.product.title}</div>
                                                <div className="mt-1">
                                                    <select
                                                        className="border rounded px-2 py-1 text-sm w-32"
                                                        value={item.size}
                                                        disabled
                                                    >
                                                        <option>{item.size}</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                {
                                                    isUpdateQty ? (
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center">
                                                            <span
                                                                className="text-gray-700 mr-2">${item.product.price}</span>
                                                                <button
                                                                    onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity - 1)}
                                                                    disabled={item.quantity <= 1}
                                                                    className="text-gray-500 hover:text-primary disabled:opacity-50"
                                                                >
                                                                    <Minus className="w-4 h-4"/>
                                                                </button>
                                                                <span className="mx-2">{item.quantity}</span>
                                                                <button
                                                                    onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity + 1)}
                                                                    className="text-gray-500 hover:text-primary"
                                                                >
                                                                    <Plus className="w-4 h-4"/>
                                                                </button>
                                                            </div>
                                                            <button
                                                                onClick={() => setIsUpdateQty(false)}
                                                                className="px-3 py-0.5 bg-primary text-white rounded-md">save
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex gap-2">
                                                            <Pencil onClick={() => setIsUpdateQty(!isUpdateQty)}
                                                                    className="h-[16xp] w-[16px] cursor-pointer text-[#565E6C]"/>
                                                            <span className="text-sm text-[#565E6C]">{item.quantity}</span>
                                                        </div>
                                                    )
                                                }
                                            </td>
                                            <td className="px-4 py-4 font-medium text-sm text-primary">${itemTotal.toFixed(2)}</td>
                                            <td className="px-4 py-4 text-right">
                                                <button
                                                    className="text-gray-400 hover:text-gray-600"
                                                    onClick={() => handleRemoveItem(item.product.id, item.size)}
                                                >
                                                    <Trash2 className="w-5 h-5"/>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Delivery Options */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Truck className="w-5 h-5"/>
                            <h2 className="text-[24px] font-semibold text-dark">Delivery Options</h2>
                        </div>

                        <div className="mb-4">
                            <p className="text-[16px] font-medium mb-2 text-[#424955]">Operator</p>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="shipping"
                                        className="w-4 h-4 accent-primary"
                                        checked={shipping.method === 'UPS'}
                                        onChange={() => handleShippingMethod('UPS', 22, true)}
                                    />
                                    <span className="ml-2">UPS</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="shipping"
                                        className="w-4 h-4 accent-primary"
                                        checked={shipping.method === 'FedEx'}
                                        onChange={() => handleShippingMethod('FedEx', 22, true)}
                                    />
                                    <span className="ml-2">FedEx</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="shipping"
                                        className="w-4 h-4 accent-primary"
                                        checked={shipping.method === 'DHL'}
                                        onChange={() => handleShippingMethod('DHL', 22, true)}
                                    />
                                    <span className="ml-2">DHL</span>
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className={`border rounded-md p-4 cursor-pointer ${shipping.isExpress ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleShippingMethod(shipping.method, 22, true)}
                            >
                                <div className="flex items-start">
                                    <CircleCheck
                                        className={`w-[24px] h-[24px] mr-2 flex-shrink-0 mt-0.5 ${shipping.isExpress ? 'text-green-600' : 'text-gray-400'}`}/>
                                    <div>
                                        <div
                                            className={`font-bold text-[20px] ${shipping.isExpress ? 'text-primary' : ''}`}>$22
                                        </div>
                                        <div
                                            className={`text-sm ${shipping.isExpress ? 'text-primary/85' : ''}`}>Instant
                                            delivery
                                        </div>
                                        <div
                                            className={`text-xs ${shipping.isExpress ? 'text-primary/85' : 'text-gray-500'}`}>Est.
                                            arrive: Today
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`border rounded-md p-4 cursor-pointer ${!shipping.isExpress ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                onClick={() => handleShippingMethod(shipping.method, 12, false)}
                            >
                                <div className="flex items-start">
                                    <CircleCheck
                                        className={`w-[24px] h-[24px] mr-2 flex-shrink-0 mt-0.5 ${!shipping.isExpress ? 'text-green-600' : 'text-gray-400'}`}/>
                                    <div>
                                        <div
                                            className={`font-bold text-[24px] ${!shipping.isExpress ? 'text-primary' : ''}`}>$12
                                        </div>
                                        <div
                                            className={`text-sm ${!shipping.isExpress ? 'text-primary/85' : ''}`}>Standard
                                            delivery
                                        </div>
                                        <div
                                            className={`text-xs ${!shipping.isExpress ? 'text-primary' : 'text-gray-500'}`}>Est.
                                            arrive: 3-5 days
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customer Information */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <User className="w-[30px] h-[30px]"/>
                            <h2 className="text-[24px] font-medium">Customer Information</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-[#424955] mb-1">Full name</label>
                                <input
                                    type="text"
                                    className="w-[367px] bg-[#F3F4F6] border rounded-md px-3 py-2 text-sm"
                                    value="Amaya Dunne"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#424955] mb-1">Phone number</label>
                                <input
                                    type="text"
                                    className="w-[367px] bg-[#F3F4F6] border rounded-md px-3 py-2 text-sm"
                                    value="732-123-4567"
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#424955] mb-1">Address</label>
                            <input
                                type="text"
                                className="w-full bg-[#F3F4F6] border rounded-md px-3 py-2 text-sm"
                                value="4705 Poor Street, Bayville, New Jersey(NJ)"
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked/>
                                <span className="ml-2 text-sm">Save as default</span>
                            </label>
                        </div>

                        <div className="w-[751px] h-[72px] border border-[905F4B] rounded-[4px] p-4 bg-[#905F4B]/20">
                            <div className="flex items-center">
                                <Info className="w-5 h-5 text-red-500 mr-2 flex-shrink-0"/>
                                <div className="text-sm text-red-700">
                                    <p className="text-[12px] font-semibold">Delivery note</p>
                                    <p className="text-[#171A1F] text-[12px]">Eiusmod et nisi non sunt dolor proident
                                        consequat sunt
                                        et exercitation consectetur fugiat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Payment Summary */}
                <div className="w-[352px] h-[605px] mt-12">
                    <div className="border-[1px] border-primary rounded-md p-6 sticky top-4">
                        <div className="mb-12">
                            <h3 className="text-[24px] text-dark font-semibold mb-4">Payment Method</h3>
                            <div className="mb-2">
                                <button className="text-[12px] text-blue-500 hover:text-blue-700">
                                    Change payment methods
                                </button>
                            </div>
                            <div
                                className="w-[296px] h-[60px] border border-primary rounded-[4px] p-3 flex items-center bg-primary/5">
                                <div className="flex-1 flex items-center gap-2">
                                    <img src={visaImage} alt="visaImage"
                                         className="w-[35px] h-[36px] object-cover object-center"/>
                                    <span>Mastercard</span>
                                </div>
                                <div className="text-gray-500">**** 5987</div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <input
                                    type="text"
                                    className="w-[216px] h-[35px] flex-1 border rounded-[4px] px-3 py-2 text-sm"
                                    placeholder="$15 OFF"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    disabled={hasAppliedPromo}
                                />
                                <button
                                    className="w-[73px] h-[36px] bg-primary/5 ml-2 px-4 text-green-600 disabled:opacity-50 text-sm"
                                    onClick={handleApplyPromo}
                                    disabled={hasAppliedPromo}
                                >
                                    Apply
                                </button>
                            </div>
                            <div className="flex flex-col gap-2 pt-5">
                                <button
                                    className="w-[55px] h-[24px] rounded-full text-[#774900] bg-warning text-[11px]">$15
                                    OFF
                                </button>
                            </div>
                            {hasAppliedPromo && (
                                <div className="flex items-center bg-yellow-100 px-3 py-2 rounded-md">
                                    <div className="flex-1 text-sm font-medium text-yellow-800">$15 Off</div>
                                    <CreditCard className="w-5 h-5 text-yellow-700"/>
                                </div>
                            )}
                        </div>

                        <div className="pt-4 mb-6">
                            <ClipboardMinus className="h-[24px] w-[24px] text-[#905F4B]"/>
                            <div className="flex justify-between py-3">
                                <span className="text-[#171A1F] text-sm">Subtotal</span>
                                <span className="font-semibold txt-[14px]">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="text-[#171A1F] text-sm">Discount</span>
                                <span className="font-semibold txt-[14px] text-red-600">-${discount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="text-[#171A1F] text-sm">Delivery Fee</span>
                                <span className="font-semibold txt-[14px]">${shipping.cost.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-t pt-4 mb-6">
                            <span className="text-gray-800 font-medium">Total</span>
                            <span className="text-[24px] font-bold text-[#FFA91E]">${total.toFixed(2)}</span>
                        </div>

                        <button
                            className="w-[296px] h-[52px] bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/80 transition-colors"
                            onClick={handleProceedToPayment}
                        >
                            Proceed to payment
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
        </div>
    );
};

export default ShoppingBag;