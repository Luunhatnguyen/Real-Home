import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Dropdown from '../Dropdown/Dropdown'
import './MenuItem.scss'

type MenuType = {
    title: string;
    url: string;
    subMenu?: MenuType[];
}

const MenuItem: React.FC<{items: MenuType, index?: number, depthLevel: number}> = ({items, index, depthLevel}) => {
    const [activeMenu, setActiveMenu] = useState('home')
    const [openSubmenu, setOpenSubmenu] = useState(false)

    const handleActiveMenu = () => {
        setActiveMenu(items.title)
    }

    const handleOpenSubmenu = () => {
        setOpenSubmenu(prev => !prev)
    }

  return (
    <li 
        className={`menu-list ${items.title === activeMenu ? 'menu_item--active' :''} ${ depthLevel===0 ? ' lg:py-[28px] lg:mr-[30px] xl:mr-[15px]' : 'py-[4px] w-full mt-[10px] .menu-dropdown-list' } text-[14px] leading-6 cursor-pointer relative `}

    >
            {
                items.subMenu ? (
                    <>
                        <p 
                            className={`group menu-title ${ depthLevel>0 ? 'menu-title-sub font-semibold ' : 'menu-title-header font-bold'} relative h-full w-full flex items-center justify-between sm:py-[4px] md:py-[5px]`}
                            onClick={() => {handleActiveMenu(); handleOpenSubmenu()}}
                        >
                            <div>
                                {depthLevel > 0 && <span className='invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-0 bottom-0 m-auto transition-all duration-300'>➘</span>}
                                <p className={`${depthLevel > 0 && 'group-hover:ml-[20px]'} transition-all duration-300`}>{items.title}</p>
                            </div>
                        </p>
                        <div className={`${openSubmenu ? 'lg:hidden' : 'md:hidden sm:hidden hidden'}`}><Dropdown subMenus={items.subMenu} depthLevel={depthLevel} /></div>
                    </>
                ): (
                    <a href={items.url} className={`group menu-title ${depthLevel > 0 ? 'font-semibold' : 'font-bold'}`}>
                        <div>
                            {depthLevel > 0 && <span className='invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-0 bottom-0 m-auto transition-all duration-300'>➘</span>}
                            <p className={`${depthLevel > 0 && 'group-hover:ml-[20px]'} transition-all duration-300`}>{items.title}</p>
                        </div>
                    </a>
                )
            }
    </li>
  )
}

export default MenuItem