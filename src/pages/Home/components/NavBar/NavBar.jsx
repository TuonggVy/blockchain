import { DiscordOutlined, TwitterOutlined, XOutlined } from "@ant-design/icons";
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const handleLightNode = () => {
    window.open("/lightnode", "_blank");
  };
  return (
    <div className="navbar">
      <div className="logo">Layeredge</div>
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
      <ul className="menu">
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
      <button onClick={handleLightNode} className="nav-btn">
        Run a light node
      </button>
    </div>
  );
}

export default NavBar;
