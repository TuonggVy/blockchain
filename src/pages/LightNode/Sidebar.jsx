import { HomeOutlined, LinkOutlined, MenuOutlined, SearchOutlined, TeamOutlined, UnlockOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React from 'react'
import './Lightnode.scss'

function Sidebar() {
    return (
      // thanh sidebar
      <div className="sidebar">
      <h2 className="logo">Layer<span>Edge</span> <small>Beta</small></h2>
      <ul className="menu-items">
        <li className="active"><HomeOutlined /> Dashboard</li>
        <li><UnorderedListOutlined /> Tasks <span className="new-tag">NEW</span></li>
        <li><UnlockOutlined /> Proofs <span className="new-tag">NEW</span></li>
        <li><TeamOutlined /> Referrals</li>
        <li><UnlockOutlined /> Mint <span className="new-tag">NEW</span></li>
      </ul>
      <div className="bottom-links">
        <p><MenuOutlined /> FAQs</p>
        <p><SearchOutlined /> Explorer</p>
        <p><LinkOutlined /> Website</p>
      </div>
    </div>
      );
}

export default Sidebar