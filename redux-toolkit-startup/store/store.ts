import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";

import counterReducer from "../counter/counterSlice";

import type { Action, ThunkAction } from "@reduxjs/toolkit";

import { baseApi } from "./api";

const logger = createLogger({});

const isDev = process.env.NODE_ENV === "development";

const baseApiMiddleware = baseApi.middleware as unknown as ReturnType<
  typeof getDefaultMiddleware
>;

export function makeStore() {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => {
      let middleware = getDefaultMiddleware().concat(baseApiMiddleware);

      if (isDev) middleware = middleware.concat(logger);
      return middleware;
    },
    devTools: isDev,
  });
}

const store = makeStore();

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: isDev });
