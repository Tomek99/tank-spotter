import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinkElement.module.scss";
interface Item {
  text: string;
  path: string;
}

interface LinkElementProps {
  item: Item;
}

function NavLinkElement({ item }: LinkElementProps) {
  const { path, text } = item;
  return (
    <NavLink
      to={path}
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
