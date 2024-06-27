import { createSelector } from "@reduxjs/toolkit";

export const getFilterSelector = (state) => state.images.filter;
export const getImagesSelector = (state) => state.gallery.images;

// export const getFilterImages = createSelector(
//   [getImages, getFilter],
//   (images, filter) => {
//     return images.filter((image) =>
//       image.teg.some((teg) => teg.toLowerCase().includes(filter.toLowerCase()))
//     );
//   }
// );
