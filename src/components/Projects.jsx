import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-title">
        <p>MY WORK</p>

        <h2>
          SELECTED
          <br />
          PROJECTS
        </h2>
      </div>

      <div className="projects-list">

        {/* COFFEE TIME */}
        <div className="project">
          <span className="project-number">01</span>

          <div>
            <h3>Coffee Time</h3>

            <p>
              A responsive coffee shop website where users can explore
              products, add items to the cart, and manage quantities and
              total prices.
            </p>

            <span className="project-tech">
              HTML · CSS · JavaScript
            </span>

            <a
              className="project-link"
              href="https://github.com/Maha-Azzouni/coffee-time"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>


        {/* WEATHER API */}
        <div className="project">
          <span className="project-number">02</span>

          <div>
            <h3>Weather API App</h3>

            <p>
              A responsive weather application that fetches real-time
              weather data from an API and displays weather information
              based on the selected location.
            </p>

            <span className="project-tech">
              HTML · Tailwind CSS · JavaScript · Axios · API
            </span>

            <a
              className="project-link"
              href="https://github.com/Maha-Azzouni/Weather-Api-App"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;