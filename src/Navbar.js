import { Link } from "react-router-dom";
import "./App.css";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        data-bs-theme={props.textclr}
        id="navitem"
      >
        <div className="container">
          <a className="navbar-brand font_nav" href="/" id="textify">
            TextiFy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active font"
                  aria-current="page"
                  href="/"
                >
                  <span id="home">
                    <Link to="/">Home</Link>
                  </span>
                </a>
              </li>
              <li className="nav-item font">
                <a className="nav-link active" aria-current="page" href="/">
                  <span id="blog">
                    <Link to="/blog">Blog</Link>
                  </span>
                </a>
              </li>
              <li className="nav-item font">
                <a className="nav-link active" aria-current="page" href="/">
                  <span id="about">
                    <Link to="/about">About</Link>
                  </span>
                </a>
              </li>
              <li
                className="nav-item font form-check form-switch"
                style={{ paddingLeft: 5 }}
              >
                <input
                  className="form-check-input checkbox"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  style={{ marginTop: 15, marginLeft: 8 }}
                  onClick={props.mode}
                  unchecked
                />
                <label style={{ marginTop: 10, marginLeft: 5 }} id="modes">
                  Mode
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr style={{ margin: 0 }} id="hr"></hr>
    </>
  );
}
