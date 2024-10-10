import "../../public/css/header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/productos">productos</a>
          </li>
          <li>
            <a href="/contacto">contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
