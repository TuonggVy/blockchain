import {
  CloseOutlined,
  DiscordOutlined,
  MenuOutlined,
  TwitterOutlined,
  XOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const handleLightNode = () => {
    window.open("/lightnode", "_blank");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="ele1">
      {/* Logo */}
      <div className="logo">Layeredge</div>
      {/* Icon */}
      <ul className="icon">
        <li>
          <DiscordOutlined />
        </li>
        <li>
          <XOutlined />
        </li>
        <li>
          <DiscordOutlined />
        </li>
        <li>
          <DiscordOutlined />
        </li>
      </ul>
      </div>

      <div className="ele2">

      {/* Menu button */}
      <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>
      <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to={"/docs"}>Docs</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/ecosystem"}>Ecosystem</Link>
        </li>
        <li>
          <Link to={"/explorer"}>Explorer</Link>
        </li>

      </ul>
          <button onClick={handleLightNode} className={`nav-btn ${isMenuOpen ? "active" : ""}`}>
            Run a light node
          </button>
      </div>
    </div>
  );
}

export default NavBar;
