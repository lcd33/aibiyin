
import { CHANGE_CURRENT_PAGE, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from './constant'


const initialState = {
  currentPage: 0, // 当前页码
  roomList: [], // 房间列表
  totalCount: 0 // 总房间数
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case CHANGE_ROOM_LIST:
      return {
        ...state,
        roomList: action.payload
      }
    case CHANGE_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      }
    default:
      return state
  }
}

export default reducer