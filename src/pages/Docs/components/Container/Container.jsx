import AsideLeft from "./AsideLeft/AsideLeft";
import Content from "./Content/Content";
import styles from "./Container.module.scss";
import PropTypes from "prop-types";

function Container({ openMenuLeft, setOpenMenuLeft }) {
  return (
    <div className={styles["doc-container"]}>
      <AsideLeft
        setOpenMenuLeft={setOpenMenuLeft}
        openMenuLeft={openMenuLeft}
      />
      <Content />
    </div>
  );
}

Container.propTypes = {
  setOpenMenuLeft: PropTypes.func.isRequired,
  openMenuLeft: PropTypes.bool.isRequired,
};

export default Container;
