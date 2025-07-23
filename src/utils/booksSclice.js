import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./dummy_data";
const booksSlice = createSlice({
  name: "Book",
  initialState: {
    Books,
  },
  reducers: {
    addBook: (state, action) => {
      state.Books.push(action.payload);
    },
  },
});
export default booksSlice.reducer;
export const { addBook } = booksSlice.actions;
