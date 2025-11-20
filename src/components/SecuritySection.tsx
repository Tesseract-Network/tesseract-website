import styles from "@site/src/css/landing.module.css";

export default function SecuritySection() {
  return (
    <section className={styles.securitySection}>
      <div className={styles.securityContent}>
        <div className={styles.securityBadge}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </div>
        <div className={styles.securityText}>
          <h3>Audited & Verified</h3>
          <p>
            Our protocol and contracts have been fully independently audited by{" "}
            <a
              href="https://www.trailofbits.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-2)",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Trail of Bits
            </a>
            , one of the most reputable security firms in blockchain.
          </p>
          <a href="#audit-report" className={styles.auditLink}>
            View Audit Report →
          </a>
        </div>
      </div>
    </section>
  );
}
