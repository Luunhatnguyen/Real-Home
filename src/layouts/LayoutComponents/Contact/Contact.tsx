import { faEnvelope, faHouse, faLocationDot, faMailForward, faMessage, faPaperPlane, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SelectionButton from '../../../components/SelectionButton/SelectionButton'
import Button from '../../../components/Button/Button'

const Property = [
    'Choose', 'House', 'Rent'
]

const Contact = () => {
  return (
    <div className="bg-[url('https://themesflat.co/html/dreamhomehtml/assets/images/section/bg-contact.png')]
                    pb-[100px] bg-[#fff] bg-cover
    ">
        <div className='px-[15px] max-w-[1024px] mt-[71px] m-auto'>
            <div className='grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div className='relative'>
                    <div className='heading-contact mb-[54px] max-w-[488px]'>
                        <h2 className='text-[40px] font-extrabold leading-[56px] sm:leading-[52px]'>We provide the most suitable and quality real estate.</h2>
                        <p className='text-[#8E8E93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                    </div>
                    <div className='info-contact'>
                        <div className='flex items-center mb-[35px]'>
                            <div className=' text-primary text-[40px] flex items-center relative
                                after:w-[1px] after:h-[55px] after:bg-[#D9D9D9] after:rotate-[21deg] after:left-[59px] after:absolute
                            '>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className='ml-[59px]'>
                                <h3 className='text-[#8E8E93] font-bold'>Office address</h3>
                                <span className='text-[16px]'>2715 Ash Dr. San Jose, South Dakota 83475</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-[35px]'>
                            <div className=' text-primary text-[40px] flex items-center relative
                                after:w-[1px] after:h-[55px] after:bg-[#D9D9D9] after:rotate-[21deg] after:left-[59px] after:absolute
                            '>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className='ml-[59px]'>
                                <h3 className='text-[#8E8E93] font-bold'>Request a call back</h3>
                                <span className='text-[26px] font-bold text-primary'>314-555-0123</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-[35px]'>
                            <div className=' text-primary text-[40px] flex items-center relative
                                after:w-[1px] after:h-[55px] after:bg-[#D9D9D9] after:rotate-[21deg] after:left-[59px] after:absolute
                            '>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className='ml-[59px]'>
                                <h3 className='text-[#8E8E93] font-bold'>Email us</h3>
                                <span className='text-[16px] text-primary'>hellosupport@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='mark-animate-contact absolute bottom-0 right-[-31px] z-0 animate-bounceSlow'>
                        <img className='' alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/mark/mark-contact.png'/>
                    </div>
                </div>
                <div className='relative'>
                    <div className='wrap-contact pt-[42px] pr-[29px] pb-[30px] pl-[30px] shadow-shadowDefault3 bg-[#fff] rounded-[10px]'>
                        <div className='title-contact mb-[14px] flex justify-between'>
                            <div className=''>
                                <h2 className='text-[30px] font-bold '>Contact us</h2>
                                <p className='text-[#8E8E93] \'>We will respond as soon as we receive your message.</p>
                            </div>
                            <div className='text-primary text-[36px]'>
                                <FontAwesomeIcon icon={faMessage} />
                            </div>
                        </div>
                        <div className='contact-contain mt-[20px]'>
                            <div className='respond-contact'>
                                <form>
                                    <div className='name-respond relative mb-[18px]'>
                                        <label className='mb-[11px] text-[16px] font-bold'>Your name</label>
                                        <input type='text' name='name' placeholder='Your name' className='relative mt-[11px] w-full outline-none border-[1px] border-[#E5E5EA] pt-[11px] pr-[14px] pb-[13px] pl-[46px] block text-[##120A21] font-medium rounded-[10px] bg-[#fff] focus:border-primary transition-all duration-300'  />
                                        <div className='text-primary absolute left-[18px] top-[49px]'><FontAwesomeIcon icon={faUser} /></div>
                                    </div>
                                    <div className='text-respond grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-[20px] mb-[18px]'>
                                        <div className='respond-text-email relative'>
                                            <label className='mb-[11px] text-[16px] font-bold'>Email</label>
                                            <input type='text' name='email' placeholder='Email' className='relative  mt-[11px] w-full outline-none border-[1px] border-[#E5E5EA] pt-[11px] pr-[14px] pb-[13px] pl-[46px] block text-[##120A21] font-medium rounded-[10px] bg-[#fff] focus:border-primary transition-all duration-300'  />
                                            <div className='text-primary absolute left-[18px] top-[49px]'><FontAwesomeIcon icon={faEnvelope} /></div>
                                        </div>
                                        <div className='respond-text-email relative'>
                                            <label className='mb-[11px] text-[16px] font-bold'>Email</label>
                                            <input type='text' name='phone' placeholder='Phone' className='relative  mt-[11px] w-full outline-none border-[1px] border-[#E5E5EA] pt-[11px] pr-[14px] pb-[13px] pl-[46px] block text-[##120A21] font-medium rounded-[10px] bg-[#fff] focus:border-primary transition-all duration-300'  />
                                            <div className='text-primary absolute left-[18px] top-[49px]'><FontAwesomeIcon icon={faPhone} /></div>
                                        </div>
                                    </div>
                                    <div className='mb-[18px] relative'>
                                        <label className=' text-[16px] font-bold'>Property type</label>
                                        <div className='mt-[11px]'><SelectionButton widthFull dataOption={Property}>Choose</SelectionButton></div>
                                    </div>
                                    <div className='message-respond'>
                                        <label className='mb-[11px] text-[16px] font-bold'>Message</label>
                                        <textarea name='message' placeholder='Message' className='relative  mt-[11px] w-full outline-none border-[1px] border-[#E5E5EA] pt-[13px] pr-[15px] pb-[52px] pl-[17px] block text-[##120A21] font-medium rounded-[10px] bg-[#fff] focus:border-primary transition-all duration-300'  />
                                    </div>
                                    <div className='mt-[18px] sm:flex sm:justify-center'>
                                        <Button leftIcon={<FontAwesomeIcon icon={faPaperPlane}/>} >Send request</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact