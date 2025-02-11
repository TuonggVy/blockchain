import React from "react";
import MainLayout from "../../layouts/MainLayout";
import "./Ecosystem.scss";

function Ecosystem() {
  const ecosystemData = [
    {
      category: "Chains",
      partners: [
        {
          name: "Runes Chain",
          logo: "https://www.layeredge.io/img/partners/runes_chain.png",
          url: "https://runeschain.ai/",
        },
        {
          name: "Bitfinity EVM",
          logo: "https://www.layeredge.io/img/partners/bitfinity_evm.png",
          url: "https://bitfinity.network/",
        },
        {
          name: "Avail",
          logo: "https://www.layeredge.io/img/partners/avail.png",
          url: "https://www.availproject.org/",
        },
        {
          name: "Q3 Layer",
          logo: "https://www.layeredge.io/img/partners/o3_layer.png",
          url: "https://o3layer.com/",
        },
        {
          name: "B2 Network",
          logo: "https://www.layeredge.io/img/partners/b2_network.png",
          url: "https://www.bsquared.network/",
        },
        {
          name: "BeFi Labs",
          logo: "https://www.layeredge.io/img/partners/befilabs.png",
          url: "https://befilabs.com/",
        },
      ],
    },
    {
      category: "ZK Provers",
      partners: [
        {
          name: "Snarkify",
          logo: "https://www.layeredge.io/img/partners/snark.svg",
          url: "https://snarkify.io/",
        },
        {
          name: "Fermah",
          logo: "https://www.layeredge.io/img/partners/fermah.png",
          url: "https://www.fermah.xyz/",
        },
        {
          name: "cysic",
          logo: "https://www.layeredge.io/img/partners/cysic.png",
          url: "https://cysic.xyz/",
        },
      ],
    },
    {
      category: "AI",
      partners: [
        {
          name: "MINTAIR",
          logo: "https://www.layeredge.io/img/partners/mintair.png",
          url: "https://www.mintair.xyz/",
        },
        {
          name: "SUPERSIGHT",
          logo: "https://www.layeredge.io/img/partners/supersight.png",
          url: "https://www.layeredge.io/img/partners/supersight.png",
        },
        {
          name: "PLAYAI",
          logo: "https://www.layeredge.io/img/partners/playai.png",
          url: "https://playai.network/",
        },
        {
          name: "QUILLAI",
          logo: "https://www.layeredge.io/img/partners/quillai.png",
          url: "https://quillai.network/",
        },
      ],
    },
    {
      category: "zkVM",
      partners: [
        {
          name: "zkm",
          logo: "https://www.layeredge.io/img/partners/zkm.png",
          url: "https://www.zkm.io/",
        },
        {
          name: "succinct",
          logo: "https://www.layeredge.io/img/partners/succinct.png",
          url: "https://www.succinct.xyz/",
        },
        {
          name: "groth16",
          logo: "https://www.layeredge.io/img/partners/groth16.png",
          url: "https://www.rareskills.io/post/groth16",
        },
      ],
    },
    {
      category: "DA",
      partners: [
        {
          name: "nubit",
          logo: "https://www.layeredge.io/img/partners/nubit.png",
          url: "https://www.nubit.org/",
        },
        {
          name: "orochi",
          logo: "https://www.layeredge.io/img/partners/orochi.png",
          url: "https://www.orochi.network/",
        },
      ],
    },
    {
      category: "RaaS",
      partners: [
        {
          name: "zeeve",
          logo: "https://www.layeredge.io/img/partners/zeeve.svg",
          url: "https://www.zeeve.io/",
        },
        {
          name: "nexus",
          logo: "https://www.layeredge.io/img/partners/nexus.png",
          url: "https://nexus.io/",
        },
      ],
    },
    {
      category: "DePIN",
      partners: [
        {
          name: "u2u_network",
          logo: "https://www.layeredge.io/img/partners/u2u_network.png",
          url: "https://u2u.xyz/",
        },
      ],
    },
    {
      category: "RWA",
      partners: [   
        {
          name: "kalp",
          logo: "https://www.layeredge.io/img/partners/kalp.png",
          url: "https://www.kalp.studio/",
        },
      ],
    },
  ];
  return (
    <MainLayout>
      <section className="ecosystem">
        <h2>Our Ecosystem Partners</h2>
        {ecosystemData.map((category, index) => (
          <div key={index} className="category-section">
            <h3 className="category-title">{category.category}</h3>
            <div className="partners-grid">
              {category.partners.map((partners, idx) => (
                <a
                  key={idx}
                  href={partners.url}
                  className="partner-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={partners.logo} alt={[partners.name]} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </MainLayout>
  );
}

export default Ecosystem;
