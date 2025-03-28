import styles from "./ContentBody.module.scss";
import { PARA_DATA } from "./PARA_DATA.JSX";
import {
  FileAddOutlined,
  HeartOutlined,
  MessageOutlined,
  UploadOutlined,
} from "@ant-design/icons";

function ContentBody() {
  return (
    <div className={styles.wrap}>
      <img
        src="https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg"
        className={styles["img-og"]}
      />

      <div className={styles["para-list"]}>
        {PARA_DATA.map((para, index) => (
          <p
            key={index}
            className={styles["para-mg-top"]}
            style={{ fontSize: "20px", lineHeight: "32px" }}
          >
            <strong>
              &rarr; {para.strong}
              <br />
            </strong>
            {para.para}
          </p>
        ))}
      </div>

      <div className={styles["para-footer"]}>
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
          <UploadOutlined />
        </div>
      </div>

      <div className={styles["author-account"]}>
        <div className={styles["author-box"]}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII="
            className={styles["author-img"]}
          />

          <div className={styles["author-info-wrap"]}>
            <h3>Published in LayerEdge</h3>
            <p style={{ marginTop: "8px" }}>
              1.1k Followers . Last published Mar 7, 2025
            </p>
            <p style={{ marginTop: "16px" }}>
              We are building Bitcoin backed Internet using trust minimized
              verification & proof aggregation for all layers & apps.
            </p>
          </div>

          <button>Follow</button>
        </div>

        <div className={styles["author-box"]}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII="
            className={styles["author-img"]}
          />

          <div className={styles["author-info-wrap"]}>
            <h3>Published in LayerEdge</h3>
            <p style={{ marginTop: "8px" }}>
              1.1k Followers . Last published Mar 7, 2025
            </p>
            <p style={{ marginTop: "16px" }}>
              We are building Bitcoin backed Internet using trust minimized
              verification & proof aggregation for all layers & apps.
            </p>
          </div>

          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default ContentBody;
