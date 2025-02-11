import React from "react";
import "./LayerInfo.css";
import { motion, AnimatePresence } from 'framer-motion';


const partners = [
  { name: 'Gateway FM', url: 'https://gateway.fm/', img: '/assets/images/gatewayfm.png' },
  { name: 'Fermah', url: 'https://befilabs.com/', img: '/assets/images/fermah.png' },
  { name: 'ZKM', url: 'https://www.zkm.io/', img: '/assets/images/zkm.avif' },
  { name: 'Bitfinity', url: 'https://bitfinity.network/', img: '/assets/images/bitfinity.png' },
  { name: 'Nubit', url: 'https://www.nubit.org/', img: '/assets/images/nubit.png' },
  { name: 'Orochi', url: 'https://www.orochi.network/', img: '/assets/images/orochi.png' },
  { name: 'Snarkify', url: 'https://snarkify.io/', img: '/assets/images/snarkify.png' },
  { name: 'SuperSight', url: 'https://supersight.xyz/', img: '/assets/images/Supersight.png' },
  { name: 'U2U Network', url: 'https://u2u.xyz/', img: '/assets/images/u2u.png' },
  { name: 'Befi', url: 'https://befilabs.com/', img: '/assets/images/befi.webp' },
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
