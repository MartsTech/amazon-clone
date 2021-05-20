import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import basketReducer from "@slice/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
