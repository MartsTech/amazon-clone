import { createSlice } from "@reduxjs/toolkit";
import { productType } from "@type/productType";
import { RootState } from "app/store";

interface BasketState {
  items: { product: productType; count: number }[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: { payload: { product: productType } }) => {
      const { product } = action.payload;

      const item = state.items.find((item) => item.product.id === product.id);

      if (typeof item === "undefined") {
        state.items = [{ product, count: 1 }, ...state.items];
        return;
      }

      const newBasket = state.items.filter(
        (item) => item.product.id !== product.id
      );

      state.items = [{ product, count: item.count + 1 }, ...newBasket];
    },
    removeFromBasket: (state, action: { payload: number }) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      );

      if (typeof item === "undefined") {
        console.warn(
          `Can't remove product (id: ${action.payload}) as its not in the basket`
        );
        return;
      }

      const newBasket = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      if (item.count === 1) {
        state.items = newBasket;
        return;
      }

      state.items = [
        { product: item.product, count: item.count - 1 },
        ...newBasket,
      ];
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );
export const selectItemsCount = (state: RootState) =>
  state.basket.items.reduce((total, item) => total + item.count, 0);

export default basketSlice.reducer;
