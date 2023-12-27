import React from 'react'
import { AREA_DATA } from '../../../FakeData/AREA_DATA'
import './AreaList.scss'

const AreaList = () => {
  return (
    <div className='Area-List mt-[71px]'>
        <div className='Area-header text-center mb-[50px] sm:mx-[15px] sm:leading-[52px]'>
            <h1 className='text-[45px] font-bold'>Search real estate by area</h1>
            <p className='text-[#8E8E93]'>Find your dream apartment with our listing</p>
        </div>
        <div className='Area-wrap grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:flex sm:flex-wrap  gap-0'>
            {AREA_DATA.map((area, index) => (
                <div className='box-area relative group cursor-pointer sm:w-[50%]'>
                    <div className='square-blur'>
                        <img className='w-full sm:h-[299px] object-cover' src={area.img} alt='' />
                        <div className='absolute top-0 w-full h-full flex justify-center items-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 '><p className='text-[100px] text-[#fff] '>+</p></div>
                    </div>
                    <div className='absolute bottom-[28px] left-[20px] z-[2] text-[#fff]'>
                        <h3 className='text-[18px] font-bold hover:text-primary transition-all'><a href="#/">{area.area}</a></h3>
                        <p>{area.listing} Listing</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AreaList