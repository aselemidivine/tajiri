// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Fade from "react-reveal/Fade";
// // import Logo from "../assets/logo.png"
// // import LogoW from "../assets/logo-white.png"

// const WhiteNav = () => {
//   const [mobileNav, setMobileNav] = useState(false);
//   const [fix, setFix] = useState(false);

//   function setFixed() {
//     //console.log(window.scrollY)
//     if (
//       document.body.scrollTop >= 200 ||
//       document.documentElement.scrollTop >= 200
//     ) {
//       setFix(true);
//     } else {
//       setFix(false);
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", setFixed);
//   }, []);

//   const handleMobileNav = () => {
//     setMobileNav(!mobileNav);
//   };
//   return (
//     <nav
//       className={
//         fix || mobileNav
//           ? "bg-white fixed z-20 w-full shadow lg:py-1 opacity-85 border-gray-200 transition-all duration-300"
//           : "bg-white w-full shadow  opacity-85 border-gray-200 transition-all duration-300"
//       }
//     >
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://flowbite.com/" className="lg:flex lg:items-center">
//            <Image src={Logo} className="lg:ml-8 lg:mr-3 w-[100px] lg:h-[50px] max-md:h-[40px] object-contain drop-shadow-md" alt="ads-direct-logo" />
//           {/* <span className={ fix || mobileNav ? "self-center text-2xl font-semibold whitespace-nowrap " : "self-center text-2xl font-semibold whitespace-nowrap text-white"}>
//             Ads Direct
//           </span> */}
//         </a>
//         <div className="flex md:order-2">
//           <button
//             type="button"
//             className={"text-white hero-bg hover:scale-110 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 shadow-lg" }
//           >
//             Get started
//           </button>
//           <button
//             data-collapse-toggle="Whitenav-cta"
//             type="button"
//             className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             onClick={handleMobileNav}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>
//         <Fade right>
//           <div
//             className={
//               !mobileNav
//                 ? "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//                 : "items-center justify-between w-full md:flex md:w-auto md:order-1"
//             }
//             id="Whitenav-cta"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
//               <li>
//                 <a
//                   href="#"
//                   className={
//                     "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                      
//                   }
//                 >
//                   Home
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className={
//                      "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                     
//                   }
//                 >
//                   Advertisers
//                 </a>
//               </li>
              
//               <li>
//                 <a
//                   href="#"
//                   className={
//                     "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                      
//                   }
//                 >
//                   Publishers
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className={
//                    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                   }
//                 >
//                   Explore Offers
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </Fade>
//       </div>
//     </nav>
//   );
// };

// export default WhiteNav;
