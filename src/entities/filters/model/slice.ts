import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilters {
  type: string;
  brand: string;
  priceRange: [number, number];
  frameSize: string;
  inStock: boolean;
  sortBy: string;
}

const initialState: IFilters = {
  type: '',
  brand: '',
  priceRange: [0, Infinity],
  frameSize: '',
  inStock: false,
  sortBy: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    setFrameSize(state, action: PayloadAction<string>) {
      state.frameSize = action.payload;
    },
    setInStock(state, action: PayloadAction<boolean>) {
      state.inStock = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    resetFilters(state) {
      state.type = '';
      state.brand = '';
      state.priceRange = [0, Infinity];
      state.frameSize = '';
      state.inStock = false;
      state.sortBy = '';
    },
  },
});

export const {
  setType,
  setBrand,
  setPriceRange,
  setFrameSize,
  setInStock,
  setSortBy,
  resetFilters,
} = slice.actions;
export default slice.reducer;
