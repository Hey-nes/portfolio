import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="container">
          <a className="logotype" href="/">
            <img src={logo} alt="Logotype" />
          </a>
          <ul className="navigation hidden-mobile">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <button className="burger hidden-desktop" onClick={toggleMenu}>
            <svg
              width="64px"
              height="64px"
              strokeWidth="3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#FFFFFF"
            >
              <path
                d="M3 5H21"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H21"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuActive ? "is-active" : ""}`}>
        <div>
          <button className="mobile-close" onClick={toggleMenu}>
            <svg
              width="3rem"
              height="3rem"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#FFFFFF"
            >
              <path
                d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <ul className="mobile-navigation">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <main className="main">
        <div>
          <p>Main content</p>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>This is the footer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
