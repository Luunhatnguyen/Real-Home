import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './TestimonialBox.scss'

const TestimonialBox = () => {
  return (
    <div className='testimonial-box text-center  my-[10px] p-[30px]  '>
        <div className='shadow-shadowDefault3 bg-[#fff] p-[30px]'>
            <div className='text-primary text-[30px] icon-rotateY mb-[20px]'><FontAwesomeIcon icon={faMessage}/></div>
            <p>
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo. Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas consectetur semper vulputate ”
            </p>
        </div>
        <div className='py-[30px] px-[5px] flex flex-col items-center'>
          <div><img alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/author/author-testimonial.jpg'/></div>
          <h4 className='font-bold text-[16px] mt-[10px]'>Esther Howard</h4>
          <p className='text-[#8E8E93]'>Internet Security Assistant</p>
        </div>
    </div>
  )
}

export default TestimonialBox