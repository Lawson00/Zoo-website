import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/DeLaw png format.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

function NavBar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [menuStatus, setMenuStatus] = useState(false);
  function openMenu() {
    menuStatus === false ? setMenuStatus(true) : setMenuStatus(false);
  }

  return (
    <div style={{ backgroundColor: "red" }}>
      {!menuStatus ? <div className="overlay" onClick={openMenu}></div> : null}
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="nav-img" className="logo" />
        <ul className={`${menuStatus ? "menu-show" : ""}`}>
          <img src={logo} alt="nav-img" className="logo side-logo" />
          <li>
            <Link to="homePage" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programPage" smooth={true} offset={-280} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="aboutPage" smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="galleryPage" smooth={true} offset={-320} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonialPage"
              smooth={true}
              offset={-290}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <button className="btn">
            <Link to="contactPage" smooth={true} offset={-230} duration={500}>
              Contact Us
            </Link>
          </button>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={openMenu} />
      </nav>
    </div>
  );
}

export default NavBar;
