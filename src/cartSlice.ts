import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface ICartState {
    items: ICartItem[];
    promoCode: string;
    discount: number;
}

const initialState: ICartState = {
    items: [],
    promoCode: "",
    discount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ICartState>) {
            const exestingItem = state.items.find((item) =>
            item.id === action.payload.id);
            if (exestingItem) {
                exestingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        applyPromoCode(state, action: PayloadAction<string>) {
            state.promoCode = action.payload;

            if (action.payload === "DISCOUNT10") {
                state.discount = 0.1;
            } else {
                state.discount = 0;
            }
        },
        clearCart(state) {
            state.items = [];
            state.promoCode = "";
            state.discount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, applyPromoCode, clearCart } = cartSlice.actions;
export default cartSlice.reducer;