import { HomeOutlined, LinkOutlined, MenuOutlined, SearchOutlined, TeamOutlined, UnlockOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React from 'react'
import './Lightnode.scss'

function Sidebar() {
    return (
      // thanh sidebar
        <div className="sidebar">
          <h2 className="logo">LayerEdge <small>Beta</small></h2>
          <ul>
            <li className="active"><HomeOutlined /> Dashboard</li>
            <li><UnorderedListOutlined /> Tasks <UnlockOutlined className="lock-icon" /></li>
            <li><UnlockOutlined /> Proofs <UnlockOutlined className="lock-icon" /></li>
            <li><TeamOutlined /> Referrals</li>
          </ul>
          <div className="bottom-links">
            <p><MenuOutlined /> FAQ</p>
            <p><SearchOutlined /> Explorer</p>
            <p><LinkOutlined /> Website</p>
          </div>
        </div>
      );
}

export default Sidebar