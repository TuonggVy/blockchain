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
      name: "https://www.layeredge.io/img/partners/cysic.png",
      category: ["ZK Provers"],
      desc: "A real-time ZK Proof Generation Layer with State-of-the-Art hardware and prover network.",
      link: "https://cysic.xyz/",
    },
    {
      name: "https://www.layeredge.io/img/partners/snark.svg",
      category: ["ZK Provers"],
      desc: "Scaling ZKP for the Trustless Future. Develop, deploy, and scale your ZK applications with Snarkify.",
      link: "https://snarkify.io/",
    },
    {
      name: "https://www.layeredge.io/img/partners/fermah.png",
      category: ["ZK Provers"],
      desc: "Optimized for cheap, fast, and reliable ZK proof generation.",
      link: "https://www.fermah.xyz/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/babylon.1157aebf.png",
      category: ["Protocol Infra"],
      desc: "A revolutionary staking protocol for Bitcoin, allowing BTC holders to earn yields.",
      link: "https://www.babylon.xyz/lander",
    },
    {
      name: "https://www.layeredge.io/img/partners/succinct.png",
      category: [""],
      desc: "SP1 is a performant, open-source zero-knowledge virtual machine (zkVM).",
      link: "https://www.succinct.xyz/",
    },
    {
      name: "https://www.layeredge.io/img/partners/groth16.png",
      category: [""],
      desc: "The Groth16 algorithm enables a quadratic arithmetic program to be computed by a prover.",
      link: "https://www.rareskills.io/post/groth16",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/risczero.5fa8ccb0.svg",
      category: [""],
      desc: "The world's first RISC-V zkVM.",
      link: "https://risczero.com/",
    },
    {
      name: "https://www.layeredge.io/img/partners/befilabs.png",
      category: ["Chains"],
      desc: "The liquidity layer for Bitcoin's Economy.",
      link: "https://befilabs.com/",
    },
    {
      name: "https://www.layeredge.io/img/partners/bitfinity_evm.png",
      category: ["Chains"],
      desc: "Provides Ethereum development experience with L2-like speed and scalability.",
      link: "https://bitfinity.network/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/bitquid_labs.a609b97e.png",
      category: ["Chains"],
      desc: "Decentralised Insurance Infrastructure for the Bitcoin Ecosystem.",
      link: "https://bqlabs.io/",
    },
    {
      name: "https://www.layeredge.io/img/partners/b2_network.png",
      category: ["Chains"],
      desc: "The most practical Bitcoin Layer2 Network with zk proof verification commitment rollup.",
      link: "https://www.bsquared.network/",
    },
    {
      name: "https://www.layeredge.io/img/partners/runes_chain.png",
      category: ["Chains"],
      desc: "L2, compatible with EVM, combining ZK-Rollup, Orbit Stack, and UTXO compatibility for a fast, secure blockchain.",
      link: "https://runeschain.ai/",
    },
    {
      name: "https://www.layeredge.io/img/partners/supersight.png",
      category: ["AI"],
      desc: "The world's first base layer for AI Agents.",
      link: "https://supersight.xyz/",
    },
    {
      name: "https://www.layeredge.io/img/partners/playai.png",
      category: ["AI"],
      desc: "Orchestration layer for customer intelligence.",
      link: "https://playai.network/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/02_WHITE.48b951cc.png",
      category: ["AI"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://daaz.com/make/offer/domains/clusterprotocol.com",
    },
    {
      name: "https://www.layeredge.io/img/partners/quillai.png",
      category: ["AI"],
      desc: "Trust & Security Layer for AI and Web3 | Securing AI Agents, Chains, Wallets and dApps with Hyper-...",
      link: "https://quillai.network/",
    },
    {
      name: "https://www.layeredge.io/img/partners/zkm.png",
      category: ["zkVM"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://www.zkm.io/",
    },
    {
      name: "https://www.layeredge.io/img/partners/avail.png",
      category: ["DA"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://www.availproject.org/",
    },
    {
      name: "https://www.layeredge.io/img/partners/nubit.png",
      category: ["DA"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://www.nubit.org/",
    },
    {
      name: "https://www.layeredge.io/img/partners/orochi.png",
      category: ["DA"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://www.orochi.network/",
    },
    {
      name: "https://www.layeredge.io/img/partners/zeeve.svg",
      category: ["RAAS"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://www.zeeve.io/",
    },
    {
      name: "https://www.layeredge.io/img/partners/nexus.png",
      category: ["RAAS"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://nexus.io/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/gateway.4f5a140e.png",
      category: ["RAAS"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://gateway.fm/",
    },
    {
      name: "https://www.layeredge.io/img/partners/u2u_network.png",
      category: ["DePin"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://u2u.xyz/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/iotex.504fec92.svg",
      category: ["DePin"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://iotex.io/",
    },
    {
      name: "https://www.layeredge.io/img/partners/mintair.png",
      category: ["DePin"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://www.mintair.xyz/",
    },
    {
      name: "https://www.layeredge.io/img/partners/kalp.png",
      category: ["Others"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://www.kalp.studio/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/degame.66b8b378.png",
      category: ["Others"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://degame.com/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/clique.49697a82.png",
      category: ["Others"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://clique.one/",
    },
    {
      name: "https://www.layeredge.io/_next/static/media/o3_layer.6a2e417b.png",
      category: ["Others"],
      desc: "Permissionless Co-ordination Layer for AI Agents, a carnot engine fueling the AI economy.",
      link: "https://o3layer.com/",
    },
  ];

  return <Features categories={categories} projects={projects} />;
}

function Features({ categories, projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const maxVisibleProjects = 12;

  const filteredProjects =
    selectedCategory === "All"
      ? projects.slice(0, maxVisibleProjects)
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  const handleViewAll = () => {
    window.open("/ecosystem", "_blank");
  };

  return (
    <section className="features">
      <h2 className="features-title">
        Powering Trust-Minimized <br /> Settlement on Bitcoin
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
          <div
            key={index}
            className="project-card"
            onClick={() => window.open(project.link, "_blank")}
          >
            <img
              src={project.name}
              alt="Project Logo"
              className="project-logo"
            />
            <p className="project-desc">{project.desc}</p>
          </div>
        ))}
      </div>

      <div className="viewall-container">
        {selectedCategory === "All" && (
          <button className="viewall-btn" onClick={handleViewAll}>
            View All
          </button>
        )}
      </div>
    </section>
  );
}

export default ContentPowering;
