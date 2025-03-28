import React from "react";
import "./Archive.scss";
import { BookOutlined, MessageOutlined, SearchOutlined } from "@ant-design/icons";

const Archive = () => {
  const posts = [
    {
      id: 1,
      image:
        "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg", // Thay bằng ảnh thật
      title: "LayerEdge Incentivized Testnet: Phase II Goes Live",
      date: "Mar 1",
      readTime: "4 min read",
      likes: 155,
      responses: 47,
    },
    {
      id: 2,
      image:
        "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg", // Thay bằng ảnh thật
      title:
        "LayerEdge Testnet Launch (Incentivized): Building the Bitcoin-Backed Internet",
      date: "Jan 23",
      readTime: "3 min read",
      likes: 214,
      responses: 26,
    },
  ];

  return (
    <div className="archive-container">
      <div className="posts-section">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img
                src="https://cdn-images-1.medium.com/fit/c/72/72/1*h4_yDoHr9N6E2Ex90XYjxw.png"
                alt="Logo"
                className="post-logo"
              />
              <div className="post-info">
                <span>LayerEdge</span>
                <span>
                  {post.date} • {post.readTime}
                </span>
              </div>
            </div>
            <img src={post.image} alt="Post" className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="read-more">Read more...</p>
            <div className="post-actions">
              <span className="icon-post-1">
                <SearchOutlined />
                <span>{post.likes}</span>
              </span>
              <span className="icon-post-2">
                <MessageOutlined />
                <span> {post.responses} responses</span>
              </span>
              <BookOutlined className="bookmark-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="sidebar-section">
        <div className="archive-about">
          <h3>About</h3>
          <span className="about-name">LayerEdge</span>
          <p className="about-description">
            We are building Bitcoin-backed Internet using trust-minimized
            verification & proof aggregation for all layers & apps.
          </p>
          <p className="more-info">More information</p>
        </div>

        <div className="tags">
          <h4>Tags</h4>
          <ul>
            <li>Layer 2</li>
            <li>Bitcoin</li>
            <li>Blockchain</li>
            <li>Bitcoin</li>
            <li>Zero Knowledge Proofs</li>
            <li>Zkp</li>
            <li>Boundless</li>
            <li>Layeredge</li>
            <li>Bitvm</li>
            <li>Zero Knowledge</li>
          </ul>
        </div>

        <div className="archive-editors">
          <h4>Editors</h4>
          <div className="archive-editor">
            <img
              src="https://cdn-images-1.medium.com/fit/c/120/120/1*h4_yDoHr9N6E2Ex90XYjxw.png"
              alt="LayerEdge Logo"
              className="editor-avatar"
            />
            <span>LayerEdge</span>
          </div>
          <div className="archive-editor">
            <img
              src="https://cdn-images-1.medium.com/fit/c/120/120/1*fvYHggwYOv4wFi7lcr9XMw.png"
              alt="Ayush Saha"
              className="editor-avatar"
            />
            <span>Ayush Saha</span>
          </div>
          <div className="archive-editor">
            <img
              src="https://cdn-images-1.medium.com/fit/c/120/120/0*ee7DbAnYqJzYWjiv"
              alt="Ayush Gupta"
              className="editor-avatar"
            />
            <span>Ayush Gupta</span>
          </div>
          <div className="archive-editor">
            <img
              src="https://cdn-images-1.medium.com/fit/c/120/120/1*n_ThvqmAnY6y65lxYs1Jcg.jpeg"
              alt="Ayush Gupta"
              className="editor-avatar"
            />
            <span>Rishsane</span>
          </div>
        </div>

        <div className="archive-writers">
          <h4>Writers</h4>
          <div className="archive-writer">
            <img
              src="https://cdn-images-1.medium.com/fit/c/120/120/1*fvYHggwYOv4wFi7lcr9XMw.png"
              alt="LayerEdge Logo"
              className="writer-avatar"
            />
            <span>Ayush Saha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
