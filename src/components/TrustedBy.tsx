import styles from "@site/src/css/landing.module.css";

export default function TrustedBy() {
  const logos = [
    "google_logo.png",
    "microsoft_logo.png",
    "openai_logo.png",
    "anthropic_logo.png",
    "etherscan_logo.png",
    "zama_logo.png",
  ];

  return (
    <section className={styles.trustedSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Trusted By</h2>
        <p className={styles.sectionSubtitle}>
          Leading AI and blockchain companies rely on Tesseract for their
          payment infrastructure
        </p>
      </div>

      <div className={styles.trustedLogos}>
        {logos.map((src, i) => (
          <img
            key={i}
            src={`/media/${src}`}
            alt={`Company logo ${i + 1}`}
            className={styles.trustedLogo}
          />
        ))}
      </div>
    </section>
  );
}
