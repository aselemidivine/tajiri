"use client"
import Image from 'next/image'
import Confused from '../assets/confused.png'
import Fade from 'react-reveal/Fade';
const CtaSection = () => {
  return (
    <section className="bg-white py-10">
  <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <Fade left duration={1500} delay={100}>
      <Image className="h-[450px] object-contain rounded-xl moving-div dark:block" src={Confused} alt="dashboard image" />
    </Fade>
    <Fade  right duration={1500} delay={300}>
      <div className="mt-4 md:mt-0">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold"><span className='text-secondary'>Confused? </span> We can help you plan the perfect campaign!</h2>
      <p className="mb-6 font-light text-gray-500 md:text-lg ">Hire our expert media planners to find, plan and place your next promotion.</p>
      <a href="#" className="inline-flex items-center text-white heroo-bg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-4 text-center hover:scale-110 transition-all duration-300">
        Consult media planners
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </a>
    </div>
    </Fade>
    
  </div>
</section>

  )
}

export default CtaSection