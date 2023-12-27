import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons'
import SelectionButton from '../SelectionButton/SelectionButton'
import {LOCATION_TYPE_DATA, PROPERTY_TYPE_DATA} from '../../FakeData/OPTION_DATA'

import SelectionForm from '../SelectionForm/SelectionForm'
import Button from '../Button/Button'

const FlatTab = () => {
    const [activeTab, setActiveTab] = useState('rent')
    const [activeSelectForm, setActiveSelectForm] = useState(false)
    const handleActiveSelectForm = () => {
        setActiveSelectForm(prev => !prev)
    }
  return (
    <div className='flat-tab'>
        <div className='box-tab'>
            <ul className='flex sm:justify-center'>
                <li className={`w-[115px] h-[40px] flex justify-center items-center rounded-tl-[20px] cursor-pointer transition-all hover:bg-primary  ${activeTab=== 'rent' ? 'bg-primary' : 'bg-[#ece3d0]'}`}
                    onClick={()=> setActiveTab('rent')}
                >Rent</li>
                <li className={`w-[115px] h-[40px] flex justify-center items-center rounded-tr-[20px] cursor-pointer transition-all hover:bg-primary ${activeTab=== 'buy' ? 'bg-primary' : 'bg-[#ece3d0]'}`}
                    onClick={()=> setActiveTab('buy')}
                >Buy</li>
            </ul>
        </div>
        <div className='content-tab '>
            <div className='content-tab-wrapper'>
                <div className='forms  w-[80%] sm:w-full sm:flex sm:justify-center  xl:pt-[20px] xl:px-[15px] xl:pb-[10px] sm:pt-[20px] sm:pr-[3px] sm:pb-[10px] sm:pl-[15px]   bg-[#fff] p-[22px] relative z-10 mb-[30px] shadow-shadowDefault2 rounded-[10px] table-cell'>
                    <form className='sm:w-full sm:pr-[12px]'>
                        <div className='option-group xl:flex-wrap md:flex-wrap sm:w-full flex sm:flex-col  justify-between '>
                            <div className='inner-group xl:w-[110%] md:w-[110%]  w-full xl:mr-0 flex sm:flex-col ml-[-12px] mr-[12px]'>
                                <div className='lg:w-[calc(33%-12px)] xl:w-[calc(33%-12px)] md:w-[calc(33%-12px)] sm:w-full sm:mb-[10px] ml-[12px] relative mr-[12px] xl:mb-[10px]'>
                                    <input placeholder="Type keyword..." className='bg-[#fff] text-[#120A21] w-full border-[1px] border-[#E5E5EA] leading-6 pt-[14px] pr-[49px] pb-[14px] pl-[17px] rounded-[10px] outline-none' />
                                </div>
                                <div className='lg:w-[calc(33%-12px)] xl:w-[calc(33%-12px)] md:w-[calc(33%-12px)] sm:w-full sm:mb-[10px] ml-[12px] relative mr-[12px] xl:mb-[10px]'>
                                    <SelectionButton dataOption={PROPERTY_TYPE_DATA} widthFull>Property type</SelectionButton>
                                </div>
                                <div className='lg:w-[calc(33%-12px)] xl:w-[calc(33%-12px)] md:w-[calc(33%-12px)] sm:w-full sm:mb-[10px] ml-[12px] relative mr-[12px] xl:mb-[10px]'>
                                    <SelectionButton dataOption={LOCATION_TYPE_DATA} widthFull>Location</SelectionButton>
                                </div>
                            </div>
                            <div className='flex xl:w-full md:w-full justify-between md:mt-[10px]'>
                                <div className='icon-filter bg-primary w-[64px] h-[54px] mr-[12px] flex justify-center items-center rounded-[10px] cursor-pointer text-[#fff]'
                                    onClick={handleActiveSelectForm}
                                >
                                    <FontAwesomeIcon icon={faSliders} />
                                </div>
                                <div className='xl:mr-[10px] md:mr-[24px]'><Button rightIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>} widthSize={150}>Search Now</Button></div>
                            </div>
                        </div>
                        <div className={`Selection-form-group absolute top-[110%]  w-full ${activeSelectForm ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top  transition-all`}>
                            <SelectionForm />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlatTab