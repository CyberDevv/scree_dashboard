import { configureStore } from '@reduxjs/toolkit';

import userSllice from './userSllice';
import porductsReducer from './productsSlice';

export default configureStore({
   reducer: {
      products: porductsReducer,
      user: userSllice,
   },
});
