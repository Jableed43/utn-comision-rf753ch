/* eslint-disable react/prop-types */
import "./page.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Page({ children }) {
  return (
    <>
      <body style={{ position: "relative", minHeight: "90vh" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </>
  );
}

export default Page;
