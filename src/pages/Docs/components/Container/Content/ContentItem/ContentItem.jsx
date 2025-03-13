import { InfoCircleOutlined } from "@ant-design/icons";
import styles from "../Content.module.scss";
import PropTypes, { string } from "prop-types";

function ContentItem({ section, level }) {
  const HeadingTag = `h${Math.min(level, 6)}`;
  return (
    <>
      <HeadingTag>{section.title}</HeadingTag>
      {section.para?.map((eachPara, index) => (
        <p key={index}>{eachPara}</p>
      ))}
      {section.note && (
        <div className={styles["content-para-item-note-wrap"]}>
          <div className={styles["content-para-item-note-item"]}>
            <InfoCircleOutlined className={styles["note-icon"]} />
            <p>{section.note}</p>
          </div>
        </div>
      )}
      {section.children?.map((child, index) => (
        <ContentItem key={index} section={child} level={level + 1} />
      ))}
    </>
  );
}

ContentItem.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    para: PropTypes.arrayOf(string),
    note: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        children: PropTypes.array,
      })
    ),
  }).isRequired,
  level: PropTypes.number.isRequired,
};

export default ContentItem;
