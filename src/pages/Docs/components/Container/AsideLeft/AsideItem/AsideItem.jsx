import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import styles from "../AsideLeft.module.scss";
import PropTypes from "prop-types";

function AsideItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={styles["doc-bar-mini-item-two"]}>
      <p className={styles["doc-bar-mini-item-two-p"]} onClick={toggleOpen}>
        {item.title}

        {item.children && (
          <span
            className={`${styles["doc-bar-p-icon"]} ${
              isOpen ? styles["open"] : ""
            }`}
          >
            <RightOutlined />
          </span>
        )}
      </p>

      {isOpen && item.children && (
        <ul className={styles["doc-bar-mini-list-two"]}>
          {item.children.map((child, index) => (
            <AsideItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

AsideItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        children: PropTypes.array,
      })
    ),
  }).isRequired,
};

export default AsideItem;
