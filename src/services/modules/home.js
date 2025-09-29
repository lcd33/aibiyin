import hyRequest from '@/services'

export const getGoodPriceInfo = () => {
  return hyRequest.get({
    url: '/home/goodprice'
  })
}

export const getHighScoreData = () => {
  return hyRequest.get({
    url: '/home/highscore'
  })
}

export const getDiscountInfo = () => {
  return hyRequest.get({
    url: '/home/discount'
  })
}

export const getHotRecommendInfo = () => {
  return hyRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export const getLongForInfo = () => {
  return hyRequest.get({
    url: '/home/longfor'
  })
}

export const getHomePlusInfo = () => {
  return hyRequest.get({
    url: '/home/plus'
  })
}