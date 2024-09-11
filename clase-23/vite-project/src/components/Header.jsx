import PropTypes from "prop-types";

const Header = ({
  brandImage,
  brandHref,
  navLinks,
  dropdownTitle,
  dropdownOptions,
}) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navClass">
        <div className="container-fluid">
          <a className="navbar-brand" href={brandHref}>
            <img src={brandImage} alt="aerolinea" />
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
};

Header.propTypes = {
  brandImage: PropTypes.string.isRequired,
  brandHref: PropTypes.string.isRequired,
  navLinks: PropTypes.array.isRequired,
  dropdownTitle: PropTypes.string.isRequired,
  dropdownOptions: PropTypes.array.isRequired,
};

export default Header;
