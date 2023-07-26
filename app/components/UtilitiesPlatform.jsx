"use client";
import { Container } from "@chakra-ui/react";
import iProspa from "../assets/images/iprospa.jpg";
import netAfrica from "../assets/images/net-africa.jpg";
import shopWithTajify from "../assets/images/shop-with-tajify.jpg";
import Partnership from "../assets/images/pngs/circle_blue.png";
import Industry from "../assets/images/pngs/circle_green.png";
import Fade from "react-reveal/Fade";
import ExploreCard from "./cards/ExploreCard";
import ExploreCardWithButton from "./cards/ExploreCardWithButton";

const UtilitiesPlatform = () => {
  return (
    <Container maxW={"7xl"}>
        <section className="mb-32">

      <h3 className="text-center text-3xl font-semibold mb-5">
        <span className=" text-[#3b3663]">Some Utilities Platforms</span>
      </h3>
      <div className="project-goals">
      </div>
      <Fade left delay={300} duration={1700}>
        <div className="grid token-img  grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
          <ExploreCard
            icon={iProspa}
            text="Stake, Farm and Earn"
            className="cursor-pointer"
          />
          <ExploreCard icon={netAfrica} text="Explore African Unique Creations - Coming soon" />
          <ExploreCard icon={shopWithTajify} text="Shop at discount with $TAJI" />
        </div>
      </Fade>
      </section>
    </Container>
  );
};

export default UtilitiesPlatform;
