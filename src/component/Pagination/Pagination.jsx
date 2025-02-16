import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styles from "./Pagination.module.scss";
import PropTypes from "prop-types";

function Pagination({ itemPerPage, totalItems, currentPage, setCurrentPage }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumber.push(i);
  }

  const handleNextPage = () => {
    if (currentPage == pageNumber.length) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage == 1) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(pageNumber.length);
  };

  return (
    <div className={styles["page-pagination"]}>
      <button
        onClick={handleFirstPage}
        className={`${styles["arrow-left"]} ${
          currentPage != 1 ? styles["active"] : ""
        }`}
      >
        <DoubleLeftOutlined />
      </button>
      <button
        onClick={handlePrevPage}
        className={`${styles["arrow-left"]} ${
          currentPage != 1 ? styles["active"] : ""
        }`}
      >
        <LeftOutlined />
      </button>
      <div className={styles["page-control"]}>
        {pageNumber.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${styles["page-control-btn"]} ${
              currentPage == page ? styles["active"] : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        className={`${styles["arrow-right"]} ${
          currentPage != pageNumber.length ? styles["active"] : ""
        }`}
      >
        <RightOutlined />
      </button>
      <button
        onClick={handleLastPage}
        className={`${styles["arrow-right"]} ${
          currentPage != pageNumber.length ? styles["active"] : ""
        }`}
      >
        <DoubleRightOutlined />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  itemPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
