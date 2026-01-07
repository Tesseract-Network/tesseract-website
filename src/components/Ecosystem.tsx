import styles from "@site/src/css/landing.module.css";

export default function Ecosystem() {
  const logos = [
    { src: "google_logo.png", name: "Google", url: "https://www.google.com" },
    {
      src: "microsoft_logo.png",
      name: "Microsoft",
      url: "https://www.microsoft.com",
    },
    { src: "openai_logo.png", name: "OpenAI", url: "https://openai.com" },
    {
      src: "anthropic_logo.png",
      name: "Anthropic",
      url: "https://www.anthropic.com",
    },
    {
      src: "etherscan_logo.png",
      name: "Etherscan",
      url: "https://etherscan.io",
    },
    { src: "zama_logo.png", name: "Zama", url: "https://www.zama.org" },
    { src: "x402_logo.svg", name: "x402", url: "https://www.x402.org" },
  ];

  return (
    <section className={styles.trustedSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Ecosystem</h2>
        <p className={styles.sectionSubtitle}>
          Building the latest tech alongside leading AI and blockchain companies
        </p>
      </div>

      <div className={styles.trustedLogos}>
        {logos.map((logo) => (
          <a
            key={logo.src}
            href={logo.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${logo.name} website`}
            className={styles.trustedLogoLink}
          >
            <span
              role="img"
              aria-label={`${logo.name} logo`}
              className={styles.trustedLogo}
              style={{
                WebkitMaskImage: `url(/pages/landing/trusted-by/${logo.src})`,
                maskImage: `url(/pages/landing/trusted-by/${logo.src})`,
              }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
