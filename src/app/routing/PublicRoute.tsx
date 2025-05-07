import {Navigate, Route, Routes} from "react-router-dom";
import {MasterLayout} from "../../_g-tech/layout/MasterLayout";
import HomeWrapper from "../modules/home/HomeWrapper";
import ShopPages from "../modules/shop/ShopPages";
import Practice from "../modules/Practice";


const PublicRoute = () => {
    return (
        <>
            <Routes>
                <Route element={<MasterLayout/>}>
                    <Route path="/home/*" element={<HomeWrapper/>}/>
                    <Route path="/shop/*" element={<ShopPages/>}/>
                    <Route path="/p/*" element={<Practice/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/home" replace/>}/>
            </Routes>
        </>
    )
}

export default PublicRoute;