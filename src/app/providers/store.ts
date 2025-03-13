import { configureStore } from '@reduxjs/toolkit';
import { bikesApi } from '@/shared/api/bikesApi';
import filtersReducer from '@/entities/filters/model/slice';
import cartReducer from '@/entities/cart/model/slice';
import themeReducer from '@/entities/theme/model/slice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    theme: themeReducer,
    [bikesApi.reducerPath]: bikesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bikesApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
