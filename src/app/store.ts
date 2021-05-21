import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import basketReducer from "@slice/basketSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const basketPersistConfig = {
  key: "basket",
  storage,
};

const basketPersistedReducer = persistReducer(
  basketPersistConfig,
  basketReducer
);

export const store = configureStore({
  reducer: {
    basket: basketPersistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
