import AsideLeft from "./AsideLeft/AsideLeft";
import Content from "./Content/Content";
import styles from "./Container.module.scss";
import { useState } from "react";

function Container() {
  const [contentTitle, setContentTitle] = useState("Introduction To LayerEdge");
  return (
    <div className={styles["doc-container"]}>
      <AsideLeft
        contentTitle={contentTitle}
        setContentTitle={setContentTitle}
      />
      <Content contentTitle={contentTitle} />
    </div>
  );
}

export default Container;
