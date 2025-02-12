import React from "react";
import "./LayerInfo.css";
import { motion, AnimatePresence } from 'framer-motion';


const partners = [
  { name: 'Runes Chain', url: 'https://gateway.fm/', img: "https://www.layeredge.io/img/partners/runes_chain.png" },
  { name: 'Fermah', url: 'https://befilabs.com/', img: "https://www.layeredge.io/img/partners/fermah.png" },
  { name: 'ZKM', url: 'https://www.zkm.io/', img: "https://www.layeredge.io/img/partners/zkm.png" },
  { name: 'Bitfinity', url: 'https://bitfinity.network/', img: "https://www.layeredge.io/img/partners/bitfinity_evm.png" },
  { name: 'Nubit', url: 'https://www.nubit.org/', img: "https://www.layeredge.io/img/partners/nubit.png" },
  { name: 'Orochi', url: 'https://www.orochi.network/', img: "https://www.layeredge.io/img/partners/orochi.png" },
  { name: 'Snarkify', url: 'https://snarkify.io/', img: "https://www.layeredge.io/img/partners/snark.svg" },
  { name: 'SuperSight', url: 'https://supersight.xyz/', img: "https://www.layeredge.io/img/partners/supersight.png" },
  { name: 'U2U Network', url: 'https://u2u.xyz/', img: "https://www.layeredge.io/img/partners/u2u_network.png" },
  { name: 'Befi', url: 'https://befilabs.com/', img: "https://www.layeredge.io/img/partners/befilabs.png" },
];


function LayerInfo() {
  return (
    <div className="marquee-container">
      <h3 className="marquee-title">Who are we cooking with?</h3>
      <div className="marquee-inner">
        {partners.map((partner, index) => (
          <a key={index} className="partner" href={partner.url} target="_blank" rel="noopener noreferrer">
            <img src={partner.img} alt={partner.name} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default LayerInfo;
