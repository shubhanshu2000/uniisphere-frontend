import { configureStore } from "@reduxjs/toolkit";
import formslice from "./formslice";

const store = configureStore({
  reducer: {
    form: formslice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;