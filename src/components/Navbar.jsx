import '../styles/Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Maha</h1>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;