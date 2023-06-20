

import Image from "next/image";
// import CtaSection from './components/CtaSection'
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
// import Newsletter from './components/Newsletter'
import Partners from "./components/Partners";
import EcoSystem from "./components/EcoSystem";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import Tokenomics from "./components/Tokenomics";
import UtilitiesPlatform from "./components/UtilitiesPlatform";
import AllianceAndCollaborators from "./components/Alliance&Collaborators";
import Wallet from "./components/Wallet";
// import ToTop from "./components/PageComponents/ToTop";


export default function Home() {


  return (
    <div className="">
      <NavBar />
      <Hero />
      <ExploreSection />
      <EcoSystem />
      <AllianceAndCollaborators />
      <Partners />
      <Tokenomics />
      <UtilitiesPlatform />
      <Wallet />
      {/* <ToTop /> */}
      <Blogs />
      {/* <CtaSection/> */}
      <ContactUs />
      <Footer />
      
    </div>
  );
}
