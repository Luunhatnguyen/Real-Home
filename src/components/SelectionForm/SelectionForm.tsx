import React from 'react'
import SelectionButton from '../SelectionButton/SelectionButton'
import WidgetPrice from '../WidgetPrice/WidgetPrice'
import { ANY_DATA, BATHS_DATA } from '../../FakeData/OPTION_DATA'
import { CHECKBOX_DATA } from '../../FakeData/CHECKBOX_DATA'

const SelectionForm = () => {
  return (
    <div className='w-full bg-[#fff] shadow-shadowDefault2 rounded-[10px] px-[22px] pt-[24px] pb-[25px] ml-[-22px] sm:ml-[-14px]'>
        <div className='box-1 flex pb-9 flex-wrap'>
            <div className='mr-[10px] w-[calc(100%-30px)] flex-1'><SelectionButton widthFull dataOption={BATHS_DATA}>Baths: Any</SelectionButton></div>
            <div className='mr-[10px] w-[calc(100%-30px)] flex-1'><SelectionButton widthFull dataOption={ANY_DATA}>Beds: Any</SelectionButton></div>
            <div className='flex sm:justify-between sm:w-full sm:mt-2'>
              <div className='mr-[20px] w-[calc(50%-30px)] flex-1'><WidgetPrice min={100} max={1000000} unitType={'$'} widgetOject={'Form'}  /></div>
              <div className='mr-[10px] w-[calc(50%-30px)] flex-1'><WidgetPrice min={0} max={50000} widgetOject={'Size'} /></div>
            </div>
        </div>
        <div className='box-2 flex w-full pt-9 border-t-[1px] border-[#ccc]'>
          <div className='grid w-full grid-rows-3 grid-cols-4 sm:grid-cols-2 gap-4'>
            {
              CHECKBOX_DATA.map((data, index) =>(
                <div className='flex items-center'>
                  <input type='checkbox' id={`filter-checkbox-${index}`} className="w-4 h-4 accent-primary" />
                  <label htmlFor={`filter-checkbox-${index}`} className='ml-[10px] select-none'>{data}</label>
                </div>  
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default SelectionForm