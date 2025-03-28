import { SearchOutlined, XOutlined } from "@ant-design/icons";
import styles from "./Latest.module.scss";
import React from "react";
import LatestPosts from "./components/LatestPosts";

function Latest() {
    return (
        <div className={styles.wrap}>
          <div className={styles["header-container"]}>
            <div className={styles.logo}>
              {/*Coc coc coi dc logo */}
              {/* <img src="https://cdn-images-1.medium.com/v2/resize:fit:213/1*mwhFwH-PJ61XOkBfE6joeg@2x.png" /> */}
    
              <p>LayerEdge</p>
            </div>
    
            <div className={styles.menu}>
              <span>
                <SearchOutlined />
              </span>
              <span>
                <XOutlined />
              </span>
              <button>Follow</button>
            </div>
          </div>
          <div>
      <LatestPosts />
    </div>
        </div>

        
      );
}

export default Latest;
