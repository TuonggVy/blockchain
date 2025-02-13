import { DiscordOutlined, TwitterOutlined, XOutlined } from "@ant-design/icons";
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
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
        <Link to={"/docs"}>
          <li>Docs</li>
        </Link>
        <li>Blog</li>
        <Link to={"/ecosystem"}>
          <li>Ecosystem</li>
        </Link>
        <li>Explorer</li>
      </ul>
      <button className="nav-btn">Run a light node</button>
    </div>
  );
}

export default NavBar;
