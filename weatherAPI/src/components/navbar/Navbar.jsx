import iconoPagina from "../../assets/weather-app.png";
import iconoLinkedin from "../../assets/linkedin.png";
import iconoGithub from "../../assets/github.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <span className="left-side">
        <img src={iconoPagina} alt="icono" className="navbar-image" />
        <p>Weather Channel</p>
      </span>
      <span className="right-side">
        <a
          href="https://www.linkedin.com/in/iara-pou-716352205/"
          target="_blank"
        >
          <img src={iconoLinkedin} alt="Linkedin Iara Pou" />
        </a>
        <a href="https://github.com/Iara-Pou" target="_blank">
          <img src={iconoGithub} alt="Github Iara Pou" />
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
