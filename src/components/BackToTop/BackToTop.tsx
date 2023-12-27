import React, {useState, useEffect} from 'react'

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 400) {
              setBackToTop(true);
            } else {
              setBackToTop(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div onClick={scrollUp} className={` ${backToTop ? "visible opacity-100 translate-x-0 transition-all duration-500" : 'invisible translate-x-[-5px] opacity-0'} hover:translate-y-[-5px]  transition-all fixed bottom-[30px] right-[25px] h-[47px] w-[47px] leading-[47px] rounded-[6px] text-center cursor-pointer bg-primary text-[#fff] z-[100] font-bold text-[26px]`}>
        <button>^</button>
    </div>
  )
}

export default BackToTop