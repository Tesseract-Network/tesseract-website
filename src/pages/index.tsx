import styles from "@site/src/css/landing.module.css";
import LandingHero from "@site/src/components/LandingHero";
import IntroSection from "@site/src/components/Intro";
import WhySection from "@site/src/components/WhySection";
import HowItWorks from "@site/src/components/HowItWorks";
import SecuritySection from "@site/src/components/SecuritySection";
import TrustedBy from "@site/src/components/TrustedBy";
import OpenSourceCTA from "@site/src/components/OpenSourceCTA";

import React from "react";
import Layout from "@theme/Layout";
// import Layout from '@theme/Layout';

function App() {
  return (
    <Layout>
      {/* <Navbar /> */}

      <LandingHero />

      <div className={styles.siteContainer}>
        <IntroSection />
        <WhySection />
        <HowItWorks />
        <SecuritySection />
        <TrustedBy />
        <OpenSourceCTA />
      </div>

      {/* <Footer /> */}
    </Layout>
  );
}

export default App;
