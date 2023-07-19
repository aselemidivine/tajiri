// "use client";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { SVGs } from "../assets/svgs/SVGs";
// import thePunch from "../assets/punch-logo.png";
// import theSun from "../assets/images/pngs/the_sun.png";
// import ariseNews from "../assets/images/pngs/arise-news.jpg";
// import foxChannel from "../assets/images/pngs/fox-channel-removebg.png";
// import vanguard from "../assets/images/pngs/Vanguard-removebg.png";
// import guardian from "../assets/images/pngs/the-guardian-removebg.png";
// import jumiaLogo from "../assets/images/pngs/Jumia-Logo.png";
// import businessDay from "../assets/images/pngs/BusinessdayLogo.png";
// import tvc from "../assets/images/pngs/tvc.png";
// import cnn from "../assets/images/pngs/CNN.png";
// import { Container } from "@chakra-ui/react";

// const News = () => {
//   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

//   return (
//     <div>

//         <section className="mb-32">

//       <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
//         <div className="w-full flex flex-col justify-center items-center">
//           <div className="flex flex-col justify-center items-center text-center space-y-4">
//             <h3 className="text-center text-3xl font-semibold mb-5">
//               <span className=" text-[#3b3663]">In The News</span>
//             </h3>
//           </div>

//     <Container maxW={"7xl"}>
//             <div className="embla" ref={emblaRef}>
//               <div className="embla__container">
//                 <div className="embla__slide flex items-center space-x-4">
//                   <Image src={foxChannel} className="" height="100" width="100" />
//                   <Image src={vanguard} className="" height="100" width="100" />
//                   <Image src={ariseNews} className="" height="100" width="100" />
//                   <Image src={businessDay} className="" height="100" width="100" />
//                   <Image src={jumiaLogo} className="" height="100" width="100" />
//                   <Image src={thePunch} className="" height="120" width="120" />
//                   <Image src={theSun} className="" height="120" width="120" />
//                 </div>
//                 <div className="embla__slide flex items-center space-x-4 embla-margin">
//                   <Image src={tvc} className="" height="100" width="100" />
//                   <Image src={cnn} className="" height="100" width="100" />
//                   <Image src={SVGs.budweiser} className="" height="100" width="100" />
//                   <Image src={guardian} className="" height="100" width="100" />
//                   <Image src={SVGs.forbes} className="" height="100" width="100" />
//                   <Image src={vanguard} className="" height="100" width="100" />

//                 </div>
//                 <div className="embla__slide flex items-center space-x-4">
//                     <Image src={theSun} className="" height="120" width="120" />
//                     <Image src={SVGs.mensHealth} className="" height="100" width="100" />
//                     <Image src={ariseNews} className="" height="100" width="100" />
//                     <Image src={SVGs.budweiser} className="" height="100" width="100" />
//                     <Image src={thePunch} className="" height="120" width="120" />
//                     <Image src={vanguard} className="" height="100" width="100" />
//                 </div>
//             </div>
//             </div>
//           </Container>
//       </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default News;

"use client";
import Image from "next/image";
import thePunch from "../assets/punch-logo.png";
import theSun from "../assets/images/pngs/the_sun.png";
import ariseNews from "../assets/images/pngs/arise.png";
import NigerianPilot from "../assets/images/pngs/Nig-pilot.png";
import vanguard from "../assets/images/pngs/Vanguard-removebg.png";
import guardian from "../assets/images/pngs/the-guardian-removebg.png";
import Thisday from "../assets/images/pngs/thisday.png";
import businessDay from "../assets/images/pngs/BusinessdayLogo.png";
import tvc from "../assets/images/pngs/tvc.png";
import cnn from "../assets/images/pngs/CNN.png";
import { Container } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const Partners = () => {
  return (
    <div className=" bg-blue-50 py-5">
      <Container maxW={"7xl"}>
        <section className="mb-32 ">
          <div className="container my-24 mx-auto">
            <div className="flex flex-col justify-center items-center text-center space-y-4">
              <h3 className="text-center text-3xl font-semibold ">
                <span className="text-[#3b3663] font-bold">In The News </span>
              </h3>
            </div>
            <Fade left delay={300} duration={1700}>
              <div className="flex justify-center mt-8 items-center">
                <div className="grid grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-2 gap-4 items-center">
                  <Image src={vanguard} className="" height="200" width="200" />
                  <Image src={theSun} className="" height="200" width="200" />
                  <Image
                    src={businessDay}
                    className=""
                    height="200"
                    width="200"
                  />
                  <Image src={tvc} className="" height="200" width="200" />
                  <Image src={cnn} className="" height="100" width="100" />
                  <Image src={guardian} className="" height="150" width="150" />
                  <Image src={Thisday} className="" height="180" width="180" />
                  <Image
                    src={NigerianPilot}
                    className=""
                    height="160"
                    width="160"
                  />
                  <Image src={thePunch} className="" height="150" width="150" />
                  <Image
                    src={ariseNews}
                    className=""
                    height="150"
                    width="150"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Partners;
