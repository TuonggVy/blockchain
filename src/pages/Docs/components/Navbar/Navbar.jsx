import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ setOpenMenuLeft, setOpenSearch }) {
  const toggleOpenMenuLeft = () => {
    setOpenMenuLeft((prev) => !prev);
  };

  return (
    <div className={styles["doc-navbar"]}>
      {/*Logo */}
      <div className={styles["doc-logo"]}>
        <button onClick={toggleOpenMenuLeft} className={styles["menu-icon"]}>
          <MenuOutlined className={styles["menu-icon-style"]} />
        </button>
        <span>
          <Link to={"/"}>LayerEdge</Link>
        </span>
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
  setOpenMenuLeft: PropTypes.func.isRequired,
  setOpenSearch: PropTypes.func.isRequired,
};

export default Navbar;
