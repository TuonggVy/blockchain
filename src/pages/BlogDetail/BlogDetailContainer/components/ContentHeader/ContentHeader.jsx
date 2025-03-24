import styles from "./ContentHeader.module.scss";
import {
  FileAddOutlined,
  HeartOutlined,
  MessageOutlined,
  PlayCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
function ContentHeader() {
  return (
    <div className={styles["main-content-header-wrap"]}>
      <h1>February Recap: Building, Shipping, and Scaling LayerEdge</h1>

      <div className={styles["author-blog-info-wrap"]}>
        <div className={styles["img-wrap"]}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=" />
        </div>

        <div className={styles["author-info-wrap"]}>
          <p>
            LayerEdge ·{" "}
            <span style={{ textDecoration: "underline" }}>Follow</span>
          </p>

          <p>
            Published in <span style={{ color: "black" }}>LayerEdge</span> · 3
            min read · Mar 7, 2025
          </p>
        </div>
      </div>

      <div className={styles["sub-content-header-wrap"]}>
        <div className={styles["sub-left"]}>
          <span>
            <HeartOutlined /> 3
          </span>
          <span>
            <MessageOutlined /> 8
          </span>
        </div>

        <div className={styles["sub-right"]}>
          <FileAddOutlined />
          <PlayCircleOutlined />
          <UploadOutlined />
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
