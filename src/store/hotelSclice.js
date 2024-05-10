import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelData: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    addHotel: (state, action) => {
      state.status = true;
      state.hotelData = action.payload.hotelData;
    },
  },
});

export const { addHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
