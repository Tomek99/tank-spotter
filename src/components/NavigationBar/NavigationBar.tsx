import styles from "./NavigationBar.module.scss";
import navigationData from "../../data/navigationElements.json";
import NavLinkElement from "../NavLinkElement/NavLinkElements";
import { FaRegUser } from "react-icons/fa";
function NavigationBar() {
  return (
    <div className={styles.NavigationBar}>
      <ul className={styles.navElements}>
        <img src="./logo.png" className={styles.logoImg} />

        <div className={styles.divCenter}>
          {navigationData.map((item, i) => (
            <NavLinkElement item={item} key={i} />
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
