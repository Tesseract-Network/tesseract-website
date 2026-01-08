import styles from "@site/src/css/landing.module.css";

export default function Ecosystem() {
  const logos = [
    { src: "x402_logo.svg", name: "x402", url: "https://www.x402.org" },
    {
      src: "google_logo.svg",
      name: "Google",
      url: "https://www.google.com",
    },
    {
      src: "microsoft_logo.svg",
      name: "Microsoft",
      url: "https://www.microsoft.com",
    },
    { src: "coinbase.svg", name: "Coinbase", url: "https://coinbase.com" },
    { src: "openai_logo.svg", name: "OpenAI", url: "https://openai.com" },
    {
      src: "etherscan_logo.svg",
      name: "Etherscan",
      url: "https://etherscan.io",
    },
    { src: "zama_logo.svg", name: "Zama", url: "https://www.zama.org" },
    {
      src: "anthropic_logo.svg",
      name: "Anthropic",
      url: "https://www.anthropic.com",
    },
  ];

  return (
    <section className={styles.trustedSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Ecosystem</h2>
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
                WebkitMaskImage: `url(/pages/landing/ecosystem/${logo.src})`,
                maskImage: `url(/pages/landing/ecosystem/${logo.src})`,
              }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
