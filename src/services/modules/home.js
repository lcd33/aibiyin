import hyRequest from '@/services'

export const getGoodPriceInfo = () => {
  return hyRequest.get({
    url: '/home/goodprice'
  })
}
