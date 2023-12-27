import { faEnvelope, faHouse, faKey, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Button from '../../../components/Button/Button'

type Props = {
    openBar: boolean,
    closeBar: boolean,
    setState: (newState: boolean, pass: boolean) => void
}

const SideBar = ({openBar = false, closeBar, setState}: Props) => {

    const handleOpenLogin = () => {
        setState(true, false)
    }

  return (
        <div className={`menu-box fixed top-0 left-0 w-[300px] h-full z-100 bg-[#fff] overflow-x-hidden  translate-x-[-100%]  ${openBar ? 'translate-x-[0%] animate-sidebarOpenEffect' : `${!closeBar ? 'translate-x-[-100%]' : 'translate-x-[-100%] animate-sidebarCloseEffect'}`}`}>
            <div className='nav-logo bg-[#fff] drop-shadow-md py-[12px] px-[20px] w-full'>
                <a href='/'>
                    <img 
                        className='w-[168px] h-[40px]'
                        src="https://themesflat.co/html/dreamhomehtml/assets/images/logo/logo@2x.png"
                        alt="logo"
                    />
                </a>
            </div>
            <div className='side-bottom px-[20px] py-[30px]'>
                <div className='side-login'>
                    <div onClick={handleOpenLogin} className='side-account-auth mr-[21px] text-[14px] sm:mr-[10px] pb-[20px] border-b border-[#dbdbdb]'>
                        <span className='mr-1'><FontAwesomeIcon icon={faKey} /></span>
                        <button className='mr-1 font-semibold'>Login</button>
                    </div>
                </div>
                <div className='side-menu pb-[20px] my-[20px] border-b border-[#dbdbdb]'>
                    <Navbar />
                </div>
                <div className='mobile-btn w-full flex justify-center mb-[15px] pb-[20px] border-b border-[#dbdbdb]'>
                    <Button leftIcon={<FontAwesomeIcon icon={faHouse}/>} separate widthFull>Sell Property</Button>
                </div>
                <div className='mobile-icon-box'>
                    <h3 className='text-[18px] font-bold'>Contact</h3>
                    <div className='box flex items-center mt-[10px]'>
                        <div className='icon '>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='content ml-[15px] '>
                            <p>Call us:</p>
                            <h5 className='font-bold'>(201) 555-0124</h5>
                        </div>
                        
                    </div>
                    <div className='box flex items-center mt-[10px]'>
                        <div className='icon '>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className='content ml-[15px]'>
                            <p>Email:</p>
                            <h5 className='font-bold'>themesflat@gmail.com</h5>
                        </div>
                    </div>
                    <div className='box flex'></div>
                </div>
            </div>
        </div>
  )
}

export default SideBar