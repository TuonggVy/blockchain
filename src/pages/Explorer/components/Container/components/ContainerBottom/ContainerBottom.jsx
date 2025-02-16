import {
  ArrowRightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styles from "./ContainerBottom.module.scss";

function ContainerBottom() {
  const BATCHES_DATA = [
    {
      id: 1,
      name: "Asbedfreie2821",
    },
    {
      id: 2,
      name: "Asbedfreie2822",
    },
    {
      id: 3,
      name: "Asbedfreie2823",
    },
    {
      id: 4,
      name: "Asbedfreie2824",
    },
    {
      id: 5,
      name: "Asbedfreie2825",
    },
  ];

  return (
    <div className={styles["container-bottom"]}>
      <div className={styles["container-bottom-header"]}>
        <h2>Recent Batches</h2>
        <div className={styles["header-time"]}>
          <span>Last updated 21:37:13</span>
          <span>View All</span>
        </div>
      </div>

      <div className={styles["container-bottom-content"]}>
        <ul className={styles["list-batch"]}>
          {BATCHES_DATA.map((batch) => (
            <li key={batch.id} className={styles["each-batch"]}>
              <p>{batch.name}</p>
              <span>
                <ArrowRightOutlined />
              </span>
            </li>
          ))}
        </ul>

        <div className={styles["page-pagination"]}>
          <button className={`${styles["arrow-left"]}`}>
            <DoubleLeftOutlined />
          </button>
          <button className={`${styles["arrow-left"]}`}>
            <LeftOutlined />
          </button>
          <div className={styles["page-control"]}>
            <button
              className={`${styles["page-control-btn"]} ${styles["active"]}`}
            >
              1
            </button>
            <button className={`${styles["page-control-btn"]}`}>2</button>
            <button className={`${styles["page-control-btn"]} `}>3</button>
            <button className={`${styles["page-control-btn"]} `}>4</button>
            <button className={`${styles["page-control-btn"]}`}>5</button>
          </div>
          <button className={`${styles["arrow-right"]}`}>
            <RightOutlined />
          </button>
          <button className={`${styles["arrow-right"]}`}>
            <DoubleRightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContainerBottom;
