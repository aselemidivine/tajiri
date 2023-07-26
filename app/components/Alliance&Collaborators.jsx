"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { SVGs } from "../assets/svgs/SVGs";
import Partners1 from "../assets/images/1.jpg";
import Partners2 from "../assets/images/2.jpg";
import Partners3 from "../assets/images/3.jpg";
import Partners4 from "../assets/images/4.jpg";
import Partners5 from "../assets/images/5.jpg";
import Partners6 from "../assets/images/6.jpg";
import Partners7 from "../assets/images/7.jpg";
import Partners8 from "../assets/images/8.jpg";
import Partners9 from "../assets/images/9.jpg";
import theSun from "../assets/images/pngs/the_sun.png";
import ariseNews from "../assets/images/pngs/arise-news.jpg";
import foxChannel from "../assets/images/pngs/fox-channel-removebg.png";
import vanguard from "../assets/images/pngs/Vanguard-removebg.png";
// import channels from "../assets/images/pngs/channels-TV.png";
import guardian from "../assets/images/pngs/the-guardian-removebg.png";
import jumiaLogo from "../assets/images/pngs/Jumia-Logo.png";
import businessDay from "../assets/images/pngs/BusinessdayLogo.png";
import tvc from "../assets/images/pngs/tvc.png";
import cnn from "../assets/images/pngs/CNN.png";
import { Container } from "@chakra-ui/react";

const AllianceAndCollaborators = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div>

        <section className="bg-green-50 mb-32">

      <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            {/* <h3 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-primary">
              In The News
            </h3> */}
            <h3 className="text-center text-3xl font-semibold mb-5">
              <span className=" text-[#3b3663]">Partners, Alliance & Collaborators</span>
            </h3>
          </div>

    <Container maxW={"7xl"} className="chakraa">
            <div className="embla collaborators" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide  flex items-center space-x-4">
                  <Image src={Partners1} className="collaborators-img" height="100" width="100" />
                  <Image src={Partners2} className="collaborators-img" height="100" width="100" />
                  <Image src={Partners3} className="collaborators-img" height="100" width="100" />                 
                  <Image src={Partners4} className="collaborators-img" height="120" width="120" />
                </div>
                <div className="embla__slide collaborators flex items-center space-x-4 embla-margin">
                  <Image src={Partners5} className="collaborators-img" height="100" width="100" />
                  <Image src={Partners6} className="collaborators-img" height="100" width="100" />
                  <Image src={Partners7} className="collaborators-img" height="100" width="100" />
                  <Image src={Partners8} className="collaborators-img" height="100" width="100" />


                </div>
                <div className="embla__slide collaborators flex items-center space-x-4">
                    <Image src={Partners1} className="collaborators-img" height="120" width="120" />
                    <Image src={Partners5} className="collaborators-img" height="100" width="100" />
                    <Image src={Partners3} className="collaborators-img" height="120" width="120" />
                    <Image src={Partners7} className="collaborators-img" height="100" width="100" />
                </div>
            </div>
            </div>
          </Container>
      </div>
        </div>
      </section>

    </div>
  );
};

export default AllianceAndCollaborators;
