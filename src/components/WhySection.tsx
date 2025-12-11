import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import styles from "@site/src/css/landing.module.css"; // module import

interface Feature {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: ReactElement;
}

const features: Feature[] = [
  {
    id: "zero-delay",
    name: "Zero Network Delay",
    title: "Zero Network Delay",
    description:
      "Create agentic systems with 0 seconds network delay due to payment processing. Instant transactions mean your AI agents never wait.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: "best-ux",
    name: "Best UX achieved",
    title: "Best UX achieved",
    description:
      "Offer the best possible UX to your users with instant and gasless transactions. They experience seamless, real-time interactions with your agents.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    id: "instant-quickstart",
    name: "Instant Quickstart",
    title: "Instant Quickstart",
    description:
      "Pay and get paid in no time with our quickstart: no credit card, registration or whatsoever required. Start building in minutes with our SDK, if you're already running an x402 client or server it takes even less and you stay compatible with your current configuration.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <line x1="12" y1="20" x2="12.01" y2="20"></line>
      </svg>
    ),
  },
  {
    id: "secure",
    name: "Secure",
    title: "Secure",
    description:
      "Get peace of mind knowing your payments are processed by a trustless, unstoppable, audited smart contract. You don't need to trust anyone.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    id: "universal",
    name: "Universal",
    title: "Universal",
    description:
      "Our protocol z402 is built to be blockchain agnostic, it can be ported to any blockchain that supports smart contracts",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: "open-source",
    name: "Open Source",
    title: "Open Source",
    description:
      "Enjoy open source code you can trust and run yourself. Our contracts and our facilitator are free and open source software for you to explore, create and share. Even our protocol z402 is an open standard that extends and improves x402.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
];

export default function WhySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    setProgress(0);
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % features.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, selectedIndex]);

  useEffect(() => {
    if (isPaused) return;

    const duration = 4500;
    const steps = 60;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + increment));
    }, stepDuration);

    return () => clearInterval(progressInterval);
  }, [isPaused, selectedIndex]);

  const handleFeatureHover = (index: number) => {
    setHoveredIndex(index);
    setSelectedIndex(index);
    setIsPaused(true);
    setProgress(0);
  };

  const handleFeatureLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
    setProgress(0);
  };

  const selectedFeature = features[selectedIndex];

  return (
    <section className={styles.whySection} id="why">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Why Tesseract?</h2>
        <p className={styles.sectionSubtitle}>
          The payment infrastructure AI agents deserve
        </p>
      </div>

      <div className={styles.featureOverviewCard}>
        <div className={styles.featureList}>
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={`${styles.featureItem} ${
                index === selectedIndex ? styles.active : ""
              }`}
              onMouseEnter={() => handleFeatureHover(index)}
              onMouseLeave={handleFeatureLeave}
            >
              <div className={styles.featureItemIcon}>{feature.icon}</div>
              <span className={styles.featureItemName}>{feature.name}</span>
              <div className={styles.featureItemProgress}>
                <div
                  className={styles.featureItemProgressBar}
                  style={{
                    width: index === selectedIndex ? `${progress}%` : "0%",
                  }}
                ></div>
              </div>
            </button>
          ))}
        </div>

        <div className={styles.featureDetail}>
          <div key={selectedFeature.id} className={styles.featureDetailContent}>
            <div className={styles.featureDetailIcon}>
              {selectedFeature.icon}
            </div>
            <h3 className={styles.featureDetailTitle}>
              {selectedFeature.title}
            </h3>
            <p className={styles.featureDetailDescription}>
              {selectedFeature.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
