import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { sumItems } from '../utils';
 

const initialState: CartInitialState = {
  cartItems: [],
  itemCount: 0,
  total: 0,
  modal: false,
  error: null,
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action: {type: string, payload: CartItem}) => {
      state.cartItems = [...state.cartItems, action.payload];
      const {itemCount, total} = sumItems(state.cartItems);
      state.itemCount = itemCount;
      state.total = total;
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id != action.payload);
        const {itemCount, total} = sumItems(state.cartItems);
        state.itemCount = itemCount;
        state.total = total;
      },
    increaseQty: (state, action) => {
        const index = state.cartItems.findIndex(item => item.id == action.payload);
        state.cartItems[index].qty+=1;
        const {itemCount, total} = sumItems(state.cartItems);
        state.itemCount = itemCount;
        state.total = total;
      },
    decreaseQty: (state, action) => {
        const index = state.cartItems.findIndex(item => item.id == action.payload);
        state.cartItems[index].qty-=1;
        
        const {itemCount, total} = sumItems(state.cartItems);
        state.itemCount = itemCount;
        state.total = total;
        // remove the cart item if its quantity is zero
        if(state.cartItems[index].qty == 0) {state.cartItems = state.cartItems.filter(item => item.id != action.payload);}
      },
      clearCart: (state, action) => {
        state.cartItems = initialState.cartItems
        state.itemCount = initialState.itemCount;
        state.total = initialState.total;
        state.error = initialState.error;
      },
   
    setError: (state, action) => {
      state.error = action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;


export default cartSlice.reducer;