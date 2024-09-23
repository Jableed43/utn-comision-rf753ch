import PropTypes from "prop-types";

function Footer({ links, socials }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {links &&
            links.map((link, index) => (
              <a key={index} href={link.url}>
                {link.name}
              </a>
            ))}
        </div>
        <div className="social-media">
          {socials ? (
            socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                className="social-icon"
              >
                <img src={social.image} alt={social.name} />
              </a>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Footer;
