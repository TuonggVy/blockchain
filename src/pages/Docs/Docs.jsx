import { useState } from "react";
import SearchPopup from "./components/Navbar/SearchPopup/SearchPopup";
import styles from "./Docs.module.scss";
import Navbar from "./components/Navbar/Navbar";

function Docs() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      {/*Navbar */}
      <Navbar setOpenSearch={setOpenSearch} />

      {/*Search popup */}
      <SearchPopup openSearch={openSearch} setOpenSearch={setOpenSearch} />

      {/*Container */}
      <div className={styles["doc-container"]}></div>
    </>
  );
}

export default Docs;
