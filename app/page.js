

import Image from "next/image";
// import About from './components/About'
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
// import Partners from "./components/News";
import EcoSystem from "./components/EcoSystem";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import Tokenomics from "./components/Tokenomics";
import UtilitiesPlatform from "./components/UtilitiesPlatform";
import AllianceAndCollaborators from "./components/Alliance&Collaborators";
import Wallet from "./components/Wallet";
import About from "./components/About";
import News from "./components/News";
import CtaSection from "./components/CtaSection";
import Token from "./components/Token";
// import ToTop from "./components/PageComponents/ToTop";


export default function Home() {


  return (
    <div className="">
      <NavBar />
      <Hero />
      <ExploreSection />
      <EcoSystem />
      <AllianceAndCollaborators />
      <Token />
      <Tokenomics />
      <UtilitiesPlatform />
      <Wallet />
      <About/>
      {/* <ToTop /> */}
      <Blogs />
      <CtaSection />
      <News />
      <ContactUs />
      <Footer />
      
    </div>
  );
}
