import { useState } from 'react'
import {PRODUCT_DATA} from '../../../FakeData/PRODUCT_DATA'
import ProductCard from '../../../components/ProductCard/ProductCard'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

const  FEATURE_DATA = [
    {title: 'Houses', quantity: 8},
    {title: 'Smart home', quantity: 8},
    {title: 'Apartments', quantity: 7},
    {title: 'Office', quantity:4 },
    {title: 'Villa', quantity: 3},
    {title: 'Bungalow', quantity: 1}
]

const Feature = () => {

    const [activeTab, setActiveTab] = useState(FEATURE_DATA[0].title)
    
  return (
    <div className='mt-[60px]'>
        <div className="grid gird-cols-1">
            <div className="Feature-layout flex justify-center">
                <div className='heading-feature text-center'>
                    <h2 className='text-[45px] font-bold mb-[14px]'>Featured properties</h2>
                    <p className='text-[#8E8E93] mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                </div>
            </div>
            <div className='Feature-tab text-center'>
                <div className='box-tab '>
                    <ul className='flex justify-center flex-wrap'>
                        {FEATURE_DATA.map((tab, index) =>(
                            <Tippy delay={[0, 100]} theme='light' content={`${tab.quantity} Property`} placement="top">
                                <li className={`py-[8px] px-[14px] mb-[10px] shadow-shadowDefault3 cursor-pointer hover:font-medium hover:text-primary mr-[13px] before:w-[60px] before:h-[24px] before:absolute before:bg-[#fff] before:top-[0px]  before:shadow-shadowDefault ${activeTab === tab.title ? 'text-primary font-semibold': ''}`}
                                    onClick={() => setActiveTab(tab.title)}
                                >{tab.title}</li>
                            </Tippy>
                        ))}
                    </ul>
                </div>
                <div className='mt-[30px] grid lg:grid-cols-4 xl:grid-cols-3 gap-[30px] md:grid-cols-2 sm-grid-cols-1 mx-[25px]'>
                    {
                        PRODUCT_DATA.filter((product) => product.type === activeTab).map((item, index) =>(
                            <ProductCard product={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature