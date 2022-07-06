import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "./../../db";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: number;
  description: string;
  image: string;
  saved: boolean;
  quantity: number;
};

type InitialStateType = {
  products: Product[];
};

const initialState: InitialStateType = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.products = Products;
    },
    toggleSaved: (state, action: PayloadAction<Product>) => {
      const toUpdate = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (toUpdate) {
        toUpdate.saved = !toUpdate.saved;
      }
    },
  },
});

export default productSlice.reducer;
export const { getProducts, toggleSaved } = productSlice.actions;
