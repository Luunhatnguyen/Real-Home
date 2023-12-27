import React, {useState} from 'react'
import SliderButton from '../SliderButton/SliderButton'

const ProductSlider = ({img} : {img: string[]}) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () => {
    if(slideIndex !== img.length - 1){
      setSlideIndex(slideIndex + 1)
    }else if (slideIndex === img.length - 1) {
      setSlideIndex(0)
    }
  }

  const prevSlide = () => {
    if(slideIndex > 0){
      setSlideIndex(slideIndex - 1)
    }else if (slideIndex < 1) {
      setSlideIndex(img.length - 1)
    }
  }

  const handleOnClickDot = (index: number) => {
    setSlideIndex(index)
  }
  console.log(img)
  return (
    <div className='product-img-slider  h-[222px] relative flex justify-center group '>
        <div className='absolute cursor-pointer w-full h-full overflow-hidden rounded-[10px]'>
          {img.map((imgAddress, index) => (
            <div  key={index} className='absolute w-full h-full overflow-hidden '>
              <img className={`object-cover rounded-[10px] w-full h-full group-hover:brightness-50 group-hover:scale-[1.15] transition-all duration-300 ${slideIndex === index ? 'opacity-100 transition-all duration-500' : 'opacity-0 transition-all duration-500'}`} src={imgAddress} alt='' />
            </div>  
          ))}
          <div className='absolute w-full h-full flex justify-center items-center translate-y-[-40px] opacity-0 group-hover:translate-y-[-20px] group-hover:opacity-100 transition-all duration-300 left-0 m-auto leading-[222px] text-[#fff] text-[120px] font-[200]'>
            +
          </div>
        </div>
      <div className='absolute flex bottom-[5%] items-center  '>
        <SliderButton moveSlide={prevSlide} direction={'prev'} />
        <div className='flex mx-[10px] group-hover:mx-[15px] transition-all duration-300'>
          {
            Array.from({length: img.length}).map((item, index)=>(
              <div className={`dot w-[8px] h-[8px] mx-[2px]  cursor-pointer border-[#fff] border-[1px] rounded-[50%]  ${slideIndex === index ? 'bg-[#333]' : 'bg-[#fff]'} `}
                    onClick={() => handleOnClickDot(index)}
              ></div>
            ))
          }
        </div>
        <SliderButton moveSlide={nextSlide} direction={'next'}/>
      </div>
      <div>
      </div>
    </div>
  )
}

export default ProductSlider


