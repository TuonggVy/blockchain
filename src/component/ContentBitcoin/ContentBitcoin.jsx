import React from "react";
import "./ContentBitcoin.css";
import { SelectOutlined } from "@ant-design/icons";

function ContentBitcoin() {
  return (
    <div className="contentBitcoin">
      <video autoPlay loop muted playsInline className="back-video">
        <source src="/assets/images/video.mp4" type="video/mp4"></source>
      </video>

      <p className="subtitle">
        Powering trustless settlement & trust-minimized verification on Bitcoin
        at 99% lower cost for all Layers & Apps
      </p>
      <h1 className="title">Bitcoin Backed Internet</h1>

      <div className="buttons">
        <button className="btn">Incentivized Testne</button>
        <button className="btn second">Documentation</button>
      </div>

      <div className="icon-second">
        <SelectOutlined />
      </div>
    </div>
  );
}

export default ContentBitcoin;
