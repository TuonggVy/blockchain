import React from "react";
import "./WhatsNew.scss";

function WhatsNew() {
  const posts = [
    {
      date: "February 19, 2025",
      time: "11:47:57 PM",
      title:
        "Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero’s zkVM and Boundless for Proof...",
      link: "#",
    },
    {
      date: "February 6, 2025",
      time: "9:26:13 PM",
      title: "LayerEdge Monthly Recap—January",
      link: "#",
    },
    {
      date: "January 23, 2025",
      time: "7:01:15 AM",
      title:
        "LayerEdge Testnet Launch (Incentivized): Building the Bitcoin-Backed Internet",
      link: "#",
    },
  ];
  return (
    <section className="whats-new">
      <div className="header">
        <h2 className="title">What's new?</h2>
        <a href="#" className="view-more">
          View more on <span>M</span>
        </a>
      </div>

      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <div className="post-date">
              {post.date} <br /> {post.time}
            </div>
            <div className="post-title">{post.title}</div>
            <a href={post.link} className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatsNew;
