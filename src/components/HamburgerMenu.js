import React from "react";
import { Link } from "react-navi";
import styles from "./HamburgerMenu.module.css";
import MenuItems from "./MenuItems";

/**
 * Made by Erik Terwan
 * Modified by Shawn Cruz for the purposes of shawncruz.com
 * 24th of November 2015
 * MIT License
 */
const HamburgerMenu = () => {
  return (
    <div id={styles.menuToggle}>
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <div id={styles.menu}>
        <MenuItems />
      </div>
    </div>
  );
};

export default HamburgerMenu;
