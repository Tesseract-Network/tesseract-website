export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-header">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Instant payments powered by z402, the x402 extension with 0 delay
        </p>
      </div>

      <div className="how-steps">
        <div className="how-step">
          <div className="step-number">01</div>
          <div className="step-content">
            <h3>Payment Pre-authorization</h3>
            <p>
              The buyer AI agent enables instant payments to a merchant up to an
              amount using our SDK, under the hood it's using our smart
              contract.
            </p>
          </div>
        </div>

        <div className="step-connector"></div>

        <div className="how-step">
          <div className="step-number">02</div>
          <div className="step-content">
            <h3>Initialize Payment</h3>
            <p>
              The buyer agent asks a merchant for a service and initiates a
              payment through our SDK, all in the same HTTP request.
            </p>
          </div>
        </div>

        <div className="step-connector"></div>

        <div className="how-step">
          <div className="step-number">03</div>
          <div className="step-content">
            <h3>Instant Verification</h3>
            <p>
              The merchant verifies the payment is valid completely off-chain,
              allowing for instant transactions. No extra HTTP requests, no
              waiting for the blockchain.
            </p>
          </div>
        </div>

        <div className="step-connector"></div>

        <div className="how-step">
          <div className="step-number">04</div>
          <div className="step-content">
            <h3>Parallel Settlement</h3>
            <p>
              The merchant agent can withdraw their users payments at a later
              moment or in parallel during execution, with no impact on UX. They
              can use our SDK that calls our smart contract.
            </p>
          </div>
        </div>

        <div className="step-connector"></div>

        <div className="how-step">
          <div className="step-number">05</div>
          <div className="step-content">
            <h3>Eat. Pay. Repeat</h3>
            <p>
              The user can repeat step 1 when they want and enjoy instant
              payments with no limits!
            </p>
          </div>
        </div>
      </div>

      <div className="how-cta">
        <p className="how-cta-text">
          Want to know more? Check out our Docs and Whitepaper.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#docs" className="btn btn-outline">
            Read the Docs
          </a>
          <a href="#whitepaper" className="btn btn-outline">
            Read the Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}

