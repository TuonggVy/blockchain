import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./ContainerBottom.module.scss";
import { useState } from "react";
import Pagination from "../../../../../../component/Pagination/Pagination";

function ContainerBottom() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

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
    {
      id: 6,
      name: "Asbedfreie2826",
    },
    {
      id: 7,
      name: "Asbedfreie2827",
    },
    {
      id: 8,
      name: "Asbedfreie2827",
    },
    {
      id: 9,
      name: "Asbedfreie2827",
    },
    {
      id: 10,
      name: "Asbedfreie2827",
    },
    {
      id: 11,
      name: "Asbedfreie2827",
    },
    {
      id: 12,
      name: "Asbedfreie2827",
    },
    {
      id: 13,
      name: "Asbedfreie2827",
    },
  ];

  // Pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = BATCHES_DATA.slice(indexOfFirstItem, indexOfLastItem);

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
          {currentItem.map((batch) => (
            <li key={batch.id} className={styles["each-batch"]}>
              <p>{batch.name}</p>
              <span>
                <ArrowRightOutlined />
              </span>
            </li>
          ))}
        </ul>

        <Pagination
        itemPerPage={itemPerPage}
          totalItems={BATCHES_DATA.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default ContainerBottom;
