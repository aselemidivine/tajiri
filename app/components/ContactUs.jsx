// "use client";
// import { Container } from "@chakra-ui/react";
// import React from "react";
// import contactUs from "../assets/images/contact-us.jpg";
// import Image from "next/image";

// const ContactUs = () => {
//   return (
//     <Container maxW={"7xl"}>
//       {/* <div className="h-full"> */}
//       <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//         <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
//           <Image src={contactUs} className="w-full moving-div" alt="Sample image" />
//         </div>

//         {/* <!-- Right column container --> */}
//         <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
//           <h2 className="text-2xl text-[#3b3663] font-bold mb-4">Send us a message</h2>
//           {/* <h2 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">Send us a message</h2> */}
//           <p className=" mb-8">
//             We will get back to you as soon as possible
//           </p>
//           <form>
//             {/* <!--Name input--> */}
//             <div className="relative mb-6">
//               <input
//                 type="text"
//                 className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                 id="exampleInput7"
//                 placeholder="Name"
//               />
//               <label
//                 htmlFor="exampleInput7"
//                 className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//               >
//                 Name
//               </label>
//             </div>

//             {/* <!--Email input--> */}
//             <div className="relative mb-6">
//               <input
//                 type="email"
//                 className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                 id="exampleInput8"
//                 placeholder="Email address"
//               />
//               <label
//                 htmlFor="exampleInput8"
//                 className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//               >
//                 Email address
//               </label>
//             </div>

//             {/* <!--Message textarea--> */}
//             <div className="relative mb-6">
//               <textarea
//                 className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                 id="exampleFormControlTextarea13"
//                 rows="3"
//                 placeholder="Message"
//               ></textarea>
//               <label
//                 htmlFor="exampleFormControlTextarea13"
//                 className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//               >
//                 Message
//               </label>
//             </div>

//             {/* <!--Submit button--> */}
//             <button
//               type="submit"
//               className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] font-bold inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//               data-te-ripple-init
//               data-te-ripple-color="light"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//       {/* </div> */}
//     </Container>
//   );
// };

// export default ContactUs;


"use client";

import React from "react";
import contactUs from "../assets/images/contact-us.jpg";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Forms = () => {
  return (
    <section className=" ">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Fade right duration={1500} delay={300}>
        <div className="mt-4 md:mt-0">

           <Image src={contactUs} className="w-full moving-div" alt="Sample image" />
         </div>
        </Fade>
        <Fade left duration={1500} delay={100}>
        <div class="mb-12 form-style w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <h2 className="text-2xl text-[#3b3663] font-bold mb-4">Send us a message</h2>
           <p className=" mb-8">
             We will get back to you as soon as possible
             </p>
          <form>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-green-50"
                id="exampleInput90"
                placeholder="Name"
              />
              <label
                class="pointer-events-none font-lightt  text-gray-600 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                for="exampleInput90"
              >
                Name
              </label>
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-green-50"
                id="exampleInput90"
                placeholder="Phone Number"
              />
              <label
                class="pointer-events-none font-lightt  text-gray-600 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                for="exampleInput90"
              >
                Phone Number
              </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                class="peer block min-h-[auto] w-full rounded border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-green-50"
                id="exampleInput91"
                placeholder="Email address"
              />
              <label
                class="pointer-events-none font-lightt text-gray-600 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                for="exampleInput91"
              >
                Email address
              </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-green-50"
                id="exampleInput91"
                placeholder="Address"
              />
              <label
                class="pointer-events-none font-lightt text-gray-600 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                for="exampleInput91"
              >
                Location
              </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              {/* <textarea
                class="peer block min-h-[auto] w-full rounded border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
              ></textarea> */}
              <textarea
                class="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-green-50"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
              ></textarea>

              <label
                for="exampleFormControlTextarea1"
                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >
                Message
              </label>
            </div>
          
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Send
            </button>
          </form>
        </div>
        </Fade>
      </div>
    </section>
  );
};

export default Forms;
