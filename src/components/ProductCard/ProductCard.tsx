import React from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faHeart, faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

type ProductProps = {
  img: string[],
  title: string,
  address: string,
  price: number,
  beds: number,
  baths: number,
  sqft: number,
  compare: string,
  author: {
      name: string,
      img: string,
  },
  days: number,
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className='flex bg-[#fff]  rounded-[16px] py-[16px]  items-center w-full shadow-shadowDefault3 relative'>
      <div className='w-full px-[16px]'>
        <div className='relative'>
          <ProductSlider img={product.img} />
          <div className='h-[22px] text-center bg-primary py-[1px] yr-[1px] pl-[8px] absolute z-100 top-[13px] left-[-8px]
                      before:absolute before:border-t-[7px] before:border-t-primary before:border-l-[7px] before:brightness-90 before:border-l-none before:top-[100%] before:left-[0px]           
                      after:absolute after:border-t-[0px] after:border-r-[0px] after:border-b-[22px] after:border-l-[16px] after:border-t-[red] after:border-r-primary after:border-b-none after:border-l-primary after:top-[0%] after:left-[100%]            
            '>
              <p className='leading-[20px] font-bold text-[#fff]'>Featured</p>
          </div>
          <div className='absolute right-0 top-0 z-10 border-t-[38px] border-t-[#FFF5E0] border-l-[38px] border-l-none rounded-tr-[10px]'>
            <div className='absolute top-0 right-0 text-primary mt-[-36px] mr-[5px]'>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
        <div className='text-left mt-[21px]'>
          <h3 className='text-[18px] mb-[6px] font-bold cursor-pointer transition-all hover:text-primary'>{product.title}</h3>
          <p className='text-[12px] mb-[21px]'>{product.address}</p>
          <p className='mb-[21px] text-[18px] font-bold text-primary cursor-pointer'>${product.price}</p>
          <div className='flex mb-[16px] pb-[16px] border-b-[1px] border-[#ccc]'>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faBed} />
              <p className='ml-[5px]'>Beds:</p>
              <p className='ml-[5px] font-bold'>{product.beds}</p>
            </div>
            <div className='flex items-center ml-[15px]'>
              <FontAwesomeIcon icon={faBath} />
              <p className='ml-[5px]'>Baths:</p>
              <p className='ml-[5px] font-bold'>{product.beds}</p>
            </div>
            <div className='flex items-center ml-[15px]'>
              <FontAwesomeIcon icon={faSquareMinus} />
              <p className='ml-[5px]'> Sqft:</p>
              <p className='ml-[5px] font-bold'>{product.beds}</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
              <a href='#/' className='flex'>
                <p className='text-primary'>+</p>
                <p className='font-bold ml-[3px]'>Compare</p>
              </a>
              <Tippy delay={[0, 100]} theme='light' content={`${product.author.name}`} placement="top">
                <div>
                  <img alt='' src={product.author.img} className='rounded-[50%]' />
                </div>
              </Tippy>
              <div>
                <p>{product.days} years ago</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
