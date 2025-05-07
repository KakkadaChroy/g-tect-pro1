import {combineReducers} from "redux";

import shopReducer from '../modules/shop/core/reducer';

const rootReducer = combineReducers({
    shop: shopReducer,
})

export default rootReducer;
