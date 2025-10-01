import { CHANGE_CURRENT_PAGE, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from './constant'
import { fetchRoomListData } from '@/services/modules/entire'
export const ChangePageAction = (page) => ({ type: CHANGE_CURRENT_PAGE, payload: page })
export const ChangeRoomListAction = (roomList) => ({ type: CHANGE_ROOM_LIST, payload: roomList })
export const ChangeTotalCountAction = (totalCount) => ({ type: CHANGE_TOTAL_COUNT, payload: totalCount })

export const fetchRoomListDataAction = () => {
  return (dispatch, getState) => {
    const currentPage = getState().entire.currentPage
    fetchRoomListData(currentPage * 20).then(res => {
      console.log(res)
      const roomList = res.list
      const totalCount = res.totalCount
      dispatch(ChangeRoomListAction(roomList))
      dispatch(ChangeTotalCountAction(totalCount))
    })
  }
}
