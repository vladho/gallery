import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const images = createSlice({
  name: "images",
  initialState: [],
  reducers: {
    addImage: (state, { payload }) => {
      return [...payload];
    },
  },
});

export const filter = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    searchImages: (_, action) => {
      return action.payload;
    },
  },
});

export const { addImage } = images.actions;
export const { searchImages } = filter.actions;

// export default images.reducer;

export default combineReducers({
  images: images.reducer,
  filter: filter.reducer,
});
