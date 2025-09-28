import React, { memo, useEffect } from 'react'
import HYRequest from '@/services'
const index = memo(() => {
  useEffect(() => {
    HYRequest.get({
      url: '/home/highscore'
    }).then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>homa page</div>
  )
})

export default index