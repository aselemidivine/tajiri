"use client";
import Fade from "react-reveal/Fade";
import YoutubeEmbed from "./YoutubeEmbed";

const About = () => {
  return (
    <section className="bg-white py-10">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Fade left duration={1500} delay={100}>
          <YoutubeEmbed embedId="MLWxgIuciGI" />
        </Fade>
        <Fade right duration={1500} delay={300}>
          <div className="mt-4 md:mt-0">
            <h3 className="text-center text-3xl font-semibold mb-5">
              <span className=" text-[#3b3663]">About Tajiri</span>
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-[#3b3663]">
                Tajiri means Prosperity, Wealth and Hope. Tajiri is Built for
                Impact. Driven by Technology. Built by Africa for African.
              </p>
              <p className="text-sm">
                Tajiri is Africa #1 Decentralized Economy Ecosystem (DEECo)
                built to facilitate the creation of an integrated African Open
                Economy. The objective is to unlock an integrated Africa economy
                that guarantee that African are able to do business with them
                and exchange value across border with ease.
              </p>
              <p className="text-sm">
                The ecosystem is built on 4 major cornerstones: a
                blockchain-powered{" "}
                <span className="font-bold">financial system backbone</span>{" "}
                that enables super fast and secure cross-border payment and
                exchange of value. As well as real economy driver including:{" "}
                <span className="font-bold">
                  an entrepreneurs connection platform
                </span>{" "}
                and a digitalized{" "}
                <span className="font-bold">
                  creative economy monetization platform
                </span>{" "}
                to leverage the emerging global digital economic and a grid of
                industrial city to stimulate industrial revolution across
                Africa.
              </p>
              <p className="text-sm">
                Tajiri brings the promise of hope and prosperity to Africans –
                aims to boost wealth generation and prosperity for all by
                connecting ordinary people to new opportunities by leveraging
                the DEECo platforms to empower youth, start-ups, entrepreneurs,
                and SMEs, thus accelerating the socio-economic development of
                the continent.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
