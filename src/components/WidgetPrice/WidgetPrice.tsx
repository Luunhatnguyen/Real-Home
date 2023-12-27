import React, { useState } from 'react'
import { styled, alpha, Box } from '@mui/system';
import { Slider as BaseSlider, sliderClasses } from '@mui/base/Slider';

type Props = {
    min: number,
    max: number,
    unitType?: string,
    widgetOject?: string,
}

const WidgetPrice = ({min, max, unitType, widgetOject}: Props) => {
    const [value, setValue] = React.useState<number[]>([min, max]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    console.log('value', value);
    const money1 = new Intl.NumberFormat().format(value[0])
    const money2 = new Intl.NumberFormat().format(value[1])
    
  return (
    <div className='widget-price w-[100%] text-[14px] mr-[10px]'>
        <div className='widget-caption w-[150px] flex justify-between select-none  '>
            <div className=''>
                <span className='font-semibold mr-[10px]'>{widgetOject}</span>
                <span className='select-none'>{unitType}</span>
                <span>{money1}</span>
            </div>
            <span>-</span>
            <span>{unitType}</span>
            <span>{money2}</span>
        </div>
        <div className='widget-slider-range w-full h-[40px] rounded-[2px]'>
            <Slider
            value={value}
            onChange={handleChange}
            getAriaLabel={() => 'Temperature range'}
            min={min}
            max={max}
            />
        </div>
        <div className='widget-slider-label'></div>
    </div>
  )
}

const primary = {
    0: '#FFA920',
    1: '#99CCF3'
}

const Slider = styled(BaseSlider)(
    ({ theme }) => `
    color: ${theme.palette.mode === 'light' ? primary[0] : primary[1]};
    height: 5px;
    width: 100%;
    padding: 16px 0;
    display: inline-block;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;

    &.${sliderClasses.disabled} { 
        cursor: default;
        color: ${theme.palette.mode === 'light' ? primary[0] : primary[0]};
        opacity: 0.5;
      }
  
    & .${sliderClasses.rail} {
      display: block;
      position: absolute;
      width: 100%;
      height: 5px;
      border-radius: 2px;
      background-color: #D6D7D9;
    }
  
    & .${sliderClasses.track} {
      display: block;
      position: absolute;
      height: 5px;
      border-radius: 2px;
      background-color: currentColor;
    }
  
    & .${sliderClasses.thumb} {
      position: absolute;
      width: 16px;
      height: 16px;
      margin-left: -6px;
      margin-top: -6px;
      box-sizing: border-box;
      outline: 0;
      border: 1px solid #ccc;
      border-radius: 2px;
      background-color: #f6f6f6;
  
      &:hover{
        
      }
      
      &.${sliderClasses.focusVisible} {
          border: 1px solid #FFA920;
          outline: none;
      }
  
      &.${sliderClasses.active} {
        border: 1px solid #FFA920;
        outline: none;
      }
    }
  
    & .${sliderClasses.mark} {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: currentColor;
      top: 50%;
      opacity: 0.7;
      transform: translateX(-50%);
    }
  
    & .${sliderClasses.markActive} {
      background-color: #fff;
    }
  `,
);

export default WidgetPrice