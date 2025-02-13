import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import styles from "./AsideRight.module.scss";
import PropTypes from "prop-types";

function AsideRight({ docData }) {
  const reRender = (items) => {
    return (
      <ul className={styles["doc-asideRight-list"]}>
        {items.map((item, subIndex) => (
          <>
            <li key={subIndex} className={styles["doc-asideRight-item"]}>
              {item.title}
            </li>
            {item.children && Array.isArray(item.children) && (
              <div className={styles["doc-asideRight-children"]}>
                {reRender(item.children)}
              </div>
            )}
          </>
        ))}
      </ul>
    );
  };

  return (
    <aside className={styles["doc-content-aside"]}>
      <div className={styles["doc-asideRight-wrap"]}>
        {docData.map((section, index) => (
          <div key={index}>
            {section.children && reRender(section.children)}
          </div>
        ))}
        
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
          title: PropTypes.string.isRequired,
          children: PropTypes.array,
        })
      ),
    })
  ).isRequired,
};

export default AsideRight;
