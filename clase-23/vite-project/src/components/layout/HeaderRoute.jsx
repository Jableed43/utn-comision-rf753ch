import PropTypes from "prop-types";
import planeBrand from "../../../public/img/aerolinea.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

//Imagen: href de a, src de img, alt de img

//PropTypes permite definir las props, pasarles un tipo
//Si la prop isRequired significa que es obligatoria

function HeaderRoute({
  imageSrc,
  imageAlt,
  brandUrl,
  navLinks,
  dropdownTitle,
  dropdownOptions,
}) {
  const { user, handleLogout } = useContext(UserContext);

  const excludedLoggedLinks = ["Login", "Registrate"];
  const protectedLinks = ["Productos"];
  //Generamos listado de links a excluir segun login o no
  const excludeLinks = user ? excludedLoggedLinks : protectedLinks;
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navClass">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={brandUrl}>
            <img src={imageSrc} alt={imageAlt} />
          </NavLink>
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
              {/* Primero filtramos los links que no queremos que se vean */}
              {navLinks
                .filter(link => !excludeLinks.includes(link.name))
                .map((link, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={link.url}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}

              <li className="nav-item dropdown">
                {dropdownOptions ? (
                  <>
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {dropdownTitle}
                    </NavLink>

                    <ul className="dropdown-menu">
                      {dropdownOptions.map((option, index) => (
                        <li key={index}>
                          <NavLink className="dropdown-item" to={option.url}>
                            {option.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <></>
                )}
              </li>
            </ul>
            {user && <button onClick={handleLogout}>Logout</button>}
          </div>
        </div>
      </nav>
    </header>
  );
}

//recuerda que el propTypes del componente se escribe en lower camelCase
HeaderRoute.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  brandUrl: PropTypes.string,
  //Con arrayOf especificamos que tiene dentro el array
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  dropdownTitle: PropTypes.string,
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
HeaderRoute.defaultProps = {
  imageSrc: planeBrand,
  imageAlt: "Imagen Avion",
};

export default HeaderRoute;
