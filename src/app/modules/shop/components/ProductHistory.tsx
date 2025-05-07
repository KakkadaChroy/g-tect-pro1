import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from 'react-router-dom';
import { addToCart } from "../core/reducer";
import { SuccessAlert } from "../../ui/Alert";
import {ID} from "../../../../_g-tech/helpers/ts/model";

interface OrderItem {
    id: ID;
    productName: string;
    quantity: number;
    size: string;
    price: number;
    image: string;
}

interface Order {
    id: string;
    date: string;
    items: OrderItem[];
    expanded?: boolean;
}

const ProductHistory = () => {
    const { cartItems } = useAppSelector(state => state.shop);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Generate a recent order
    const [recentOrder, setRecentOrder] = useState<Order | null>(null);

    // Generate sample static orders
    const [orders, setOrders] = useState<Order[]>([
        {
            id: '#4376',
            date: 'March 22, 2021',
            expanded: true,
            items: [
                {
                    id: 1,
                    productName: 'Product name',
                    quantity: 2,
                    size: '50ml',
                    price: 104,
                    image: '/api/placeholder/60/120'
                },
                {
                    id: 2,
                    productName: 'Product name',
                    quantity: 2,
                    size: '50ml',
                    price: 76,
                    image: '/api/placeholder/60/120'
                }
            ]
        },
        {
            id: '#4456',
            date: 'March 12, 2021',
            expanded: false,
            items: [
                {
                    id: 3,
                    productName: 'Product name',
                    quantity: 1,
                    size: '100ml',
                    price: 85,
                    image: '/api/placeholder/60/120'
                }
            ]
        },
        {
            id: '#4455',
            date: 'March 12, 2021',
            expanded: false,
            items: [
                {
                    id: 4,
                    productName: 'Product name',
                    quantity: 3,
                    size: '50ml',
                    price: 120,
                    image: '/api/placeholder/60/120'
                }
            ]
        }
    ]);

    // Create a recent order
    useEffect(() => {
        if (cartItems.length > 0) {
            // Get current date in formatted string
            const today = new Date();
            const formattedDate = today.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });

            // Generate order ID
            const orderId = `#${Math.floor(Math.random() * 10000)}`;

            // Map cart items to order items
            const orderItems = cartItems.map(item => {
                const price = Number(item.product.price) * item.quantity;
                return {
                    id: item.product.id || 999,
                    productName: item.product.title || 'Product',
                    quantity: item.quantity,
                    size: item.size,
                    price: price,
                    image: item.product.image || '/api/placeholder/60/120'
                };
            });

            // Create new order
            const newOrder: Order = {
                id: orderId,
                date: formattedDate,
                expanded: true,
                items: orderItems
            };

            setRecentOrder(newOrder);
        }
    }, [cartItems]);

    // Toggle the expanded
    const toggleOrder = (orderId: string) => {
        if (recentOrder && recentOrder.id === orderId) {
            setRecentOrder({
                ...recentOrder,
                expanded: !recentOrder.expanded
            });
        } else {
            setOrders(orders.map(order =>
                order.id === orderId ? { ...order, expanded: !order.expanded } : order
            ));
        }
    };

    // Handle Buy again
    const handleBuyAgain = (item: OrderItem) => {
        if (cartItems.length > 0) {
            const originalProduct = cartItems.find(cartItem =>
                cartItem.product.id === item.id || cartItem.product.title === item.productName
            );

            if (originalProduct) {
                dispatch(addToCart({
                    product: originalProduct.product,
                    quantity: item.quantity,
                    size: item.size
                }));
                SuccessAlert({ text: 'Added to Bag successfully.' });
            }
        } else {
            SuccessAlert({ text: 'Product added to cart' });
        }
    };

    // Handle View product
    const handleViewProduct = (item: OrderItem) => {
        navigate(`/shop/detail/${item.id}`);
    };

    // Combine recent order
    const allOrders = recentOrder ? [recentOrder, ...orders] : orders;

    return (
        <div className="max-w-[768px] mx-auto p-4">
            <h1 className="text-[26px] font-medium text-center mb-3">Product history</h1>
            <p className="text-[#9095A0] text-center mb-8 text-[16px]">
                Check the status of recent orders, manage returns, and discover similar products.
            </p>

            <div className="space-y-4">
                {allOrders.map((order) => (
                    <div key={order.id} className="border rounded-md">
                        {/* Order header */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-700">
                                  {order.expanded ? 'Delivery on' : 'Order'} {order.date}
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {order.expanded ? 'Order' : ''} {order.id}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="text-sm text-gray-500 hover:text-gray-700">
                                    Manage order
                                </button>
                                <button className="text-sm text-gray-500 hover:text-gray-700">
                                    View invoice
                                </button>
                                <button
                                    onClick={() => toggleOrder(order.id)}
                                    className="p-1 text-gray-500 hover:text-gray-700"
                                >
                                    {order.expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Order details (shown when expanded) */}
                        {order.expanded && (
                            <div className="p-4">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.productName}
                                                className="w-12 h-20 object-cover"
                                            />
                                            <div>
                                                <h3 className="font-medium">{item.productName}</h3>
                                                <p className="text-sm text-gray-500">
                                                    ×{item.quantity} items
                                                </p>
                                                <p className="text-sm text-gray-500">{item.size}</p>
                                                <p className="font-medium mt-1">${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={() => handleBuyAgain(item)}
                                                className="w-[128px] h-[32px] px-4 bg-primary text-white rounded-[3px] hover:bg-primary/80 transition-colors text-[12px]"
                                            >
                                                Buy again
                                            </button>
                                            <button
                                                onClick={() => handleViewProduct(item)}
                                                className="px-4 w-[128px] h-[32px] text-gray-700 text-sm hover:underline bg-[#F3F4F6]"
                                            >
                                                View product
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductHistory;