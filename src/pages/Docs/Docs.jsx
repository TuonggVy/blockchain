import { useState } from "react";
import SearchPopup from "./components/Navbar/SearchPopup/SearchPopup";
import styles from "./Docs.module.scss";
import Navbar from "./components/Navbar/Navbar";
import AsideLeft from "./components/Container/AsideLeft/AsideLeft";
import Content from "./components/Container/Content/Content";

function Docs() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      {/*Navbar */}
      <Navbar setOpenSearch={setOpenSearch} />

      {/*Search popup */}
      <SearchPopup openSearch={openSearch} setOpenSearch={setOpenSearch} />

      {/*Container */}
      <div className={styles["doc-container"]}>
        {/*Aside Left */}
        <AsideLeft />

        <Content />
      </div>
    </>
  );
}

export default Docs;
