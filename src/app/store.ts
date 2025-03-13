import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bikesApi} from "@/bikesApi";
import filtersReducer from "@/filtersSlice"
import cartReducer from "@/cartSlice";

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        cart: cartReducer,
        [bikesApi.reducerPath]: bikesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bikesApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();