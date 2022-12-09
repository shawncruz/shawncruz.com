import React from "react";
import { Link } from "react-navi";
import styles from "./styles/BlogHeader.module.css";
import SDotSvg from "../assets/images/s_dot.svg";

function BlogHeader({ blogRoot }) {
  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <Link href={blogRoot} className="logo">
          <img src={SDotSvg} alt="S." width="150px" />
        </Link>
        <Link href="/about" className="about">
          About
        </Link>
      </div>
    </header>
  );
}

export default BlogHeader;
