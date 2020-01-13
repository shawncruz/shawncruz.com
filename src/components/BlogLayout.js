import React from "react";
import { View, Link, NotFoundBoundary, useLoadingRoute } from "react-navi";
import NotFoundPage from "./NotFoundPage";
import LoadingIndicator from "./LoadingIndicator";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./BlogLayout.module.css";
import styles2 from "./BlogIndexPage.module.css";
import ShawnDotSvg from "../assets/images/shawn_dot.svg";

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute();

  return (
    <div className={styles.container}>
      <LoadingIndicator active={!!loadingRoute} />
      <header>
        <HamburgerMenu />
        <div className={styles2.title}>
          <Link href={blogRoot}>
            <img src={ShawnDotSvg} alt="Shawn." width="150px" />
          </Link>
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
