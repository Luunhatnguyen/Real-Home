import React from 'react'
import './Button.scss'

type Props = {
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  separate?: boolean;
  to?: string,
  href?: string,
  widthFull?: boolean,
  widthSize?: number
  children: string,
}

const Button= ({leftIcon, rightIcon, separate = false, widthFull=false, widthSize, to, href, children}: Props) => {

  return (
    <div className={`button group ${widthFull ? 'w-full' : `${widthSize ? `w-[${widthSize}px]` : 'w-[178px]'}`}  h-[52px] bg-[#FFA920] rounded-xl hover:brightness-90`}>
        <a href='#/' className={`flex ${leftIcon || rightIcon ? 'justify-evenly' : 'justify-center'} items-center h-full`}>

            {leftIcon && <span className='icon-btn group-hover:animate-iconEffect text-[#fff] '>{leftIcon}</span>}
            <div className={`h-full  items-center ${leftIcon && separate ? 'flex before:h-[60%] before:inline-block before:w-[1px] before:bg-[#fff] before:opacity-40' : 'hidden'}`}></div>
            <span className={`text-[#fff]  font-bold text-[15px] select-none relative  ${rightIcon && separate? 'before:right-[-10px] before:h-full before:absolute before:w-[1px] before:bg-[#fff] before:opacity-40' : ''}`}>
                {children}
            </span>
            {/* <div className={`h-full  items-center ${rightIcon && separate ? 'flex before:h-[60%] before:inline-block before:w-[1px] before:bg-[#fff] before:opacity-40' : 'hidden'}`}></div> */}
            {rightIcon && <span className='icon-btn text-[#fff]'>{rightIcon}</span>}
        </a>
    </div>
  )
}

export default Button