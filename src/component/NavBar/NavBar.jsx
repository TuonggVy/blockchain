import { DiscordOutlined, TwitterOutlined, XOutlined } from "@ant-design/icons";
import React from "react";
import "./NavBar.css";
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
        <li>Docs</li>
        <li>Blog</li>
        <li>Ecosystem</li>
        <li>Explorer</li>
      </ul>
      <button className="nav-btn">Run a light node</button>
    </div>
    
  );
}

export default NavBar;
