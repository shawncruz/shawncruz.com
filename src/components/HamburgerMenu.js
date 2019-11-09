import React from "react";
import { Link } from "react-navi";
import styles from "./HamburgerMenu.module.css";

/**
 * Made by Erik Terwan
 * Modified by Shawn Cruz for the purposes of shawncruz.com
 * 24th of November 2015
 * MIT License
 */
function HamburgerMenu() {
  return (
    <div id={styles.menuToggle}>
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id={styles.menu}>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/tags">Tags</Link>
        </li>
        <li>
          <Link href="https://twitter.com/shavvncruz">Twitter</Link>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
