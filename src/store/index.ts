import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import countReducer from "./slice/counterSlice";
import UserReducer from "./slice/user";

export const store = configureStore({
  reducer: {
    count: countReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
