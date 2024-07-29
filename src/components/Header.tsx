import React from "react";

import logo from "../assets/logo-BLR-pixel-art.svg";
import burgerIcon from "../assets/burgerIcon.svg";

export const Header = () => (
  <>
    <header>
      <nav id="navbar">
        <img src={logo} alt="logo" />

        <ul className="nav-list">
          <li className="nav-item active">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projetos">Projetos</a>
          </li>
        </ul>

        <button className="btn-default">contato</button>

        <button id="mobile-btn">
          <img src={burgerIcon} alt="menu" />
        </button>
      </nav>
      <div id="mobile-menu">
        <ul className="mobile-nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projetos">Projetos</a>
          </li>
        </ul>

        <button className="btn-default">contato</button>
      </div>
    </header>
  </>
);
