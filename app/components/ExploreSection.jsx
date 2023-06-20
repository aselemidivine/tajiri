"use client";
import { Container } from "@chakra-ui/react";
import NoPoverty from "../assets/images/pngs/circle_orange.png";
import DecentWork from "../assets/images/pngs/circle_blue.png";
import Partnership from "../assets/images/pngs/circle_green.png";
import Industry from "../assets/images/pngs/circle_green.png";
import Fade from "react-reveal/Fade";
import ExploreCard from "./cards/ExploreCard";
import ExploreCardWithButton from "./cards/ExploreCardWithButton";



const ExploreSection = () => {
  return (
    <Container maxW={"7xl"}>
      <h3 className="text-center text-3xl font-semibold mb-5">
        <span className=" text-[#3b3663]">Project Goals</span>
      </h3>
      <div className="project-goals">
        <p className="p-tag">
          TAJIRI is built to accelerate the actualization of four of the SDGs
          2030 in Africa.
        </p>
      </div>
      <Fade left delay={300} duration={1700}>
        <div className="grid grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
          <ExploreCard
            icon={NoPoverty}
            text="No Poverty"
            className="cursor-pointer text-primary"
          />
          <ExploreCard icon={NoPoverty} text="Quality Education" />
          <ExploreCard icon={Partnership} text="Partnerships For The Goals" />
          <ExploreCard icon={DecentWork} text="Decent Work & Economic Growth" />
          <ExploreCard
            icon={Industry}
            text="Industry Innovation & Infrastructure"
          />
          <ExploreCardWithButton  text="Explore More" />
        </div>
      </Fade>
    </Container>
  );
};

export default ExploreSection;
