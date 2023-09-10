import React from "react";
import styles from "./Footer.module.scss";
import navigationData from "../../data/navigationElements.json";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GiTank } from "react-icons/gi";

function Footer() {
  return (
    <div className={styles.Footer}>
      <ul className={styles.linkElements}>
        {navigationData.map((item, i) => (
          <Link to={item.path} key={i} className={styles.linkElement}>
            {item.text}
          </Link>
        ))}
      </ul>
      <ul className={styles.socialMediaLinks}>
        <li>
          <a href="https://github.com/Tomek99">
            <BsGithub />
            <span>Tomek99</span>
          </a>
        </li>
        <li>
          <a href="mailto: szybko872@gmail.com">
            <AiOutlineMail />
            <span>szybko872@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://worldoftanks.eu/en/community/accounts/675578630-Tomek060399/">
            <GiTank />
            <span>Tomek060399</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
