import './Lightnode.scss'
import React from "react";

function WalletConnect() {
  return (
    //liên kết ví
    <div className="wallet-container">
      <h2>Connect Wallet</h2>
      <p>Please connect your wallet to continue</p>
      <button className="connect-btn">Connect Wallet</button>
      <div className="steps">
        <span className="step active">1</span>
        <span className="line"></span>
        <span className="step2">2</span>
      </div>
    </div>
  );
}

export default WalletConnect;
