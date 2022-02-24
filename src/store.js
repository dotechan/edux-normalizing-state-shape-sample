import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./list/itemsSlice";

// configure APIを利用することでthunkとReduxe DevToolsを自動で追加できる
const store = configureStore({
  // configureStore APIを利用することでrootReducerを手動で定義する必要がない
  reducer: {
    items: itemsReducer,
  },
});

export default store;
