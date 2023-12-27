import React from 'react'
import TestimonialBox from '../../../components/TestimonialBox/TestimonialBox'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "0px",
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };
  return (
    <div className='pb-[71px] sm:px-[15px]'>
        <div className='mt-[71px] mb-[14px]'>
            <div className='text-center'>
                <h2 className='text-[45px] font-bold sm:leading-[52px]'>From our happy customers</h2>
                <p className='text-[#8E8E93] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            </div>
        </div>
        <div className='max-w-[1024px] m-auto mt-[70px]'>
          <Slider {...settings}>
            <TestimonialBox />
            <TestimonialBox />
            <TestimonialBox />
            <TestimonialBox />
            <TestimonialBox />
            <TestimonialBox />
            <TestimonialBox />
          </Slider>
          <div className=' max-w-[700px] flex justify-center m-auto py-[8px] border-[1px] border-[#EFEFEF] rounded-[50px] sm:flex-col sm:items-center'>
            <p>Become our next customer, and find your dream home. </p>
            <a href="#/" className='text-primary font-bold ml-[5px]' >Contact us: 314-555-0123</a>
          </div>
        </div>
    </div>
  )
}

export default TestimonialSection