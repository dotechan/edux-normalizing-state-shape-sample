import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  entities: [],
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetch("/items");
  if (response.ok) {
    const jsonValue = await response.json();
    return Promise.resolve(jsonValue);
  } else {
    return Promise.reject("error");
  }
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      const item = action.payload;
      state.entities.push(item);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        // 悪い例なのであえてAPIのレスポンスの配列をそのまま格納している
        state.entities = action.payload.items;
        state.status = "idle";
      });
  },
});

export const { itemsLoading, itemAdded } = itemsSlice.actions;

export default itemsSlice.reducer;
