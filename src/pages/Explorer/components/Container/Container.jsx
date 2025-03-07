import { useState } from "react";
import styles from "./Container.module.scss";
import BatchDetail from "./components/BatchDetail/BatchDetail";
import ContainerBottom from "./components/ContainerBottom/ContainerBottom";
import ContainerMain from "./components/ContainerMain/ContainerMain";

function Container() {
  const [batchDetail, setBatchDetail] = useState(false);
  console.log(batchDetail);

  return (
    <div className={styles["container"]}>
      <div className={styles["container-wrap"]}>
        <div className={styles["container-header"]}>
          <h1>
            {batchDetail !== true ? "Layeredge Explorer" : "Batch Details"}
          </h1>
        </div>

        {batchDetail === true ? (
          <BatchDetail setBatchDetail={setBatchDetail} />
        ) : (
          <>
            <ContainerMain />
            <ContainerBottom setBatchDetail={setBatchDetail} />
          </>
        )}
      </div>
    </div>
  );
}

export default Container;
