import React from "react";
import { View, Link, NotFoundBoundary, useLoadingRoute } from "react-navi";
import NotFoundPage from "./NotFoundPage";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./BlogLayout.module.css";
import ShawnDotSvg from "../assets/images/shawn_dot.svg";
import ShawnDotReversedSvg from "../assets/images/shawn_dot_reversed.png";
import MenuItems from "./MenuItems";

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute();

  return (
    <div className="container">
      <header className={styles.top}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <Link href="/" className="logo">
              <img src={ShawnDotReversedSvg} alt="Shawn." width="150px" />
            </Link>
          </div>
          <div className={styles.menuItems}>
            <MenuItems />
          </div>
          <HamburgerMenu />
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
