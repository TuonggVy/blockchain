import styles from "./Container.module.scss";
import ContainerBottom from "./components/ContainerBottom/ContainerBottom";
import ContainerMain from "./components/ContainerMain/ContainerMain";

function Container() {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-wrap"]}>
        <div className={styles["container-header"]}>
          <h1>Layeredge Explorer</h1>
        </div>

        <ContainerMain />

        <ContainerBottom />
      </div>
    </div>
  );
}

export default Container;
