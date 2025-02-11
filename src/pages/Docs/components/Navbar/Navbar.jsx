import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.scss";
import PropTypes from "prop-types";

function Navbar({ setOpenSearch }) {
  return (
    <div className={styles["doc-navbar"]}>
      {/*Logo */}
      <div className={styles["doc-logo"]}>
        <button className={styles["menu-icon"]}>
          <MenuOutlined className={styles["menu-icon-style"]} />
        </button>
        <span>LayerEdge</span>
      </div>
      {/*Search */}
      <div className={styles["doc-search"]}>
        <button
          onClick={() => setOpenSearch(true)}
          className={styles["doc-search-button"]}
        >
          <span className={styles["doc-search-icon"]}>
            <SearchOutlined />
          </span>
          <div className={styles["doc-search-placeholder"]}>
            <span>Search...</span>
          </div>
          <div>Ctrl + K</div>
        </button>

        {/*Icon button when respo */}
        <button
          onClick={() => setOpenSearch(true)}
          className={styles["doc-search-button-respo"]}
        >
          <SearchOutlined className={styles["doc-search-icon-respo"]} />
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setOpenSearch: PropTypes.func.isRequired,
};

export default Navbar;
