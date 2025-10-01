import hyRequest from '@/services'

export const fetchRoomListData = (offset = 0, size = 20) => {
  return hyRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}
