import { SlidersOutlined } from "@ant-design/icons";
import styles from "./ContainerMain.module.scss";
function ContainerMain() {
  return (
    <div className={styles["container-main"]}>
      <div className={styles["container-box-list"]}>
        <div className={styles["container-box"]}>
          <div className={styles["container-box-number"]}>32,763</div>
          <div className={styles["container-box-letter"]}>Total Batches</div>
          <span className={styles["container-box-icon"]}>
            <SlidersOutlined />
          </span>
        </div>

        <div className={styles["container-box"]}>
          <div className={styles["container-box-number"]}>32,763</div>
          <div className={styles["container-box-letter"]}>Verified Proofs</div>
          <span className={styles["container-box-icon"]}>
            <SlidersOutlined />
          </span>
        </div>

        <div className={styles["container-box"]}>
          <div className={styles["container-box-number-type"]}>
            YOUbejfejUkkkkyY
          </div>
          <div className={styles["container-box-letter"]}>Services Manager</div>
        </div>

        <div className={styles["container-box"]}>
          <div className={styles["container-box-number"]}>2,745,763</div>
          <div className={styles["container-box-letter"]}>
            Total Gas Saved in $USD
          </div>
        </div>
      </div>

      <div className={styles["container-protocols"]}>
        <span>Protocols Aggregated by LayerEdge</span>
        <div className={styles["protocals-logo"]}>
          <img src="/assets/images/mintair_logo.png" />
          <img src="/assets/images/avail_logo.png" />
          <img src="/assets/images/bitfinity_logo.png" />
          <img src="/assets/images/bitfinity_logo.png" />
          <img src="/assets/images/celestia_logo.png" />
          <img src="/assets/images/u2u_logo.png" />
          <img src="/assets/images/only_logo.png" />
          <img src="/assets/images/only_logo.png" />
        </div>
      </div>
    </div>
  );
}

export default ContainerMain;
