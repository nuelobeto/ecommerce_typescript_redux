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
  quantity: number;
};

type InitialStateType = {
  cart: Product[];
};

const initialState: InitialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart = [action.payload, ...state.cart];
    },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const toUpdate = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (toUpdate) {
        toUpdate.quantity < toUpdate.inStock && toUpdate.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const toUpdate = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (toUpdate) {
        toUpdate.quantity > 1 && toUpdate.quantity--;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  deleteProduct,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
