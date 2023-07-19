"use client"
import Image from 'next/image'
import Confused from '../assets/taj-token.png'

import Fade from 'react-reveal/Fade';
const CtaSection = () => {
  return (
    <section className=" ">
  <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <Fade left duration={1500} delay={100}>
      <Image className="h-[450px] object-contain rounded-xl moving-div dark:block" src={Confused} alt="dashboard image" />
    </Fade>
    <Fade  right duration={1500} delay={300}>
      <div className="mt-4 md:mt-0">
      <h2 className="mb-4 text-4xl tracking-tight text-[#3b3663] font-bold"> Want To Know More?</h2>
      <p className="mb-6 font-lightt text-black-500 md:text-lg text-gray-800">Send us an email at admin@gotajiri.com</p>
      {/* <a href="#" className="inline-flex items-center  text-gray-800 bg-transparent border-2 border-gray-800 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-4 text-center hover:scale-110 transition-all duration-300">
        Send Message
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </a> */}
      <a
                  className="inline-block px-7 py-3 mt-4 mr-2 bg-[#008989] text-white font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:scale-110  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="https://test.digitaladplanet.com/dashboard/login"
                  role="button"
                >
                  Send Message
                </a>
    </div>
    </Fade>
    
  </div>
</section>

  )
}

export default CtaSection