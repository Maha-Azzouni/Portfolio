import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-top-info">
        <span>3D ARTIST</span>
        <span>FULL-STACK DEVELOPER</span>
        <span>AVAILABLE FOR FREELANCE</span>
      </div>

      <h1 className="hero-title">
        PORTFOLIO
      </h1>

      <div className="hero-content">
        <div className="hero-info">
          <p className="hello">
            HELLO, I'M
          </p>
          <h2>
            MAHA
            <br />
            AZZOUNI
          </h2>
          <p className="role">
            3D ARTIST & FULL-STACK DEVELOPER
          </p>
          <p className="description">
            I create immersive 3D experiences and modern
            web applications, combining creativity,
            design and technology.
          </p>
          <button className="hero-button">
            VIEW MY WORK
          </button>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;