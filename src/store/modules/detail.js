import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    roomDetail: {}
  },
  reducers: {
    changeRoomDetail(state, action) {
      state.roomDetail = action.payload
    }
  }
})

export const { changeRoomDetail } = detailSlice.actions
export default detailSlice.reducer
