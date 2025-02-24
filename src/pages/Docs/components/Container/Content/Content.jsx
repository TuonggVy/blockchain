import AsideRight from "./AsideRight/AsideRight";
import styles from "./Content.module.scss";
import ContentItem from "./ContentItem/ContentItem";
import {
  RightOutlined,
  LeftOutlined,
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { DOCS_CONTENT } from "./DOCS_CONTENT";

function Content({ contentTitle }) {
  console.log(contentTitle);
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
          {contentTitle.trim().toLowerCase() !==
          DOCS_CONTENT[0].heading.trim().toLowerCase() ? (
            <div className={styles["content-prev-single"]}>
              <LeftOutlined className={styles["prev-icon"]} />
              <p>
                <span>Previous</span>
                <span>Proof Aggregation Layer</span>
              </p>
            </div>
          ) : (
            <></>
          )}

          {contentTitle !==
          "Light Node Verification via Stochastic Sampling of Proofs" ? (
            <div className={styles["content-next-single"]}>
              <p>
                <span>Next</span>
                <span>Proof Aggregation Layer</span>
              </p>
              <RightOutlined className={styles["next-icon"]} />
            </div>
          ) : (
            <></>
          )}
        </div>

        {/*Part3 time update content */}
        <div className={styles["content-time-wrap"]}>
          <p>Last updated 4 months ago</p>

          <div className={styles["content-time-footer"]}>
            <p>Was this helpful</p>
            <div className={styles["asideRight-footer-icon"]}>
              <button className={styles["asideRight-footer-icon-single"]}>
                <SmileOutlined />
              </button>
              <button className={styles["asideRight-footer-icon-single"]}>
                <MehOutlined />
              </button>
              <button className={styles["asideRight-footer-icon-single"]}>
                <FrownOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  contentTitle: PropTypes.string.isRequired,
};

export default Content;
