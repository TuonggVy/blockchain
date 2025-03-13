import { RightOutlined, RiseOutlined } from "@ant-design/icons";
import AsideItem from "./AsideItem/AsideItem";
import styles from "./AsideLeft.module.scss";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { DocsContext } from "../../../../../context/DocsContext";

function AsideLeft({ setOpenMenuLeft, openMenuLeft }) {
  const [isOpenItem, setIsOpenItem] = useState(false);
  const { setContent } = useContext(DocsContext);

  const toggleOpenItem = (e) => {
    e.stopPropagation();
    setIsOpenItem((prev) => !prev);
  };

  const ASIDE_ITEM = [
    {
      heading: "Introduction",
      children: [
        {
          title: "Introduction To LayerEdge",
          children: [
            {
              title: "Proof Aggregation Layer",
              children: [
                {
                  title: "Aggregation",
                },
                {
                  title: "Built on Babylon",
                },
              ],
            },
            {
              title: "Settlement Module (Live)",
            },
            {
              title: "Verification Module",
            },
          ],
        },
        {
          title: "Try LayerEdge (Devnet)",
        },
        {
          title: "Use Cases",
        },
        {
          title: "Frequently Asked Questions (FAQs)",
        },
      ],
    },
    {
      heading: "Network",
      children: [
        {
          title: "Network Info",
        },
        {
          title: "Consensus",
        },
      ],
    },
    {
      heading: "Community",
      children: [
        {
          title: "Twitter",
          icon: <RiseOutlined />,
        },
        {
          title: "Discord",
          icon: <RiseOutlined />,
        },
        {
          title: "Medium",
          icon: <RiseOutlined />,
        },
        {
          title: "Telegram",
          icon: <RiseOutlined />,
        },
      ],
    },
  ];

  return (
    <aside
      className={`${styles["doc-bar"]} ${openMenuLeft ? styles["active"] : ""}`}
    >
      <div className={styles["doc-bar-content"]}>
        <ul className={styles["doc-bar-content-list"]}>
          {ASIDE_ITEM.map((section, index) => (
            <li key={index} className={styles["doc-bar-content-item"]}>
              <div className={styles["doc-bar-content-heading"]}>
                {section.heading.toUpperCase()}
              </div>

              {/*Chưa tối ưu đc css (padding) nên tạm thời chia ra 2 thằng */}
              <ul className={styles["doc-bar-mini-list"]}>
                {section.children.map((item, index) => (
                  <li
                    onClick={() => {
                      setContent(item.title);
                      console.log(item.title);
                      setOpenMenuLeft(false);
                    }}
                    key={index}
                    className={styles["doc-bar-mini-item"]}
                  >
                    <p className={styles["doc-bar-mini-item-p"]}>
                      {item.title}

                      {item.icon && (
                        <span style={{ marginLeft: "10px" }}>{item.icon}</span>
                      )}

                      {item.children && (
                        <span
                          onClick={toggleOpenItem}
                          className={`${styles["doc-bar-p-icon"]} ${
                            isOpenItem ? styles["open"] : ""
                          }`}
                        >
                          <RightOutlined />
                        </span>
                      )}
                    </p>

                    {isOpenItem && item.children && (
                      <ul className={styles["doc-bar-mini-list-two"]}>
                        {item.children.map((child, index) => (
                          <AsideItem
                            setOpenMenuLeft={setOpenMenuLeft}
                            isOpenItem={isOpenItem}
                            toggleOpenItem={toggleOpenItem}
                            key={index}
                            item={child}
                          />
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className={styles["doc-bar-footer"]}>
          <p>Powered by GitBook</p>
        </div>
      </div>
    </aside>
  );
}

AsideLeft.propTypes = {
  openMenuLeft: PropTypes.bool.isRequired,
  setOpenMenuLeft: PropTypes.func,
};

export default AsideLeft;
