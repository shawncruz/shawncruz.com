import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import MenuItems from "./MenuItems";

/**
 * Made by Erik Terwan
 * 24th of November 2015
 * MIT License
 * Modified by Shawn Cruz for the purposes of shawncruz.com
 */
const HamburgerMenu = () => {
  const [isChecked, setIsChecked] = useState(false);
  document.body.style.overflowX = "hidden";
  document.documentElement.style.overflowX = "hidden";
  const setIsCheckedWrapped = isChecked => {
    // Lock scrolling so we can't scroll past end of menu
    if (isChecked) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.setAttribute("class", "menu-opened");
    } else {
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
        <MenuItems onItemClick={onItemClick} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
