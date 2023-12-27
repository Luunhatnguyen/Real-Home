import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SliderButton = ({moveSlide, direction}: {moveSlide: ()=>void, direction: string}) => {


  return (
    <div className='text-[#fff] text-[16px] cursor-pointer'>
        {direction === 'prev' && 
            <div onClick={moveSlide}
        ><FontAwesomeIcon icon={faArrowLeft} /></div>}
        {direction === 'next' && <div onClick={moveSlide}><FontAwesomeIcon icon={faArrowRight} /></div>}
    </div>
  )
}

export default SliderButton