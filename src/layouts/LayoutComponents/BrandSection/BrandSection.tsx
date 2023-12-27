import React, {useState} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './BrandSection.scss'

const BrandSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };
  return (
    <div className='mt-[80px] bg-[#fff] flex justify-center '>
       <div className='lg:w-[1000px] xl:w-full md:w-full sm:w-full'>
        <div className='mb-[30px] font-semibold'>
          <h2>Trusted by over 150+ major companies</h2>
        </div>
          <div className='cursor-grab'>
            <Slider {...settings}>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-1.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-2.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-3.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-4.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-5.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-6.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-7.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-8.png" /></div>
                <div><img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-9.png" /></div>
            </Slider>
          </div>
       </div>
    </div>
  )
}

export default BrandSection