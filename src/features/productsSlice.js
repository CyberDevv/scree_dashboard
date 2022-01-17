import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
   products: [],
};

const productSlice = createSlice({
   name: 'products',
   initialState: initialStateValue,
   reducers: {
      load: (state, action) => {
         state.products = action.payload;
      },
      unload: (state) => {
         state = initialStateValue;
      },
   },
});

export const { load, unload } = productSlice.actions;

export default productSlice.reducer;
