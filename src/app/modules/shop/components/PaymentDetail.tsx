import dateIcon from '../../../../_g-tech/assets/icons/Calendar Icon.png';
import cusIcon from '../../../../_g-tech/assets/icons/Customer Icon.png';
import payIcon from '../../../../_g-tech/assets/icons/Money Icon.png';
import cardIcon from '../../../../_g-tech/assets/icons/visa-icon.png';

import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {useNavigate} from "react-router-dom";
import {clearCart} from "../core/reducer";

const PaymentDetail = () => {
    const {
        totalItems,
        totalPrice,
        cartItems
    } = useAppSelector((state) => state.shop);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleNavigateToShop = () => {
        navigate('/shop');
        dispatch(clearCart());
    }

    return (
        <div className="h-auto w-full flex flex-col items-center">
            <div className="py-10 flex flex-col items-center gap-3">
                <h1 className="text-[40px] font-semibold">Thank you for your purchase!</h1>
                <p className="text-[16px] text-[#9095A0]">You will receive an confirmation letter through your email</p>
            </div>
            <div className="h-full w-[770px] rounded-[10px] border border-[#D2D2D2] mb-20">
                {/*calender*/}
                <div className="flex flex-col gap-6 p-5">
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <img className="h-[24px] w-[24px] object-center" src={dateIcon} alt="dateIcon"/>
                            <span className="text-[16px] text-secondary-50">Date</span>
                        </div>
                        <div>
                            <span className="text-[16px]">27/04/2022</span>
                        </div>
                    </div>
                    {/*customer*/}
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <img className="h-[24px] w-[24px] object-center" src={cusIcon} alt="dateIcon"/>
                            <span className="text-[16px] text-secondary-50">Customer</span>
                        </div>
                        <div>
                            <span className="text-[16px]">Alvaro Garcia</span>
                        </div>
                    </div>
                    {/*payment*/}
                    <div className="flex justify-between border-b border-[#E6E6E6] pb-4">
                        <div className="flex gap-3">
                            <img className="h-[24px] w-[24px] object-center" src={payIcon} alt="dateIcon"/>
                            <span className="text-[16px] text-secondary-50">Payment Method</span>
                        </div>
                        <div>
                            <img className="h-[24px] w-[24px] object-center" src={cardIcon} alt="dateIcon"/>
                        </div>
                    </div>
                    {/*Order*/}
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <img className="h-[24px] w-[24px] object-center" src={cusIcon} alt="dateIcon"/>
                            <span className="text-[16px] text-secondary-50">Order Number</span>
                        </div>
                        <div>
                            <span className="text-[16px]">732-123-4567</span>
                        </div>
                    </div>
                    {/*total*/}
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <img className="h-[24px] w-[24px] object-center" src={cusIcon} alt="dateIcon"/>
                            <span className="text-[16px] text-secondary-50 font-semibold">Total</span>
                        </div>
                        <div>
                            <span className="text-[24px]">${totalPrice}</span>
                        </div>
                    </div>
                    {/*Order Line*/}
                    <div>
                        <h3 className="text-[24px] font-semibold pb-3">Order Line</h3>
                        <div className="pt-5 border-t border-[#E6E6E6]">
                            {
                                cartItems.map((card, index) => (
                                    <div key={index} className="h-[137px] flex justify-between items-center">
                                        <div className="flex gap-5">
                                            <img className="w-[101px] h-[127px] rounded-[4px]" src={card.product.image}
                                                 alt="productImage"/>
                                            <div className="flex flex-col gap-2">
                                                <h4 className="text-[16px] text-[#323842] font-semibold">{card.product.title}</h4>
                                                <span className="text-[12px] text-[#9095A0]">{card.size}</span>
                                                <button
                                                    className="w-[65px] h-[28px] rounded-[10px] bg-[#F3F4F6] text-[12px]">
                                                    {totalItems}x Items
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold">${card.total}</span>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="py-5">
                                <button
                                    onClick={handleNavigateToShop}
                                    className="w-[200px] h-[52px] rounded-[4px] text-white bg-primary hover:bg-primary/85 hover:text-dark transition-all duration-300">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetail;