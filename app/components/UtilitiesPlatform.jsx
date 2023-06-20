"use client";
import { Container } from "@chakra-ui/react";
import NoPoverty from "../assets/images/pngs/circle_orange.png";
import DecentWork from "../assets/images/pngs/circle_blue.png";
import Partnership from "../assets/images/pngs/circle_green.png";
import Industry from "../assets/images/pngs/circle_green.png";
import Fade from "react-reveal/Fade";
import ExploreCard from "./cards/ExploreCard";
import ExploreCardWithButton from "./cards/ExploreCardWithButton";

const UtilitiesPlatform = () => {
  return (
    <Container maxW={"7xl"}>
        <section className="mb-32">

      <h3 className="text-center text-3xl font-semibold mb-5">
        <span className="text-primary">SOME UTILITIES PLATFORMS</span>
      </h3>
      <div className="project-goals">
      </div>
      <Fade left delay={300} duration={1700}>
        <div className="grid grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-2 gap-4">
          <ExploreCard
            icon={NoPoverty}
            text="Stake, Farm and Earn"
            className="cursor-pointer"
          />
          <ExploreCard icon={NoPoverty} text="Explore African Unique Creations - Coming soon" />
          <ExploreCard icon={Partnership} text="shop and earn upto 90% in cashback - Coming Soon" />
          <ExploreCard icon={DecentWork} text="Shop at discount with $TAJI" />
        </div>
      </Fade>
      </section>
    </Container>
  );
};

export default UtilitiesPlatform;
