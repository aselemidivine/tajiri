"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import meta from "../assets/images/pngs/meta.png";
import safe from "../assets/images/pngs/safe.png";
import trustWallet from "../assets/images/pngs/trust-wallet.png";

import { Container } from "@chakra-ui/react";

const Wallet = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div>

        <section className="mb-32">

      <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            {/* <h3 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-primary">
              In The News
            </h3> */}
            <h3 className="text-center text-3xl font-semibold mb-5">
              <span className=" text-[#3b3663]">Wallet & Exchange</span>
            </h3>
          </div>

    <Container maxW={"7xl"} className="chakraa">
            <div className="embla collaborators" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide  flex items-center space-x-4">
                  <Image src={trustWallet} className="collaborators-img" height="100" width="100" />
                  <Image src={meta} className="collaborators-img" height="100" width="100" />
                  <Image src={safe} className="collaborators-img" height="100" width="100" />                 
                  <Image src={meta} className="collaborators-img" height="120" width="120" />
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

export default Wallet;
