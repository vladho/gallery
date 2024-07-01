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

export const currentPage = createSlice({
  name: "currentPage",
  initialState:  1,
  reducers: {
    setCurrentPage: (state, action) => {
      return state = action.payload;
    },
  },
});

export const { addImage } = images.actions;
export const { searchImages } = filter.actions;
export const { setCurrentPage } = currentPage.actions;


// export default images.reducer;

export default combineReducers({
  images: images.reducer,
  filter: filter.reducer,
  currentPage: currentPage.reducer
});
