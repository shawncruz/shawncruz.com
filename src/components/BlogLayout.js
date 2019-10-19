import React from "react";
import { View, Link, NotFoundBoundary, useLoadingRoute } from "react-navi";
import siteMetadata from "../siteMetadata";
import NotFoundPage from "./NotFoundPage";
import LoadingIndicator from "./LoadingIndicator";
import styles from "./BlogLayout.module.css";
import styles2 from "./BlogIndexPage.module.css";

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute();

  return (
    <div className={styles.container}>
      <LoadingIndicator active={!!loadingRoute} />

      {
        // Don't show the header on index pages, as it has a special header.
        // !isViewingIndex && (
        //   <header>
        //     <h3 className={styles.title}>
        //       <Link href={blogRoot}>{siteMetadata.title}</Link>
        //     </h3>
        //   </header>
        // )
        <header>
          <h1 className={styles2.title}>
            <Link href={blogRoot}>{siteMetadata.titleBeginning}</Link>
            <Link className={styles2.redPeriod} href={blogRoot}>
              {siteMetadata.titleMiddle}
            </Link>
            <Link href={blogRoot}>{siteMetadata.titleEnd}</Link>
          </h1>
        </header>
      }

      <main>
        <NotFoundBoundary render={() => <NotFoundPage />}>
          <View />
        </NotFoundBoundary>
      </main>
    </div>
  );
}

export default BlogLayout;
