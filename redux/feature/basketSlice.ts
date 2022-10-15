import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state = initialState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state = initialState, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex((item: Product) => item._id === action.payload.id);

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert(`Cant remote product id: ${action.payload.id} is not in basket`);
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = BasketSlice.actions;

//selector => retrieving items in state to use in different components
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemWithId = (state: RootState, id: string) => state.basket.items.filter((item: Product) => item._id === id);

export const selectBasketTotal = (state: RootState) => state.basket.items.reduce((total: number, item: Product) => (total += item.price), 0);

export default BasketSlice.reducer;
