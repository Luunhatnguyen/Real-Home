
type props = {
    icon: React.ReactNode,
    background?: string,
}

const SocialIcon = ({icon, background}: props) => {
    return (
        <div className={`w-[38px] h-[38px] flex justify-center items-center rounded-[50%] bg-[${background}] border-[1px] border-[#c9c1c1] text-[#c9c1c1] cursor-pointer hover:bg-primary hover:text-[#fff]`}>
            {icon}
        </div>
    );
}

export default SocialIcon