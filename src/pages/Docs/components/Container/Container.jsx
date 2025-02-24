import AsideLeft from "./AsideLeft/AsideLeft";
import Content from "./Content/Content";
import styles from "./Container.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function Container({ openMenuLeft, setOpenMenuLeft }) {
  const [contentTitle, setContentTitle] = useState("Introduction To LayerEdge");
  return (
    <div className={styles["doc-container"]}>
      <AsideLeft
        setOpenMenuLeft={setOpenMenuLeft}
        openMenuLeft={openMenuLeft}
        contentTitle={contentTitle}
        setContentTitle={setContentTitle}
      />
      <Content contentTitle={contentTitle} />
    </div>
  );
}

Container.propTypes = {
  setOpenMenuLeft: PropTypes.func.isRequired,
  openMenuLeft: PropTypes.bool.isRequired,
};

export default Container;
