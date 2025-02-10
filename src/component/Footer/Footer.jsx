import React from 'react';
import './Footer.css';
import { DiscordOutlined, XOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo-section">
          <a href="#" className="logofooter">LayerEdge 
          <span className='icon-footer' >
          <DiscordOutlined className='icon1' />
          <XOutlined className='icon1' style={{marginLeft: 10}}/>
          <DiscordOutlined className='icon1' style={{marginLeft: 10}} />
          <DiscordOutlined className='icon1' style={{marginLeft: 10}} />

            </span></a>
          <p className='footer-subtitle'>Security Layer on Bitcoin.</p>
          <p className="copyright">LayerEdge © 2024-2025. All rights reserved.</p>
        </div>
        <div className="nav-links-section">

          <div className="nav-column">
            <h3>Explore</h3>
            <ul className="nav-links">
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Github</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Bitcoin Testnet Explorer</a></li>
            </ul>
          </div>
          <div className="nav-column">
            <h3>Resources</h3>
            <ul className="nav-links">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Media Kit</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;