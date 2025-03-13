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
import { DOCS_CONTENT } from "./DOCS_CONTENT";
import { useContext } from "react";
import { DocsContext } from "../../../../../context/DocsContext";

function Content() {
  const { content, setContent } = useContext(DocsContext);

  const currentIndex = DOCS_CONTENT.findIndex(
    (section) => section.heading.toLowerCase() === content.toLowerCase()
  );

  const selectedSection = DOCS_CONTENT[currentIndex];

  if (!selectedSection) {
    return <p>Content not found</p>;
  }

  const previousHeading = () => {
    if (currentIndex > 0) {
      setContent(DOCS_CONTENT[currentIndex - 1].heading);
    }
  };

  const nextHeading = () => {
    if (currentIndex < DOCS_CONTENT.length - 1) {
      setContent(DOCS_CONTENT[currentIndex + 1].heading);
    }
  };

  return (
    <div className={styles["doc-content"]}>
      <AsideRight content={content} docData={DOCS_CONTENT} />

      <div className={styles["doc-content-main"]}>
        {/*Header */}
        <div>
          <div className={styles["heading"]}>
            <p>Introduction</p>
            <h1>{selectedSection.heading}</h1>
          </div>

          {/* Part1 content-para */}
          <div className={styles["content-para-list"]}>
            <div className={styles["content-para-item"]}>
              {selectedSection.children?.map((item, index) => (
                <div key={index} className={styles["content-para-item-wrap"]}>
                  <ContentItem section={item} level={2} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*Part2 next-prev subject*/}
        <div className={styles["content-next-prev-wrap"]}>
          {content.trim().toLowerCase() !==
          DOCS_CONTENT[0].heading.trim().toLowerCase() ? (
            <div
              className={styles["content-prev-single"]}
              onClick={previousHeading}
            >
              <LeftOutlined className={styles["prev-icon"]} />
              <p>
                <span>Previous</span>
                <span>{DOCS_CONTENT[currentIndex - 1].heading}</span>
              </p>
            </div>
          ) : (
            <></>
          )}

          {content !==
          "Light Node Verification via Stochastic Sampling of Proofs" ? (
            <div
              className={styles["content-next-single"]}
              onClick={nextHeading}
            >
              <p>
                <span>Next</span>
                <span>{DOCS_CONTENT[currentIndex + 1].heading}</span>
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

export default Content;

{
  /* {DOCS_CONTENT.find(
          (section) =>
            section.heading.toLowerCase() === contentTitle.toLowerCase()
        ) && ( */
}
// <div>

{
  /* <div className={styles["heading"]}>
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

            {/*Part1 content-para*/
}
// <div className={styles["content-para-list"]}>
//   <div className={styles["content-para-item"]}>
//     {DOCS_CONTENT.find(
//       (section) =>
//         section.heading.toLowerCase() === contentTitle.toLowerCase()
//     ).children.map((item, index) => (
//       <div key={index} className={styles["content-para-item-wrap"]}>
//         <ContentItem section={item} level={2} />
//       </div>
//     ))}
//   </div>
// </div> */}

{
  /* )} */
}
