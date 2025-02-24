import React from "react";
import "./Lightnode.scss";
import WalletConnect from "./WalletConnect";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    //combine sidebar và liên kết ví
    <div className="dashboard-container">
      
      <div className="sidebar-wrapper">
        <Sidebar />
        <div className="separator"></div>
      </div>
      <div className="content">
        <div className="top-right">
          <button className="connect-wallet-btn">Connect Wallet</button>
        </div>
        <WalletConnect />
      </div>
    </div>
  );
}

export default Dashboard;
