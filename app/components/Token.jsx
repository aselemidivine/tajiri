"use client";
import Image from "next/image";
import token from "../assets/images/token.jpg";
import tajToken from "../assets/taj-token.png";

import Fade from "react-reveal/Fade";
const Token = () => {
  return (
    <section className=" ">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Fade left duration={1500} delay={100}>
          <div className="relative">
            <Image
              className="h-[450px] object-contain rounded-xl moving-div dark:block"
              src={token}
              alt="dashboard image"
            />
            <Image
              className="absolute top-9 moving-div left-0 h-[380px]  object-contain"
              src={tajToken}
              alt="second image"
            />
          </div>
        </Fade>
        <Fade right duration={1500} delay={300}>
          <div className="mt-4 md:mt-0">
            <h3 className="text-center text-3xl font-semibold mb-5">
              <span className=" text-[#3b3663] font-bold">
                THE TOKEN – TAJIRI TOKEN (TAJI)
              </span>
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-[#3b3663]">
                <strong>TAJIRI Token (TAJI)</strong> is a Utility Token designed
                to become the primary means for exchange of values, goods and
                services as well as token for transaction payment fee in the
                Tajiri Ecosystem.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-sm text-[#3b3663]">
                  <strong>TOKEN NAME: </strong> TAJIRI | SYMBOL: TAJI | DECIMAL
                  PLACE: 8
                </li>
                <li className="text-sm text-[#3b3663]">
                  <strong>TOKEN STANDARD: </strong>BEP20
                </li>
                <li className="text-sm text-[#3b3663]">
                  <strong>CONTRACT ADDRESS: </strong>{" "}
                  0XF1B6059DBC8B44CA90C5D2BE77E0CBEA3B1965FE
                </li>
                <li className="text-sm text-[#3b3663]">
                  <strong>REFLECTIVE PROTOCOL: </strong>1%
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Token;
