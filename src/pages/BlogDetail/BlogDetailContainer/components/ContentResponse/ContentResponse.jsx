import {
  DashOutlined,
  HeartOutlined,
  UserOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import styles from "./ContentResponse.module.scss";
import { s } from "framer-motion/client";
import { startTransition } from "react";
import { RESPONSE_LIST_DATA } from "./RESPONSE_LIST_DATA";

function ContentResponse() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <p>Responses (3)</p>
        <VerifiedOutlined />
      </div>

      <div className={styles["write-response-wrap"]}>
        <div className={styles["write-response-content"]}>
          <div className={styles["write-response-top"]}>
            <UserOutlined style={{ fontSize: "30px" }} />
            <p>Write a response</p>
          </div>

          <input
            className={styles["write-response-bottom"]}
            type="text"
            placeholder="What is your thoughts?"
          />
        </div>
      </div>

      <div className={styles["response-list"]}>
        {RESPONSE_LIST_DATA.map((response, index) => (
          <div key={index} className={styles["response-box"]}>
            <div className={styles["response-box-top"]}>
              <div className={styles["response-box-top-left"]}>
                <div className={styles["img-wrap"]}>
                  <img src={response.avatar} />
                </div>

                <div className={styles["author-wrap"]}>
                  <p>{response.authorName}</p>
                  <p>{response.createdAt}</p>
                </div>
              </div>
              <DashOutlined style={{ cursor: "pointer" }} />
            </div>

            <p style={{ fontSize: "14px" }}>{response.content}</p>

            <div className={styles["response-box-footer"]}>
              <HeartOutlined />
              <span className={styles.reply}>Reply</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentResponse;
