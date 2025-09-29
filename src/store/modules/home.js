import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGoodPriceInfo, getHighScoreData, getDiscountInfo, getHotRecommendInfo, getLongForInfo, getHomePlusInfo } from '@/services/modules/home'


// 第一种方案
const fetchGoodPriceInfo = createAsyncThunk('home/fetchGoodPriceInfo', async () => {
  const res = await getGoodPriceInfo()
  console.log(res)
  return res
})

const fetchHighScoreData = createAsyncThunk('home/fetchHighScoreData', async () => {
  const res = await getHighScoreData()
  console.log(res)
  return res
})

const fetchDiscountInfo = createAsyncThunk('home/fetchDiscountInfo', async () => {
  const res = await getDiscountInfo()
  console.log(res)
  return res
})

const fetchHotRecommendInfo = createAsyncThunk('home/fetchHotRecommendInfo', async () => {
  const res = await getHotRecommendInfo()
  console.log(res)
  return res
})

const fetchLongForInfo = createAsyncThunk('home/fetchLongForInfo', async () => {
  const res = await getLongForInfo()
  console.log(res)
  return res
})

const fetchHomePlusInfo = createAsyncThunk('home/fetchHomePlusInfo', async () => {
  const res = await getHomePlusInfo()
  console.log(res)
  return res
})

// 第二种方案 好处是不用写多个createAsyncThunk函数，将多个异步操作放在一个函数中
// 这里为什么不用await，因为await会阻塞代码执行，导致异步操作的结果不能及时返回
// const fetchGoodPriceInfo = createAsyncThunk('home/fetchGoodPriceInfo', async (payload, { dispatch }) => {
//   getGoodPriceInfo().then(res => {
//     dispatch(changeGoodPriceInfo(res))
//   })
//   getHighScoreData().then(res => {
//     dispatch(changeHighScoreInfo(res))
//   })
// })
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: [],
    highScoreInfo: [],
    discountInfo: [],
    hotRecommendInfo: [],
    longForInfo: [],
    homePlusInfo: []
  },
  reducers: {
    changeGoodPriceInfo(state, action) {
      state.goodPriceInfo = action.payload
    },
    changeHighScoreInfo(state, action) {
      state.highScoreInfo = action.payload
    },
    changeDiscountInfo(state, action) {
      state.discountInfo = action.payload
    },
    changeHotRecommendInfo(state, action) {
      state.hotRecommendInfo = action.payload
    },
    changeLongForInfo(state, action) {
      state.longForInfo = action.payload
    },
    changeHomePlusInfo(state, action) {
      state.homePlusInfo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoodPriceInfo.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload
    })
    builder.addCase(fetchHighScoreData.fulfilled, (state, action) => {
      state.highScoreInfo = action.payload
    })
    builder.addCase(fetchDiscountInfo.fulfilled, (state, action) => {
      state.discountInfo = action.payload
    })
    builder.addCase(fetchHotRecommendInfo.fulfilled, (state, action) => {
      state.hotRecommendInfo = action.payload
    })
    builder.addCase(fetchLongForInfo.fulfilled, (state, action) => {
      state.longForInfo = action.payload
    })
    builder.addCase(fetchHomePlusInfo.fulfilled, (state, action) => {
      state.homePlusInfo = action.payload
    })
  }
})

export const { changeGoodPriceInfo, changeHighScoreInfo, changeDiscountInfo, changeHotRecommendInfo, changeLongForInfo, changeHomePlusInfo } = homeSlice.actions
export { fetchGoodPriceInfo, fetchHighScoreData, fetchDiscountInfo, fetchHotRecommendInfo, fetchLongForInfo, fetchHomePlusInfo }
export default homeSlice.reducer