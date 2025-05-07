import {Navigate, Route, Routes} from "react-router-dom";
import ShopWrapper from "./ShopWrapper";
import ProductDetail from "./components/ProductDetail";
import ShoppingBag from "./components/ShoppingBag";
import PaymentDetail from "./components/PaymentDetail";
import ProductHistory from "./components/ProductHistory";
import PromotionsSection from "./components/ProductPromotion";

const ShopPages = () => {
    return (
        <>
            <Routes>
                <Route index element={<ShopWrapper/>}/>
                <Route path="/detail/:id" element={<ProductDetail/>}/>
                <Route path="/shopping/:id" element={<ShoppingBag/>}/>
                <Route path="/shopping/payment/:id" element={<PaymentDetail/>}/>
                <Route path="/shopping/history" element={<ProductHistory/>}/>
                <Route path="/promotion" element={<PromotionsSection/>}/>
                <Route path="*" element={<Navigate to="/shop" replace/>}/>
            </Routes>
        </>
    )
}

export default ShopPages;