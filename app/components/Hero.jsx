"use client";
// import { Container } from "@chakra-ui/react";
// import Video from "../../public/video/crypto_video_background.mp4";
import Fade from "react-reveal/Fade";
// import ReactPlayer from 'react-player';

const Hero = () => {
  return (
    <section className="mb-20 hero-bg lg:h-[75vh]">
      <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32 ">
          <div className="grid lg:grid-cols-2 gap-12 flex items-center lg:pt-20">

            <Fade left delay={300} duration={1500}>
              <div className="mt-12 lg:mt-0 max-md:mt-20">
                <h1 className="text-4xl md:text-3xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
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
           
          </div>
        </div>
      </div>
    </section>

  



  );
};

export default Hero;
