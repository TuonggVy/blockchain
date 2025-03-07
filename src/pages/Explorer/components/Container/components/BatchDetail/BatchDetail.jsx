import {
  ArrowLeftOutlined,
  CopyOutlined,
  EyeOutlined,
  RiseOutlined,
  XOutlined,
} from "@ant-design/icons";
import styles from "./BatchDetail.module.scss";

function BatchDetail({ setBatchDetail }) {
  return (
    <div className={styles.wrap}>
      <div className={styles["batch-detail-header"]}>
        <div className={styles["header-left"]}>
          <button className={styles.active}>Pending</button>

          <p
            className={styles["heading-back"]}
            onClick={() => setBatchDetail(false)}
          >
            <span className={styles["back-icon"]}>
              <ArrowLeftOutlined />
            </span>
            Back
          </p>
        </div>

        <div className={styles["header-right"]}>
          <p className={styles["share-x"]}>
            Share
            <span className={styles["share-icon"]}>
              <XOutlined />
            </span>
          </p>

          <button>
            Show Proofs
            <span className={styles["eye-icon"]}>
              <EyeOutlined />
            </span>
          </button>
        </div>
      </div>

      <div className={styles["batch-detail-content"]}>
        <div className={styles["single-detail"]}>
          <p className={styles["name"]}>Batch Hash:</p>
          <p className={styles["value"]}>
            <span>2E3F04F7CBE1047BC3626C0CBC2D761B4289D0E8439A1FD6BC5946EB36C955F0</span>
            <span>
              <CopyOutlined />
            </span>
          </p>
        </div>
        <div className={styles["single-detail"]}>
          <p className={styles["name"]}>Batch Sender Address:</p>
          <p className={styles["value"]}>
            <span>cosmos1uuhr5kleawdryk3fehunyk8ezav2zzn8d6fj5j</span>
            <span>
              <CopyOutlined />
            </span>
          </p>
        </div>
        <div className={styles["single-detail"]}>
          <p className={styles["name"]}>Aggregated Proof:</p>
          <p className={styles["value"]}>
            fffd361ffffdfffd104fffdfffdfffd75fffd472bfffd32
          </p>
        </div>
        <div className={styles["single-detail"]}>
          <p className={styles["name"]}>Total Batch Cost:</p>
          <p className={styles["value"]}>$USD 10.28</p>
        </div>
        <div className={styles["single-detail"]}>
          <p className={styles["name"]}>Saving per proof Submission:</p>
          <p className={styles["value"]}>$USD 92.52</p>
        </div>
        <div className={styles["single-detail"]}>
          <p className={styles["name"]}>Amount Of Proof</p>
          <p className={styles["value"]}>20</p>
        </div>
      </div>

      <div className={styles["batch-detail-footer"]}>
        <div className={styles["single-footer-item"]}>
          <p className={styles["footer-name"]}>Submission Timestamp:</p>
          <p className={styles["footer-value"]}>7Mar2025, 10:26:45 am</p>
        </div>
        <div className={styles["single-footer-item"]}>
          <p className={styles["footer-name"]}>Submission Transaction Hash:</p>
          <p className={styles["footer-value"]}>
            <span>2E3F04F7CBE1047BC3626C0CBC2D761B4289D0E8439A1FD6BC5946EB36C955F0</span>
            <span>
              <RiseOutlined />
            </span>
          </p>
        </div>
        <div className={styles["single-footer-item"]}>
          <p className={styles["footer-name"]}>Submission Block Number:</p>
          <p className={styles["footer-value"]}>
            Confirming...
            <span>
              <RiseOutlined />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BatchDetail;
