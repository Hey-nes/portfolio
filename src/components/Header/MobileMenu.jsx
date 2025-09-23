import "./MobileMenu.css";

function MobileMenu({ active, onClose }) {
  return (
    <div className={`mobile-menu ${active ? "is-active" : ""}`}>
      <button className="mobile-close" onClick={onClose}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" />
        </svg>
      </button>
      <ul className="mobile-navigation">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default MobileMenu;
