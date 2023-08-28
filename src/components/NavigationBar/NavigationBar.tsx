import styles from "./NavigationBar.module.scss";
import navigationData from "../../data/navigationElements.json";
import LinkElement from "../LinkElement/LinkElements";
import { FaRegUser } from "react-icons/fa";
function NavigationBar() {
  return (
    <div className={styles.NavigationBar}>
      <ul className={styles.navElements}>
        <img src="./logo.png" className={styles.logoImg} />

        <div className={styles.divCenter}>
          {navigationData.map((item, i) => (
            <LinkElement item={item} key={i} />
          ))}
        </div>

        <div className={styles.divRight}>
          <FaRegUser size={35} />
        </div>
      </ul>
    </div>
  );
}

export default NavigationBar;
