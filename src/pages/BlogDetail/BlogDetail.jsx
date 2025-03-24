import styles from "./BlogDetail.module.scss";
import BlogDetailHeader from "./BlogDetailLayout/BlogDetailHeader/BlogDetailHeader";
import BlogDetailFooter from "./BlogDetailLayout/BlogDetailFooter/BlogDetailFooter";
import BlogDetailContainer from "./BlogDetailContainer/BlogDetailContainer";

function BlogDetail() {
  return (
    <div className={styles.wrap}>
      <BlogDetailHeader />
      <BlogDetailContainer />
      <BlogDetailFooter />
    </div>
  );
}

export default BlogDetail;
