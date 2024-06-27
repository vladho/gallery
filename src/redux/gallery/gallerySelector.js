import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.images.filter;
export const getImages = (state) => state.images.images;

export const getFilterImages = createSelector(
  [getImages, getFilter],
  (images, filter) => {
    return images.filter((image) =>
      image.teg.some((teg) => teg.toLowerCase().includes(filter.toLowerCase()))
    );
  }
);
