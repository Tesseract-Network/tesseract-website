import styles from "@site/src/css/landing.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.howSection} id="how-it-works">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <p className={styles.sectionSubtitle}>
          Instant payments powered by z402, the x402 extension with 0 delay
        </p>
      </div>

      <div className={styles.howSteps}>
        <div className={styles.howStep}>
          <div className={styles.stepNumber}>01</div>
          <div className={styles.stepContent}>
            <h3>Approval for future payments</h3>
            <p>
              The buyer AI agent enables instant payments to a merchant using
              our SDK, under the hood it's using our smart contract.
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>02</div>
          <div className={styles.stepContent}>
            <h3>Initialize Payment</h3>
            <p>
              The buyer agent asks a merchant for a service and initiates a
              payment through our SDK, all in the same HTTP request.
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>03</div>
          <div className={styles.stepContent}>
            <h3>Instant Verification</h3>
            <p>
              The merchant verifies the payment is valid completely off-chain,
              allowing for instant transactions. No extra HTTP requests, no
              waiting for the blockchain.
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>04</div>
          <div className={styles.stepContent}>
            <h3>Parallel Settlement</h3>
            <p>
              The merchant agent can withdraw their users payments at a later
              moment or in parallel during execution, with no impact on UX. They
              can use our SDK that calls our smart contract.
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>05</div>
          <div className={styles.stepContent}>
            <h3>Eat. Pay. Repeat</h3>
            <p>
              The user can repeat step 1 when they want and enjoy instant
              payments with no limits!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.howCta}>
        <p className={styles.howCtaText}>Want to know more?</p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/docs" className={`${styles.btn} ${styles.btnOutline}`}>
            Read the Docs
          </a>
        </div>
      </div>
    </section>
  );
}
