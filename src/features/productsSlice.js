import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

const productSlice = createSlice({
   name: 'products',
   initialState: initialStateValue,
   reducers: {
      load: (state, action) => {
         return (state = [action.payload]);
      },
   },
});

export const { load } = productSlice.actions;

export default productSlice.reducer;
