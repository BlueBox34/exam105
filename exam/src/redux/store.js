import { configureStore } from "@reduxjs/toolkit";
import photoStore from "./photoStore";

export const store = () => {
  const init = configureStore({
    reducer: {
      photo: photoStore,
    },
  });
  return init;
};
