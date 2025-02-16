import styles from "./Explorer.module.scss";
import Footer from "../Home/components/Footer/Footer";

import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

function Explorer() {
  return (
    <div
      className={styles["explorer-wrap"]}
      style={{ backgroundColor: "black" }}
    >
      <Header />

      <Container />

      <Footer />
    </div>
  );
}

export default Explorer;
