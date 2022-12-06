import React from "react";
import { Link } from "react-navi";
import styles from "./styles/NavBar.module.css";
import SDotReversedSvg from "../assets/images/s_dot_rev3.svg";

const NavBar = ({ blogRoot }, onItemClick) => (
  <div className={styles.navBar}>
    <Link href={blogRoot} className="logo">
      <img src={SDotReversedSvg} alt="Shawn." width="150px" />
    </Link>
    <Link href="/about" onClick={onItemClick}>
      About
    </Link>
  </div>
);

export default NavBar;
