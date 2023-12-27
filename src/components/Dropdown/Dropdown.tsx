import React from 'react'

import './Dropdown.scss'
import MenuItem from '../MenuItem/MenuItem'

type SubMenuType = {
    title: string;
    url: string;
    subMenu?: SubMenuType;
}[]


const Dropdown:React.FC<{subMenus: SubMenuType, depthLevel: number}> = ({subMenus, depthLevel}) => {
    depthLevel = depthLevel + 1;
    let marginTop = depthLevel === 1 ? 'top-full' : '';
    const dropdownClass = depthLevel > 1 ? "left-[210px] top-[0px] py-[4px] dropdown_menu_1" : "";

  return (
    <ul className={`menu-dropdown  h-[${subMenus.length * 34}px] ${dropdownClass} ${marginTop} z-[${depthLevel}] w-[256px] pl-[30px] pb-[10px] sm:overflow-hidden md:overflow-hidden lg:absolute  bg-[#fff] lg:shadow-md sm:bg-[#FFF5E0] md:bg-[#FFF5E0] sm:rounded-xl md:rounded-xl`}>
        {
            subMenus.map((submenu, index) => (
                <MenuItem depthLevel={depthLevel} index={index}  items={submenu} key={index} />
            ))
        }
    </ul>
  )
}

export default Dropdown