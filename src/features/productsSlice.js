import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

const productSlice = createSlice({
   name: 'products',
   initialState: initialStateValue,
   reducers: {
      load: (state, action) => {
         // state = []
         // state.splice();
         // state = [];
         // return (state = [ action.payload]);
         state.push(action.payload);
         //  [action.payload];
      },
      unload: (state) => {
         state = initialStateValue;
      },
   },
});

export const { load, unload } = productSlice.actions;

export default productSlice.reducer;
