import { createSelector } from "@reduxjs/toolkit";

export const getFilterSelector = (state) => state.gallery.filter;
export const getImagesSelector = (state) => state.gallery.images;
export const getCurrentPageSelector = (state) => state.gallery.currentPage;

export const getFilterImages = createSelector(
  [getImagesSelector, getFilterSelector],
  (images, filter) => {
    return images.filter((image) =>
      image.teg.some((teg) => teg.toLowerCase().includes(filter.toLowerCase()))
    );
  }
);
