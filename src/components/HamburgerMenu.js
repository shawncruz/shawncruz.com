import React, { Component } from "react";
import styles from "./HamburgerMenu.module.css";

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={styles.hamburgerContainer} id={styles.menuToggle}>
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id={styles.menu}>
          <a href="#" className={styles.menuItem}>
            <li>Home</li>
          </a>
          <a href="#" className={styles.menuItem}>
            <li>About</li>
          </a>
          <a href="#" className={styles.menuItem}>
            <li>Info</li>
          </a>
          <a href="#" className={styles.menuItem}>
            <li>Contact</li>
          </a>
          <a
            href="https://erikterwan.com/"
            target="_blank"
            className={styles.menuItem}
          >
            <li>Show me more</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default HamburgerMenu;
