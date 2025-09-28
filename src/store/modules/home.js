import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGoodPriceInfo } from '@/services/modules/home'

const fetchGoodPriceInfo = createAsyncThunk('home/fetchGoodPriceInfo', async () => {
  const res = await getGoodPriceInfo()
  console.log(res)
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: []
  },
  reducers: {
    changeGoodPriceInfo(state, action) {
      state.goodPriceInfo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoodPriceInfo.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload
    })
  }
})

export const { changeGoodPriceInfo } = homeSlice.actions
export { fetchGoodPriceInfo }
export default homeSlice.reducer