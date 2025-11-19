import "./index.css";
import Navbar from "@site/src/components/Navbar";
import LandingHero from "@site/src/components/LandingHero";
import WhySection from "@site/src/components/WhySection";
import HowItWorks from "@site/src/components/HowItWorks";
import SecuritySection from "@site/src/components/SecuritySection";
import TrustedBy from "@site/src/components/TrustedBy";
import OpenSourceCTA from "@site/src/components/OpenSourceCTA";
import Footer from "@site/src/components/Footer";

import React from 'react';
// import Navbar from '@theme/Navbar';
// import Layout from '@theme/Layout';

function App() {
  return (
    <>
      <Navbar />

      <LandingHero />

      <div className="site-container">
        <WhySection />
        <HowItWorks />
        <SecuritySection />
        <TrustedBy />
        <OpenSourceCTA />
      </div>

      <Footer />
    </>
  );
}

export default App;
