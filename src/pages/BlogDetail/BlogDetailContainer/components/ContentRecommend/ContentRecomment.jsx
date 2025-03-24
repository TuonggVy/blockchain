import {
  CommentOutlined,
  HeartOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import styles from "./Content.Recommend.module.scss";
import { LAYEREDGE_DATA } from "./RECOMMEND_DATA";

function ContentRecommend() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {/*LayerEdge blog */}
        <div className={styles["layeredge-wrap"]}>
          <h4>More from LayerEdge and LayerEdge</h4>

          <div className={styles["recommend-list"]}>
            {LAYEREDGE_DATA.map((box, index) => (
              <div key={index} className={styles["recommend-box"]}>
                <img src={box.banner} />

                <div className={styles["recommend-box-info"]}>
                  <div className={styles["recommend-box-info-header"]}>
                    <img src={box.avatar} />
                    <p>{box.author}</p>
                  </div>

                  <div className={styles["recommend-box-info-body"]}>
                    <h4>{box.heading}</h4>

                    <p>{box.content}</p>
                  </div>

                  <div className={styles["recommend-box-info-footer"]}>
                    <div className={styles["recommend-box-info-footer-left"]}>
                      <span>{box.createdAt}</span>
                      <div className={styles.action}>
                        <p>
                          <LikeOutlined /> {box.like}
                        </p>
                        <p>
                          <CommentOutlined /> {box.comment}
                        </p>
                      </div>
                    </div>

                    <HeartOutlined style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button>See all from LayerEdge</button>
        </div>

        <div
          style={{ width: "100%", height: "1px", backgroundColor: "lightgray" }}
        />

        {/*Medium blog */}
        <div className={styles["medium-wrap"]}>
          <h4>Recommended from Medium</h4>

          <div className={styles["recommend-list"]}>
            {LAYEREDGE_DATA.map((box, index) => (
              <div key={index} className={styles["recommend-box"]}>
                <img src={box.banner} />

                <div className={styles["recommend-box-info"]}>
                  <div className={styles["recommend-box-info-header"]}>
                    <img src={box.avatar} />
                    <p>{box.author}</p>
                  </div>

                  <div className={styles["recommend-box-info-body"]}>
                    <h4>{box.heading}</h4>

                    <p>{box.content}</p>
                  </div>

                  <div className={styles["recommend-box-info-footer"]}>
                    <div className={styles["recommend-box-info-footer-left"]}>
                      <span>{box.createdAt}</span>
                      <div className={styles.action}>
                        <p>
                          <LikeOutlined /> {box.like}
                        </p>
                        <p>
                          <CommentOutlined /> {box.comment}
                        </p>
                      </div>
                    </div>

                    <HeartOutlined style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button>See more recommendations</button>
        </div>
      </div>
    </div>
  );
}

export default ContentRecommend;
