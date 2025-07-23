import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSclice";
const appStore = configureStore({
  reducer: {
    Book: booksSlice,
  },
});
export default appStore;
