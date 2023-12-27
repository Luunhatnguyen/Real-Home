import { faArrowRight, faFolder, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const blog = [
    {
        img: 'https://themesflat.co/html/dreamhomehtml/assets/images/img-box/blog-1.jpg',
        month: 'April',
        caption: 'Building gains into housing stocks and how to trade the sector'
    },
    {
        img: 'https://themesflat.co/html/dreamhomehtml/assets/images/img-box/blog-2.jpg',
        month: 'April',
        caption: '92% of millennial homebuyers say inflation has impacted their plans'
    },
    {
        img: 'https://themesflat.co/html/dreamhomehtml/assets/images/img-box/blog-3.jpg',
        month: 'April',
        caption: 'We are hiring ‘moderately,’ says Compass CEO'
    },
]

const BlogSection = () => {
  return (
    <div className='pt-[71px] bg-[#F7F7F7] pb-[71px] md:px-[15px] sm:px-[15px]'>
        <div className='grid grid-cols-1 mb-[14px] '>
            <div className='text-center'>
                <h2 className='text-[45px] font-bold'>Form our blog</h2>
                <p className='text-[#8E8E93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            </div>
            <div className='max-w-[1024px] m-auto mt-[36px]'>
                <div className='grid lg:grid-cols-3 gap-[20px] xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
                    {
                        blog.map((box, index) => (
                        <div key={index} className='box-blog bg-[#fff] p-[20px] shadow-xl  rounded-[10px] '>
                            <div className='overflow-hidden group rounded-[10px] w-full relative flex justify-center '>
                            <img className='object-cover rounded-[10px] group-hover:scale-125 w-full cursor-pointer transition-all duration-1000' src={box.img} alt='' />
                            <div className='font-semibold  absolute flex justify-between items-center w-[152px] h-[32px] bottom-[10px] left-[50%] translate-x-[-50%] bg-[#fff] rounded-[6px] px-[15px]'>
                                <div>{box.month}</div>
                                <a href='#/' className='text-primary'>
                                    <FontAwesomeIcon icon={faHouseUser} />
                                    <span className='ml-[5px] '>Housing</span>
                                </a>
                            </div>
                        </div>
                        <div className=' m-auto text-center flex flex-col justify-between'>
                            <h3 className='font-semibold text-[18px] mt-[16px] cursor-pointer transition-all mb-[16px] hover:text-primary leading-[27px]'>{box.caption}</h3>
                            <div className='w-full'>
                                <a href='#/' className='flex justify-center items-center group'>
                                    <span className='text-primary font-semibold'>Read more</span>
                                    <p className='text-primary ml-[10px] group-hover:animate-iconXEffect'><FontAwesomeIcon icon={faArrowRight} /></p>
                                </a>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSection