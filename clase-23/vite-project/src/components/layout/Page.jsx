import HeaderRoute from "./HeaderRoute";
import { headerRouteLinks } from "../../data/data";
import Footer from "./Footer";
import PropTypes from "prop-types";

function Page({ children, gap }) {
  return (
    <div className={`pageBody ${gap ? "pageBodyGap" : ""} `}>
      <HeaderRoute navLinks={headerRouteLinks} />
      {children}
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
  gap: PropTypes.bool,
};

export default Page;
