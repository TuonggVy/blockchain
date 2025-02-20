import AsideRight from "./AsideRight/AsideRight";
import styles from "./Content.module.scss";
import ContentItem from "./ContentItem/ContentItem";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

function Content({ contentTitle }) {
  const DOCS_CONTENT = [
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
          title: "What Is LayerEdge",
          para: [
            "The LayerEdge Verification Layer is at the core of our mission to unlock Bitcoin's computational security for zk-proofs and verifiable off-chain computations. We achieve this by enabling seamless verification for multiple zk-proof systems while dramatically reducing costs through aggregation.",
            "LayerEdge ensures that zk-proofs from various protocols, including Snark, Plonky3, and Groth16, are aggregated, verified, and ultimately settled on the Bitcoin network with native on-chain verification. This approach not only scales Bitcoin’s security but also provides efficient and cost-effective verification solutions for decentralized applications.",
            "The verification layer has been designed to function in both pre-OP_CAT and post-OP_CAT scenarios. Whether or not OP_CAT is implemented, LayerEdge will provide native verification on Bitcoin, making zk-proof verification accessible to a wide range of protocols. However, with OP_CAT enabled, we can significantly lower verification costs—by up to 95%—through proof concatenation and streamlined execution.",
          ],
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
      heading: "Aggregation",
      children: [
        {
          title: "How Is LayerEdge Work",
          para: [
            "Building on Babylon’s security and OP_CAT’s optimization, the aggregation layer forms the final piece of the puzzle by ensuring that zk-proof verification on Bitcoin is both scalable and cost-efficient. It’s through aggregation that LayerEdge enables complex off-chain computations to be verified on Bitcoin without incurring prohibitive costs, making the LayerEdge verification layer both modular and adaptable.",
          ],
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
  ];
  return (
    <div className={styles["doc-content"]}>
      <AsideRight contentTitle={contentTitle} docData={DOCS_CONTENT} />

      <div className={styles["doc-content-main"]}>
        {/*Header */}
        {DOCS_CONTENT.find(
          (section) =>
            section.heading.toLowerCase() === contentTitle.toLowerCase()
        ) && (
          <div>
            <div className={styles["heading"]}>
              <p>Introduction</p>
              <h1>
                {
                  DOCS_CONTENT.find(
                    (section) =>
                      section.heading.toLowerCase() ===
                      contentTitle.toLowerCase()
                  ).heading
                }
              </h1>
            </div>

            {/*Part1 content-para*/}
            <div className={styles["content-para-list"]}>
              <div className={styles["content-para-item"]}>
                {DOCS_CONTENT.find(
                  (section) =>
                    section.heading.toLowerCase() === contentTitle.toLowerCase()
                ).children.map((item, index) => (
                  <div key={index} className={styles["content-para-item-wrap"]}>
                    <ContentItem section={item} level={2} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/*Part2 next-prev subject*/}
        <div className={styles["content-next-prev-wrap"]}>
          <div className={styles["content-prev-single"]}>
            <LeftOutlined className={styles["prev-icon"]} />
            <p>
              <span>Previous</span>
              <span>Proof Aggregation Layer</span>
            </p>
          </div>

          <div className={styles["content-next-single"]}>
            <p>
              <span>Next</span>
              <span>Proof Aggregation Layer</span>
            </p>
            <RightOutlined className={styles["next-icon"]} />
          </div>
        </div>

        {/*Part3 time update content */}
        <div className={styles["content-time-wrap"]}>
          <p>Last updated 4 months ago</p>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  contentTitle: PropTypes.string.isRequired,
};

export default Content;
