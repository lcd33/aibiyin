import { useState, useEffect } from 'react'
import { throttle } from 'underscore'
const useScrollPostion = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      console.log('remove scroll event')
    }
  }, [])
  return scrollY
}
export default useScrollPostion
