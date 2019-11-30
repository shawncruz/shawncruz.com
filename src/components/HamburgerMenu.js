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
          <Link href="https://www.linkedin.com/in/shawncruz">LinkedIn</Link>
        </li>
        <li>
          <Link href="https://drive.google.com/file/d/1QEhJX1XRco7yN1OtigMFjY8r0qTUBHLj/view">
            Resume
          </Link>
        </li>
        <li>
          <Link href="https://github.com/shawncruz">Github</Link>
        </li>
        <li>
          <Link href="https://twitter.com/shavvncruz">Twitter</Link>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
