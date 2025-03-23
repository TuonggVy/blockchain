import styles from "./BlogContent.module.scss";
import About from "./AllContent/About/About";
import Archive from "./AllContent/Archive/Archive";
import Latest from "./AllContent/Latest/Latest";
import Home from "./AllContent/Home/Home";

function BlogContent({ content }) {
  const handleRenderContent = () => {
    switch (content) {
      case "about":
        return <About />;
      case "archive":
        return <Archive />;
      case "latest":
        return <Latest />;
      default:
        return <Home />;
    }
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>{handleRenderContent()}</div>
    </div>
  );
}

export default BlogContent;
