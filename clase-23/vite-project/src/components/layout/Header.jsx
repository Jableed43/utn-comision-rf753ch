import PropTypes from "prop-types";
import planeBrand from "../../../public/img/aerolinea.png";

//Imagen: href de a, src de img, alt de img

//PropTypes permite definir las props, pasarles un tipo
//Si la prop isRequired significa que es obligatoria

function Header({
  imageSrc,
  imageAlt,
  brandUrl,
  navLinks,
  dropdownTitle,
  dropdownOptions,
}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navClass">
        <div className="container-fluid">
          <a className="navbar-brand" href={brandUrl}>
            <img src={imageSrc} alt={imageAlt} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdownTitle}
                </a>
                <ul className="dropdown-menu">
                  {dropdownOptions.map((option, index) => (
                    <li key={index}>
                      <a className="dropdown-item" href={option.url}>
                        {option.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

//recuerda que el propTypes del componente se escribe en lower camelCase
Header.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  brandUrl: PropTypes.string.isRequired,
  //Con arrayOf especificamos que tiene dentro el array
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  dropdownTitle: PropTypes.string.isRequired,
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  // Como tipar un array de strings:
  // items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

//Definimos props por defecto
Header.defaultProps = {
  imageSrc: planeBrand,
  imageAlt: "Imagen Avion",
};

export default Header;
