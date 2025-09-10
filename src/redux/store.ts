import { configureStore } from '@reduxjs/toolkit';
import { selectedCardsReducer } from './slices/selectedCardsSlice';
import { visibleBlackoutReducer } from './slices/visibleBlackoutSlice';

const store = configureStore({
  reducer: {
    // сгенерированный редьюсер в root reducer
    selectedCardsSlice: selectedCardsReducer,
    visibleBlackoutSlice: visibleBlackoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
