import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinkElement.module.scss";
interface Item {
  text: string;
  path: string;
}

interface LinkElementProps {
  item: Item;
  handleBtn: () => void;
}

function NavLinkElement({ item, handleBtn }: LinkElementProps) {
  const { path, text } = item;
  return (
    <NavLink
      to={path}
      onClick={handleBtn}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${styles.activeLinkElement} ${styles.LinkElement}`
          : `${styles.LinkElement}`
      }
    >
      {text}
    </NavLink>
  );
}

export default NavLinkElement;
