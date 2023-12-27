import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/Button/Button";
import { faArrowRight, faChevronRight, faCircleChevronRight, faEnvelope, faHouse, faMoon, faPhone, faSun } from "@fortawesome/free-solid-svg-icons";
import './Footer.scss'
import SocialIcon from "../../../components/SocialIcon/SocialIcon";
import Input from "../../../components/Input/Input";
import { MENU_LIST } from "../../../FakeData/MENU_LIST";

function Footer() {
    return <div className="footer bg-[#1C1C1E] pt-[100px] sm:px-[15px] ">
        <div className="lg:max-w-[1024px] xl:max-w-[1024px] m-auto xl:px-[15px]">
            <div className='grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 md:px-[15px] gap-[30px]  mb-[50px]'>
                <div className='group-footer-icon'>
                    <div className='flex items-center bg-[#FFF5E0] rounded-[12px] pt-[30px] pr-[31px] pb-[45px] pl-[30px]'>
                        <img className="rotate-footer-icon mr-[30px] " alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/icon/footer-icon-1.png' />
                        <div>
                            <h3 className='font-bold mb-[13px] text-[30px]'>You need a house</h3>
                            <p>Tell us your needs, we will give you thousands of suggestions for the dream home.</p>
                        </div>
                    </div>
                    <div className='flex justify-center translate-y-[-50%]'><Button leftIcon={<FontAwesomeIcon icon={faPhone}/>} separate>Contact Seller</Button></div>
                </div>
                <div className='group-footer-icon'>
                    <div className='flex items-center bg-[#FFF5E0] rounded-[12px] pt-[30px] pr-[31px] pb-[45px] pl-[30px]'>
                        <img className="rotate-footer-icon mr-[30px] " alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/icon/footer-icon-2.png' />
                        <div>
                            <h3 className='font-bold mb-[13px] text-[30px]'>Sell your house</h3>
                            <p>We will connect you to thousands of people who need to buy a home.</p>
                        </div>
                    </div>
                    <div className='flex justify-center translate-y-[-50%]'><Button leftIcon={<FontAwesomeIcon icon={faHouse}/>} separate>Sell Property</Button></div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 md:px-[15px] text-[#fff] gap-[15px]'>
                <div className='bottom-info'>
                    <h3 className="text-[18px] font-bold mb-[24px]">Office Address</h3>
                    <p className="text-[#8E8E93] mb-[6px]">Head office:</p>
                    <h5 className='font-semibold mb-4'>2118 Thornridge Cir. Syracuse, Connecticut 35624</h5>
                    <p className="text-[#8E8E93] mb-[6px]">Branch:</p>
                    <p className='mb-[13px]'>3891 Ranchview Dr. Richardson, California 62639</p>
                    <p className='mb-4'>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                </div>
                <div>
                    <h3 className="text-[18px] font-bold mb-[24px]">Contact Seller</h3>
                    <div className="flex items-center justify-between mb-[27px]">
                        <div className="flex items-center">
                            <img className='mr-[10px] rounded-[50%] w-65px h-65px object-cover' src='https://themesflat.co/html/dreamhomehtml/assets/images/author/author-footer.jpg' alt='' />
                            <div>
                                <p className="text-[#8E8E93]">Darrell Steward</p>
                                <p className='font-semibold'>(405) 555-0128</p>
                            </div>
                        </div>
                        <SocialIcon icon={<FontAwesomeIcon icon={faArrowRight}/>} background={'#636161'} />
                    </div>
                    <div className='flex items-center'>
                        <div className='text-[26px] h-[65px] w-[65px] flex justify-center items-center'><FontAwesomeIcon icon={faPhone}/></div>
                        <div className=''>
                            <p className="text-[#8E8E93]">Hotline:</p>
                            <p className='font-semibold'>(201) 555-0124</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-[26px] h-[65px] w-[65px] flex justify-center items-center'><FontAwesomeIcon icon={faEnvelope}/></div>
                        <div className=''>
                            <p className="text-[#8E8E93]">Email:</p>
                            <p className=''>Realestatecp@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-[18px] font-bold mb-[24px]">Our Company</h3>
                    <ul>
                        <li className="flex group mb-[12px] ">
                            <div className='text-primary text-[10px] font-medium flex items-center group-hover:opacity-0 transition-all duration-200'><FontAwesomeIcon icon={faChevronRight} /></div>
                            <a href="#/" className='text-[#8E8E93] font-medium ml-[10px] group-hover:ml-0 group-hover:text-primary transition-all duration-200'>
                                Property For Sale
                            </a>
                        </li>
                        <li className="flex group mb-[12px] ">
                            <div className='text-primary text-[10px] font-medium flex items-center group-hover:opacity-0 transition-all duration-200'><FontAwesomeIcon icon={faChevronRight} /></div>
                            <a href="#/" className='text-[#8E8E93] font-medium ml-[10px] group-hover:ml-0 group-hover:text-primary transition-all duration-200'>
                                About Us
                            </a>
                        </li>
                        <li className="flex group mb-[12px] ">
                            <div className='text-primary text-[10px] font-medium flex items-center group-hover:opacity-0 transition-all duration-200'><FontAwesomeIcon icon={faChevronRight} /></div>
                            <a href="#/" className='text-[#8E8E93] font-medium ml-[10px] group-hover:ml-0 group-hover:text-primary transition-all duration-200'>
                                Our Agents
                            </a>
                        </li>
                        <li className="flex group mb-[12px] ">
                            <div className='text-primary text-[10px] font-medium flex items-center group-hover:opacity-0 transition-all duration-200'><FontAwesomeIcon icon={faChevronRight} /></div>
                            <a href="#/" className='text-[#8E8E93] font-medium ml-[10px] group-hover:ml-0 group-hover:text-primary transition-all duration-200'>
                                FAQ
                            </a>
                        </li>
                        <li className="flex group mb-[12px] ">
                            <div className='text-primary text-[10px] font-medium flex items-center group-hover:opacity-0 transition-all duration-200'><FontAwesomeIcon icon={faChevronRight} /></div>
                            <a href="#/" className='text-[#8E8E93] font-medium ml-[10px] group-hover:ml-0 group-hover:text-primary transition-all duration-200'>
                                Pricing
                            </a>
                        </li>
                        <li className="flex group mb-[12px] ">
                            <div className='text-primary text-[10px] font-medium flex items-center group-hover:opacity-0 transition-all duration-200'><FontAwesomeIcon icon={faChevronRight} /></div>
                            <a href="#/" className='text-[#8E8E93] font-medium ml-[10px] group-hover:ml-0 group-hover:text-primary transition-all duration-200'>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[18px] font-bold mb-[24px]">Newsletter</h3>
                    <p className=" mb-[15px]">Sign up to receive the latest articles</p>
                    <Input type={'text'} name={'email'} placeholder={'Your email address'} />
                    <div className='h-[54px] flex justify-center items-center border-[1px] border-[#575656] bg-[#5e5a5a] rounded-[10px] font-bold mb-[17px] mt-[10px] cursor-pointer hover:bg-primary transition-all'>
                        Sign Up
                        <div className="ml-[10px]"><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                    <label className="flex relative">
                        <input id='agree' type='checkbox' className="appearance-none checkbox-footer flex justify-center items-center checked:bg-primary checked:after:block after:content-['✔'] after:font-semibold after:text-[10px] after:text-[#fff] after:hidden  outline-none cursor-pointer h-[20px] w-[27px] bg-[#252525] border-[1px] border-[#3a3838] rounded-[5px] " />
                        <label htmlFor='agree' className='ml-[5px]'>I have read and agree to the terms & conditions</label>
                    </label>
                </div>
            </div>
        </div>
        <div className='py-[28px] xl:px-[15px] border-t-[1px] border-b-[1px] sm:mt-[10px] w-ful border-[#303030] text-[#fff]'>
            <div className='grid grid-cols-1'>
                <div className='max-w-[1024px] m-auto flex md:flex-col sm:flex-col justify-between w-full items-center '>
                    <div>
                        <img className="w-[197px] h-[48px] md:mb-[20px] sm:mb-[20px]" alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/logo/logo-footer@2x.png'/>
                    </div>
                    <div className="md:mb-[20px] sm:mb-[20px]">
                        <ul className='flex lg:ml-[144px] xl:ml-[144px] '>
                            {
                                MENU_LIST.map((menu, index) => (
                                    <li key={index} className="cursor-pointer font-bold hover:text-primary lg:mx-[20px] xl:mx-[20px] md:mx-[20px] sm:mx-[10px] ">{menu.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex '>
                        <div className='ml-[10px]'>
                            <SocialIcon background={'#000'} icon={<FontAwesomeIcon icon={faEnvelope}/>} />
                        </div>
                        <div className='ml-[10px]'>
                            <SocialIcon background={'#000'} icon={<FontAwesomeIcon icon={faHouse}/>} />
                        </div>
                        <div className='ml-[10px]'>
                            <SocialIcon background={'#000'} icon={<FontAwesomeIcon icon={faSun}/>} />
                        </div>
                        <div className='ml-[10px]'>
                            <SocialIcon background={'#000'} icon={<FontAwesomeIcon icon={faMoon}/>} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-[30px]">
            <div className='grid grid-cols-1'>
                <div className='flex justify-center items-center sm:flex-col'>
                    <p className='text-[#8E8E93]'>Copyright © 2023. Designed & Developed by</p>
                    <p className='text-[#fff] ml-[4px] cursor-pointer'>Themesflat.</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Footer;
