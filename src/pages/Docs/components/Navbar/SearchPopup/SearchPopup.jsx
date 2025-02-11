import { SearchOutlined } from "@ant-design/icons";
import styles from "./SearchPopup.module.scss";
import PropTypes from "prop-types";

function SearchPopup({ openSearch, setOpenSearch }) {
  return (
    <div
      onClick={() => setOpenSearch(false)}
      className={`${styles["doc-search-popup-bg"]} ${
        openSearch ? styles["active"] : ""
      }`}
    >
      <div className={styles["doc-search-popup-container"]}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles["doc-search-popup-content"]}
        >
          <SearchOutlined className={styles["search-popup-icon"]} />
          <div className={styles["search-popup-input"]}>
            <input placeholder="Search content" />
          </div>
        </div>
      </div>
    </div>
  );
}

SearchPopup.propTypes = {
  openSearch: PropTypes.bool.isRequired,
  setOpenSearch: PropTypes.func.isRequired,
};

export default SearchPopup;
