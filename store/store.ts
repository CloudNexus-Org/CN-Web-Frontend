import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import jobReducer from "./slices/jobSlice";
import blogReducer from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    jobs: jobReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
