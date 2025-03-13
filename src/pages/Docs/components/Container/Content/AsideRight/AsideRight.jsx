import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import styles from "./AsideRight.module.scss";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DocsContext } from "../../../../../../context/DocsContext";

function AsideRight({ docData }) {
  const { content } = useContext(DocsContext);

  const reRender = (items) => {
    return (
      <ul className={styles["doc-asideRight-list"]}>
        {items.map((item, subIndex) => (
          <div key={subIndex}>
            <li className={styles["doc-asideRight-item"]}>{item.title}</li>
            {item.children && Array.isArray(item.children) && (
              <div className={styles["doc-asideRight-children"]}>
                {reRender(item.children)}
              </div>
            )}
          </div>
        ))}
      </ul>
    );
  };

  return (
    <aside className={styles["doc-content-aside"]}>
      <div className={styles["doc-asideRight-wrap"]}>
        {docData.map((section, index) => {
          if (section.heading.toLowerCase() === content.toLowerCase()) {
            return (
              <div key={index}>
                {section.children && reRender(section.children)}
              </div>
            );
          }
          return null;
        })}

        <div className={styles["doc-asideRight-footer"]}>
          <p>Was this helpful</p>
          <div className={styles["asideRight-footer-icon"]}>
            <button className={styles["asideRight-footer-icon-single"]}>
              <SmileOutlined />
            </button>
            <button className={styles["asideRight-footer-icon-single"]}>
              <MehOutlined />
            </button>
            <button className={styles["asideRight-footer-icon-single"]}>
              <FrownOutlined />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

AsideRight.propTypes = {
  docData: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          children: PropTypes.array,
        })
      ),
    })
  ).isRequired,
};

export default AsideRight;
