"use client";

import React from "react";
import { Container } from "@chakra-ui/react";
import Image from "next/image";
import firstImage from "../assets/images/img_one.jpg";
import SecondImage from "../assets/images/img__two.jpg";
import ThirdImage from "../assets/images/img__three.jpg";

const EcoSystem = () => {
  return (
  

    <Container maxW={"7xl"}>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <h3 className="text-center text-3xl font-semibold mb-5">
            <span className="text-[#3b3663]">The Ecosystem</span>
          </h3>
          <div className="project-goals">
        <p className="md:text-base text-[#3b3663]">
        The Ecosystem is built on four major cornerstone – Tajiri is Built for Impact. Driven by Technology. Built by Africa for African.
        </p>
      </div>
          {/* <h2 className="mb-12 text-center text-3xl font-bold">Latest News</h2> */}
          {/* The Ecosystem is built on four major cornerstone – Tajiri is Built for Impact. Driven by Technology. Built by Africa for African. */}

          <div className="grid gap-6 lg:grid-cols-3">
            <div
              className="zoom relative overflow-hidden moving-div rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/25"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={firstImage}
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h5 className="mb-3 text-lg font-bold">AfriPayX</h5>
                      <p className=" p-tag mb-8">
                        Blockchain Ready Financial Backbone System
                      </p>
                      <a
                        className="inline-blockk px-7 py-3 mt-5 mr-2 bg-[#ff0000] text-white font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:scale-110  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        href="#"
                        role="button"
                      >
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              className="zoom relative overflow-hidden  rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={SecondImage}
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="https://www.youtube.com/watch?v=8E4sDFNqkUk">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h2 className="mb-3 text-lg font-bold">
                        Tajify - Tajiri Nation
                      </h2>
                      <p className=" p-tag mb-8">Creative Economy Portal – Optimized for Africa</p>
                      <a
                        className="inline-blockk px-7 py-3 mt-5 mr-2 bg-[#116524] text-white font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:scale-110  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        href="https://www.youtube.com/watch?v=8E4sDFNqkUk"
                        role="button"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              className="zoom relative overflow-hidden moving-div rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={ThirdImage}
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="https://www.youtube.com/watch?v=VyAhBO0KdCY">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h2 className="mb-3 text-lg font-bold">BossKard</h2>
                      <p className=" p-tag mb-8 font-light">Connecting Entrepreneurs and SMEs across Africa</p>
                      <a
                        className="inline-blockk px-7 py-3 mt-5 mr-2 bg-[#116524] text-white font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:scale-110  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        href="https://www.youtube.com/watch?v=VyAhBO0KdCY"
                        role="button"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* </Fade> */}
    </Container>
  );
};

export default EcoSystem;
