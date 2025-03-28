import React, { useState } from "react";
import {
  SearchOutlined,
  MessageOutlined,
  BookOutlined,
  MailOutlined,
  XOutlined,
} from "@ant-design/icons";
import "./LatestPosts.scss";
import { Link } from "react-router-dom";

const latestPosts = [
  {
    id: 1,
    date: "Mar 7",
    readTime: "3 min read",
    source: "LayerEdge in LayerEdge",
    title: "February Recap: Building, Shipping, and Scaling LayerEdge",
    image:
      "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
    logo: "https://cdn-images-1.medium.com/fit/c/72/72/1*h4_yDoHr9N6E2Ex90XYjxw.png",
    reactions: 20,
    comments: 6,
  },
  {
    id: 2,
    date: "Mar 1",
    readTime: "4 min read",
    source: "LayerEdge in LayerEdge",
    title: "LayerEdge Incentivized Testnet: Phase II Goes Live",
    image:
      "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      logo: "https://cdn-images-1.medium.com/fit/c/72/72/1*h4_yDoHr9N6E2Ex90XYjxw.png",    reactions: 155,
    comments: 47,
  },
  {
    id: 3,
    date: "Mar 1",
    readTime: "4 min read",
    source: "LayerEdge in LayerEdge",
    title: "Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero’s zkVM and Boundless for Proof Aggregation",
    image:
      "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      logo: "https://cdn-images-1.medium.com/fit/c/72/72/1*h4_yDoHr9N6E2Ex90XYjxw.png",    reactions: 155,
    comments: 47,
  },
];

const trendingPosts = [
  {
    id: 4,
    date: "Feb 25",
    readTime: "5 min read",
    source: "LayerEdge in LayerEdge",
    title: "LayerEdge Incentivized Testnet: Phase II Goes Live",
    image:
      "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      logo: "https://cdn-images-1.medium.com/fit/c/72/72/1*h4_yDoHr9N6E2Ex90XYjxw.png",    reactions: 210,
    comments: 85,
  },
  {
    id: 5,
    date: "Feb 20",
    readTime: "3 min read",
    source: "LayerEdge in LayerEdge",
    title: "February Recap: Building, Shipping, and Scaling LayerEdge",
    image:
      "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      logo: "https://cdn-images-1.medium.com/fit/c/72/72/1*h4_yDoHr9N6E2Ex90XYjxw.png",    reactions: 95,
    comments: 40,
  },
  {
    id: 6,
    date: "Feb 20",
    readTime: "3 min read",
    source: "LayerEdge in LayerEdge",
    title: "Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero’s zkVM and Boundless for Proof Aggregation",
    image:
      "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      logo: "https://cdn-images-1.medium.com/fit/c/72/72/1*h4_yDoHr9N6E2Ex90XYjxw.png",    reactions: 95,
    comments: 40,
  },
];

const aboutInfo = {
  logo: "https://cdn-images-1.medium.com/v2/resize:fill:54:54/1*8lRcWHS3VZRapX8QkaJ4aw.png",
  name: "LayerEdge",
  description:
    "We are building Bitcoin backed Internet using trust minimized verification & proof aggregation for all layers & apps.",
  followers: "1.1K",
  email: "#",
  twitter: "#",
};

const LatestPosts = () => {
  const [activeTab, setActiveTab] = useState("Latest");

  // Chọn bài viết theo tab
  const postsToShow = activeTab === "Latest" ? latestPosts : trendingPosts;

  return (
    <div className="latest-container">
      {/* Latest & Trending Posts */}
      <div className="posts-section">
        <div className="tab-container">
          <div
            className={`tab ${activeTab === "Latest" ? "active" : ""}`}
            onClick={() => setActiveTab("Latest")}
          >
            Latest
          </div>
          <div
            className={`tab ${activeTab === "Trending" ? "active" : ""}`}
            onClick={() => setActiveTab("Trending")}
          >
            Trending
          </div>
          <div className={`underline ${activeTab}`} />
        </div>

        {postsToShow.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img src={post.logo} alt="Logo" className="post-logo" />
              <div>
                <p className="post-source">{post.source}</p>
                <p className="post-date">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </div>
            <img src={post.image} alt={post.title} className="post-image" />
            <h3 className="post-title">{post.title}</h3>
            <p className="read-more">Read more...</p>
            <div className="post-actions">
              <span className="icon-post-1">
                <SearchOutlined />
                <span>{post.reactions}</span>
              </span>
              <span className="icon-post-2">
                <MessageOutlined />
                <span>{post.comments} responses</span>
              </span>
              <BookOutlined className="bookmark-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* About */}
      <div className="about-section">
        <h3>About</h3>
        <div className="about-header">
          <img
            src={aboutInfo.logo}
            alt="LayerEdge Logo"
            className="about-logo"
          />
          <span className="about-name">{aboutInfo.name}</span>
        </div>
        <p className="about-description">{aboutInfo.description}</p>
        <p className="more-info">More information</p>
        <p className="about-title">FOLLOWERS</p>
        <p className="about-value">{aboutInfo.followers}</p>
        <p className="about-title">ELSEWHERE</p>
        <div className="about-links">
          <MailOutlined />

          <XOutlined />
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
