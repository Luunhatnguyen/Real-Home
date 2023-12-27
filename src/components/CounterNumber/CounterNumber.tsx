import { useState, useEffect } from 'react'
import CountUp from 'react-countup'

type props = {
  min: number,
  max: number,
}

const CounterNumber = ({min, max}: props) => {
    const [counterState, setCounterState] = useState(false)

    useEffect(()=> {
      const handleScroll = () => {
        
        if(window.scrollY > 40) {
          setCounterState(true)
        } else {
          setCounterState(false)
        }
      }


      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },[])

  return (
    <div>
        {counterState && <CountUp start={min} end={max}  duration={2.75} />}
        
    </div>
  )
}

export default CounterNumber