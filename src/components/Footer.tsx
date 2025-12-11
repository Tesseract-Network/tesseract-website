export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div>© {year} Tesseract — Payments for AI agents</div>
      <div className="site-links">
        <a
          href="https://github.com/Tesseract-Network"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
      </div>
    </footer>
  );
}
