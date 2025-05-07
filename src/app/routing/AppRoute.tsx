import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "../../App";
import PublicRoute from "./PublicRoute";

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<App/>}>
                        <Route path="/*" element={<PublicRoute/>}/>
                        <Route index element={<Navigate to="/home" replace/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute;