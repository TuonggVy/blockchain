import styles from "./BlogDetailContainer.module.scss";
import ContentBody from "./components/ContentBody/ContentBody";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import ContentRecommend from "./components/ContentRecommend/ContentRecomment";
import ContentResponse from "./components/ContentResponse/ContentResponse";

function BlogDetailContainer() {
  return (
    <div className={styles.wrap}>
      <div className={styles["header-wrap"]}>
        <div className={styles["header-content"]}>

          <span>
            <a href="http://layeredge.com">LayerEdge</a>
          </span>
          <span className={styles['sub-nav']}>
            Follow publication
          </span>

          <ul>
            <li>
              <a href="http://localhost:5173/blog">Home</a>
            </li>
            <li>
              <a href="http://localhost:5173/blog/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["main-container"]}>
        <ContentHeader />

        <p style={{ fontSize: "20px", marginTop: "42px" }}>
          In February, we focused on one thing — building and shipping. The
          first phase of our incentivized testnet was an overwhelming success,
          and we’re now gearing up for Phase 2, with mainnet on the horizon.
        </p>

        <ContentBody />

        <ContentResponse />
      </div>
      <ContentRecommend />
    </div>
  );
}

export default BlogDetailContainer;
