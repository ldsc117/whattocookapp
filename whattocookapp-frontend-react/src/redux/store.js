import { configureStore } from '@reduxjs/toolkit';
import IngredientReducer from './ingredientReducer'

export const store = configureStore({
  reducer: {
    ingredientReducer: IngredientReducer,
  },
});
