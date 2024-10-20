import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
 

const initialState: ItemsInitialState = {
  items: [],
  error: null,
  
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {

    
    setItems: (state, action) => {
      state.items = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setItems, setError } = itemsSlice.actions;
export const selectItems = (state: RootState) => state.items.items;

export default itemsSlice.reducer;