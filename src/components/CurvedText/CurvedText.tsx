import React, {useState, useEffect} from 'react'

const TEXT_CIRCLE_DATA= 'CODED BY NGUYEN VIET LONG'

const CurvedText = () => {
    const [text, setText] = useState([''])

    useEffect(() => {
        setText(TEXT_CIRCLE_DATA.split(''))

    }, [])

    console.log(text);
    

  return (
    <div className='circle bg-[#FFF5E0]  flex justify-center items-center w-[124px] h-[124px]  rounded-[50%] relative'>
        <span className='animate-rotateTextEffect font-bold'>LÙ</span>
        <div className='text w-full h-full absolute animate-rotateTextEffect'>
                {
                    text.map((char, i) => (
                        <span key={i} style={{transform: `rotate(${i * 14}deg)`}} className={`absolute origin-rotate-text left-[62px] font-extrabold top-[3px]`}>{char}</span>
                    ))
                }
        </div>
    </div>
  )
}

export default CurvedText