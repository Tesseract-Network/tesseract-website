export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <a href="/">
            <img src="/logo.png" alt="Tesseract" className="nav-logo" />
          </a>
        </div>

        <nav className="nav-center">
          <a href="/">Home</a>
          <a href="/docs">Docs</a>
          {/* <a href="/about">About</a> */}
        </nav>

        <div className="nav-right">
          <a href="/docs/tesseract-facilitator/introduction" className="btn btn-primary">Get started</a>
        </div>
      </div>
    </header>
  )
}
