import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../Data/Data";

const photo = createSlice({
  name: "photo",
  initialState: [...Photo],
});

export default photo.reducer;
