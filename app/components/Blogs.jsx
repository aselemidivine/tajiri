"use client";
import React from "react";
import { Container } from "@chakra-ui/react";

const Blogs = () => {
  return (
    <section id="blogs" className=" bg-green-50 p-3 mb-12">
      <Container maxW={"7xl"}>
        <div className="container  my-24 mx-auto md:px-6">
          {/* <style>
        .zoom:hover img {
          transform: scale(1.1);
        }
      </style> */}
          <h3 className="text-center text-3xl font-semibold mb-5">
            <span className=" text-[#3b3663]">Latest News</span>
          </h3>
          {/* <h2 className="mb-12 text-center text-3xl font-bold">Latest News</h2> */}

          <div className="grid gap-6 lg:grid-cols-3">
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/051.jpg"
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h5 className="mb-3 text-lg font-bold">
                        How to Increase Your ROI Through scientific SEM?
                      </h5>
                      <p className="p-tag">
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/044.jpg"
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h5 className="mb-3 text-lg font-bold">
                        Simple Ways To Optimize Your Website For SEO
                      </h5>
                      <p className="p-tag">
                        <small>
                          Published <u>12.01.2022</u> by Mark Equel
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/045.jpg"
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h5 className="mb-3 text-lg font-bold">
                        The Basics of Blogging Search Optimization
                      </h5>
                      <p className="p-tag">
                        <small>
                          Published <u>10.01.2022</u> by Bilbo baggins
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>
          </div>
        </div>
        {/* </Fade> */}
      </Container>
    </section>
  );
};

export default Blogs;
