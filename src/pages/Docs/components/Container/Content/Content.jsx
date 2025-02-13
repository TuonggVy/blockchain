import styles from "./Content.module.scss";
import ContentItem from "./ContentItem/ContentItem";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function Content() {
  const DOCS_CONTENT = [
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
  ];
  return (
    <div className={styles["doc-content"]}>
      <aside className={styles["doc-content-aside"]}>what is</aside>
      <div className={styles["doc-content-main"]}>
        {/*Header */}
        <div className={styles["heading"]}>
          <p>Introduction</p>
          <h1>Introduction to layeredge</h1>
        </div>

        {/*Part1 content-para*/}
        <div className={styles["content-para-list"]}>
          <div className={styles["content-para-item"]}>
            {DOCS_CONTENT.map((section, index) => (
              <div key={index} className={styles["content-para-item-wrap"]}>
                <ContentItem section={section} level={2} />
              </div>
            ))}
          </div>
        </div>

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

export default Content;
