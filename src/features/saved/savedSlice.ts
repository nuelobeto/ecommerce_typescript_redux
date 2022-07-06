import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: number;
  description: string;
  image: string;
  saved: boolean;
};

type InitialStateType = {
  saved: Product[];
};

const initialState: InitialStateType = {
  saved: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addToSaved: (state, action: PayloadAction<Product>) => {
      state.saved = [action.payload, ...state.saved];
    },
    deleteSavedProduct: (state, action: PayloadAction<number>) => {
      state.saved = state.saved.filter(
        (product) => product.id !== action.payload
      );
    },
    clearSaved: (state) => {
      state.saved = [];
    },
  },
});

export default savedSlice.reducer;
export const { addToSaved, deleteSavedProduct, clearSaved } =
  savedSlice.actions;
