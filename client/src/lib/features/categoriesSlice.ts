import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
 

const initialState: CategoriesInitialState = {
  categories: [],
  error: null,
  
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

    
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setCategories, setError } = categoriesSlice.actions;
export const selectCategories = (state: RootState) => state.categories.categories;

export default categoriesSlice.reducer;