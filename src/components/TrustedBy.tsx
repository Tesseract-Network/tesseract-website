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
    <section className="trusted-section">
      <div className="section-header">
        <h2 className="section-title">Trusted By</h2>
        <p className="section-subtitle">
          Leading AI and blockchain companies rely on Tesseract for their
          payment infrastructure
        </p>
      </div>

      <div className="trusted-logos">
        {logos.map((src, i) => (
          <img
            key={i}
            src={`/media/${src}`}
            alt={`Company logo ${i + 1}`}
            className="trusted-logo"
          />
        ))}
      </div>
    </section>
  );
}
