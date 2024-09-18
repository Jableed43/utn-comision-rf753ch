import PropTypes from "prop-types";

function Footer({ links, social }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="social-media">
          {social.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              className="social-icon"
            >
              <img src={social.image} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 Your Company. All Rights Reserved.</p>
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
  ).isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
