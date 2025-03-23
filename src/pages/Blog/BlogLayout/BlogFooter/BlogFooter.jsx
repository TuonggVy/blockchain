import { Link } from "react-router-dom";
import styles from "./BlogFooter.module.scss";

function BlogFooter() {
  const menuData = [
    {
      title: "About LayerEdge",
      link: "/blog/about",
    },
    {
      title: "Latest Stories",
      link: "/blog/latest",
    },
    {
      title: "Archive",
      link: "/blog/archive",
    },
    {
      title: "About Medium",
      link: "/blog",
    },
    {
      title: "Terms",
      link: "/blog",
    },
    {
      title: "Privacy",
      link: "/blog",
    },
    {
      title: "Teams",
      link: "/blog",
    },
  ];
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {menuData.map((item, index) => (
          <div key={index} className={styles['menu-item-wrap']}>
            <Link to={item.link}>{item.title}</Link>
            {index !== menuData.length - 1 && <span>.</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogFooter;
