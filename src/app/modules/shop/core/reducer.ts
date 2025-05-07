import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ID} from "../../../../_g-tech/helpers/ts/model";
import {CartItem, OrderItems} from "./model";


interface ShopReducerModel {
    cartItems: CartItem[];
    totalItems: number;
    orderItems: OrderItems[];
    totalPrice: number;
}


const initialState: ShopReducerModel = {
    cartItems: [],
    totalItems: 0,
    orderItems: [],
    totalPrice: 0
}


const shopSlice = createSlice({
    name: "shop",
    initialState: initialState,
    reducers: {
        // addToCart: (state, action: PayloadAction<CartItem>) => {
        //     const { product, quantity, size, total } = action.payload;
        //
        //     const existingItemIndex = state.cartItems.findIndex(
        //         item => item.product.id === product.id && item.size === size
        //     );
        //
        //     if (existingItemIndex >= 0) {
        //         state.cartItems[existingItemIndex].quantity += quantity;
        //     } else {
        //         state.cartItems.push({ product, quantity, size, total });
        //     }
        //
        //     // Update total items count
        //     state.totalItems = state.cartItems.reduce(
        //         (total, item) => total + item.quantity, 0
        //     );
        // },

        addToCart: (state, action: PayloadAction<CartItem>) => {
            const { product, quantity, size } = action.payload;
            const itemTotal = parseFloat(product.price || '0') * quantity;

            const existingItemIndex = state.cartItems.findIndex(
                item => item.product.id === product.id && item.size === size
            );

            if (existingItemIndex >= 0) {
                state.cartItems[existingItemIndex].quantity += quantity;
                state.cartItems[existingItemIndex].total =
                    parseFloat(product.price || '0') * state.cartItems[existingItemIndex].quantity;
            } else {
                state.cartItems.push({ product, quantity, size, total: itemTotal });
            }

            state.totalItems = state.cartItems.reduce(
                (total, item) => total + item.quantity,
                0
            );
        },

        setTotalPrice: (state, action: PayloadAction<number>) => {
            state.totalPrice = action.payload;
        },

        // Remove item from cart
        removeFromCart: (state, action: PayloadAction<{ productId: ID; size: string }>) => {
            const { productId, size } = action.payload;

            state.cartItems = state.cartItems.filter(
                item => !(item.product.id === productId && item.size === size)
            );

            state.totalItems = state.cartItems.reduce(
                (total, item) => total + item.quantity, 0
            );
        },

        updateCartItemQuantity: (state, action: PayloadAction<{ productId: ID; size: string; quantity: number }>) => {
            const { productId, size, quantity } = action.payload;
            const itemIndex = state.cartItems.findIndex(
                item => item.product.id === productId && item.size === size
            );
            if (itemIndex >= 0 && quantity >= 1) {
                state.cartItems[itemIndex].quantity = quantity;
                state.cartItems[itemIndex].total =
                    parseFloat(state.cartItems[itemIndex].product.price || '0') * quantity;
                state.totalItems = state.cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                );
            }
        },

        // Update item quantity
        // updateCartItemQuantity: (
        //     state,
        //     action: PayloadAction<{ productId: ID; size: string; quantity: number}>
        // ) => {
        //     const { productId, size, quantity } = action.payload;
        //
        //     const itemIndex = state.cartItems.findIndex(
        //         item => item.product.id === productId && item.size === size
        //     );
        //
        //     if (itemIndex >= 0) {
        //         if (quantity > 0) {
        //             state.cartItems[itemIndex].quantity = quantity;
        //         } else {
        //             state.cartItems.splice(itemIndex, 1);
        //         }
        //     }
        //
        //     // Update total items count
        //     state.totalItems = state.cartItems.reduce(
        //         (total, item) => total + item.quantity, 0
        //     );
        // },

        // Clear cart
        clearCart: (state) => {
            state.cartItems = [];
            state.totalItems = 0;
        }
    }
})

export const {
    addToCart,
    updateCartItemQuantity,
    clearCart,
    removeFromCart,
    setTotalPrice
} = shopSlice.actions;
export default shopSlice.reducer;