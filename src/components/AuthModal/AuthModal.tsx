import React, {useState} from 'react'
import Input from '../Input/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'

type props = {
  type: string,
  state: boolean,
  setState: (newState: boolean, pass: boolean) => void
}

const AuthModal = ({type =  'login', state, setState} : props) => {
  console.log(setState, state);

  const handleClose = () => {
    setState(false, false)
  }

  const handleCloseCurentThisAndOpenOther = () => {
    setState(false, true)
  }
  
  return (
    <div className='Modal-login'>
      <div className={`fixed z-[100] top-0 right-0 bottom-0 left-0 bg-[#000] opacity-40 ${!state && 'hidden'}`}
            onClick={handleClose}
      >
      </div>
      <div className={`Login fixed z-[100] top-0 right-0 bottom-0 left-0 xl:flex xl:justify-center xl:flex-col md:flex md:justify-center md:flex-col sm:flex sm:justify-center sm:flex-col  ${state ? 'translate-y-[0%] opacity-100' : 'translate-y-[-200%] opacity-0'} transition-all duration-500 lg:max-w-[920px] xl:max-w-full xl:px-[15px] md:px-[15px] sm:max-w-full sm:px-[15px] md:max-w-full m-auto `}>
        <div className={`rounded-[10px] shadow-shadowDefault3 bg-[#fff] relative  `}>
          <div className='absolute right-[42px] top-[36px] text-[24px] cursor-pointer' onClick={handleClose}><FontAwesomeIcon icon={faClose} /></div>
          <div className='modal-body flex justify-center xl:w-full '>
            <div className='w-[40%] xl:hidden sm:hidden md:hidden'>
              {type === 'login' && <img className='rounded-l-[10px] w-full' alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/section/bg-login.jpg' />}
              {type !== 'login' && <img className='rounded-l-[10px] w-full' alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/section/bg-register.jpg' />}
            </div>
            <div className='content-modal  pt-[20px] px-[40px] pb-[35px] lg:w-[60%] xl:w-full md:w-full sm:w-full '>
              <div className='content-modal-title text-[30px] mb-[20px] font-bold'>
                {type === 'login' ? 'Login' : 'Register'}
              </div>
              <div >
                <form>
                  <div className='mb-3'>
                    <label className='font-semibold'>User name</label>
                    <Input name='username' type='text' placeholder='User name' icon={<FontAwesomeIcon icon={faUser} />} />
                  </div>
                  {type !== 'login' && <div className='mb-3'>
                    <label className='font-semibold'>Email</label>
                    <Input name='email' type='text' placeholder='Email' icon={<FontAwesomeIcon icon={faEnvelope} />} />
                  </div>}
                  <div className='mb-3'>
                    <label className='font-semibold'>Password</label>
                    <Input name='password' type='password' placeholder='Your password' icon={<FontAwesomeIcon icon={faLock} />} />
                  </div>
                  {type !== 'login' && <div className='mb-4'>
                    <label className='font-semibold'>Confirm password</label>
                    <Input name='confirm-password' type='password' placeholder='Confirm password' icon={<FontAwesomeIcon icon={faLock} />} />
                  </div>}
                  <div>
                    {type==='login' && <Button widthFull>Login</Button>}
                    {type !== 'login' && <Button widthFull>Login</Button>}
                  </div>
                  <div className='flex justify-center mt-3'>
                    {type !== 'login' ? 'Already have a account.' : 'Don’t you have an account? '}
                    {type === 'login' && <p className='text-primary ml-1 cursor-pointer' onClick={handleCloseCurentThisAndOpenOther}>Register</p>}
                    {type !== 'login' && <p className='text-primary ml-1 cursor-pointer' onClick={handleCloseCurentThisAndOpenOther}>Login</p>}
                  </div>
                  <div className='flex justify-center pt-2 pb-1 text-[#999898]'>
                    {type !== 'login' ? 'or Register with' : 'or Sign in with'}
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='border-[1px] border-[#E5E5EA] cursor-pointer p-2 rounded-[10px] flex justify-center items-center'>
                      <button className='text-primary'><FontAwesomeIcon icon={faEnvelope} /></button>
                      <p className='ml-2 font-medium'>Email</p>
                    </div>
                    <div className='border-[1px] border-[#E5E5EA] cursor-pointer p-2 rounded-[10px] flex justify-center items-center'>
                      <button className='text-primary'><FontAwesomeIcon icon={faPhone} /></button>
                      <p className='ml-2 font-medium'>Phone</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthModal