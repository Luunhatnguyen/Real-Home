import React from 'react'

type props = {
    icon?: React.ReactNode
    name: string,
    placeholder?: string,
    type: string,
}

const Input = ({icon, name, placeholder, type}: props) => {
  return (
    <div className='relative text-[#000]'>
        {icon && <div className='text-primary absolute z-10 left-[18px] top-[50%] translate-y-[-50%]'>{icon}</div>}
        <input type={type} name={name} placeholder={placeholder} className={`relative  mt-[11px] w-full outline-none border-[1px] border-[#E5E5EA] pt-[11px] pr-[14px] pb-[13px] ${icon ? 'pl-[46px]' : 'pl-[17px]'} block text-[##120A21] font-medium rounded-[10px] bg-[#fff] focus:border-primary transition-all duration-300`}  />
    </div>
  )
}
export default Input