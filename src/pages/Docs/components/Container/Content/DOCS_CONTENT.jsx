import { title } from "framer-motion/client";

export const DOCS_CONTENT = [
  {
    heading: "Introduction to layeredge",
    children: [
      {
        title: "What Is LayerEdge",
        para: [
          "LayerEdge is the first decentralized network that enhances the capabilities of Bitcoin Blockspace with ZK & BitVM, enabling every layer to be secured on Bitcoin.",
        ],
        note: "Often efficient settlement on Bitcoin is linked with dependency on OP_Cat being enabled on Bitcoin L1. Read here how LayerEdge works with or without OP_Cat.",
      },
      {
        title:
          "How much efficient we can make L1 settlement & proof verification with LayerEdge?",
        para: [
          "LayerEdge achieves up to 95% reduction in L1 settlement costs through shared transactions, and up to 99% reduction in proof verification costs through aggregation. As more protocols join the network, costs decrease further - enabling what was previously economically unfeasible. A single proof verification cost can drop from an estimated of $900+ to less than $20 per protocol on Bitcoin, in a network of 50+ protocols.",
        ],
      },
      {
        title: "Why LayerEdge?",
        para: [
          "Imagine Bitcoin not just as a store of value, but as a decentralized supercomputer capable of verifying vast computations without ever executing them directly. LayerEdge enables this by allowing verifiable, off-chain execution powered by Bitcoin’s Proof-of-Work (PoW) security. Rather than forcing Bitcoin to perform every transaction, LayerEdge makes it possible to aggregate and verify proofs at a fraction of cost.",
          "The benefits don’t stop with financial transactions. The applications of ZK proofs extend far beyond finance. From artificial intelligence (AI) to the Internet of Things (IoT) like DePIN, verifiable computation is essential for ensuring trust in decentralized systems. With LayerEdge, Bitcoin’s computational security can now support these emerging technologies, transforming it from a passive financial asset to a backbone of verifiable trust for the decentralized internet.",
        ],
        children: [
          {
            title: "Why are we building this solution?",
            para: [
              "The Bitcoin ecosystem faces a critical challenge: while Bitcoin provides unmatched security, leveraging this security through ZK proofs is either technically impossible (due to Bitcoin's limited scripting capabilities) or economically unfeasible (huge costs per state transition even through optimistic verification approaches like BitVM)",
              "This creates a significant barrier for L2s and protocols wanting to build on Bitcoin or inherit Bitcoin's security. The high costs of proof verification force protocols to either compromise on security or face unsustainable operational expenses.",
            ],
          },
        ],
      },
    ],
  },

  {
    heading: "Proof Aggregation Layer",
    children: [
      {
        para: [
          "The LayerEdge Verification Layer is at the core of our mission to unlock Bitcoin's computational security for zk-proofs and verifiable off-chain computations. We achieve this by enabling seamless verification for multiple zk-proof systems while dramatically reducing costs through aggregation.",
          "LayerEdge ensures that zk-proofs from various protocols, including Snark, Plonky3, and Groth16, are aggregated, verified, and ultimately settled on the Bitcoin network with native on-chain verification. This approach not only scales Bitcoin’s security but also provides efficient and cost-effective verification solutions for decentralized applications.",
          "The verification layer has been designed to function in both pre-OP_CAT and post-OP_CAT scenarios. Whether or not OP_CAT is implemented, LayerEdge will provide native verification on Bitcoin, making zk-proof verification accessible to a wide range of protocols. However, with OP_CAT enabled, we can significantly lower verification costs—by up to 95%—through proof concatenation and streamlined execution.",
        ],
        children: [
          {
            title: "Aggregation: The Core of Verification",
            para: [
              "At the heart of LayerEdge’s verification system is aggregation. By bundling multiple zk-proofs into one final aggregated proof, we cut down the verification cost to just 3-5% of what would normally be required if each proof was verified individually. This also helps amortize the costs across multiple protocols, ensuring that the system remains scalable and efficient, even as more protocols and proofs are added to the network.",
              "The aggregation layer collects proofs from protocols using zk-proof systems such as Snark, Halo2, Plonky3, Groth16, and more, processes them through the LayerEdge system, and sends the final aggregated proof to be verified and settled on Bitcoin. This process reduces computational overhead while maintaining Bitcoin's unparalleled security guarantees.",
            ],
          },
        ],
      },
      {
        title: "How it Works",
        para: [
          "The image below shows the overall architecture of LayerEdge’s verification system.",
        ],
        list: [
          "Proofs from various zk-proof systems are stored in DA.",
          "LayerEdge’s Aggregation Layer fetches the stored proofs and aggregates them into a single proof.",
          "This aggregated proof is then settled on Bitcoin for script-level verification, ensuring that all zk-proofs are securely processed without overburdening the network.",
        ],
      },
      {
        para: [
          "Through our layered approach, we ensure that zk-proofs can be verified efficiently, cost-effectively, and with the highest security guarantees—both pre-OP_CAT and post-OP_CAT.",
          "With LayerEdge, Bitcoin evolves beyond a store of value to become the foundation for a scalable, trustless economy, powering the next generation of verifiable, permissionless innovation.",
        ],
      },
    ],
  },

  {
    heading: "Aggregation",
    children: [
      {
        para: [
          "Building on Babylon’s security and OP_CAT’s optimization, the aggregation layer forms the final piece of the puzzle by ensuring that zk-proof verification on Bitcoin is both scalable and cost-efficient. It’s through aggregation that LayerEdge enables complex off-chain computations to be verified on Bitcoin without incurring prohibitive costs, making the LayerEdge verification layer both modular and adaptable.",
        ],
      },
      {
        title: "How Aggregation Works",
        para: [
          "At the core of LayerEdge’s verification model is the General Verifier, which aggregates multiple zk proofs into one final proof. Each individual proof from various protocols is bundled and compressed into a single output, reducing both the computational load and on-chain data requirements. This aggregation process allows LayerEdge to process and verify a wide array of zk proofs, making the system highly scalable.",
        ],
      },
      {
        para: [
          "The image illustrates how multiple prover-verifier interactions culminate in a final aggregated proof, which is then settled on Bitcoin. Through this process, LayerEdge minimizes redundant computations and drastically reduces the need for repeated on-chain verification. In this way, zk proofs from many protocols can be efficiently handled, all while ensuring each step remains secure and verifiable.",
        ],
      },
      {
        title: "Amortizing Cost",
        para: [
          "LayerEdge’s aggregation technology is more than just a technical improvement—it directly translates into significant cost reductions. By amortizing the cost of verifying zk proofs, LayerEdge reduces the overall cost of verification by up to 95%. Verification that would traditionally cost tens of thousands of dollars on Bitcoin can now be completed at a fraction of the expense, cutting the cost down to 3-5% of what would typically be required for individual verification processes.",
          "This efficiency is what allows LayerEdge to maintain the high security guarantees of Bitcoin while making zk-proof verification affordable, even at scale. Aggregation doesn't just save money—it makes large-scale, modular zk verification possible.",
        ],
      },
      {
        title: "Aggregation as the Core of Verification",
        para: [
          "Aggregation is the cornerstone of LayerEdges modular verification system. It allows LayerEdge to operate as a verification layer that can efficiently handle proofs from a wide range of zk-based protocols. Whether these proofs are for decentralized applications, privacy protocols, or AI-powered computations, LayerEdge can aggregate them and verify them at a minimal cost, providing robust security and scalability on the Bitcoin network.",
        ],
        children: [
          {
            title: "Democratizing with Aggregation",
            para: [
              "By reducing verification costs and making on-chain zk-proof verification scalable, LayerEdge transforms Bitcoin from a passive store of value into a foundational player in the zk ecosystem. With aggregation at its core, LayerEdge is positioned to be the go-to solution for zk-proof verification on Bitcoin, empowering a new wave of permissionless innovation to scale securely and affordably.",
            ],
          },
        ],
      },
    ],
  },

  {
    heading: "Built on Babylon",
    children: [
      {
        para: [
          "LayerEdge's verification layer is powered by Babylon’s cryptoeconomic security model, enabling zk-protocols to securely operate within Bitcoin’s ecosystem. By leveraging Babylon’s Proof-of-Stake (PoS) model anchored in Bitcoin’s Proof-of-Work (PoW) security, LayerEdge offers scalable, cost-efficient zk-proof verification, ensuring that every protocol built on it is secure, decentralized, and verifiable.",
        ],
        children: [
          {
            title: "Integration Overview",
            para: [
              "Babylon’s shared security provides economic guarantees that zk-proofs settled on LayerEdge maintain the same integrity as Bitcoin itself. The integration ensures that zk-proofs are not only verifiable but also settled with the highest cryptoeconomic security possible. This enables protocols to confidently use LayerEdge for fast, low-cost verification.",
            ],
          },
          {
            title: "How Babylon Supports the LayerEdge Verification Layer",
            para: [
              "Babylon brings cryptoeconomic security to LayerEdge by allowing smaller chains to rent Bitcoin’s PoW security. In turn, LayerEdge processes zk-proofs efficiently, ensuring that the computational security of Bitcoin is extended beyond simple transactions to verifiable off-chain execution.",
            ],
          },
          {
            title: "Key Features:",
            para: [
              "Scalable zk-proof verification: Babylon’s PoS model ensures that all zk-proofs verified on LayerEdge inherit Bitcoin’s trusted security.",
              "Economic Security: With Babylon’s staking capital backing, LayerEdge provides a cost-effective and secure verification layer, eliminating the need for individual protocols to build their own staking mechanisms.",
              "Modular Ecosystem: By combining Babylon’s security guarantees with LayerEdge’s aggregation model, protocols can achieve scalable, secure zk-proof verification while reducing costs.",
            ],
          },
        ],
      },
      {
        title: "Benefits for zk-Proof Verifications:",
        para: [
          "Security Backed by Bitcoin: Every zk-proof verified on LayerEdge is secured by Babylon’s economic model, anchored in Bitcoin’s PoW.",
          "Cost-Efficient: zk-proof verification is drastically cheaper due to LayerEdge’s aggregation and Babylon’s shared security model.",
          "Modular and Scalable: The integration allows zk protocols to scale without sacrificing security or decentralization, creating a trustless ecosystem built on Bitcoin’s computational security.",
        ],
      },
    ],
  },

  {
    heading: "Settlement Module (Live)",
    children: [
      {
        title: "Overview",
        para: [
          "The LayerEdge Settlement Module provides a trust-minimized mechanism for protocols to settle their computations and states on the Bitcoin blockchain. This system leverages Bitcoin’s unparalleled Proof-of-Work (PoW) security, enabling scalable, cost-effective, and verifiable settlement for protocols, rollups, and decentralized applications.",
          "This documentation outlines how LayerEdge performs trust-minimized settlement on Bitcoin using zk-proof aggregation, OP_RETURN, and Cenotaph Rune.",
        ],
        children: [
          {
            title: "How the Settlement Module Works",
            children: [
              {
                title: "1. Aggregation of zk-Proofs",
                para: [
                  "Protocols (e.g., Rollups, AI Computation, DePIN, and DA solutions) submit Zero-Knowledge Proofs (ZKPs) to the LayerEdge. These proofs represent validated computations or state transitions from their respective layers.",
                  "LayerEdge aggregates multiple ZKPs into a single, compact proof using proof recursion. This aggregation significantly reduces the size of the proof and minimizes on-chain storage requirements, reducing settlement costs by up to 99%.",
                ],
              },
              {
                title: "2. Cenotaph Rune: Proof Packaging",
                para: [
                  "The aggregated ZKP is packaged into a construct called the Cenotaph Rune. This Rune acts as a single verifiable entity that contains the aggregated proof. Any validating client can independently verify the correctness of the aggregated proof.",
                ],
              },
              {
                title: "3. Posting to Bitcoin Blockchain",
                para: [
                  "The Cenotaph Rune is submitted to the Bitcoin blockchain using the OP_RETURN opcode, which allows for the storage of arbitrary data on the blockchain. This mechanism ensures:",
                  "+ Immutability: Once posted, the Rune becomes part of Bitcoin’s decentralized ledger.",
                  "+ Transparency: The settlement data is publicly accessible and verifiable by anyone.",
                  "+ Decentralized Trust: Leverages Bitcoin’s Proof-of-Work to secure the settlement data.",
                ],
              },
              {
                title: "4. Verifiability and Decentralized Settlement",
                para: [
                  "Once the Cenotaph Rune is stored on Bitcoin, it provides a trust-minimized settlement layer for protocols. Anyone can verify:",
                  "The aggregated ZKP for correctness.",
                  "The underlying state or computation of the protocols.",
                  "This process ensures that protocols using LayerEdge inherit Bitcoin’s security guarantees without requiring significant blockspace or introducing centralized trust assumptions.",
                ],
              },
            ],
          },
          {
            title: "Benefits of the Settlement Module",
            children: [
              {
                title: "Cost Efficiency",
                para: [
                  "Aggregating ZKPs reduces the cost of verifying and storing proofs on Bitcoin.",
                  "Settlement costs are distributed across multiple protocols, lowering individual expenses.",
                ],
              },
              {
                title: "Trust-Minimized Settlement",
                para: [
                  "Direct integration with Bitcoin ensures decentralized trust.",
                  "The use of OP_RETURN provides immutability and transparency.",
                ],
              },
              {
                title: "Scalability",
                para: [
                  "Aggregation supports high-throughput settlement without overwhelming Bitcoin’s limited blockspace.",
                  "Enables seamless scaling for zk protocols and decentralized applications.",
                ],
              },
              {
                title: "Modular Ecosystem",
                para: [
                  "Supports various use cases, including rollups, AI computation, data availability, and DePIN applications.",
                  "Creates a unified framework for protocols to interact and settle securely on Bitcoin.",
                ],
              },
            ],
          },
          {
            title: "Conclusion",
            para: [
              "The LayerEdge Settlement Module transforms Bitcoin into a scalable, trust-minimized settlement layer for zk protocols and decentralized applications. By combining zk-proof aggregation, Cenotaph Rune packaging, and Bitcoin’s PoW security, LayerEdge provides a modular and cost-efficient framework for the next generation of blockchain applications.",
            ],
          },
        ],
      },
    ],
  },

  {
    heading: "Verification Module",
    children: [
      {
        para: [
          "LayerEdge utilises bitvm based (hybrid) optimistic zk verification due to constraints on native Bitcoin Scripting. In the verification process, there are several key stages, as illustrated in the image. These stages are fundamental to how we handle verification, both pre- and post-OP_CAT. Let's break it down:",
        ],
      },
      {
        para: [
          "1. State Change Commitment: The operator first commits to the initial state (z0). This marks the beginning of the verification sequence, where the operator submits their proposed state transition.",
          "2. Assertion: The operator commits to a series of state changes (z0 ... zk), creating a sequence that represents the full proof of the state transitions. These assertions serve as checkpoints for verification and offer a pathway for challengers to question the validity of the proofs.",
          "3. Challenge Period: At this stage, any external party (referred to as a challenger) has the ability to challenge the assertions made by the operator. This challenge period is critical in ensuring the integrity of the state transitions. If a challenge arises, it opens up the opportunity for scrutiny.",
          "4. Fraud Detection: If a challenger can prove that the function (f(zi-1) ≠ zi), indicating a mismatch in the state transition, fraud is detected, and corrective measures are taken. This step plays a key role in ensuring that no invalid state transitions make it to the final stage.",
          "5. Final State Change: If no valid challenges are raised, or if the operator successfully proves the validity of the state transitions, the state change is considered valid. This means that the entire proof has been verified and can be committed to the Bitcoin blockchain.",
        ],
      },
      {
        para: [
          "In both pre- and post-OP_CAT scenarios, this verification module plays an essential role in maintaining the integrity of zk-proof verification on Bitcoin. While pre-OP_CAT, these processes are computationally heavier and slower, post-OP_CAT enables a far more efficient workflow. With OP_CAT, the concatenation of verifier functions allows for smoother and more cost-effective batching of proofs, ensuring scalability without compromising on security.",
          "By integrating OP_CAT, LayerEdge enhances the ability to scale zk-proof verification on Bitcoin, ensuring that even under the most complex computations, we maintain trust and efficiency in verifying transactions across the network. The process of concatenation guarantees that any fraudulent actions are caught in time, while valid state changes are seamlessly approved. This provides a strong, scalable, and secure solution for zk-proofs on Bitcoin, both pre- and post-OP_CAT.",
          "Up next, we'll discuss aggregation and how it further reduces verification costs, ensuring cost-efficient scaling across protocols.",
        ],
      },
    ],
  },
];
