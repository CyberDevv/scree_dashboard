import { configureStore } from '@reduxjs/toolkit';

import porductsReducer from './productsSlice';

export default configureStore({
   reducer: {
      products: porductsReducer,
   },
});
