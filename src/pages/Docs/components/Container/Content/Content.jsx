import { InfoCircleOutlined } from "@ant-design/icons";
import styles from "./Content.module.scss";
function Content() {
    
  return (
    <div className={styles["doc-content"]}>
      <aside className={styles["doc-content-aside"]}>what is</aside>
      <div className={styles["doc-content-main"]}>
        <div className={styles["heading"]}>
          <p>Introduction</p>
          <h1>Introduction to layeredge</h1>
        </div>
        <div className={styles["content-para-list"]}>
          <div className={styles["content-para-item"]}>
            <h2>What Is LayerEdge</h2>
            <p>
              LayerEdge is the first decentralized network that enhances the
              capabilities of Bitcoin Blockspace with ZK & BitVM, enabling every
              layer to be secured on Bitcoin.
            </p>
            <div className={styles["content-para-item-note-wrap"]}>
              <div className={styles["content-para-item-note-item"]}>
                <InfoCircleOutlined className={styles['note-icon']}/>
                <p>
                  Often efficient settlement on Bitcoin is linked with
                  dependency on OP_Cat being enabled on Bitcoin L1. Read here
                  how LayerEdge works with or without OP_Cat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
