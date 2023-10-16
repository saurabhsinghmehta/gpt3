import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
const Menu = () => {
  return (
    <>
      <a href="#home">
        <p>Home</p>
      </a>

      <a href="#wgpt3">
        <p>What is GPT3?</p>
      </a>

      <a href="#possibility">
        <p>Open AI</p>
      </a>

      <a href="#features">
        <p>Case Studies</p>
      </a>
      <a href="#blog">
        <p>Library</p>
      </a>
    </>
  );
};
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // BEM  naming convention for css class full form -> Block Element Modifier
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>sign in</p>
        <button type="button">sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={"27px"}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={"27px"}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>sign in</p>
                <button type="button">sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
