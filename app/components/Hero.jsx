"use client";
import Fade from "react-reveal/Fade";
import taj2 from "../assets/taj-2.png";
import taj3 from "../assets/taj-3.png";
import taj4 from "../assets/taj-4.png";
import taj6 from "../assets/taj-5.png";
import tajToken from "../assets/taj-token.png";
import Image from "next/image";

// import ReactPlayer from 'react-player';

const Hero = () => {
  return (
    <section className="mb-20 hero-bg ">
      {/* <div className="px-6 py-12 md:px-12 text-gray-800 text-center bg-[hsla(0,0%,0%,0.75)] bg-fixed lg:text-left"> */}
      <div className="px-6 py-12 md:px-12 text-gray-800 bg-colorr text-center lg:text-left">
        <div className="container mx-auto xl:px-32 ">
          <div className="grid lg:grid-cols-2 gap-12 flex items-center lg:pt-20">
            <Fade left delay={300} duration={1500}>
              <div className="mt-12 lg:mt-0 max-md:mt-20">
                <h1 className="text-4xl md:text-3xl xl:text-5xl font-bold tracking-tight mb-6 text-[#D87E2A]">
                  Africa #1 Open Economy <br />
                  <span className=" inline-text-color">Ecosystem </span>
                </h1>
                <p className=" text-white mb-6 lg:text-lg my-3">
                  The backbone for a prosperous Africa Economy Ecosystem – to
                  facilitate cross border payment, trade and economy
                  integration: unlocking new Potential, Possibilities and
                  Prosperity for all.
                </p>
                <a
                  className="inline-block px-7 py-3 mt-4 mr-2 bg-[#008989] text-white font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:scale-110  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="https://test.digitaladplanet.com/dashboard/login"
                  role="button"
                >
                  Start Now
                </a>
              </div>
            </Fade>

            <Fade left delay={300} duration={1500}>
             
              <div className="relative mt-12 lg:mt-0 max-md:mt-20">
                {/* <Fade left delay={300} duration={1500}>
                  <Image
                    src={taj2}
                    className="absolute w-296px moving-div top-0 left-0"
                    alt="Sample image"
                  />
                </Fade> */}
                 <div className="hidden md:block"> 
                <Fade left delay={300} duration={1500}>
                  <Image
                    src={taj3}
                    className="absolute w-296px moving-div top-0 right-[61px] bottom-[-98px]"
                    alt="Sample image"
                  />
                </Fade>
                <div className="relative mt-12 lg:mt-0 max-md:mt-20 flex justify-center items-center">
                <Fade left delay={300} duration={1500}>

                  <Image
                    src={tajToken}
                    className="w-[435px] h-[376px] moving-div"        
                    alt="Sample image"
                    />
                </Fade>
                </div>
                <Fade left delay={300} duration={1500}>
                  <Image
                    src={taj6}
                    className="absolute w-296px moving-div bottom-[-98px] left-0"
                    alt="Sample image"
                  />
                </Fade>
                <Fade left delay={300} duration={1500}>
                  <Image
                    src={taj4}
                    className="absolute w-296px moving-div bottom-[-98px] right-[61px]"
                    alt="Sample image"
                  />
                </Fade>
              </div>
              </div>
            </Fade>
            {/* <Fade left delay={300} duration={1500}>
              <Fade left delay={300} duration={1500}>
              <div className="mt-12 lg:mt-0 max-md:mt-20">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <Image
              src={taj2}
              className="w-full moving-div"
              alt="Sample image"
              />
              </div>
              </div>
              </Fade>
            </Fade> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
