import React from "react";
import { View, Link, NotFoundBoundary } from "react-navi";
import NotFoundPage from "./NotFoundPage";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./BlogLayout.module.css";
import ShawnDotReversedSvg from "../assets/images/shawn_dot_reversed.svg";
import MenuItems from "./MenuItems";

function BlogLayout({ blogRoot }) {
  return (
    <div className="container">
      <header className={styles.top}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <Link href={blogRoot} className="logo">
              <img src={ShawnDotReversedSvg} alt="Shawn." width="150px" />
            </Link>
          </div>
          <div className={styles.menuItems}>
            <MenuItems blogRoot={blogRoot} />
          </div>
          <HamburgerMenu blogRoot={blogRoot} />
        </div>
      </header>
      <main>
        <NotFoundBoundary render={() => <NotFoundPage />}>
          <View />
        </NotFoundBoundary>
      </main>
    </div>
  );
}

export default BlogLayout;
