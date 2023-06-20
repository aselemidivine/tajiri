import Image from "next/image"


const ExploreCard = ({ text, icon}) => {
  return (
    <div className="flex justify-center py-6  shadow-lg border-[1px] rounded-lg hover:scale-110  transition-all duration-300  hover:text-grey ex-card">
        <div className="text-center">
            <div className="flex justify-center mb-2 ">
             <Image src={icon} alt="Icon" className="w-10 h-10" />
            </div>
            
            <p className="flex justify-center mb-2 ">{text}</p>
        </div>
    </div>
  )
}

export default ExploreCard