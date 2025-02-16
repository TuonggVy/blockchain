import { BookOutlined, CodeSandboxOutlined, DiscordOutlined, GithubOutlined, LinuxOutlined, SearchOutlined, XOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={styles["header-wrap"]}>
        <div className={styles["header-left"]}>
          <Link to={"/"} className={styles["logo"]}>
            Layeredge
          </Link>
          <p>Batches</p>
          <ul className={styles["social-icon"]}>
            <li>
              <a>
                <CodeSandboxOutlined />
              </a>
            </li>
            <li>
              <a>
                <DiscordOutlined />
              </a>
            </li>
            <li>
              <a>
                <XOutlined />
              </a>
            </li>
            <li>
              <a>
                <LinuxOutlined />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles["header-search"]}>
          <div className={styles["header-search-wrap"]}>
            <SearchOutlined className={styles["header-search-icon"]} />
            <input type="text" placeholder="Enter batch or proof hash..." />
          </div>
        </div>

        <div className={styles["header-right"]}>
          <ul>
            <li>
              <a>
                <GithubOutlined />
              </a>
            </li>
            <li>
              <a>
                <BookOutlined />
              </a>
            </li>
          </ul>

          <p>Testnet</p>

          <div className={styles["header-cost"]}>
            <div className={styles["header-cost-wrap"]}>
              <div className={styles["header-cost-left"]}>
                <span>Direct Settlement Cost</span>
                <strong>$10.38</strong>
              </div>
              <div className={styles["header-cost-right"]}>
                <span>Using Testnet</span>
                <strong>$1.04</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
