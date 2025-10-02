import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    config: { isFixed: true, topAlfp: false },
  },
  reducers: {
    changeConfig(state, action) {
      state.config = action.payload
    },
  },
})

export const { changeConfig } = mainSlice.actions
export default mainSlice.reducer
