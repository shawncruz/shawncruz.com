import React, { useState } from "react";
import styles from "./styles/HamburgerMenu.module.css";
import MenuItems from "./MenuItems";

/**
 * Made by Erik Terwan
 * 24th of November 2015
 * MIT License
 *
 * Modified by Shawn Cruz for the purposes of shawncruz.com
 */
const HamburgerMenu = ({ blogRoot }) => {
  const [isChecked, setIsChecked] = useState(false);
  const setIsCheckedWrapped = isChecked => {
    // Lock scrolling so we can't scroll past end of menu
    if (isChecked) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.setAttribute("class", "menu-opened");
    } else {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
      document.body.setAttribute("class", "menu-closed");
    }
    setIsChecked(isChecked);
  };
  const onCheckboxClick = () => {
    return setIsCheckedWrapped(!isChecked);
  };
  const onItemClick = () => setIsCheckedWrapped(false);
  return (
    <div id={styles.menuToggle}>
      <input type={"checkbox"} onChange={onCheckboxClick} checked={isChecked} />
      <span></span>
      <span></span>
      <span></span>
      <div id={styles.menu}>
        <MenuItems blogRoot={blogRoot} onItemClick={onItemClick} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
