import { useEffect, useState } from "react";
import styles from "@site/src/css/landing.module.css";

// const WORDS = [
//   "instant",
//   "trustless",
//   "universal",
//   "verifiable",
//   "zero delay",
//   "decentralized",
//   "better",
// ];

// const WORDS = [
//   "agentic",
//   "instant",
//   "trustless",
//   "universal",
//   "verifiable",
//   "decentralized",
//   // "better",
//   "on z402",
//   "agentic-first",
//   "agentic",
// ];

const WORDS = [
  "agentic",
  "instant",
  "zero fee",
  "universal",
  "trustless",
  "decentralized",
  "better",
];

export default function LandingHero() {
  const [index, setIndex] = useState(0);
  const word = WORDS[index];

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <video
        className={styles.videoBg}
        poster="/pages/landing/hero/hero_background_video-poster.webp"
        src="/pages/landing/hero/hero_background_video-960p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className={styles.heroOverlay}>
        <p className={styles.heroTitle}>
          The{" "}
          <span key={word} className={`${styles.accent} ${styles.wordAnim}`}>
            {word}
          </span>{" "}
          <br />
          payment solution
        </p>
        <p className={styles.heroSub}>
          Unlock AI agents transactions in{" "}
          <span className={styles.fancyUnderline}>0 seconds</span> on Ethereum,
          Solana, L2s and more
        </p>
      </div>
    </section>
  );
}
