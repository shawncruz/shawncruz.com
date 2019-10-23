import React from "react";
import { View, Link, NotFoundBoundary, useLoadingRoute } from "react-navi";
import NotFoundPage from "./NotFoundPage";
import LoadingIndicator from "./LoadingIndicator";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./BlogLayout.module.css";
import styles2 from "./BlogIndexPage.module.css";
import ShawnCruzLogo from "../assets/images/ShawnCruz_1.svg";

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute();

  return (
    <div className={styles.container}>
      <LoadingIndicator active={!!loadingRoute} />
      <header>
        {/* <HamburgerMenu /> */}
        <h1 className={styles2.title}>
          <Link href={blogRoot}>
            <img src={ShawnCruzLogo} alt="ShawnCruz." width="225px" />
          </Link>
        </h1>
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
