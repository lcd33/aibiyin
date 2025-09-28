import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    productList: []
  },
  reducers: {
  }
})

export const { } = homeSlice.actions
export default homeSlice.reducer