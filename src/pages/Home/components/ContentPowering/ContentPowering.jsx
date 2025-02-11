import React, { useState } from "react";
import "./ContentPowering.css";

function ContentPowering() {
  const categories = [
    "All",
    "Chains",
    "Protocol Infra",
    "ZK Provers",
    "AI",
    "zkVM",
    "DA",
    "RAAS",
    "DePin",
    "Others",
  ];

  const projects = [
    {
      name: "CYSIC",
      category: ["ZK Provers"],
      desc: "A real-time ZK Proof Generation Layer with State-of-the-Art hardware and prover network.",
    },
    {
      name: "Snarkify",
      category: ["ZK Provers"],
      desc: "Scaling ZKP for the Trustless Future. Develop, deploy, and scale your ZK applications with Snarkify.",
    },
    {
      name: "FERMAH",
      category: ["ZK Provers"],
      desc: "Optimized for cheap, fast, and reliable ZK proof generation.",
    },
    {
      name: "babylon",
      category: ["Protocol Infra"],
      desc: "A revolutionary staking protocol for Bitcoin, allowing BTC holders to earn yields.",
    },
    {
      name: "Succinct",
      category: [""],
      desc: "SP1 is a performant, open-source zero-knowledge virtual machine (zkVM).",
    },
    {
      name: "Groth16",
      category: ["ZK Provers"],
      desc: "The Groth16 algorithm enables a quadratic arithmetic program to be computed by a prover.",
    },
    {
      name: "RISC ZERO",
      category: [""],
      desc: "The world's first RISC-V zkVM.",
    },
    {
      name: "BeFiLabs",
      category: ["Chains"],
      desc: "The liquidity layer for Bitcoin's Economy.",
    },
    {
      name: "Bitfinity EVM",
      category: ["Chains"],
      desc: "Provides Ethereum development experience with L2-like speed and scalability.",
    },
    {
      name: "BitQuid Labs",
      category: ["Chains"],
      desc: "Decentralised Insurance Infrastructure for the Bitcoin Ecosystem.",
    },
    {
      name: "B² NETWORK",
      category: ["Chains"],
      desc: "The most practical Bitcoin Layer2 Network with zk proof verification commitment rollup.",
    },
    {
      name: "RUNES CHAIN",
      category: ["Chains"],
      desc: "L2, compatible with EVM, combining ZK-Rollup, Orbit Stack, and UTXO compatibility for a fast, secure blockchain.",
    },
  ];

  return <Features categories={categories} projects={projects} />;
}

function Features({ categories, projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <section className="features">
      <h2 className="features-title">
        Powering Trust-Minimized Settlement on Bitcoin
      </h2>
      <p className="features-desc">
        LayerEdge opens doors for anyone to tap into Bitcoin's security, while
        taking only up to 1% of the Bitcoin blockspace they would have taken
        building directly without LayerEdge.
      </p>

      {/* DANH MỤC PHÂN LOẠI */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* DANH SÁCH PROJECT */}
      <div className="projects">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>
          </div>
        ))}
      </div>

      <button className="viewall-btn">View All</button>
    </section>
  );
}

export default ContentPowering;
