import React from "react";
import "./Lightnode.scss";
import WalletConnect from "./WalletConnect";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    //combine sidebar và liên kết ví
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>

      {/* Nội dung chính */}
      <div className="content">
        {/* Nút Connect Wallet */}
        <div class="top-left">
          <div class="logo-re">
            Layer<span>Edge</span> <small>Beta</small>
          </div>
        </div>
        <div className="top-right">
          <button className="connect-wallet-btn">Connect Wallet</button>
          <div class="menu-icon">☰</div>
        </div>

        {/* Phần "Run a light client" */}
        <div className="light-client-box">
          <div className="icon"></div>
          <div className="text-content">
            <h3>Run a light client and start earning rewards</h3>
          </div>
          <button className="start-now-btn">Start Now</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
