import "./Header.css"

const Header = () => {
  return (
    <header className="header p-4 bg-warning shadow">
      <div className="container">
        <nav className="nav d-flex align-items-center justify-content-between">
          <a href="#!" className="nav__logo fs-3 text-decoration-none">
            Radar o'ljasi
          </a>
          <ul className="nav__list d-flex align-items-center gap-4">
            <li className="nav__item">
              <a href="#!" className="nav__link text-decoration-none">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#!" className="nav__link text-decoration-none">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#!" className="nav__link text-decoration-none">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
