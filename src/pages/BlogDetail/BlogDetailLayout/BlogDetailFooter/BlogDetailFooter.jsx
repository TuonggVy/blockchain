import styles from "./BlogDetailFooter.module.scss";

function BlogDetailFooter() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <ul>
          <li>Help</li>
          <li>Status</li>
          <li>About</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Press</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Text to speech</li>
          <li>Teams</li>
        </ul>
      </div>
    </div>
  );
}

export default BlogDetailFooter;
