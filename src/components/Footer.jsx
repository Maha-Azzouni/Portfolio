import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <h2>
          LET'S WORK
          <br />
          TOGETHER
        </h2>

        <a href="#contact" className="footer-button">
          GET IN TOUCH ↗
        </a>
      </div>

      <div className="footer-bottom">

        <p>© 2026 Maha Azzouni</p>

        <div className="footer-links">
          <a
            href="https://github.com/Maha-Azzouni"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="#home">Back to top ↑</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;