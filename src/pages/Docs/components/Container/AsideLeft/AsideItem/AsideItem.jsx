import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import styles from "../AsideLeft.module.scss";
import PropTypes from "prop-types";

function AsideItem({ setOpenMenuLeft, item, setContentTitle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        setContentTitle(item.title);
        console.log(item.title);
        setOpenMenuLeft(false);
      }}
      className={styles["doc-bar-mini-item-two"]}
    >
      <p className={styles["doc-bar-mini-item-two-p"]}>
        {item.title}

        {item.children && (
          <span
            onClick={toggleOpen}
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
            <AsideItem
              setOpenMenuLeft={setOpenMenuLeft}
              setContentTitle={setContentTitle}
              key={index}
              item={child}
            />
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
  setContentTitle: PropTypes.func,
  setOpenMenuLeft: PropTypes.func,
};

export default AsideItem;
