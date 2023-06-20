"use client";
import React from 'react'
import { Container } from "@chakra-ui/react";
import seo from "../assets/images/pngs/seo.png";
import competitor from "../assets/images/pngs/circle_blue.png";
import socialMedia from "../assets/images/pngs/social-media.png";
import Fade from "react-reveal/Fade";
import ExploreCard from "./cards/ExploreCard";



const Tokenomics = () => {
  return (
    <Container maxW={"7xl"}>
        <section className="mb-32">

        <h3 className="text-center text-3xl font-semibold mb-5">
        <span className="text-primary">TOKENOMICS</span>
      </h3>
    <div>

    <Fade left delay={300} duration={1700}>
        <div className="grid grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
          <ExploreCard
            icon={competitor}
            text="Staking & Yield Farming"
            className="cursor-pointer"
          />
          <ExploreCard icon={seo} text="Bill Payment & Invoice Settlement" />
          <ExploreCard icon={socialMedia} text="Up to 20% on Transaction FEE" />
          <ExploreCard
            icon={socialMedia}
            text="Value Exchange & Preservation"
          />
          <ExploreCard
            icon={socialMedia}
            text="Governance & Influence"
          />
          <ExploreCard
            icon={competitor}
            text="Global Earning Sharing"
          />
        </div>
      </Fade>
    </div>
    </section>
    </Container>
  )
}

export default Tokenomics
